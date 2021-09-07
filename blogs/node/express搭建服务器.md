---
title: express搭建服务器
date: 2019-3-12
author: zpyyyy
sidebar: 'auto'
tags:
 - node
 - js
categories:
 - js
 - node
---
## 下载express
  ` npm i express -g`
## 搭建服务器代码
```js
  const express = require('express')
  const app = express()
  app.listen(3000,'127.0.0.1',()=>{
    console.log('服务器启动成功')
  })
```