const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'object',
        default: '[]'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'object',
        default: '[]'
    },
    {
        key: 'data',
        describe: 'Transfer 的数据源',
        type: 'object',
        default: '[]'
    },
    {
        key: 'filterable',
        describe: '是否可搜索',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'filter-placeholder',
        describe: '搜索框占位符',
        type: 'string',
        default: '—'
    },
    {
        key: 'filter-method',
        describe: '自定义搜索方法',
        type: 'Function',
        default: '—'
    },
    {
        key: 'target-order',
        describe: '右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前',
        type: 'enum',
        default: 'original'
    },
    {
        key: 'titles',
        describe: '自定义列表标题',
        type: 'object',
        default: '[]'
    },
    {
        key: 'button-texts',
        describe: '自定义按钮文案',
        type: 'object',
        default: '[]'
    },
    {
        key: 'render-content',
        describe: '自定义数据项渲染函数',
        type: 'object',
        default: '—'
    },
    {
        key: 'format',
        describe: '列表顶部勾选状态文案',
        type: 'object',
        default: '{}'
    },
    {
        key: 'props',
        describe: '数据源的字段别名',
        type: 'object',
        default: '—'
    },
    {
        key: 'left-default-checked',
        describe: '初始状态下左侧列表的已勾选项的 key 数组',
        type: 'object',
        default: '[]'
    },
    {
        key: 'right-default-checked',
        describe: '初始状态下右侧列表的已勾选项的 key 数组',
        type: 'object',
        default: '[]'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    }
];

const event = [
    {
        key: '@change',
        describe: '右侧列表元素变化时触发',
        type: 'Function'
    },
    {
        key: '@left-check-change',
        describe: '左侧列表元素被用户选中 / 取消选中时触发',
        type: 'Function'
    },
    {
        key: '@right-check-change',
        describe: '右侧列表元素被用户选中 / 取消选中时触发',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/transfer.html#transfer-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/transfer.html#transfer-events';
});

export default {
    key: 'el-transfer',
    attr,
    event
};
