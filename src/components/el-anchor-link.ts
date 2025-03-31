const attr = [
    {
        key: 'title',
        describe: '链接的文本内容。',
        type: 'string',
        default: '—'
    },
    {
        key: 'href',
        describe: '链接的地址。',
        type: 'string',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/anchor.html#anchorlink-attributes';
});

event.forEach((x: any) => {
    x.link = '';
});

export default {
    key: 'el-anchor-link',
    attr,
    event
};
