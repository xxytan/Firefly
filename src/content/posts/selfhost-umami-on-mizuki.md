---
title: 在Mizuki上使用自托管Umami
published: 2026-02-08
description: 在 Mizuki 上正确配置并使用自托管 Umami
tags: [Astro, Mizuki, Umami]
category: 教程
---

:::caution
因[此次提交](https://github.com/matsuzaka-yuki/Mizuki/commit/1dcaa613759be51778c6b9e16896ea13d4b48b44)后，Mizuki 的 Umami 实现方式已变，此文章仅适用**Mizuki ≤ 8.2**  
在**26/8/12 后拉取**的 Mizuki 代码请参阅[官方文档](https://docs.mizuki.mysqil.com/Feature/umami-config/#_4-手动插入统计脚本到-layout-astro)
:::

# 前言
前段时间把博客从 Hexo 换成了 Astro，然后发现我用的 Mizuki 主题的统计总是用不了  
进了交流群才发现原来只是默认适配了**Umami Cloud**，并没有适配**自托管Umami**  
后来在群友的帮助下还是找到了解决方法😋
- **自托管Umami**没有`API Key`这一说，用的是`Bearer Token`，而 Mizuki 默认只支持使用`API Key`，想要使用自托管我们得更改文件

# 准备
先获取`token`

打开[Hoppscotch](https://hoppscotch.io/)
- 将原先的`GET`改成`POST`，后方填
  ```txt showLineNumbers=false
  https://<yours>/api/auth/login
  ```
  > [!NOTE]
  > `<yours>`为**自托管Umami**绑定的域名，后面出现请自行替换

- 选`Body`页，**Content Type** 选`application/json`，**Raw Request Body** 填
  ```js
  {
    "username": "Umami用户名",
    "password": "Umami密码"
  }
  ```
- 点蓝色按钮`Send`，稍等片刻，下方就会出现`token`![e.g.](https://roc.us.ci/file/blog/3/1.png)
  完整地复制`token`，并将其暂时储存在某个地方

# 开始

## 编辑`umami-share.js`
> 位于`./public/js/`

- 将27、68行 **statsUrl** 后面的`/v1`去除
- 将31、72行改为
  ```js title="public/js/umami-share.js" showLineNumbers=false
  Authorization: `Bearer ${apiKey}`
  ```

## 编辑`config.ts`
> 位于`./src/`

将最后 **umamiConfig** 下
- `apiKey`填前面复制的`token`；  
  或者使用环境变量
- `baseUrl`填
  ```txt showLineNumbers=false
  https://<yours>/api
  ```

# 结束
- 若对文章部分步骤有疑惑，可以打开[博客源代码](https://github.com/xxytan/blog)，对照着进行操作
- 获取`token`的时候最好是用一个**仅查看**权限的账户，不要用管理员账户，以备有心之人  
  （但是拿到`token`其实也干不了啥）

## 已知问题
~~1. 文章访问量与站点访问量一致~~
