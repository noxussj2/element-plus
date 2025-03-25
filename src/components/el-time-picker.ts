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
        describe: '完全只读',
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
        key: 'size',
        describe: '输入框尺寸',
        type: 'enum',
        default: '—'
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
        key: 'is-range',
        describe: '是否为时间范围选择',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'arrow-control',
        describe: '是否使用箭头进行时间选择',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'popper-class',
        describe: 'TimePicker 下拉框的类名',
        type: 'string',
        default: "''"
    },
    {
        key: 'range-separator',
        describe: '选择范围时的分隔符',
        type: 'string',
        default: "'-'"
    },
    {
        key: 'format',
        describe: '显示在输入框中的格式',
        type: 'string',
        default: 'see date formats'
    },
    {
        key: 'default-value',
        describe: '可选，选择器打开时默认显示的时间',
        type: 'Date / object',
        default: '—'
    },
    {
        key: 'value-format',
        describe: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
        type: 'string',
        default: '参考 日期格式'
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
        type: 'string',
        default: "''"
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性 (v2.7.2及以上)',
        type: 'string',
        default: '—'
    },
    {
        key: 'prefix-icon',
        describe: '自定义前缀图标',
        type: 'string / Component',
        default: 'Clock'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose'
    },
    {
        key: 'disabled-hours',
        describe: '禁止选择部分小时选项',
        type: 'Function',
        default: '—'
    },
    {
        key: 'disabled-minutes',
        describe: '禁止选择部分分钟选项',
        type: 'Function',
        default: '—'
    },
    {
        key: 'disabled-seconds',
        describe: '禁止选择部分秒选项',
        type: 'Function',
        default: '—'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表镜像至 body 元素',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'tabindex',
        describe: '输入框的 tabindex',
        type: 'string / number',
        default: '0'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置 参考 config-provider (v2.7.0及以上)',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值 参考 config-provider (v2.7.0及以上)',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        key: 'label',
        describe: '等价于原生 input aria-label 属性 (已废弃)',
        type: 'string',
        default: '—'
    }
];

const event = [
    {
        key: '@change',
        describe: '用户确认选定的值时触发',
        type: 'Function'
    },
    {
        key: '@blur',
        describe: '在组件 Input 失去焦点时触发',
        type: 'Function'
    },
    {
        key: '@focus',
        describe: '在组件 Input 获得焦点时触发',
        type: 'Function'
    },
    {
        key: '@clear',
        describe: '可清空的模式下用户点击清空按钮时触发 (v2.7.7及以上)',
        type: 'Function'
    },
    {
        key: '@visible-change',
        describe: '当 TimePicker 的下拉列表出现/消失时触发',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/time-picker.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/time-picker.html#%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-time-picker',
    attr,
    event
};
