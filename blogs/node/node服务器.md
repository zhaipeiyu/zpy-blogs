---
title: 使用node搭建服务器
date: 2019-3-10
author: zhaipeixi
sidebar: 'auto'
tags:
 - node
 - js
categories:
 - js
 - node
---
## node代码
```js
  const http = require('http')
  var fs = require('fs');
  const querystring = require("querystring");
  const server = http.createServer()

  let arr = []
  server.on('request',(req,res)=>{
    let {
      method,
      url
    } = req
    // 开发环境设置，生产环境谨慎使用
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader('Content-Type', "text/html;charset=utf-8")

    // GET
    if (method == "GET" && url == '/api/list') {
      res.end(JSON.stringify({
        status:200,
        msg:'获取成功GET',
        data:arr
      }))
      
    } else if (method == "POST" && url == "/api/add") {
      
      // 接受参数
      let str = '' // 定义一个用于保存数据的空字符串
      req.on('data', (chunk) => { // 给req注册data事件，只要有数据提交过来，就会触发；用于接收提交过来的数据(数据过大, 会多次触发, 接收字节)
        str = chunk.toString()
      })
      req.on('end', () => { // 给req注册end事件，当完全接收了提交过来的数据，就会触发
        let obj = querystring.parse(str.replace("?",""))
        // arr.push(obj)
        res.end(JSON.stringify({
          status:201,
          msg: '获取成功POST',
          data: obj
        }))
      });
    }else{
      res.end("请确认接口地址和对应的请求方式是否正确");
    }
  })
  // 前端请求插件: 发送POST请求和参数 a=10&b=20&c=30
  server.listen(3001, () => {
    console.log('服务器启动了, http://127.0.0.1:3001');
  });
```
## 前后通信
```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
    <div id="box">看不到看不到</div>
    <button onclick="success()">get</button>
    <button onclick="post()">post</button>
    <script>
      function success() {
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
          if (http.status == 200 && http.readyState == 4) {
            var msg = JSON.parse(http.responseText);
            var box = document.getElementById('box');
            box.innerHTML = msg.msg;
          }
        }
        //发送请求
        http.open('GET', 'http://127.0.0.1:3001/api/list');
        http.send();
      }
      function post() {
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
          if (http.status == 200 && http.readyState == 4) {
            var msg = JSON.parse(http.responseText);
            var box = document.getElementById('box');
            console.log(msg)
            box.innerHTML = msg.msg;
          }
        }
        //发送请求
        http.open('POST', 'http://127.0.0.1:3001/api/add');
        http.send('a=10&b=20&c=30');
      }
    </script>
  </body>

  </html>
```