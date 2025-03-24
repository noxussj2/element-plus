"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value / v-model',
        describe: '绑定值',
        type: 'object',
        default: '[]'
    },
    {
        key: 'size',
        describe: '多选框组尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'min',
        describe: '可被勾选的 checkbox 的最小数量',
        type: 'number',
        default: '—'
    },
    {
        key: 'max',
        describe: '可被勾选的 checkbox 的最大数量',
        type: 'number',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性，2.7.2版本开始支持',
        type: 'string',
        default: '—'
    },
    {
        key: 'text-color',
        describe: '当按钮为活跃状态时的字体颜色',
        type: 'string',
        default: '#ffffff'
    },
    {
        key: 'fill',
        describe: '当按钮为活跃状态时的边框和背景颜色',
        type: 'string',
        default: '#409eff'
    },
    {
        key: 'tag',
        describe: '复选框组元素标签',
        type: 'string',
        default: 'div'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'label',
        describe: '原生 aria-label 属性，已弃用',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '当绑定值变化时触发的事件',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/checkbox.html#checkboxgroup-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/checkbox.html#checkboxgroup-events';
});
exports.default = {
    key: 'el-checkbox-group',
    attr,
    event
};
//# sourceMappingURL=el-checkbox-group.js.map