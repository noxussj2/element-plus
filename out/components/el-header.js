"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'height',
        describe: '顶栏高度',
        type: 'string',
        default: '	60px'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#header-attributes';
});
exports.default = {
    key: 'el-header',
    attr,
    event
};
//# sourceMappingURL=el-header.js.map