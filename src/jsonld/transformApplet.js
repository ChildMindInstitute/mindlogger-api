import * as R from 'ramda';
import { shallowTransformApplet } from './shallowTransformApplet';
import {
  shallowTransformActivity,
  shallowTransformActivityAndItems,
} from './shallowTransformActivity';
import { itemAttachExtras } from './jsonLdHelpers';
import { transformItem } from './transformItem';

export function transformApplet(payload, currentApplets) {
  const applet = shallowTransformApplet(payload);

  if (currentApplets && !R.isEmpty(currentApplets)) {
    const currentApplet = currentApplets.find(({ id }) => id.substring(7) === payload.id);

    if (!currentApplet) {
      const activities = Object.keys(payload.activities).map((key) => {
        const activity = shallowTransformActivityAndItems(payload.activities[key], payload.items);
        activity.schema = key;
        return activity;
      });
      // Add the items and activities to the applet object
      applet.schedule = payload.schedule;
      applet.activities = [...activities];
    } else {
      if (R.isEmpty(payload.activities)) {
        if (R.isEmpty(payload.items)) {
          applet.activities = [...currentApplet.activities];
        } else {
          Object.keys(payload.items).forEach((dataKey) => {
            const keys = dataKey.split('/');
            applet.activities.forEach((act, index) => {
              if (act.id.substring(9) === keys[0]) {
                act.items.forEach((itemData, i) => {
                  if (itemData.id === payload.items[dataKey]) {
                    const item = itemAttachExtras(transformItem(payload.items[dataKey]), dataKey);
                    item.variableName = payload.items[dataKey]['@id'];

                    applet.activities[index].items[i] = {
                      ...itemData,
                      ...item,
                    };
                  }
                });
              }
            });
          });
        }
      } else {
        applet.activities = [...currentApplet.activities];
        Object.keys(payload.activities).forEach((key) => {
          const activity = shallowTransformActivity(payload.activities[key]);

          let updated = false;
          applet.activities.forEach((act, index) => {
            if (act.id.substring(9) === key) {
              updated = true;
              applet.activities[index] = {
                ...activity,
                items: act.items,
              };
            }
          });
          if (!updated) {
            applet.activities.push(activity);
          }
        });
        if (!R.isEmpty(payload.items)) {
          Object.keys(payload.items).forEach((dataKey) => {
            const keys = dataKey.split('/');

            applet.activities.forEach((act, index) => {
              if (act.id.substring(9) === keys[0]) {
                const item = itemAttachExtras(transformItem(payload.items[dataKey]), dataKey);
                item.variableName = payload.items[dataKey]['@id'];

                let updated = false;

                if (!act.items) {
                  applet.activities[index].items = [];
                }
                act.items.forEach((itemData, i) => {
                  if (itemData.id.split('/')[1] === dataKey.split('/')[1] && !updated) {
                    updated = true;
                    applet.activities[index].items[i] = {
                      ...itemData,
                      ...item,
                    };
                  }
                });
                if (!updated) {
                  applet.activities[index].items.push(item);
                }
              }
            });
          });
        }
      }

      if (payload.schedule) {
        const events = { ...currentApplet.schedule.events };
        applet.schedule = payload.schedule;

        if (!R.isEmpty(payload.schedule.events)) {
          Object.keys(payload.schedule.events).forEach((eventId) => {
            events[eventId] = payload.schedule.events[eventId];
          });
        }

        for (const eventId in events) {
          let isValid = false;
          for (const eventDate in currentApplet.schedule.data) {
            if (currentApplet.schedule.data[eventDate].find(({ id }) => id === eventId)) {
              isValid = true;
            }
          }

          if (!isValid) {
            delete events[eventId];
          }
        }
        applet.schedule.events = events;
      }
    }

    if (payload.removedItems && payload.removedItems.length) {
      payload.removedItems.forEach((itemKey) => {
        const keys = itemKey.split('/');

        applet.activities.forEach((activity, index) => {
          if (activity.id.substring(9) === keys[0]) {
            activity.items.forEach((item, i) => {
              if (item.id.substring(7) === keys[1]) {
                applet.activities[index].items.splice(i, 1);
              }
            });
          }
        });
      });
    }

    if (payload.removedActivities && payload.removedActivities.length) {
      payload.removedActivities.forEach((activityKey) => {
        applet.activities.forEach((activity, index) => {
          if (activity.id.substring(9) === activityKey) {
            applet.activities.splice(index, 1);
          }
        });
      });
    }
  } else {
    // Add the items and activities to the applet object
    applet.activities = Object.keys(payload.activities).map((key) => {
      const activity = shallowTransformActivityAndItems(payload.activities[key], payload.items);
      activity.schema = key;
      return activity;
    });
    applet.schedule = payload.schedule;
  }

  applet.groupId = payload.groups;
  return applet;
}
