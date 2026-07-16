// Single source of truth for content + SEO.
// Keep the SEO strings here in sync with what is rendered on the page.

export type SocialLink = {
  name: string;
  url: string;
  /** Iconify id (see https://icon-sets.iconify.design). Falls back to `glyph` text if omitted. */
  icon?: string;
  /** Short glyph used when there is no brand icon. */
  glyph?: string;
};

export const site = {
  // ---- Identity ----
  name: "贺兰星辰",
  latinName: "HikariLan",
  slogan: "半栈工程师 | 非科班转码 | 开源爱好者 | 欢迎跟我聊天！",
  avatar: "https://assets.hikarilan.life/avatar.png",

  // ---- SEO (preserved verbatim from the previous site) ----
  seo: {
    title: "HikariLan 贺兰星辰的个人主页",
    keywords: "贺兰星辰,HikariLan,shaokeyibb,贺兰兰",
    description: "半栈工程师 | 非科班转码 | 开源爱好者 | 欢迎跟我聊天！",
    url: "https://hikarilan.life",
    ogImage: "https://assets.hikarilan.life/avatar.png",
    favicon: "https://assets.hikarilan.life/favicon.png",
    baiduVerification: "codeva-5Dmlb6PzVL",
    profileUsername: "HikariLan贺兰星辰",
  },

  // ---- Social links ----
  socialMedia: [
    { name: "简历", url: "https://cv.hikarilan.life", icon: "ph:file-text-bold" },
    { name: "博客", url: "https://blog.hikarilan.life", icon: "ph:pen-nib-bold" },
    { name: "电子邮件", url: "mailto:i@hikarilan.life", icon: "ph:envelope-simple-bold" },
    { name: "GitHub", url: "https://github.com/shaokeyibb", icon: "simple-icons:github" },
    { name: "Bilibili", url: "https://space.bilibili.com/29367276", icon: "simple-icons:bilibili" },
    {
      name: "小红书",
      url: "https://www.xiaohongshu.com/user/profile/6217cddb000000002102467a",
      icon: "simple-icons:xiaohongshu",
    },
    { name: "LINUX DO", url: "https://linux.do/u/hikarilan", icon: "simple-icons:linux", glyph: "LD" },
    { name: "牛客", url: "https://www.nowcoder.com/users/411132126", glyph: "牛" },
  ] as SocialLink[],

  // ---- Footer ----
  icp: {
    text: "陕ICP备2020016655号-4",
    url: "https://beian.miit.gov.cn/",
  },
} as const;

/** Origins used for schema.org `sameAs` (only public https profiles). */
export const sameAs = site.socialMedia
  .filter((item) => item.url.startsWith("https://"))
  .map((item) => item.url);
