"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'separator',
        describe: '分隔符。',
        type: 'string',
        default: '/'
    },
    {
        key: 'separator-icon',
        describe: '图标分隔符的组件或组件名。',
        type: 'string | Component',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumb-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumb-attributes';
});
exports.default = {
    key: 'el-breadcrumb',
    attr,
    event
};
//# sourceMappingURL=el-breadcrumb.js.map