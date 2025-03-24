"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#option-api';
});
exports.default = {
    key: 'el-select',
    attr,
    event
};
//# sourceMappingURL=el-options.js.map