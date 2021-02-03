## Issue: Dynamic Route

Dynamic route in Next.js does not work in play.js 2.7.1.  
`TypeError [ERR_INVALID_ARG_TYPE]: The "id" argument must be of type string. Received null`

### Version

- play.js 2.7.1 (latest)
- latest version of Next.js, React, React-dom (see the package.json)
- This issues is also reproduced in the version 9 of Next.js, which is the default template of play.js.

```
    "next": "9.3.5",
    "react": "16.13.1",
    "react-dom": "16.13.1"
```

### Error Massage

```
TypeError [ERR_INVALID_ARG_TYPE]: The "id" argument must be of type string. Received null
    at validateString (internal/validators.js:117:11)
    at Module.require (internal/modules/cjs/loader.js:1044:3)
    at require (internal/modules/cjs/helpers.js:86:18)
    at execMethod (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/workers/processChild.js:128:16)
    at EventEmitter.<anonymous> (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/workers/processChild.js:64:7)
    at EventEmitter.emit (events.js:321:20)
    at EventEmitter.emit (domain.js:505:15)
    at ChildProcess.send (child_process.js:229:25)
    at ChildProcessWorker.send (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/workers/ChildProcessWorker.js:286:17)
    at WorkerPool.send (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/WorkerPool.js:32:34)
    at Farm._process (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/Farm.js:129:10)
    at Farm._enqueue (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/Farm.js:152:10)
    at Farm._push (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/Farm.js:159:12)
    at /private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/Farm.js:90:14
    at new Promise (<anonymous>)
    at Farm.doWork (/private/var/mobile/Containers/Shared/AppGroup/09699FFA-957E-4145-A0CD-AB970E084401/File Provider Storage/Repositories/JavaScript/dynamic-route-next/node_modules/jest-worker/build/Farm.js:56:12) {
  code: 'ERR_INVALID_ARG_TYPE'
}
event - build page: /next/dist/pages/_error
wait  - compiling...
event - compiled successfully
```

### Other

Same issue is reported here.

https://github.com/vercel/next.js/discussions/16593

https://stackoverflow.com/questions/63626954/dynamic-routing-in-next-js-gets-typeerror-the-id-argument-must-of-type-strin
