---
title: async/await
date: 2019-01-10
author: zpyyyy
sidebar: 'auto'
tags:
 - js
 - 前端
---
## Promise
	解决异步回调嵌套问题（回调地狱），将异步的流程用同步的形式表达出来
	then()返回的promise的结果由then()指定回调函数执行的结果决定  
	.then什么时候是一个失败的promise  throw error ==> reason是error
	return 失败的promise ==>reason是返回的promise的失败reason
	其他情况都是成功 return xxx ==>value是xxx
	return成功的promise==>value是返回的promise的成功value
	then()返回的promise与调用then（）方法的promise的结果无关 
## 自定义Promise
```js
function myPromise(constructor){
      let self = this
      self.status = 'padding'
      self.value = undefined
      self.reason = undefined
      function resolve(value){
        if(self.status = 'padding'){
          self.value = value
          self.status = 'resolved'
        }
      }
      function reject(reason){
        if(self.status = 'padding'){
          self.reason = reason
          self.status = 'rejected'
        }
      }
      try {
        constructor(resolve,reject)
      } catch (error) {
        reject(error)
      }
    }
    myPromise.prototype.then = function(onResolved,onRejected){
      let self = this
      switch (self.status) {
        case 'resolved':
          onResolved(self.value)
    	  case 'rejected':
          onRejected(self.reason)
        default:
          break;
      }
    }
    var p = new myPromise(function(resolve,reject){resolve(1)})
    p.then(function(x){
      console.log(x)
})


    Promise.all = function(promises){
      let length = promises.length
      let values = new Array(length)
      let count = 0
      return new Promise((resolve,reject)=>{
        promises.forEach((p,index)=>{
          Promise.resolve(p).then(
            value =>{
              count ++
              values[index] = value
              if(count === length){
                resolve(values)
              }
            },
            reason =>{
              reject(reason)
            }
          )
        })
      })
    }

    Promise.race = function(promises){
      return new Promise((resolve,reject)=>{
        promises.forEach((p)=>{
          Promise.resolve(p).then(
            value =>{
              resolve(value)
            },
            reason =>{
              reject(reason)
            }
          )
        })
      })
    }
```

## Promise执行顺序
	Promise本身是同步的立即执行函数， 当在executor中执行resolve或者reject的时候, 此时是异步操作， 会先执行then/catch等，当主栈完成后，才会去调用resolve/reject中存放的方法执行，打印p的时候，是打印的返回结果，一个Promise实例。
```js
	console.log('script start')
	let promise1 = new Promise(function (resolve) {
			console.log('promise1')
			resolve()
			console.log('promise1 end')
	}).then(function () {
			console.log('promise2')
	})
	setTimeout(function(){
			console.log('settimeout')
	})
	console.log('script end')
	// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout
```
