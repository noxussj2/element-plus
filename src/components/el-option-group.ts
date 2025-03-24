const attr = [
    {
        key: 'label',
        describe: '分组的名称',
        type: 'string',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否将该分组下所有选项置为禁用',
        type: 'boolean',
        default: 'false'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#option-group-api';
});

export default {
    key: 'el-option-group',
    attr,
    event
};
