---
title: 萌备徽章化
published: 2026-02-22
description: 让你的萌备用上更好看的徽章😉
tags: ["萌备", "美化", "教程"]
category: 教程
---
# 前言
你也想让你的萌备用上漂亮的**徽章**吗![My own MoeICP badge](https://obb.cc.cd/assets/img/moeicp.svg)
此篇文章我将介绍两种方法来给你的萌备用上美丽的徽章

# 开始

## 方法一：使用Shields.io
> [!NOTE]
> 最简单的一种方式，可以自定义颜色、文本、徽标样式

打开[Static Badge | Shields.io](https://shields.io/badges)，划到内容底部

填写徽章信息：
- **badgeContent**: `萌ICP备-xxxxxxxx号-pink`
- **labelColor** (可选): `purple`
> [!TIP] 替换建议
> `pink`、`purple`可替换为自己喜欢的颜色，支持rgb色彩

填写完后点击**Execute**查看效果

复制给出的填写代码，按需复制，然后引用到网站的页脚，就行啦！

## 方法二：使用矢量图
> [!NOTE]
> 只需替换  
> 但颜色为固定的**紫-粉**

创建一个格式为**svg**的文件，用文本编辑器打开，填入以下内容：
```html title="*.svg" "20252235号"
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="20" role="img" aria-label="moeicp">
  <title>MoeICP</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="128" height="20" rx="3" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="51" height="20" fill="purple"/>
    <rect x="51" width="77" height="20" fill="pink"/>
    <rect width="128" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text aria-hidden="true" x="265" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="410">萌ICP备</text>
    <text x="265" y="140" transform="scale(.1)" fill="#fff" textLength="410">萌ICP备</text>
    <text aria-hidden="true" x="885" y="150" fill="#ccc" fill-opacity=".3" transform="scale(.1)" textLength="670">20252235号</text>
    <text x="885" y="140" transform="scale(.1)" fill="#333" textLength="670">20252235号</text>
  </g>
</svg>
```
> [!CAUTION] 替换提醒
> 标注出来的需要替换为您**自己的萌备案号**

若无错误，就能在网站中引用并使用啦

# 结束
- 使用[方法一](#方法一使用shieldsio)直接引用链接会增加站点的跨域请求，而且在部分地区可能会初见访问失败的情况，建议**将效果矢量图下载到本地然后将其引用到网站中**
- 如果想要使用**带图标的**，下载[此文件](https://obb.cc.cd/assets/img/moeicp.svg)并依照[方法二](#方法二使用矢量图)自行替换
- 如果需要让访客点击徽章就跳转到你的萌备详情页，就需要用到`<a>`标签
