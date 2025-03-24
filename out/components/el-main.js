"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'direction',
        describe: '子元素的排列方向',
        type: 'enum',
        default: '子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#container-attributes';
});
exports.default = {
    key: 'el-container',
    attr,
    event
};
//# sourceMappingURL=el-main.js.map