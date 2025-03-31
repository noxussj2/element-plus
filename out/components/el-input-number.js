"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值，支持 v-model',
        type: 'number',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '双向绑定选中项的值，等价于 model-value',
        type: 'number',
        default: '—'
    },
    {
        key: 'min',
        describe: '设置计数器允许的最小值',
        type: 'number',
        default: '-Infinity'
    },
    {
        key: 'max',
        describe: '设置计数器允许的最大值',
        type: 'number',
        default: 'Infinity'
    },
    {
        key: 'step',
        describe: '计数器步长',
        type: 'number',
        default: '1'
    },
    {
        key: 'step-strictly',
        describe: '是否只能输入 step 的倍数',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'precision',
        describe: '数值精度',
        type: 'number',
        default: '—'
    },
    {
        key: 'size',
        describe: '计数器尺寸，可选值：default',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'readonly',
        describe: '是否只读，原生 readonly 属性，2.2.16 版本支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用状态',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'controls',
        describe: '是否使用控制按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'controls-position',
        describe: '控制按钮位置',
        type: 'enum',
        default: '—'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性，a11y 2.7.2 版本支持',
        type: 'string',
        default: '—'
    },
    {
        key: 'placeholder',
        describe: '等价于原生 input placeholder 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '当输入框被清空时显示的值，支持 number / null / enum，2.2.0 版本支持',
        type: 'number | null | enum',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'label',
        describe: '等价于原生 input aria-label 属性，已废弃',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '绑定值被改变时触发',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '在组件 Input 失去焦点时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '在组件 Input 获得焦点时触发',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-number.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-number.html#events';
});
exports.default = {
    key: 'el-input-number',
    attr,
    event
};
//# sourceMappingURL=el-input-number.js.map