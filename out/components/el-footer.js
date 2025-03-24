"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'height',
        describe: '底栏高度',
        type: 'string',
        default: '60px'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#footer-attributes';
});
exports.default = {
    key: 'el-footer',
    attr,
    event
};
//# sourceMappingURL=el-footer.js.map