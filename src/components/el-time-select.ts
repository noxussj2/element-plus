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
        describe: '禁用状态',
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
        key: 'include-end-time',
        describe: '是否在选项中包含end (v2.9.3及以上)',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'placeholder',
        describe: '非范围选择时的占位内容',
        type: 'string',
        default: '—'
    },
    {
        key: 'name',
        describe: '原生属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种主题',
        type: 'string / enum',
        default: 'light'
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
        key: 'start',
        describe: '开始时间',
        type: 'string',
        default: '09:00'
    },
    {
        key: 'end',
        describe: '结束时间',
        type: 'string',
        default: '18:00'
    },
    {
        key: 'step',
        describe: '间隔时间',
        type: 'string',
        default: '00:30'
    },
    {
        key: 'min-time',
        describe: '最早时间点，早于该时间的时间段将被禁用',
        type: 'string',
        default: '—'
    },
    {
        key: 'max-time',
        describe: '最晚时间点，晚于该时间的时间段将被禁用',
        type: 'string',
        default: '—'
    },
    {
        key: 'format',
        describe: '设置时间格式',
        type: 'string',
        default: 'HH:mm'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置 (v2.7.0及以上)',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值 (v2.7.0及以上)，参考 config-provider',
        type: 'string / number / boolean / Function',
        default: '—'
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
        describe: '可清空的单选模式下用户点击清空按钮时触发 (v2.7.7及以上)',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/time-select.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/time-select.html#events';
});

export default {
    key: 'el-time-select',
    attr,
    event
};
