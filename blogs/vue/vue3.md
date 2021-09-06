---
title: vue3
date: 2019-09-21
author: zhaipeixi
sidebar: 'auto'
tags:
 - vue3
 - vue
 - 框架
 - 前端
categories:
 - vue
---

## 认识Vue3
  - Vue.js 3.0 "One Piece" 正式版在今年9月份发布
  -  2年多开发, 100+位贡献者, 2600+次提交, 600+次PR
  -  Vue3支持vue2的大多数特性
  -  更好的支持Typescript
  -  新增特性 Composition (组合) API
## 性能提升
  - 打包大小减少41%
  - 初次渲染快55%, 更新渲染快133%
  - 内存减少54%
  - 使用Proxy代替defineProperty实现数据响应式
  - 重写虚拟DOM的实现和Tree-Shaking
## setup
  1. 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  2. 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
## ref
  - 作用: 定义一个数据的响应式
  - 语法: const xxx = ref(initValue):
    * 创建一个包含响应式数据的引用(reference)对象
    * js中操作数据: xxx.value
    * 模板中操作数据: 不需要.value
  - 一般用来定义一个基本类型的响应式数据
## reactive
  - 作用: 定义多个数据的响应式
  - const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
  - 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
  - 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
# 比较Vue2与Vue3的响应式

 ## vue2的响应式
  - 对象: 通过defineProperty对对象的已有属性值的读取和修改进行劫持(监视/拦截)
  - 数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持
  ```js
    Object.defineProperty(data, 'count', {
      get () {}, 
      set () {}
    })
  ```
  - 问题
    * 对象直接新添加的属性或删除已有属性, 界面不会自动更新
  ## Vue3的响应式
  - 通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
  - 通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
  
    ```js
      new Proxy(data, {
        // 拦截读取属性值
          get (target, prop) {
            return Reflect.get(target, prop)
          },
          // 拦截设置属性值或添加新属性
          set (target, prop, value) {
            return Reflect.set(target, prop, value)
          },
          // 拦截删除属性
          deleteProperty (target, prop) {
            return Reflect.deleteProperty(target, prop)
          }
      })

      proxy.name = 'tom'   
    ```
  
  ## reactive与ref-细节
   - 是Vue3的 composition API中2个最重要的响应式API
   - ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
   - 如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
   - ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
   - reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
   - ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
  ## 计算属性与监视
  - computed函数:
      * 与computed配置功能一致
      * 只有getter
      * 有getter和setter
  - watch函数
      * 与watch配置功能一致
      * 监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
      * 默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
      * 通过配置deep为true, 来指定深度监视
  - watchEffect函数
      * 不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
      * 默认初始时就会执行第一次, 从而可以收集需要监视的数据
      * 监视数据发生变化时回调
  # 生命周期
  ## 与 2.x 版本生命周期相对应的组合式 API
    - beforeCreate -> 使用 setup()
    - created -> 使用 setup()
    - beforeMount -> onBeforeMount
    - mounted -> onMounted
    - beforeUpdate -> onBeforeUpdate
    - updated -> onUpdated
    - beforeDestroy -> onBeforeUnmount
    - destroyed -> onUnmounted
    - errorCaptured -> onErrorCaptured
  ## 自定义hook函数
  - 使用Vue3的组合API封装的可复用的功能函数
  - 自定义hook的作用类似于vue2中的mixin技术
  - 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
  - 需求1: 收集用户鼠标点击的页面坐标
  - hooks/useMousePosition.ts
  ```js
    import { ref, onMounted, onUnmounted } from 'vue'
    /* 
    收集用户鼠标点击的页面坐标
    */
    export default function useMousePosition () {
      // 初始化坐标数据
      const x = ref(-1)
      const y = ref(-1)

      // 用于收集点击事件坐标的函数
      const updatePosition = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
      }

      // 挂载后绑定点击监听
      onMounted(() => {
        document.addEventListener('click', updatePosition)
      })

      // 卸载前解绑点击监听
      onUnmounted(() => {
        document.removeEventListener('click', updatePosition)
      })

      return {x, y}
    }
  ```
    ```js
      <template>
        <div>
          <h2>x: {{x}}, y: {{y}}</h2>
        </div>
        </template>

        <script>

        import {
          ref
        } from "vue"
        /* 
        在组件中引入并使用自定义hook
        自定义hook的作用类似于vue2中的mixin技术
        自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
        */
        import useMousePosition from './hooks/useMousePosition'

        export default {
          setup() {

            const {x, y} = useMousePosition()

            return {
              x,
              y,
            }
          }
        }
      </script>
    ```

  ## ref获取元素
  - 利用ref函数获取组件中的标签元素  const inputRef = ref<HTMLElement|null>(null)

  ## toRef
  - 为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
  - 区别ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
  - 应用: 当要将 某个prop 的 ref 传递给复合函数时，toRef 很有用

  ## provide 与 inject
  - provide和inject提供依赖注入，功能类似 2.x 的provide/inject
  - 实现跨层级组件(祖孙)间通信

  ## setup细节
  - setup执行的时机
    * 在beforeCreate之前执行(一次), 此时组件对象还没有创建
    * this是undefined, 不能通过this来访问data/computed/methods / props
    * 其实所有的composition API相关回调函数中也都不可以
  - setup的返回值
    * 一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
    * 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
    * 返回对象中的方法会与methods中的方法合并成功组件对象的方法
    * 如果有重名, setup优先
    * 注意:
    * 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
    * setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
  - setup的参数
    * setup(props, context) / setup(props, {attrs, slots, emit})
    * props: 包含props配置声明且传入了的所有属性的对象
    * attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    * slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    * emit: 用来分发自定义事件的函数, 相当于 this.$emit