---
title: 部署Hexo到各静态资源上线平台（Pages）
published: 2025-12-21
tags: [Hexo, Termux, Pages]
category: Hexo
description: 轻松让你的Hexo在互联网永生
---
# 前言
- 如何部署Hexo请移步[上篇文章](/posts/hexo-d-termux)
- 也是以Termux为终端，桌面端的宝子除了终端不同，其他步骤大差不差
# 准备工作

## 安装Git和OpenSSH
输入 
```bash title="Termux"
pkg install git&&openssh -y
```
等待进程跑完然后

### 配置Git
> 根据需求，选择适合自己的Git托管平台  
> 以[GitHub](https://github.com)做演示

逐条输入
```bash title="Termux" /<user(?:name>|email>)/
git config --global user.name '<username>'
git config --global user.email '<useremail>'
```
:::caution[替换注意]
`<username>` → *GitHub用户名*  
`<useremail>` → *GitHub绑定邮箱*  
**下文出现依旧**
:::

并回车，以做Git全局配置

### 配置OpenSSH
输入
```bash title="Termux" "<useremail>"
ssh-keygen -t rsa -C "<useremail>"
```
回车，并再连续三次回车，生成公钥  
然后再输入
```bash title="Termux"
cat .ssh/id_rsa.pub
```
查看公钥，把反出的一大长串复制下来，
然后打开[SSH and GPG Keys](https://github.com/settings/keys)，往下滑，点`New SSH Key`，照下图填写![](https://www.zeas.top/api/raw?path=/img/p/2/1.png)然后点 `Add SSH Key`

# 将代码托管到GitHub仓库
点[New Repository](https://github.com/new)创建新仓库，仓库名称就按`<username>.github.io`来填，![](https://www.zeas.top/api/raw?path=/img/p/2/2.png)
> [!NOTE]
> 如果你要部署到**GitHub Pages**，仓库就需要保持公开，否则无所谓

然后点`Create Repository`

## 初始化仓库
返回Termux，cd到博客文件夹，然后逐条输入
```bash title="Termux" "<username>"
git init
git add .
git commit -m "<commitment>"
git branch -M main
git remote add origin git@github.com:<username>/<username>.github.io.git
```
`<commitment>`随便。然后再输入
```bash title="Termux"
git push -u origin main
```
进程跑完后，博客文件就被托管到远程仓库了

<mark>接下来就是重头戏</mark>

# 部署到各Pages
> [!WARNING]
> 优缺点各不相同，请自行选择

## GitHub Pages
> [!NOTE]
> 利用GitHub Actions部署  
  ~~国内容易被墙~~  *这段时间好像还挺好？*

### 开始
我们在博客文件夹下创建依次创建
`.github/workflows/pages.yml`[^1]，并填入
```yaml title=".github/workflows/pages.yml" "24" "24.13.0"
name: Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          submodules: recursive
      - name: Use Node.js 24 # 填自己的大版本号
        uses: actions/setup-node@v4
        with:
          node-version: "24.13.0" # 填自己的详细版本号
      - name: Cache NPM dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> [!CAUTION] 替换注意
> 代码16、19行的版本号 → **本地的Node.js版本号**，可通过以下命令查看：
> ```bash showLineNumbers=false
> node -v
> ```

并保存，

打开仓库设置里的**Pages**，把**Bulid and deployment**下的**Source**从**Deploy from a branch**改为`GitHub Actions`，![](https://www.zeas.top/api/raw?path=/img/p/2/3.png)
返回Termux，输入
```bash title="Termux"
git push --force
```
等待推送完毕，此时我们打开仓库的**Actions**，当一切皆绿时，我们点击**deploy**下面给的类似于 *xxytan.github.io* 地址，就能访问我们的博客啦🎉!![](https://www.zeas.top/api/raw?path=/img/p/2/4.png)

### 绑定域名
在博客文件夹内创建一个`CNAME`文件，将要绑定的自定义域填入，然后
```bash title="Termux"
git add .
git push
```
再到你的域名管理商添加**CNAME**记录，值为 `<username>.github.io`![](https://www.zeas.top/api/raw?path=/img/p/2/5.png)
继续到仓库设置的**Pages**，在右侧**Custom domain**下填入前面输入的自定义域，点`Save`，等待下方成**DNS check successful**，能成功访问自定义域就成功啦🎉![](https://www.zeas.top/api/raw?path=/img/p/2/6.png)

## Cloudflare Pages
> [!NOTE]
> **站长最推荐**，后续可根据CM大大的[优选方法](https://blog.cmliussss.com/p/BestWorkers#%E4%B8%BA-Pages-%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8%E4%BC%98%E9%80%89%E5%9F%9F%E5%90%8D)提升网站访问速度（前提得有域名）

### 开始
登录[Cloudflare 仪表盘](https://dash.cloudflare.com)，

打开**计算和 AI**下的**Workers and Pages**，点`创建应用程序`，再点下面的`Get started`![](https://www.zeas.top/api/raw?path=/img/p/2/7.png)选择 `导入现有的 Git 存储库`，授权一下你的 GitHub，然后选择前面创建的仓库，再按下面的填：
```bash showLineNumbers=false
npx run build # 构建命令
public # 构建输出目录
```
然后点`保存并部署`![](https://www.zeas.top/api/raw?path=/img/p/2/8.png)等待他部署完成，会给一个 *xxxxx.pages.dev* 的域名，点进去也是能够访问的

### 绑定域名
打开项目，点 **自定义域** → `设置自定义域`，跟着引导走，等到呈现**活动**状态就能够通过自定义域访问了![](https://www.zeas.top/api/raw?path=/img/p/2/9.png)

## EdgeOne Pages
> [!NOTE]
> 腾讯的玩意儿，在国内的访问速度确实不错，后续也可以通过添加`A记录`优选
> **已备案的域名**最推荐的方式

### 开始
登录[EdgeOne](https://console.tencentcloud.com/edgeone)，

点**Pages** → `创建项目` → `导入 Git 仓库`，授权一下GitHub，  
选择前面创建的仓库，会自动匹配**框架预设**，我们就直接点`开始部署`就好了![](https://www.zeas.top/api/raw?path=/img/p/2/10.png)部署完毕后会有一个 `xxxxx.edgeone.xxx` 域名，三个小时后过期，打开后也是能够访问的

#### 绑定域名
打开项目，点到**项目设置**，找到`添加自定义域`，跟着引导走就行了，等到`DNS记录`&`证书`都呈现已部署状态就能通过自定义域名访问了![](https://www.zeas.top/api/raw?path=/img/p/2/11.png)

## Vercel
> [!NOTE]
> 大陆访问速度还行，后续也可以通过优选提高访问速度，但提升效果不明显，自行搜寻

### 开始
登录[Vercel](https://vercel.com)，*新账号会引导创建团队*，

点右上角的**Add New…**，选`Project`，授权一下你的GitHub，  
选择前面创建的仓库，会自动匹配预设，若未自动匹配请自行选择![](https://www.zeas.top/api/raw?path=/img/p/2/12.jpg)
然后点`Deploy`，等待一会就部署好啦，点**Go to Dashboard**，就能看到一个 *xxxxx.vercel.app* 的域名，打开也是能够访问的

### 绑定域名
点**Domains**旁的"➕"，![](https://www.zeas.top/api/raw?path=/img/p/2/13.jpg)然后点`Add Domain`，输入你想绑定的域名，点`Save`或回车，再把给出的**CNAME**记录vi添加到域名管理商，耐心等待一会，直至呈现可用（**Valid Configuration**）就行啦![](https://www.zeas.top/api/raw?path=/img/p/2/14.jpg)

## Netlify
> [!NOTE]
> 同Vercel，**但其IP容易被GFW阻断**

### 开始
登录[Netlify](https://app.netlify.com)，*新账号会引导创建团队*，

点右上角的**Add new project**，选`Import an existing project`，授权一下你的GitHub，  
选择前面创建的仓库，项目名称（**Project name**）随便。会自动识别并填写关键信息，否则请自行填写![](https://www.zeas.top/api/raw?path=/img/p/2/15.png)
部署完成后，打开 *;name.netlify.app* 也是可以访问的
> [!CAUTION] 替换注意
> `;name`为**先前设置的项目名称**  
> **下文出现依旧**

### 绑定域名
切到**Domain management**，右边点**Add a domain**下的`Add a domain you already own`，![](https://www.zeas.top/api/raw?path=/img/p/2/16.png)
填入你的域名，然后点`Verify`，会要求进行**TXT域名所有权验证**，我们可以直接点击下方的`Add subdomain`跳过验证![](https://www.zeas.top/api/raw?path=/img/p/2/17.webp)
此时到域名管理商添加值为`;name.netlify.app`的**CNAME**记录，解析成功后会自动申请并部署SSL证书

# 结束
> [!TIP]
> 以后博客每次更新，可以使用组合命令一键推送到仓库：
> ```bash title="Termux" showLineNumbers=false
> git add . && git commit -M "again" && git push
> ```

- 其实也可以直接用**hexo-deployer-git**插件一键生成静态资源并部署到仓库，具体请看[官方文档](https://hexo.io/zh-cn/docs/one-command-deployment#Git)，但是我个人不推荐
- 有考虑专门出一篇文章介绍**如何部署到cf workers**
- 涉及到`pkg`的命令都可以换成`apt`命令

---
[^1]: 先创建`.github`文件夹，再在里面创建`workflows`文件夹，最后在里面创建`pages.yml`文件
