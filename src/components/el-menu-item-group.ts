const attr = [
    {
        key: 'title',
        describe: '组标题',
        type: 'string',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-group-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-group-attributes';
});

export default {
    key: 'el-menu-item-group',
    attr,
    event
};
