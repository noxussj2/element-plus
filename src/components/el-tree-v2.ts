const attr = [
    {
        key: 'data',
        describe: '展示数据。',
        type: 'array',
        default: '—'
    },
    {
        key: 'empty-text',
        describe: '内容为空的时候展示的文本。',
        type: 'string',
        default: '—'
    },
    {
        key: 'props',
        describe: '配置选项，具体看下表。',
        type: 'object',
        default: '—'
    },
    {
        key: 'highlight-current',
        describe: '是否高亮当前选中节点。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'expand-on-click-node',
        describe: '是否在点击节点的时候展开或者收缩节点，默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'check-on-click-node',
        describe: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'check-on-click-leaf',
        describe: '点击叶节点(最后一个子节点)时是否检查或取消节点。版本 2.9.6 引入。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'default-expanded-keys',
        describe: '默认展开的节点的 key 的数组。',
        type: 'array',
        default: '—'
    },
    {
        key: 'show-checkbox',
        describe: '节点是否可被选择。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'check-strictly',
        describe: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'default-checked-keys',
        describe: '默认勾选的节点的 key 的数组。',
        type: 'array',
        default: '—'
    },
    {
        key: 'current-node-key',
        describe: '当前选中的节点。',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'filter-method',
        describe: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏。',
        type: 'Function(value, data, node)',
        default: '—'
    },
    {
        key: 'indent',
        describe: '相邻级节点间的水平缩进，单位为像素。',
        type: 'number',
        default: '16'
    },
    {
        key: 'icon',
        describe: '自定义树节点的图标。',
        type: 'string | Component',
        default: '—'
    },
    {
        key: 'item-size',
        describe: '自定义树节点的高度。版本 2.2.33 引入。',
        type: 'number',
        default: '26'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tree-v2.html#treev2-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tree-v2.html#treev2-attributes';
});

export default {
    key: 'el-tree-v2',
    attr,
    event
};
