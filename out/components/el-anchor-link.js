"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'title',
        describe: '链接的文本内容。',
        type: 'string',
        default: '—'
    },
    {
        key: 'href',
        describe: '链接的地址。',
        type: 'string',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/anchor.html#anchorlink-attributes';
});
event.forEach((x) => {
    x.link = '';
});
exports.default = {
    key: 'el-anchor-link',
    attr,
    event
};
//# sourceMappingURL=el-anchor-link.js.map