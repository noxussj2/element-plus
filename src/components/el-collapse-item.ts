const attr = [
    {
        key: 'name',
        describe: '唯一标志符。',
        type: 'string | number',
        default: '—'
    },
    {
        key: 'title',
        describe: '面板标题。',
        type: 'string',
        default: "''"
    },
    {
        key: 'icon',
        describe: '折叠项目的图标。自 2.8.3 版本起支持。',
        type: 'string | Component',
        default: 'ArrowRight'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/collapse.html#collapse-item-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/collapse.html#collapse-item-attributes';
});

export default {
    key: 'el-collapse-item',
    attr,
    event
};
