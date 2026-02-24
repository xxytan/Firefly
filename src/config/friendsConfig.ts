import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Xytan's Website",
		imgurl: "https://xytan.mysxl.cn/favicon.ico",
		desc: "站长小学时候的旧站",
		siteurl: "https://xytan.mysxl.cn",
		tags: ["回忆"],
		weight: 1, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "二叉树树",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
		desc: "Protect What You Love.",
		siteurl: "https://2x.nz",
		tags: ["朋友"],
		weight: 2,
		enabled: true,
	},
	{
		title: "寒士杰克",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2959602696&s=640",
		desc: "喜欢捣鼓，不断进步！",
		siteurl: "https://www.hansjack.com",
		tags: ["朋友"],
		weight: 3,
		enabled: true,
	},
	{
		title: "江鸟博客",
		imgurl: "https://blog.azucat.eu/favicon/icon.png",
		desc: "天有不公~地有苍生~万般万般年月过~落日朱门满地红~",
		siteurl: "https://blog.azucat.eu",
		tags: ["朋友"],
		weight: 4,
		enabled: true,
	},
	{
		title: "1zyq1 BLOG",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2289308183&s=640",
		desc: "爱你所爱",
		siteurl: "https://www.1zyq1.com",
		tags: ["朋友"],
		weight: 5,
		enabled: true,
	},
	{
		title: "吃猫的鱼の总部",
		imgurl: "https://geekrain.site/_next/image?url=https%3A%2F%2Ffree.picui.cn%2Ffree%2F2026%2F01%2F25%2F69760dea9ac4f.png&w=640&q=75",
		desc: "长官在这里发号施令",
		siteurl: "https://geekrain.site",
		tags: ["朋友"],
		weight: 6,
		enabled: true,
	},
	{
		title: "一刻",
		imgurl: "https://blog.xanz.xyz/icon/android-chrome-192x192.png",
		desc: "沉浮与世，驻足一刻",
		siteurl: "https://blog.xanz.xyz",
		tags: ["朋友"],
		weight: 7,
		enabled: true,
	},
	{
		title: "Ksable’s 小屋",
		imgurl: "https://weavatar.com/avatar/abd826c253cc22fb954ec7567526f9a1211deb9905b8477c5b2875e20a2adb0b?s=500",
		desc: "身在无间，心在桃源",
		siteurl: "https://blog.ksable.top",
		tags: ["朋友"],
		weight: 8,
		enabled: true,
	},
	{
		title: "兔兔博客",
		imgurl: "https://blog.xn--eet944d.top/assets/avatar.webp",
		desc: "万事都要全力以赴，包括开心",
		siteurl: "https://blog.xn--eet944d.top",
		tags: ["朋友"],
		weight: 9,
		enabled: true,
	},
	{
		title: "可达鸭战神の博客",
		imgurl: "https://blog.kdyzs.top/img/butterfly-icon.png",
		desc: "Good morning. And in case I don't see ya, good afternoon good evening and good night.",
		siteurl: "https://blog.kdyzs.top",
		tags: ["朋友"],
		weight: 10,
		enabled: true,
	},
	{
		title: "麻辣工夫茶博客网",
		imgurl: "https://amvc.top/touxiang.webp",
		desc: "天气晴朗，万物可爱～",
		siteurl: "https://amvc.top",
		tags: ["朋友"],
		weight: 11,
		enabled: true
	},
	{
		title: "Lucas的小博客",
		imgurl: "https://pic1.imgdb.cn/item/68fe309a3203f7be00a0c198.png",
		desc: "欲买桂花同载酒，终不似，少年游",
		siteurl: "https://blog.lris625.top",
		tags: ["朋友"],
		weight: 12,
		enabled: true
	},
	{
		title: "小杨blog",
		imgurl: "https://xiaoyangboke.xyz/svg/blogAvatar1-4f998420.svg",
		desc: "一位分享技术与生活的博客，诸君，缘聚于此，欢迎你常来",
		siteurl: "https://xiaoyangboke.xyz",
		tags: ["朋友"],
		weight: 13,
		enabled: true
	},
	{
		title: "孟轩科技's blog",
		imgurl: "https://blog.mxw2024.top/assets/images/favicon.ico",
		desc: "一个简洁、美观、纯净、无广告的小站",
		siteurl: "https://blog.mxw2024.top",
		tags: ["朋友"],
		weight: 14,
		enabled: true
	},
	{
		title: "G.B.S.A.T.’s Official Blog",
		imgurl: "https://www.gbsat.org/logo.png",
		desc: "G.B.S.A.T. 的官方公开博客，我们将在此发布很多有用资讯或教程，亦或是分享实用的软件资源，欢迎关注我们！",
		siteurl: "https://blog.gbsat.org",
		tags: ["朋友"],
		weight: 15,
		enabled: true
	},
	{
		title: "孟轩网的小站",
		imgurl: "https://www.mxw2024.top/favicon.ico",
		desc: "一个简洁、美观、纯净、无广告的小站",
		siteurl: "https://www.mxw2024.top",
		tags: ["朋友"],
		weight: 16,
		enabled: true
	},
	{
		title: "夏夜流萤",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=7618557&s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["朋友"],
		weight: 17,
		enabled: true
	},
	{
		title: "友链展示站",
		imgurl: "https://peng.you/favicon.ico",
		desc: "发现优质博客与网站",
		siteurl: "https://peng.you",
		tags: ["朋友", "聚合"],
		weight: 18,
		enabled: true
	},
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
	return friendsConfig
		.filter((friend) => friend.enabled)
		.sort((a, b) => a.weight - b.weight);
};
