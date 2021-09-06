---
title: mvc和mvvm
date: 2019-8-21
author: zhaipeixi
sidebar: 'auto'
tags:
 - vue
 - 框架
categories:
 - vue
---
## MVC
  1. M： Model数据层，负责保存数据
  2. C:  Controller控制层, 负责接收View和用户响应，将数据传递给Model或者从Model中获取数据交给View展现
  3. V： View视图层，负责从controller层获取数据显示数据及响应用户操作
  4. 重点： Model和View没有直接通信，都是通过中间人Controller来传递，所以Controller中的负荷越来越重
## MVVM
  1. M： Model数据层，负责保存数据
  2. V： View视图层，负责从controller层获取数据显示数据及响应用户操作
  3. VM：ViewModel控制层, 负责接收View和用户响应，将数据传递给Model或者从Model中获取数据交给View展现
  4. 重点: VM层和Model层及View层实现了双向数据通信，当View层或者Model层的数据变化的时候都能够通过数据流管道直接导向对方，不需要做额外处理，优点是数据驱动，数据通信灵敏及时，ViewModel负荷减轻
