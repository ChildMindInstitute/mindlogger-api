import { transformApplet } from './jsonld';
import { toAppletResponse } from './helpers';

export class MindloggerApplets {
  constructor(options = {}) {
    this.client = options.client;
  }

  fetchPublicApplet(id) {
    return this.client
      .request(`/applet/public/${id}/data`)
      .then(transformApplet)
      .then((applet) => ({
        ...applet,
        publicId: id,
      }));
  }

  async submitResponse(options = {}) {
    const response = toAppletResponse(options);
    const body = new FormData();
    const { applet, activity } = response;

    body.set('metadata', JSON.stringify(response));

    return this.client.request(`/response/${applet.id}/${activity.id}`, {
      method: 'post',
      mode: 'cors',
      body,
    });
  }
}
