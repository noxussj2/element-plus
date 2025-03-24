const attr = [
    {
        key: 'value',
        describe: '单选框的值',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'label',
        describe: '单选框的 label 如果没有 value， label则作为value使用',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用单选框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radiobutton-attributes';
});

export default {
    key: 'el-radio-button',
    attr,
    event
};
