"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'variant',
        describe: '当前渲染 skeleton 类型',
        type: 'enum',
        default: 'text'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/skeleton.html#skeletonitem-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/skeleton.html#skeletonitem-attributes';
});
exports.default = {
    key: 'el-skeleton-item',
    attr,
    event
};
//# sourceMappingURL=el-skeleton-item.js.map