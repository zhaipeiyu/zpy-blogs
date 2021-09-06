---
title: js中的this
date: 2019-1-10
author: zhaipeixi
sidebar: 'auto'
tags:
 - js
 - 前端
categories:
 - js
---
## This
  - 以函数的形式调用this就是window
  - 以方法的形式调用this就是调用方法的对象
  - 以构造函数的形式调用this是新创建的对象
  - call/apply/bind调用：fn.call(obj)-----第一个参数指定的对象
  - Function.call(thisAry,arg1,arg2)  call()的实参需要一个一个传递
  - Function.apply(thisAry,[argsArray]) apply()将实参保存到一个数组中传递
## call()/apply()/bind()区别
  - call(obj, param1, param2)/apply(obj, [[param1, param2])
    * 只是强制指定函数中的this为第一个参数指定的对象
    * 如果函数执行需要传参数, call是依次传递, apply需要封装成数组传递
  - bind(obj)
    * 返回一个新函数, 不会自动执行, 需要手动执行
    * 新函数内部会调用原函数, 且this指定为obj
    * 也就是无论新函数如何执行, 原函数中的this都是obj