"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'value',
        describe: '显示值。',
        type: 'string / number',
        default: "''"
    },
    {
        key: 'max',
        describe: '最大值，超过最大值会显示 {max}+。只有当 value 是数字类型时起作用。',
        type: 'number',
        default: '99'
    },
    {
        key: 'is-dot',
        describe: '是否显示小圆点。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'hidden',
        describe: '是否隐藏 Badge。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'type',
        describe: 'badge 类型。',
        type: 'enum',
        default: 'danger'
    },
    {
        key: 'show-zero',
        describe: '值为零时是否显示 Badge（从 2.6.0 版本开始支持）。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'color',
        describe: '背景色（从 2.6.3 版本开始支持）。',
        type: 'string',
        default: '—'
    },
    {
        key: 'offset',
        describe: 'badge 的偏移量（从 2.7.0 版本开始支持）。',
        type: '[ number , number ]',
        default: '—'
    },
    {
        key: 'badge-style',
        describe: '自定义 badge 样式（从 2.7.1 版本开始支持）。',
        type: 'object',
        default: '—'
    },
    {
        key: 'badge-class',
        describe: '自定义 badge 类名（从 2.7.1 版本开始支持）。',
        type: 'string',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/badge.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/badge.html#attributes';
});
exports.default = {
    key: 'el-badge',
    attr,
    event
};
//# sourceMappingURL=el-badge.js.map