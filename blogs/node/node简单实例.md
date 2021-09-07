---
title: node简单实例
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
## 创建项目
  1. npm init -y    创建src文件
  2. npm i sequelize -S   
  3. npm i sequelize-cli -S  
  4. npx sequelize-cli init
  5. npx sequelize-cli model:generate --name User --attributes name:string
  6. npm i mysql2 -S  
  7. npx sequelize-cli db:migrate    连接数据库创建表
## 数据库初始化
  1. 创建数据库   brew services list
  2. 使用 `sequelize cli` 初始化  项目的 数据库配置信息
          ` npx sequelize init `
  3. 生成模型文件
     1. migrate 文件
     2. model 文件    数据库字段
      `npx sequelize-cli model:generate --name Todo --attributes name:string,deadline:date,content:string`
  4. 持久化模型对应的  数据库表
      `npx sequelize db:migrate`  生成数据库表
`
sequelize 文档 ：https://www.sequelize.com.cn/core-concepts/model-querying-basics
`
```js
// 代码
const express = require('express')
const bodyParser = require('body-parser') // 处理body
const app = express()

const models = require('../models')

app.use(express.json())
app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extended:true }))


// 查询列表
app.get('/list/:status/:page',async(req,res,next)=>{
  // 1. 状态 1：待办，2.完成 3.删除  -1:全部
  // 2. 分页的处理   page 页码
  try {
    let {
      status,
      page
    } = req.params
    let limit = 10
    let offset = (page - 1) * limit //开始页码
    let where = {}  //是-1 全部
    if (status != -1) {  //如果不是-1
      where.status = status
    }
    let list = await models.Todo.findAndCountAll({
      where,
      limit,
      offset
    })
    res.json({
      list
    })
  } catch (err) {
    next(err)
  }
  
})

// 添加
app.post('/create',async (req,res,next)=>{
  try {
    let {
      name,
      deadline,
      content
    } = req.body
    let todo = await models.Todo.create({
      name,
      deadline,
      content
    })
    res.json({
      todo,
      name,
      deadline,
      content
    })
  } catch (error) {
    next(error)
  }
  
})

// 修改
app.post('/update', async (req, res, next) => {
  try {
    let {
      name,
      deadline,
      content,
      id
    } = req.body
    let todo = await models.Todo.findOne({
      where: {
        id
      }
    })
    if (todo) {
      // 更新
      todo = await todo.update({
        name,
        deadline,
        content,
      })
    }
    res.json({
      todo,
    })
  } catch (error) {
    next(error)
  }
  
})

// 修改状态  删除
app.post('/update_status', async (req, res, next) => {
  let { id,status } = req.body
  let todo = await models.Todo.findOne({
    where:{
      id
    }
  })
  if (todo && status != todo.status) {
    //更新
    todo = await todo.update({
      status
    })
  }
  res.json({
    todo,
    id,
    status
  })
})

// 错误处理
app.use((err,req,res,next)=>{
  if(err){
    res.status(500).json({
      message: err.message
    })
  }
})

app.listen(3000,'127.0.0.1',()=>{
  console.log('服务启动成功')
})
```