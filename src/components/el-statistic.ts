const attr = [
    {
        key: 'value',
        describe: '数字内容。',
        type: 'number',
        default: '0'
    },
    {
        key: 'decimal-separator',
        describe: '设置小数点符号。',
        type: 'string',
        default: '.'
    },
    {
        key: 'formatter',
        describe: '自定义数字格式化。',
        type: 'Function',
        default: '—'
    },
    {
        key: 'group-separator',
        describe: '设置千分位标识符。',
        type: 'string',
        default: ','
    },
    {
        key: 'precision',
        describe: '数字精度。',
        type: 'number',
        default: '0'
    },
    {
        key: 'prefix',
        describe: '设置数字的前缀。',
        type: 'string',
        default: '—'
    },
    {
        key: 'suffix',
        describe: '设置数字的后缀。',
        type: 'string',
        default: '—'
    },
    {
        key: 'title',
        describe: '数字标题。',
        type: 'string',
        default: '—'
    },
    {
        key: 'value-style',
        describe: '数字样式。',
        type: 'string / object',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#statistic-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#statistic-attributes';
});

export default {
    key: 'el-statistic',
    attr,
    event
};
