const attr = [
    {
        key: 'height',
        describe: '底栏高度',
        type: 'string',
        default: '60px'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#footer-attributes';
});

export default {
    key: 'el-footer',
    attr,
    event
};
