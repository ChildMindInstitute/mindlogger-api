# mindlogger-api

> Be aware ! It's an experimental package, it's not ready for production usage
> It's just a codebase for reference, no build no tests yet

## Intro

HTTP client to work with public API V1 Mindlogger

Features: 
* based on `Fetch API` 
* can be run in `node` env with fetch polyfill 
* encryption 
* json-ld to json transformation for dev easy of use


## Server API

[Girder](https://api.mindlogger.org/api/v1) - swagger like api reference

During work on API client we faced with next issues

### Issues with Server API 

#### Not a developer friendly format

* server returns data in `json-ld` format, so client have to convert to old-plain javascript object to use in application, otherwise each application should have the same transformation code routines 
* a lot of `id` use uri-like format for example `applet/actual-id`, `screen/actual-id` etc. However, backend API expect just `actual-id`. It's much better to get `id` in standart format without `uri` specifics

#### Issues with documentation

* No detailed model format, from Girder interface we can (sometimes) understand on how to send some payload, but it doesn't describe an output model
* No step-by-step guide on how to authenticate/authorize 
* No step-by-step guide on how to encrypt/decrypt payload

## Issues with implementation

* encryption depends on `node` encryption modules, it may be an issue with re-usability in consumer's browser/webpack 
environments. For example, if we add in our build thous modules it might be an issue with consumer app on top of webpack 4, where such libs already exists in main bundle
* just a few API endpoints implemented
* no detailed JsDoc or/and TypeScript to make sdk autocomplete in consumer's codebase