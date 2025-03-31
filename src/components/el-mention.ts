const attr = [
    {
        key: 'options',
        describe: '提及选项列表',
        type: 'array',
        default: '[]'
    },
    {
        key: 'prefix',
        describe: '触发字段的前缀，字符串长度必须且只能为 1',
        type: 'string | array',
        default: "'@'"
    },
    {
        key: 'split',
        describe: '用于拆分提及的字符，字符串长度必须且只能为 1',
        type: 'string',
        default: "' '"
    },
    {
        key: 'filter-option',
        describe: '定制筛选器选项逻辑',
        type: 'false | Function',
        default: '—'
    },
    {
        key: 'placement',
        describe: '设置弹出位置',
        type: 'string',
        default: "'bottom'"
    },
    {
        key: 'show-arrow',
        describe: '下拉菜单的内容是否有箭头',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'offset',
        describe: '下拉面板偏移量',
        type: 'number',
        default: '0'
    },
    {
        key: 'whole',
        describe: '当退格键被按下做删除操作时，是否将提及部分作为整体删除',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'check-is-whole',
        describe: '当退格键被按下做删除操作时，检查是否将提及部分作为整体删除',
        type: 'function',
        default: '—'
    },
    {
        key: 'loading',
        describe: '提及的下拉面板是否处于加载状态',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'model-value',
        describe: '输入值',
        type: 'string',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '输入值',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: '自定义浮层类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数，参考 popper.js 文档',
        type: 'object',
        default: '—'
    }
];

const event = [
    {
        key: '@search',
        describe: '按下触发字段时触发',
        type: 'function'
    },
    {
        key: '@select',
        describe: '当用户选择选项时触发',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/mention.html#%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/mention.html#%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-mention',
    attr,
    event
};
