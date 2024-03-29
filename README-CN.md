# @livelybone/use-force-update
[![NPM Version](http://img.shields.io/npm/v/@livelybone/use-force-update.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/use-force-update)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/use-force-update.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/use-force-update)
![gzip with dependencies: 0.3kb](https://img.shields.io/badge/gzip--with--dependencies-0.3kb-brightgreen.svg "gzip with dependencies: 0.3kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, 天然支持 tree-shaking, 使用 es module 引用即可

[English Document](./README.md)

A hook for force update of react

## repository
https://github.com/livelybone/use-force-update.git

## Demo
https://github.com/livelybone/use-force-update#readme

## Run Example
你可以通过运行项目的 example 来了解这个组件的使用，以下是启动步骤：

1. 克隆项目到本地 `git clone https://github.com/livelybone/form.git`
2. 进入本地克隆目录 `cd your-module-directory`
3. 安装项目依赖 `npm i`(使用 taobao 源: `npm i --registry=http://registry.npm.taobao.org`)
4. 启动服务 `npm run dev`
5. 在你的浏览器看 example (地址通常是 `http://127.0.0.1:3000/examples/test.html`)

## Installation
```bash
npm i -S @livelybone/use-force-update
```

## Global name - The variable the module exported in `umd` bundle
`useForceUpdate`

## Interface
去 [index.d.ts](./index.d.ts) 查看可用方法和参数

## Usage
```js
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

在 HTML 文件中直接引用，你可以在 [CDN: unpkg](https://unpkg.com/@livelybone/form/lib/umd/) 看到你能用到的所有 js 脚本
```html
<-- 然后使用你需要的 -->
<script src="https://unpkg.com/@livelybone/form/lib/umd/<--module-->.js"></script>
```
