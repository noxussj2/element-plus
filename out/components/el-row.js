"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'gutter',
        describe: '栅格间隔',
        type: 'number',
        default: '0'
    },
    {
        key: 'justify',
        describe: 'flex 布局下的水平排列方式',
        type: 'enum',
        default: 'start'
    },
    {
        key: 'align',
        describe: 'flex 布局下的垂直排列方式',
        type: 'enum',
        default: '—'
    },
    {
        key: 'tag',
        describe: '自定义元素标签',
        type: 'string',
        default: 'div'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/layout.html#row-attributes';
});
exports.default = {
    key: 'el-row',
    attr,
    event
};
//# sourceMappingURL=el-row.js.map