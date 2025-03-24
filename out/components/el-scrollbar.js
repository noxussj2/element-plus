"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'height',
        describe: '滚动条高度',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'max-height',
        describe: '滚动条最大高度',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'native',
        describe: '是否使用原生滚动条样式',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'wrap-style',
        describe: '包裹容器的自定义样式',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'wrap-class',
        describe: '包裹容器的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'view-style',
        describe: '视图的自定义样式',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'view-class',
        describe: '视图的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'noresize',
        describe: '不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'tag',
        describe: '视图的元素标签',
        type: 'string',
        default: 'div'
    },
    {
        key: 'always',
        describe: '滚动条总是显示',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'min-size',
        describe: '滚动条最小尺寸',
        type: 'number',
        default: '20'
    },
    {
        key: 'id',
        describe: '视图ID（2.4.0+）',
        type: 'string',
        default: '—'
    },
    {
        key: 'role',
        describe: '视图的角色（2.4.0+ a11y）',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '视图的 aria-label（2.4.0+ a11y）',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-orientation',
        describe: '视图的 aria-orientation（2.4.0+ a11y）',
        type: 'enum',
        default: '—'
    },
    {
        key: 'tabindex',
        describe: '容器的 tabindex（2.8.3+）',
        type: 'number / string',
        default: '—'
    }
];
const event = [
    {
        key: '@scroll',
        describe: '当触发滚动事件时，返回滚动的距离',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/scrollbar.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/scrollbar.html#events';
});
exports.default = {
    key: 'el-scrollbar',
    attr,
    event
};
//# sourceMappingURL=el-scrollbar.js.map