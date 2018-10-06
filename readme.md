## 学习移动web前端布局：

视觉窗口：viewport

<meta name="viewport"> 设置视口的标签  在head里面并且应该紧接着编码设置
            viewport的功能：
            1. width    可以设置宽度   (device-width 当前设备的宽度)
            2. height   可以设置高度
            3. initial-scale  可以设置默认的缩放比例
            4. user-scalable  可以设置是否允许用户自行缩放
            5. maximum-scale  可以设置最大缩放比例
            6. minimum-scale  可以设置最小缩放比例
            在<meta name="viewport" content="" >  content="" 使用以上参数
            1. width=device-width   宽度一致比例是1.0
            2. initial-scale=1.0    宽度一致比例是1.0
            3. user-scalable=no     不允许用户自行缩放  （yes，no  1,0）
            标准适配方案：
            <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
            meta:vp + tab  快捷方式

## 京东demo：（流式布局）

**流式布局：百分比布局，非固定像素，内容向两侧填充；**

顶部搜索栏：圣杯布局，width100%，左右固定padding，固定的部分浮动；

去除图片下间隙三种方法：1.把font-size设为0；2.display:block;3:vertical-align:center;

导航栏：with:25%

移动端touch事件：

- touchstart
- touchmove
- touchend
- touchcancel

倒计时：setInterver

分类两栏：固定+自适应：一个固定宽度float+一个overflow：hidden

区域滚动插件：iscroll

## 微金所demo：（响应式布局）

原理：通过媒体查询（MediaQuery）查询screen宽度 `@media screen and （条件）{...}`

(补充无关知识：以@开头的还有：@font-face，@keyframes)

响应式设备划分：768px以下-xs；768-992px-sm；992-1200px-md；1200px以上-lg；

bootstrap栅格系统：

```html
<div class="row">
    <div class="col-lg-4"></div>  
	<div class="col-lg-4"></div> 
    <div class="col-lg-4"></div> 
</div>
```

顶部通栏：栅格系统 对小和超小屏hidden-sm hidden-xs

导航栏：bootstrap的navbar 组件（navbar-header navbar-brand navbar-toggle  navbar-collapse）

轮播图：bootstrap的carousel组件，结合ajax请求和arttemplate获取轮播图数据并渲染数据；（后台php）

信息：栅格系统（大中：三行两列、小两行三列、超小隐藏）、media组件

预约：pull-left、pull-right左右浮动

产品：bootstrap的tab标签页插件

新闻：tab标签页的纵向

合作伙伴：ul>li



## 苏宁demo（less+rem）

less: 变量（@xx：xx）、mixin、嵌套、@import、

- 函数混入：
  - 声明.f_left(){float:left} .w50(){width:50}  
  - 调用.w50-f_left{.w50();.f_left()}

rem:

1em是父元素字体大小；

1rem是html元素（根元素）字体大小（注意1rem不能设置太小）

顶部通栏：圣杯布局，rem单位

轮播图：swiper插件

分类：width:20%

页签：ul>li(float)

