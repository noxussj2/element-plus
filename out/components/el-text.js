"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'type',
        describe: '类型',
        type: 'enum',
        default: '—'
    },
    {
        key: 'size',
        describe: '大小',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'truncated',
        describe: '显示省略号',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'line-clamp',
        describe: '最大行数（2.4.0+）',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'tag',
        describe: '自定义元素标签',
        type: 'string',
        default: 'span'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/text.html#attributes';
});
exports.default = {
    key: 'el-text',
    attr,
    event
};
//# sourceMappingURL=el-text.js.map