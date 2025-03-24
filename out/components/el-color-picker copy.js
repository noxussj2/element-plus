"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'show-alpha',
        describe: '是否支持透明度选择',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'color-format',
        describe: '写入 v-model 的颜色的格式',
        type: 'enum',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: 'ColorPicker 下拉框的类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'predefine',
        describe: '预定义颜色',
        type: 'object',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'tabindex',
        describe: 'ColorPicker 的 tabindex',
        type: 'string / number',
        default: '0'
    },
    {
        key: 'aria-label',
        describe: 'ColorPicker 的 aria-label，a11y 2.7.2',
        type: 'string',
        default: '—'
    },
    {
        key: 'id',
        describe: 'ColorPicker 的 id',
        type: 'string',
        default: '—'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表渲染至 body 下，2.7.2',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'label',
        describe: 'ColorPicker 的 aria-label，a11y 已废弃',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: 'change',
        describe: '当绑定值变化时触发',
        type: 'Function'
    },
    {
        key: 'active-change',
        describe: '面板中当前显示的颜色发生改变时触发',
        type: 'Function'
    },
    {
        key: 'focus',
        describe: '当获得焦点时触发（2.4.0 新增）',
        type: 'Function'
    },
    {
        key: 'blur',
        describe: '当失去焦点时触发（2.4.0 新增）',
        type: 'Function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/color-picker.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/color-picker.html#events';
});
exports.default = {
    key: 'el-color-picker',
    attr,
    event
};
//# sourceMappingURL=el-color-picker%20copy.js.map