export const config: Config = {
    title: "HikariLan 贺兰星辰的个人主页",
    description: "HikariLan 贺兰星辰的个人主页",
    keywords: "贺兰星辰,HikariLan,shaokeyibb,贺兰兰",
    background: {
        // @See: https://developer.mozilla.org/en-US/docs/Web/CSS/background
        color: {
            type: "url",
            value: "https://www.loliapi.com/acg/"
        }
    },
    panel: {
        filter: {
            blur: "3px",
            contrast: "1.2"
        },
        shadow: {
            offsetX: "0",
            offsetY: "0",
            blurRadius: "50px",
            color: "rgba(0 0 0/ 25%)",
        }
    },
    theme: {
        primaryColor: "rgba(0,184,148,0.7)",
        secondaryColor: "#f5af19",
        surfaceColor: "rgba(255,255,255,0.3)",
        onSurfaceTextColor: "#000",
        headerColor: "rgba(0,0,0, 0.4)",
        onHeaderTextColor: "#FFF",
        footerColor: "rgba(0,0,0, 0.4)",
        onFooterTextColor: "#FFF",
    },
    borderRadius: '10px',
    avatar: {
        type: "url",
        value: "https://assets.hikarilan.life/avatar.png"
    },
    name: "这里是 HikariLan 贺兰星辰😀",
    slogan: "一个普通的学生，业余开发者，热爱开源，喜欢折腾新事物",
    socialMedia: [
        {
            name: "简历",
            url: "https://cv.hikarilan.life"
        },
        {
            name: "博客",
            url: "https://blog.hikarilan.life"
        },
        {
            name: "QQ",
            url: "tencent://message/?uin=2191023046"
        },
        {
            name: "电子邮件",
            url: "mailto:i@hikarilan.life"
        },
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb"
        },
        {
            name: "V2EX",
            url: "https://v2ex.com/member/HikariLan"
        },
        {
            name: "牛客",
            url: "https://www.nowcoder.com/users/411132126"
        }
    ],
    headerHtml: `
    公告：本站点正将主域名由 minecraft.kim 迁移至 hikarilan.life，请各位用户注意修改书签和链接。
    `,
    footerHtml: `
     ©${new Date().getFullYear()} HikariLan's Homepage. All Rights Reserved. <strong><a href='https://beian.miit.gov.cn/' target='_blank'>陕ICP备2020016655号-4</a></strong> 
     Powered by <a href="https://github.com/shaokeyibb/hikari_homepage">hikari_homepage</a> project. 
     Background image by <a href="https://www.loliapi.com">Loli API</a>. 
    `
}

declare type Config = {
    title?: string,
    description?: string,
    keywords?: string,
    background?: {
        color?: {
            type: "linear-gradient" | "radial-gradient" | "repeating-linear-gradient" | "repeating-radial-gradient" | "conic-gradient" | "url" | "basic" | "none",
            value: string
        }
        filter?: {
            blur?: string,
            brightness?: string,
            contrast?: string,
            dropShadow?: string,
            grayscale?: string,
            hueRotate?: string,
            invert?: string,
            opacity?: string,
            saturate?: string,
            sepia?: string,
        }
    },
    panel?: {
        filter?: {
            blur?: string,
            brightness?: string,
            contrast?: string,
            dropShadow?: string,
            grayscale?: string,
            hueRotate?: string,
            invert?: string,
            opacity?: string,
            saturate?: string,
            sepia?: string,
        },
        shadow?: {
            offsetX?: string,
            offsetY?: string,
            blurRadius?: string,
            spreadRadius?: string,
            color?: string,
        }
    }
    theme: {
        primaryColor: string,
        secondaryColor: string,
        surfaceColor: string,
        onSurfaceTextColor: string,
        headerColor: string,
        onHeaderTextColor: string,
        footerColor: string,
        onFooterTextColor: string,
    },
    borderRadius?: string,
    avatar?: {
        type: "gravatar" | "cravatar" | "qq" | "url",
        value: string
        imageType?: "normal" | "webp"
    },
    name: string,
    slogan?: string,
    socialMedia?: {
        name: string,
        url: string,
    }[],
    // TODO: WIP
    skills?: [
        {
            name: string,
            percent: number,
        }
    ],
    // TODO: WIP
    projects?: [
        {
            name: string,
            description: string,
            url: string,
        }
    ],
    extraHtml?: string,
    headerHtml?: string,
    footerHtml?: string,
}

// @See: https://nuxt.com/docs/getting-started/seo-meta#usehead
export const head = {
    title: config.title,
    meta: [
        {name: 'description', content: config.description},
        {name: 'charset', content: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'baidu-site-verification', content: 'codeva-LCnDgQzqz7'}
    ],
    link: [
        {rel: 'icon', href: 'https://assets.hikarilan.life/favicon.png'}
    ],
    htmlAttrs: {
        lang: 'zh'
    }
}

// @See: https://nuxt.com/docs/getting-started/seo-meta#useseometa
export const seoMeta = {
    title: config.title,
    description: config.description,
    keywords: config.keywords
}