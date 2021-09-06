---
title: async/await
date: 2019-02-10
author: zhaipeixi
sidebar: 'auto'
tags:
 - js
 - 前端
---
## async/await 
1. async 函数
  - 函数的返回值为promise对象
  - promise对象的结果由async函数执行的返回值决定
2. await 表达式
  - await右侧的表达式一般为promise对象, 但也可以是其它的值
  - 如果表达式是promise对象, await返回的是promise成功的值, 如果promise失败必进行try..catch得到失败的结果
  - 如果表达式是其它值, 直接将此值作为await的返回值
  - 表达式抛出错误, 需要通过try..catch得到error
## Promise和async/await区别
1. promise是ES6，async/await是ES7
2. async/await相对于promise来讲，写法更加优雅
3. reject状态：
  1) promise错误可以通过catch来捕捉，建议尾部捕获错误
  2) async/await既可以用.then又可以用try-catch捕捉

## 执行流程
1. async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
2. await的含义为等待，也就是 async 函数需要等待await后的函数执行完成并且有了返回结果（Promise对象）之后，才能继续执行下面的代码。await通过返回一个Promise对象来实现同步的效果。
 ```js
  async function async1(){
    console.log('async1 start');
    await async2();
    console.log('async1 end')
  }
  async function async2(){
      console.log('async2')
  }

  console.log('script start');
  async1();
  console.log('script end')

// 输出顺序：script start->async1 start->async2->script end->async1 end
 ```

 ```js
 //请写出输出内容
  async function async1() {
      console.log('async1 start');
      await async2();
      console.log('async1 end');
  }
  async function async2() {
    console.log('async2');
  }

  console.log('script start');

  setTimeout(function() {
      console.log('setTimeout');
  }, 0)

  async1();

  new Promise(function(resolve) {
      console.log('promise1');
      resolve();
  }).then(function() {
      console.log('promise2');
  });
  console.log('script end');


  /*
  script start
  async1 start
  async2
  promise1
  script end
  async1 end
  promise2
  setTimeout
  */
 ```