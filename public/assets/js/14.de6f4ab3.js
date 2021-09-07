(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{521:function(t,v,_){"use strict";_.r(v);var a=_(6),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[t._v("#")]),t._v(" UDP")]),t._v(" "),_("p",[t._v("UDP协议全称是用户数据报协议，在网络中它与TCP协议一样用于处理数据包，是一种无连接的协议")]),t._v(" "),_("h2",{attrs:{id:"udp的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp的特点"}},[t._v("#")]),t._v(" UDP的特点")]),t._v(" "),_("ol",[_("li",[t._v("面向无连接")])]),t._v(" "),_("ul",[_("li",[t._v("UDP 是不需要和 TCP一样在发送数据前进行三次握手建立连接的，想发数据就可以开始发送了")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("有单播，多播，广播的功能")])]),t._v(" "),_("ul",[_("li",[t._v("UDP 不止支持一对一的传输方式，同样支持一对多，多对多，多对一的方式")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("UDP是面向报文的")])]),t._v(" "),_("ul",[_("li",[t._v("UDP对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界。因此，应用程序必须选择合适大小的报文")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("不可靠性")])]),t._v(" "),_("ul",[_("li",[t._v("首先不可靠性体现在无连接上，通信都不需要建立连接，想发就发，这样的情况肯定不可靠。")]),t._v(" "),_("li",[t._v("并且收到什么数据就传递什么数据，并且也不会备份数据，发送数据也不会关心对方是否已经正确接收到数据了。")]),t._v(" "),_("li",[t._v("再者网络环境时好时坏，但是 UDP 因为没有拥塞控制，一直会以恒定的速度发送数据。即使网络条件不好，也不会对发送速率进行调整。这样实现的弊端就是在网络条件不好的情况下可能会导致丢包")])]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("头部开销小，传输数据报文时是很高效的。")])]),t._v(" "),_("h3",{attrs:{id:"tcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),_("p",[t._v("TCP协议全称是传输控制协议是一种面向连接的、可靠的、基于字节流的传输层通信协议 （三次握手四次挥手）")]),t._v(" "),_("h2",{attrs:{id:"tcp的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp的特点"}},[t._v("#")]),t._v(" TCP的特点")]),t._v(" "),_("ol",[_("li",[t._v("面向连接")])]),t._v(" "),_("ul",[_("li",[t._v("面向连接，是指发送数据之前必须在两端建立连接。建立连接的方法是“三次握手”，这样能建立可靠的连接。建立连接，是为数据的可靠传输打下了基础。")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("仅支持单播传输")])]),t._v(" "),_("ul",[_("li",[t._v("每条TCP传输连接只能有两个端点，只能进行点对点的数据传输，不支持多播和广播传输方式。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("面向字节流")])]),t._v(" "),_("ul",[_("li",[t._v("TCP不像UDP一样那样一个个报文独立地传输，而是在不保留报文边界的情况下以字节流方式进行传输。")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("可靠传输")]),t._v(" "),_("li",[t._v("提供拥塞控制")])]),t._v(" "),_("ul",[_("li",[t._v("当网络出现拥塞的时候，TCP能够减小向网络注入数据的速率和数量，缓解拥塞")])]),t._v(" "),_("h3",{attrs:{id:"tcp和udp的比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp的比较"}},[t._v("#")]),t._v(" TCP和UDP的比较")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("UDP")]),t._v(" "),_("th",[t._v("TCP")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("是否连接")]),t._v(" "),_("td",[t._v("无连接")]),t._v(" "),_("td",[t._v("面向连接")])]),t._v(" "),_("tr",[_("td",[t._v("是否可靠")]),t._v(" "),_("td",[t._v("不可靠传输，不使用流量控制和拥塞控制")]),t._v(" "),_("td",[t._v("可靠传输，使用流量控制和拥塞控制")])]),t._v(" "),_("tr",[_("td",[t._v("连接对象个数")]),t._v(" "),_("td",[t._v("支持一对一，一对多，多对一和多对多交互通信")]),t._v(" "),_("td",[t._v("只能是一对一通信")])]),t._v(" "),_("tr",[_("td",[t._v("传输方式")]),t._v(" "),_("td",[t._v("面向报文")]),t._v(" "),_("td",[t._v("面向字节流")])]),t._v(" "),_("tr",[_("td",[t._v("首部开销")]),t._v(" "),_("td",[t._v("首部开销小，仅8字节")]),t._v(" "),_("td",[t._v("首部最小20字节，最大60字节")])]),t._v(" "),_("tr",[_("td",[t._v("适用场景")]),t._v(" "),_("td",[t._v("适用于实时应用（IP电话、视频会议、直播等）")]),t._v(" "),_("td",[t._v("适用于要求可靠传输的应用，例如文件传输")])])])]),t._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("ul",[_("li",[t._v("TCP向上层提供面向连接的可靠服务 ，UDP向上层提供无连接不可靠服务。")]),t._v(" "),_("li",[t._v("虽然 UDP 并没有 TCP 传输来的准确，但是也能在很多实时性要求高的地方有所作为")]),t._v(" "),_("li",[t._v("对数据准确性要求高，速度可以相对较慢的，可以选用TCP")])])])}),[],!1,null,null,null);v.default=r.exports}}]);