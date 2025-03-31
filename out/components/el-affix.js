"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'offset',
        describe: '偏移距离。',
        type: 'number',
        default: 0
    },
    {
        key: 'position',
        describe: '固钉位置。',
        type: 'enum',
        default: 'top'
    },
    {
        key: 'target',
        describe: '指定容器（CSS 选择器）。',
        type: 'string',
        default: '—'
    },
    {
        key: 'z-index',
        describe: 'z-index。',
        type: 'number',
        default: 100
    }
];
const event = [
    {
        key: '@change',
        describe: '固钉状态改变时触发的事件。',
        type: 'function'
    },
    {
        key: '@scroll',
        describe: '滚动时触发的事件。',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/affix.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/affix.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-affix',
    attr,
    event
};
//# sourceMappingURL=el-affix.js.map