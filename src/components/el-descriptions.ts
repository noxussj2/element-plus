const attr = [
    {
        key: 'border',
        describe: '是否带有边框。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'column',
        describe: '一行 Descriptions Item 的数量。',
        type: 'number',
        default: '3'
    },
    {
        key: 'direction',
        describe: '排列的方向。',
        type: 'enum',
        default: 'horizontal'
    },
    {
        key: 'size',
        describe: '列表的尺寸。',
        type: 'enum',
        default: '—'
    },
    {
        key: 'title',
        describe: '标题文本，显示在左上方。',
        type: 'string',
        default: "''"
    },
    {
        key: 'extra',
        describe: '操作区文本，显示在右上方。',
        type: 'string',
        default: "''"
    },
    {
        key: 'label-width',
        describe: '每一列的标签宽度。自 2.8.8 版本起支持。',
        type: 'string | number',
        default: "''"
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/descriptions.html#descriptions-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/descriptions.html#descriptions-attributes';
});

export default {
    key: 'el-descriptions',
    attr,
    event
};
