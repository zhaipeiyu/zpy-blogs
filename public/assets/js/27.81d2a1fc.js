(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{533:function(_,v,l){"use strict";l.r(v);var t=l(6),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"像素-rpx-px-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#像素-rpx-px-2"}},[_._v("#")]),_._v(" 像素 rpx = px * 2")]),_._v(" "),l("h2",{attrs:{id:"_1-数据绑定"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据绑定"}},[_._v("#")]),_._v(" 1.数据绑定")]),_._v(" "),l("ol",[l("li",[_._v("小程序\n"),l("ol",[l("li",[_._v("data中初始化数据")]),_._v(" "),l("li",[_._v("修改数据  this.setData({})\n"),l("ol",[l("li",[_._v("修改数据的行为始终是同步的")])])])])]),_._v(" "),l("li",[_._v("Vue\n"),l("ol",[l("li",[_._v("data中初始化数据")]),_._v(" "),l("li",[_._v("修改数据  this.key = value")]),_._v(" "),l("li",[_._v("数据流：\n"),l("ol",[l("li",[_._v("Vue是单向数据流：Model --\x3e View")]),_._v(" "),l("li",[_._v("Vue中实现了双向数据绑定：v-model")])])])])]),_._v(" "),l("li",[_._v("React\n"),l("ol",[l("li",[_._v("state中初始化状态数据")]),_._v(" "),l("li",[_._v("修改数据  this.setData({})\n"),l("ol",[l("li",[_._v("自身的钩子函数中（componentDidMount）异步的")]),_._v(" "),l("li",[_._v("非自身的钩子函数中（定时器的回调）同步的")])])]),_._v(" "),l("li",[_._v("数据流\n"),l("ol",[l("li",[_._v("单项：Model --\x3e View")])])])])])]),_._v(" "),l("h2",{attrs:{id:"_2-获取用户基本信息"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取用户基本信息"}},[_._v("#")]),_._v(" 2. 获取用户基本信息")]),_._v(" "),l("ol",[l("li",[_._v("用户未授权\n"),l("ol",[l("li",[_._v("button open-type='getUserInfo'")])])]),_._v(" "),l("li",[_._v("用户已经登录\n"),l("ol",[l("li",[_._v("wx.getUserInfo  wx.getUserProfile")])])])]),_._v(" "),l("h1",{attrs:{id:"绑定事件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#绑定事件"}},[_._v("#")]),_._v(" 绑定事件")]),_._v(" "),l("ol",[l("li",[_._v("bind绑定：事件绑定不会阻止冒泡事件向上冒泡")]),_._v(" "),l("li",[_._v("catch绑定：事件绑定可以阻止冒泡事件向上冒泡")])]),_._v(" "),l("h2",{attrs:{id:"_3-前后端交互"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-前后端交互"}},[_._v("#")]),_._v(" 3. 前后端交互")]),_._v(" "),l("ol",[l("li",[_._v("语法：wx.request()")]),_._v(" "),l("li",[_._v("注意点：\n"),l("ol",[l("li",[_._v("协议必须是https协议")]),_._v(" "),l("li",[_._v("最多配置20个域名")]),_._v(" "),l("li",[_._v("并发限制上限是10个")]),_._v(" "),l("li",[_._v("开发过程中可以设置不校验合法域名：开发工具---右上角详情---本地设置---不校验https")])])])]),_._v(" "),l("h2",{attrs:{id:"_4-本地存储"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-本地存储"}},[_._v("#")]),_._v(" 4. 本地存储")]),_._v(" "),l("ol",[l("li",[_._v("语法: wx.setStorage() || wx.setStorageSync() || .....")]),_._v(" "),l("li",[_._v("注意点：\n"),l("ol",[l("li",[_._v("建议存储的数据为json数据")]),_._v(" "),l("li",[_._v("单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB")]),_._v(" "),l("li",[_._v("属于永久存储，同H5的localStorage一样")])])])]),_._v(" "),l("h1",{attrs:{id:"扩展内容"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#扩展内容"}},[_._v("#")]),_._v(" 扩展内容")]),_._v(" "),l("h2",{attrs:{id:"_1-事件流的三个阶段"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件流的三个阶段"}},[_._v("#")]),_._v(" 1. 事件流的三个阶段")]),_._v(" "),l("ol",[l("li",[_._v("捕获  从外向内")]),_._v(" "),l("li",[_._v("执行目标阶段")]),_._v(" "),l("li",[_._v("冒泡：从内向外")])]),_._v(" "),l("h2",{attrs:{id:"_2-事件委托"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件委托"}},[_._v("#")]),_._v(" 2. 事件委托")]),_._v(" "),l("ol",[l("li",[_._v("什么是事件委托\n"),l("ol",[l("li",[_._v("将子元素的事件委托(绑定)给父元素")])])]),_._v(" "),l("li",[_._v("事件委托的好处\n"),l("ol",[l("li",[_._v("减少绑定的次数")]),_._v(" "),l("li",[_._v("后期新添加的元素也可以享用之前委托的事件")])])]),_._v(" "),l("li",[_._v("事件委托的原理\n"),l("ol",[l("li",[_._v("冒泡")])])]),_._v(" "),l("li",[_._v("触发事件的是谁\n"),l("ol",[l("li",[_._v("子元素")])])]),_._v(" "),l("li",[_._v("如何找到触发事件的对象\n"),l("ol",[l("li",[_._v("event.target")])])]),_._v(" "),l("li",[_._v("currentTarget VS target\n"),l("ol",[l("li",[_._v("currentTarget要求绑定事件的元素一定是触发事件的元素")]),_._v(" "),l("li",[_._v("target绑定事件的元素不一定是触发事件的元素")])])])]),_._v(" "),l("h2",{attrs:{id:"_3-定义事件相关"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-定义事件相关"}},[_._v("#")]),_._v(" 3. 定义事件相关")]),_._v(" "),l("ol",[l("li",[_._v("分类\n"),l("ol",[l("li",[_._v("标准DOM事件")]),_._v(" "),l("li",[_._v("自定义事件")])])]),_._v(" "),l("li",[_._v("标准DOM事件\n"),l("ol",[l("li",[_._v("举例： click，input。。。")]),_._v(" "),l("li",[_._v("事件名固定的，事件由浏览器触发")])])]),_._v(" "),l("li",[_._v("自定义事件\n"),l("ol",[l("li",[_._v("绑定事件\n"),l("ol",[l("li",[_._v("事件名")]),_._v(" "),l("li",[_._v("事件的回调")]),_._v(" "),l("li",[_._v("订阅方: PubSub.subscribe(事件名，事件的回调)")]),_._v(" "),l("li",[_._v("订阅方式接受数据的一方")])])]),_._v(" "),l("li",[_._v("触发事件\n"),l("ol",[l("li",[_._v("事件名")]),_._v(" "),l("li",[_._v("提供事件参数对象， 等同于原生事件的event对象")]),_._v(" "),l("li",[_._v("发布方: PubSub.publish(事件名，提供的数据)")]),_._v(" "),l("li",[_._v("发布方是提供数据的一方")])])])])]),_._v(" "),l("li",[_._v("传参\n"),l("ol",[l("li",[_._v('data-xxx="{{}}"   页面获取 ---\x3e event.currentTarget.dataset.xxx')]),_._v(" "),l("li",[_._v("id=xxx   页面获取 ---\x3e  event.currentTarget.id")]),_._v(" "),l("li",[_._v("路由传参\n"),l("code",[_._v("wx.navigateTo({ // url: '/pages/songDetail/songDetail?song=' + JSON.stringify(song) url: '/pages/songDetail/songDetail?songid=' + songid })")]),_._v("\n页面获取  跳转页面的onLoad声明周期的options.songid 里可以获取到")]),_._v(" "),l("li",[_._v("PubSub传参上面有写")]),_._v(" "),l("li",[_._v("全局app.js文件\n"),l("code",[_._v("globalData:{ isPlay:false, },")]),_._v("\n页面获取 ---\x3e  const appInstance = getApp()   appInstance.globalData.isPlay")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);