const attr = [
    {
        key: 'data',
        describe: '展示数据',
        type: 'object',
        default: '—'
    },
    {
        key: 'empty-text',
        describe: '内容为空的时候展示的文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'node-key',
        describe: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
        type: 'string',
        default: '—'
    },
    {
        key: 'props',
        describe: '配置选项，具体看下表',
        type: 'Props',
        default: '—'
    },
    {
        key: 'render-after-expand',
        describe: '是否在第一次展开某个树节点后才渲染其子节点',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'load',
        describe: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
        type: 'Function',
        default: '—'
    },
    {
        key: 'render-content',
        describe: '树节点的内容区的渲染 Function',
        type: 'Function',
        default: '—'
    },
    {
        key: 'highlight-current',
        describe: '是否高亮当前选中节点，默认值是 false。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'default-expand-all',
        describe: '是否默认展开所有节点',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'expand-on-click-node',
        describe: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
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
        describe: '点击叶节点(最后一个子节点)时是否检查或取消节点，2.9.6版本新增',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'auto-expand-parent',
        describe: '展开子节点的时候是否自动展开父节点',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'default-expanded-keys',
        describe: '默认展开的节点的 key 的数组',
        type: 'object',
        default: '—'
    },
    {
        key: 'show-checkbox',
        describe: '节点是否可被选择',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'check-strictly',
        describe: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'default-checked-keys',
        describe: '默认勾选的节点的 key 的数组',
        type: 'object',
        default: '—'
    },
    {
        key: 'current-node-key',
        describe: '当前选中的节点',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'filter-node-method',
        describe: '对树节点进行筛选时执行的方法， 返回 false 则表示这个节点会被隐藏',
        type: 'Function',
        default: '—'
    },
    {
        key: 'accordion',
        describe: '是否每次只打开一个同级树节点展开',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'indent',
        describe: '相邻级节点间的水平缩进，单位为像素',
        type: 'number',
        default: '18'
    },
    {
        key: 'icon',
        describe: '自定义树节点图标组件',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'lazy',
        describe: '是否懒加载子节点，需与 load 方法结合使用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'draggable',
        describe: '是否开启拖拽节点功能',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'allow-drag',
        describe: '判断节点能否被拖拽 如果返回 false ，节点不能被拖动',
        type: 'Function',
        default: '—'
    },
    {
        key: 'allow-drop',
        describe:
            "拖拽时判定目标节点能否成为拖动目标位置。 如果返回 false ，拖动节点不能被拖放到目标节点。 type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
        type: 'Function',
        default: '—'
    }
];

const event: any = [
    {
        key: '@node-click',
        describe: '当节点被点击的时候触发。四个参数：对应于节点点击的节点对象，TreeNode 的 node 属性，TreeNode 和事件对象。',
        type: 'Function'
    },
    {
        key: '@node-contextmenu',
        describe: '当某一节点被鼠标右键点击时会触发该事件。四个参数，依次为：event，传递给 data 属性的数组中该节点所对应的对象，节点对应的 Node，节点组件本身。',
        type: 'Function'
    },
    {
        key: '@check-change',
        describe: '当复选框被点击的时候触发。三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象，节点本身是否被选中，节点的子树中是否有被选中的节点。',
        type: 'Function'
    },
    {
        key: '@check',
        describe:
            '点击节点复选框之后触发。两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象，树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性。',
        type: 'Function'
    },
    {
        key: '@current-change',
        describe: '当前选中节点变化时触发的事件。两个参数，依次为：当前节点的数据，当前节点的 Node 对象。',
        type: 'Function'
    },
    {
        key: '@node-expand',
        describe: '节点被展开时触发的事件。三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象，节点对应的 Node，节点组件本身。',
        type: 'Function'
    },
    {
        key: '@node-collapse',
        describe: '节点被关闭时触发的事件。三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象，节点对应的 Node，节点组件本身。',
        type: 'Function'
    },
    {
        key: '@node-drag-start',
        describe: '节点开始拖拽时触发的事件。两个参数，依次为：被拖拽节点对应的 Node，event。',
        type: 'Function'
    },
    {
        key: '@node-drag-enter',
        describe: '拖拽进入其他节点时触发的事件。三个参数，依次为：被拖拽节点对应的 Node，所进入节点对应的 Node，event。',
        type: 'Function'
    },
    {
        key: '@node-drag-leave',
        describe: '拖拽离开某个节点时触发的事件。三个参数，依次为：被拖拽节点对应的 Node，所离开节点对应的 Node，event。',
        type: 'Function'
    },
    {
        key: '@node-drag-over',
        describe: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）。三个参数，依次为：被拖拽节点对应的 Node，当前进入节点对应的 Node，event。',
        type: 'Function'
    },
    {
        key: '@node-drag-end',
        describe:
            '拖拽结束时（可能未成功）触发的事件。四个参数，依次为：被拖拽节点对应的 Node，结束拖拽时最后进入的节点（可能为空），被拖拽节点的放置位置（before、after、inner），event。',
        type: 'Function'
    },
    {
        key: '@node-drop',
        describe: '拖拽成功完成时触发的事件。四个参数，依次为：被拖拽节点对应的 Node，结束拖拽时最后进入的节点，被拖拽节点的放置位置（before、after、inner），event。',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tree.html#%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tree.html#%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-tree',
    attr,
    event
};
