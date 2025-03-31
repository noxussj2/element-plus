"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'direction',
        describe: '设置分割线方向',
        type: 'enum',
        default: 'horizontal'
    },
    {
        key: 'border-style',
        describe: '设置分隔符样式',
        type: 'enum',
        default: 'solid'
    },
    {
        key: 'content-position',
        describe: '自定义分隔线内容的位置',
        type: 'enum',
        default: 'center'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/divider.html#attributes';
});
event.forEach((x) => {
    x.link = '';
});
exports.default = {
    key: 'el-divider',
    attr,
    event
};
//# sourceMappingURL=el-divider.js.map