"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'type',
        describe: 'Tag 的类型，可选值: primary',
        type: 'enum',
        default: '—'
    },
    {
        key: 'closable',
        describe: '是否可关闭',
        type: 'boolean',
        default: false
    },
    {
        key: 'disable-transitions',
        describe: '是否禁用渐变动画',
        type: 'boolean',
        default: false
    },
    {
        key: 'hit',
        describe: '是否有边框描边',
        type: 'boolean',
        default: false
    },
    {
        key: 'color',
        describe: '背景色',
        type: 'string',
        default: '—'
    },
    {
        key: 'size',
        describe: 'Tag 的尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'effect',
        describe: 'Tag 的主题，可选值: light',
        type: 'enum',
        default: 'light'
    },
    {
        key: 'round',
        describe: 'Tag 是否为圆形',
        type: 'boolean',
        default: false
    }
];
const event = [
    {
        key: '@click',
        describe: '点击 Tag 时触发的事件',
        type: 'function'
    },
    {
        key: '@close',
        describe: '关闭 Tag 时触发的事件',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#tag-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#tag-events';
});
exports.default = {
    key: 'el-tag',
    attr,
    event
};
//# sourceMappingURL=el-tag.js.map