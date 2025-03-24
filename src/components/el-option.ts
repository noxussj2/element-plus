const attr = [
    {
        key: 'value',
        describe: '选项的值',
        type: 'string / number / boolean / object',
        default: '—'
    },
    {
        key: 'label',
        describe: '选项的标签，若不设置则默认与value相同',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用该选项',
        type: 'boolean',
        default: 'false'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#option-api';
});

export default {
    key: 'el-option',
    attr,
    event
};
