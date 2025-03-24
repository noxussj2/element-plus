"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#option-group-api';
});
exports.default = {
    key: 'el-option-group',
    attr,
    event
};
//# sourceMappingURL=el-option-group.js.map