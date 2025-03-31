const attr = [
    {
        key: 'separator',
        describe: '分隔符。',
        type: 'string',
        default: '/'
    },
    {
        key: 'separator-icon',
        describe: '图标分隔符的组件或组件名。',
        type: 'string | Component',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumb-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumb-attributes';
});

export default {
    key: 'el-breadcrumb',
    attr,
    event
};
