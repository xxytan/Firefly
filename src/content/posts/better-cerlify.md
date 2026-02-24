---
title: CF、Vercel、Netlify优选
published: 2026-02-23
description: 提升部署在CF、Vercel及Netlify站点在大陆的访问速度
tags: ["Cloudflare", "Vercel", "Netlify", "优选", "教程"]
category: 教程
---
# 前言
因某些神秘力量、及泛播节点的乱给，部署在Cloudflare、Vercel、Netlify（*cerlify*）的站点在大陆内访问速度一言难尽，但架不住人家的免费、免实名  
在这篇文章中，我将介绍如何优选部署在cerlify上的站点，让其**本土化**😎

# 开始

## Cloudflare Workers
1. 点到你要优选的Workers项目，到 **设置 - 域和路由** 点`添加`，选择`路由`
2. 填写信息：
   - **区域**：要绑定到的域名区域
   - **路由**：要绑定的自定义域名
     > 记得在后面加`/*`
   
   
   ![e.g.](https://roc.us.ci/file/blog/8/1.webp)然后点`添加路由`
3. 转到你的域名的 **DNS 记录**，添加一个**CNAME**记录：
   - **名称**：刚才路由的子域
   - **记录**：`*.tencentapp.cn`
     > [!CAUTION] 替换提醒
     > `*`随便填  
     > 下文依旧
   - **代理状态**：关闭
     > [!WARNING] 必须的一步！
     
   ![e.g.](https://roc.us.ci/file/blog/8/2.webp)并保存
4. 等待记录生效（不会要很久)

## Cloudflare Pages
1. 正常绑定你要优选的Pages的域名
2. 登录[华为云国际](https://console-intl.huaweicloud.com/dns/?region=ap-southeast-1)[^1]，到**公网域名**，点**创建公网域名**，把你的一级域名（主域名）填上![steps](https://roc.us.ci/file/blog/8/3.webp)
3. 在CF仪表盘添加**NS记录**（每个都要填）![NS records](https://roc.us.ci/file/blog/8/4.webp)
4. 打开你要优选的Pages项目，复制带`.pages.dev`的域名![5.webp](https://roc.us.ci/file/blog/8/5(1).webp)
5. 返回华为云，点`添加记录集`，添加一个**CNAME**记录：
   - 主机记录：绑定的子域
   - 记录值：刚刚复制的`.pages.dev`
   ![e.g.](https://roc.us.ci/file/blog/8/6(1).webp)并点`确定`
6. 再次点`添加记录集`，添加另一个**CNAME**记录：
   - 主机记录：绑定的子域
   - 线路类型：*地域解析 - 中国大陆*
   - 记录值：`*.tencentapp.cn`
   ![e.g.](https://roc.us.ci/file/blog/8/7.webp)并点`确定`
7. 等待记录生效

## Vercel
1. 正常绑定你要优选的项目的域名
2. 等待SSL证书部署完毕后，到你的域名服务商把原来的**A**或**CNAME**记录改为值为`vercel-cname.xingpingcn.top`的**CNAME**记录
3. 等待记录生效

## Netlify
1. 在绑定域名时，**CNAME**记录值不要填`.netlify.app`，直接填`apex-loadbalancer.netlify.com`，一样的会自动生成SSL证书。否则，与[Vercel](#vercel)步骤相同

# 结束

## 效果

:::note
测速站为[ITDOG](https://www.itdog.cn)  
受一些因素影响，不可能所有时刻都是如此的效果
:::

<p align="right"><strong>CF Workers</strong></p>

![b.oxue.de](https://roc.us.ci/file/blog/8/cfworkers.webp)

<p align="right"><strong>CF Pages</strong></p>

![roc.us.ci](https://roc.us.ci/file/blog/8/cfpages.webp)

<p align="right"><strong>Vercel</strong></p>

![www.oxue.de](https://roc.us.ci/file/blog/8/vercel.webp)

<p align="right"><strong>Netlify</strong></p>

![blog.zdsr.cn](https://roc.us.ci/file/blog/8/netlify.webp)

## 其他
- 优选[Vercel](#vercel)时：
  - 如果你优选的项目是需要**记录访问者IP**（评论系统、统计系统…）的，使用`vercel-cname.xingpingcn.top`这个优选域名会导致IP全跑到CDN节点（台湾)  
    解决方法就是使用[官方的优选域名](#优选域名)
- cf pages的优选效果远远差于cf workers，在条件支持的情况下，我们推荐将项目部署到**cf workers**
- Netlify的IP在部分地区会被阻断，所以尽管效果优选效果看起来很好，加载速度还是会有些慢

### 优选域名
- CF Workers & Pages:
  - `www.shopify.com` *推荐*
  - `www.visa.cn`
  - `*.tencentapp.cn` *推荐*
  - `*.cf.090227.xyz`
- Vercel:
  - `vercel-cname.xingpingcn.top` *推荐*
  - `cname.vercel-dns.com` *官方；仅必要时*
- Netlify
  - `netlify-cname.xingpingcn.top` *推荐*
  - `apex-loadbalancer.netlify.com` *官方*

> [!TIP] 致谢个人维护者
> [邢平cn](https://xingpingcn.top)、[CMLiu](https://blog.cmliussss.com)、ktff

---
[^1]: > 华为云仅为一个例子，其他（阿里云、DNSPod）的也能实现此效果
      
      若无法注册国际版请使用国际互联网环境后再试
      若您的域名已备案也可用国内版
