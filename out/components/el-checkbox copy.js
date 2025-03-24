"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value / v-model',
        describe: '选中项绑定值',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'value',
        describe: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
        type: 'string / number / boolean / object',
        default: '—'
    },
    {
        key: 'label',
        describe: '选中状态的值，只有在绑定对象类型为 array 时有效。如果没有 value， label则作为value使用',
        type: 'string / number / boolean / object',
        default: '—'
    },
    {
        key: 'true-value',
        describe: '选中时的值',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'false-value',
        describe: '没有选中时的值，2.6.0版本开始添加',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'FALSE'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'FALSE'
    },
    {
        key: 'size',
        describe: 'Checkbox 的尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'checked',
        describe: '当前是否勾选',
        type: 'boolean',
        default: 'FALSE'
    },
    {
        key: 'indeterminate',
        describe: '设置不确定状态，仅负责样式控制',
        type: 'boolean',
        default: 'FALSE'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'TRUE'
    },
    {
        key: 'tabindex',
        describe: '输入框的 tabindex',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'id',
        describe: 'input id',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-controls',
        describe: '与 aria-control一致, 当 indeterminate为 true时生效，2.7.2版本开始支持',
        type: 'string',
        default: '—'
    },
    {
        key: 'true-label',
        describe: '选中时的值，已弃用',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'false-label',
        describe: '没有选中时的值，已弃用',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'controls',
        describe: '和 aria-control一致。当 indeterminate 为 true 时生效，已弃用',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: 'change',
        describe: '当绑定值变化时触发的事件',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input.html#events';
});
exports.default = {
    key: 'el-checkbox',
    name: '复选框',
    attr,
    event
};
//# sourceMappingURL=el-checkbox%20copy.js.map