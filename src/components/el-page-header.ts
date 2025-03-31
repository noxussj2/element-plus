const attr = [
    {
        key: 'icon',
        describe: 'Page Header 的图标 Icon 组件。',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'Back',
        describe: 'Page Header 的主标题，默认是 Back (内置 a11y)。',
        type: 'string',
        default: "''"
    },
    {
        key: 'title',
        describe: 'Page Header 的主标题。',
        type: 'string',
        default: "''"
    },
    {
        key: 'content',
        describe: 'Page Header 的内容。',
        type: 'string',
        default: "''"
    }
];

const event: any = [
    {
        key: '@back',
        describe: '点击左侧区域触发',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/page-header.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/page-header.html#attributes';
});

export default {
    key: 'el-page-header',
    attr,
    event
};
