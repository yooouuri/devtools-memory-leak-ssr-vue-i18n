# devtools-memory-leak-ssr-vue-i18n

### Install dependencies

```
pnpm install
```

### Build the project

```
pnpm run build
```

Start the server without `NODE_ENV=production`

```
node server.js
```

Without `NODE_ENV=production`, the global `__VUE_DEVTOOLS_PLUGINS__` exists, this should not happen when vite builds for production.

```
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 7916.673583984375,
      nodeStart: 3.252792000770569,
      v8Start: 5.740541934967041,
      bootstrapComplete: 21.964874982833862,
      environment: 12.48104190826416,
      loopStart: 28.598249912261963,
      loopExit: -1,
      idleTime: 7167.902995
    },
    timeOrigin: 1714996826399.443
  },
  fetch: [AsyncFunction: fetch],
  __VUE_HMR_RUNTIME__: {
    createRecord: [Function (anonymous)],
    rerender: [Function (anonymous)],
    reload: [Function (anonymous)]
  },
  __VUE_INSTANCE_SETTERS__: [ [Function (anonymous)], [Function (anonymous)] ],
  __VUE_SSR_SETTERS__: [ [Function (anonymous)], [Function (anonymous)] ],
  __INTLIFY__: true,
  __INTLIFY_PROD_DEVTOOLS__: false,
  __INTLIFY_JIT_COMPILATION__: false,
  __INTLIFY_DROP_MESSAGE_COMPILER__: false,
  __VUE_PROD_DEVTOOLS__: false,
  __VUE__: true,
  __VUE_DEVTOOLS_PLUGINS__: [
    {
      pluginDescriptor: [Object],
      setupFn: [Function (anonymous)],
      proxy: null
    }
  ]
}
```

With `NODE_ENV=production`, the global `__VUE_DEVTOOLS_PLUGINS__` does not exist.

```
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 5379.410166025162,
      nodeStart: 10.831707954406738,
      v8Start: 14.853625059127808,
      bootstrapComplete: 31.616665959358215,
      environment: 23.72316598892212,
      loopStart: 34.85424995422363,
      loopExit: -1,
      idleTime: 5130.530334
    },
    timeOrigin: 1714993597746.848
  },
  fetch: [AsyncFunction: fetch],
  __VUE_INSTANCE_SETTERS__: [ [Function (anonymous)] ],
  __VUE_SSR_SETTERS__: [ [Function (anonymous)] ],
  __VUE_PROD_DEVTOOLS__: false,
  __INTLIFY_PROD_DEVTOOLS__: false,
  __VUE__: true
}
```
