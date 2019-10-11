# @livelybone/use-force-update
[![NPM Version](http://img.shields.io/npm/v/@livelybone/use-force-update.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/use-force-update)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/use-force-update.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/use-force-update)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

A hook for force update of react

## repository
https://github.com/livelybone/use-force-update.git

## Demo
https://github.com/livelybone/use-force-update#readme

## Run Example
Your can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/use-force-update.git`
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1/examples/test.html`) in your browser

## Installation
```bash
npm i -S @livelybone/use-force-update
```

## Global name - The variable the module exported in `umd` bundle
`useForceUpdate`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```typescript jsx
import React from 'react'
import useForceUpdate from '@livelybone/use-force-update'

const Page = () => {
  const [count, forceUpdate] = useForceUpdate()
  
  return (
    <div>
      force update count: {count}
      <button onClick={forceUpdate}>force update</button>
    </div>
  )
}
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/@livelybone/use-force-update/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/use-force-update/lib/umd/<--module-->.js"></script>
```
