const attr = [
    {
        key: 'to',
        describe: '路由跳转目标，同 vue-router 的 to 属性。',
        type: 'string | object',
        default: "''"
    },
    {
        key: 'replace',
        describe: '如果设置该属性为 true，导航将不会留下历史记录。',
        type: 'boolean',
        default: 'false'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumbitem-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumbitem-attributes';
});

export default {
    key: 'el-breadcrumb-item',
    attr,
    event
};
