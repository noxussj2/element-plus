"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'icon',
        describe: '设置 Avatar 的图标类型，具体参考 Icon 组件。',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'size',
        describe: 'Avatar 大小。',
        type: 'number / enum',
        default: 'default'
    },
    {
        key: 'shape',
        describe: 'Avatar 形状。',
        type: 'enum',
        default: 'circle'
    },
    {
        key: 'src',
        describe: 'Avatar 图片的源地址。',
        type: 'string',
        default: '—'
    },
    {
        key: 'src-set',
        describe: '图片 Avatar 的原生 srcset 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'alt',
        describe: '图片 Avatar 的原生 alt 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'fit',
        describe: '当展示类型为图片的时候，设置图片如何适应容器。',
        type: 'enum',
        default: 'cover'
    }
];
const event = [
    {
        key: '@error',
        describe: '图片加载失败时触发',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/avatar.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/avatar.html#events';
});
exports.default = {
    key: 'el-avatar',
    attr,
    event
};
//# sourceMappingURL=el-avatar.js.map