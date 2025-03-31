"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值，如果它是数组，长度应该是 2',
        type: 'number / string / object',
        default: "''"
    },
    {
        key: 'v-model',
        describe: '绑定值，如果它是数组，长度应该是 2',
        type: 'number / string / object',
        default: "''"
    },
    {
        key: 'readonly',
        describe: '只读',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'editable',
        describe: '文本框可输入',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'placeholder',
        describe: '非范围选择时的占位内容',
        type: 'string',
        default: "''"
    },
    {
        key: 'start-placeholder',
        describe: '范围选择时开始日期的占位内容',
        type: 'string',
        default: '—'
    },
    {
        key: 'end-placeholder',
        describe: '范围选择时结束日期的占位内容',
        type: 'string',
        default: '—'
    },
    {
        key: 'type',
        describe: '显示类型',
        type: 'enum',
        default: 'date'
    },
    {
        key: 'format',
        describe: '显示在输入框中的格式，参见 date formats',
        type: 'string',
        default: 'YYYY-MM-DD'
    },
    {
        key: 'popper-class',
        describe: 'DatePicker 下拉框的类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-options',
        describe: '自定义 popper 选项，更多请参考 popper.js',
        type: 'object',
        default: '{}'
    },
    {
        key: 'range-separator',
        describe: '选择范围时的分隔符',
        type: 'string',
        default: "'-'"
    },
    {
        key: 'default-value',
        describe: '可选，选择器打开时默认显示的时间',
        type: 'object',
        default: '—'
    },
    {
        key: 'default-time',
        describe: '范围选择时选中日期所使用的当日内具体时刻',
        type: 'object',
        default: '—'
    },
    {
        key: 'value-format',
        describe: '可选，绑定值的格式。不指定则绑定值为 Date 对象，参见 date formats',
        type: 'string',
        default: '—'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string / object',
        default: "''"
    },
    {
        key: 'unlink-panels',
        describe: '在范围选择器里取消两个日期面板之间的联动',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'prefix-icon',
        describe: '自定义前缀图标，如果 type 的值是 TimeLikeType，那么就是 Clock，不然就是 Calendar',
        type: 'string / object',
        default: "''"
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / object',
        default: 'CircleClose'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'disabled-date',
        describe: '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。应该返回一个 Boolean 值。',
        type: 'function',
        default: '—'
    },
    {
        key: 'shortcuts',
        describe: '设置快捷选项，需要传入数组对象',
        type: 'object',
        default: '[]'
    },
    {
        key: 'cell-class-name',
        describe: '设置自定义类名',
        type: 'function',
        default: '—'
    },
    {
        key: 'teleported',
        describe: '是否将 date-picker 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置，参考 config-provider，2.7.0',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值，参考 config-provider，2.7.0',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions，2.8.4，请查看 popper.js 文档',
        type: 'array',
        default: '—'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置，2.8.4',
        type: 'Placement',
        default: 'bottom'
    }
];
const event = [
    {
        key: '@change',
        describe: '用户确认选定的值时触发',
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
    },
    {
        key: '@clear',
        describe: '可清空的模式下用户点击清空按钮时触发（2.7.7 新增）',
        type: 'function'
    },
    {
        key: '@calendar-change',
        describe: '在日历所选日期更改时触发',
        type: 'function'
    },
    {
        key: '@panel-change',
        describe: '当日期面板改变时触发',
        type: 'function'
    },
    {
        key: '@visible-change',
        describe: '当 DatePicker 的下拉列表出现/消失时触发',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/date-picker.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/date-picker.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-date-picker',
    attr,
    event
};
//# sourceMappingURL=el-date-picker.js.map