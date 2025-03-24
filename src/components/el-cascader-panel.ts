const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string / number / object',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number / object',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据源，value 和 label 可以通过 CascaderProps 自定义.',
        type: 'object',
        default: '—'
    },
    {
        key: 'props',
        describe: '配置选项, 请参阅下面 CascaderProps 表。',
        type: 'object',
        default: '—'
    }
];

const event = [
    {
        key: '@change',
        describe: '当选中节点变化时触发。类型: Function。',
        type: 'Function'
    },
    {
        key: '@expand-change',
        describe: '当展开节点发生变化时触发。类型: Function。',
        type: 'Function'
    },
    {
        key: '@close',
        describe: '面板的关闭事件，提供给 Cascader 以便做更好的判断。类型: Function。',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascaderpanel-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascaderpanel-events';
});

export default {
    key: 'el-cascader-panel',
    attr,
    event
};
