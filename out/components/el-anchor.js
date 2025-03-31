"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'container',
        describe: '滚动的容器，可以是 `string` 选择器、`HTMLElement` 或 `Window`',
        type: 'string | HTMLElement | Window',
        default: ''
    },
    {
        key: 'offset',
        describe: '设置锚点滚动的偏移量',
        type: 'number',
        default: '0'
    },
    {
        key: 'bound',
        describe: '触发锚点的元素的位置偏移量',
        type: 'number',
        default: '15'
    },
    {
        key: 'duration',
        describe: '设置容器滚动的持续时间，单位为毫秒',
        type: 'number',
        default: '300'
    },
    {
        key: 'marker',
        describe: '是否显示标记',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'type',
        describe: '设置锚点类型',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'direction',
        describe: '设置锚点方向',
        type: 'enum',
        default: 'vertical'
    },
    {
        key: 'select-scroll-top',
        describe: '滚动时，链接是否选中位于顶部 (2.9.2 及以上版本)',
        type: 'boolean',
        default: 'false'
    }
];
const event = [
    {
        key: '@change',
        describe: 'step 改变时的回调',
        type: 'Function'
    },
    {
        key: '@click',
        describe: '当用户点击链接时触发',
        type: 'Function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/affix.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/affix.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-anchor',
    attr,
    event
};
//# sourceMappingURL=el-anchor.js.map