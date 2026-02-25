import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://q1.qlogo.cn/g?b=qq&nk=2814836281&s=640",

	// 名字
	name: "Kentural",

	// 个人签名
	bio: "无聊的一天搭配神经的我～",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "E-mail",
			icon: "fa7-solid:envelope",
			url: "mailto:msbyshens@outlook.com",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/xxytan",
			showName: false,
		},
		{
			name: "Telegram",
			icon: "fa7-brands:telegram",
			url: "https://t.me/xxytan",
			showName: false,
		},
		{
			name: "Bilibli",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1580336394",
			showName: false,
		},
		{
			name: "Weibo",
			icon: "fa7-brands:weibo",
			url: "https://weibo.com/u/7701722034",
			showName: false,
		},
	],
};
