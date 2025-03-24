"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'color',
        describe: 'svg 的 fill 颜色',
        type: 'string',
        default: '继承颜色'
    },
    {
        key: 'size',
        describe: 'SVG 图标的大小，size x size',
        type: 'number / string',
        default: '继承字体大小'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/icon.html#attributes';
});
exports.default = {
    key: 'el-icon',
    attr,
    event
};
//# sourceMappingURL=el-icon.js.map