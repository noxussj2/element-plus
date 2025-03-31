"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值。',
        type: 'string / number / boolean / object / array',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值。',
        type: 'string / number / boolean / object / array',
        default: '—'
    },
    {
        key: 'multiple',
        describe: '是否多选。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'value-key',
        describe: '作为 value 唯一标识的键名，绑定值为对象类型时必填。',
        type: 'string',
        default: 'value'
    },
    {
        key: 'size',
        describe: '输入框尺寸。',
        type: 'enum',
        default: '—'
    },
    {
        key: 'clearable',
        describe: '是否可以清空选项。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'collapse-tags',
        describe: '多选时是否将选中值按文字的形式展示。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true。 版本 2.3.0 引入。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'multiple-limit',
        describe: 'multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数，为 0 则不限制。',
        type: 'number',
        default: '0'
    },
    {
        key: 'name',
        describe: 'Select 输入框的原生 name 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种。',
        type: 'enum / string',
        default: 'light'
    },
    {
        key: 'autocomplete',
        describe: 'Select 输入框的原生 autocomplete 属性。',
        type: 'string',
        default: 'off'
    },
    {
        key: 'placeholder',
        describe: '占位符，默认为“Select”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'filterable',
        describe: 'Select 组件是否可筛选。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'allow-create',
        describe: '是否允许用户创建新条目，只有当 filterable 设置为 true 时才会生效。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'filter-method',
        describe: '自定义筛选方法。',
        type: 'function',
        default: '—'
    },
    {
        key: 'remote',
        describe: '其中的选项是否从服务器远程加载。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'remote-method',
        describe: '自定义远程搜索方法。',
        type: 'function',
        default: '—'
    },
    {
        key: 'remote-show-suffix',
        describe: '远程搜索方法显示后缀图标。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading',
        describe: '是否正在从远程获取数据。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading-text',
        describe: '从服务器加载数据时显示的文本，默认为“Loading”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'no-match-text',
        describe: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'no-data-text',
        describe: '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 “No data”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: '选择器下拉菜单的自定义类名。',
        type: 'string',
        default: "''"
    },
    {
        key: 'reserve-keyword',
        describe: '当 multiple 和 filterable 被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'default-first-option',
        describe: '是否在输入框按下回车时，选择第一个匹配项。需配合 filterable 或 remote 使用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'teleported',
        describe: '是否使用 teleport。设置成 true 则会被追加到 append-to 的位置。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'append-to',
        describe: '下拉框挂载到哪个 DOM 元素。版本 2.8.4 引入。',
        type: 'string',
        default: '—'
    },
    {
        key: 'persistent',
        describe: '当下拉选择器未被激活并且 persistent 设置为 false，选择器会被删除。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'automatic-dropdown',
        describe: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标。',
        type: 'string / object',
        default: 'CircleClose'
    },
    {
        key: 'fit-input-width',
        describe: '下拉框的宽度是否与输入框相同。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'suffix-icon',
        describe: '自定义后缀图标组件。',
        type: 'string / object',
        default: 'ArrowDown'
    },
    {
        key: 'tag-type',
        describe: '标签类型。',
        type: 'enum',
        default: 'info'
    },
    {
        key: 'tag-effect',
        describe: '标签效果。版本 2.7.7 引入。',
        type: 'enum',
        default: 'light'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'offset',
        describe: '下拉面板偏移量。版本 2.8.8 引入。',
        type: 'number',
        default: '12'
    },
    {
        key: 'show-arrow',
        describe: '下拉菜单的内容是否有箭头。版本 2.8.8 引入。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置。版本 2.2.17 引入。',
        type: 'enum',
        default: 'bottom-start'
    },
    {
        key: 'fallback-placements',
        describe: 'dropdown 可用的 positions 请查看 popper.js 文档。版本 2.5.6 引入。',
        type: 'array',
        default: "['bottom-start', 'top-start', 'right', 'left']"
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量，只有当 collapse-tags 设置为 true 时才会生效。版本 2.3.0 引入。',
        type: 'number',
        default: '1'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数。',
        type: 'object',
        default: '{}'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置，参考 config-provider。版本 2.7.0 引入。',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值，参考 config-provider。版本 2.7.0 引入。',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        key: 'suffix-transition',
        describe: '下拉菜单显示/消失时后缀图标的动画，已废弃。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'tabindex',
        describe: 'input 的 tabindex。版本 2.9.0 引入。',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'cacheData',
        describe: '懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签。版本：2.2.26',
        type: 'object',
        default: '[]'
    },
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
        describe: '加载子树数据的方法，仅当 lazy 属性为 true 时生效',
        type: 'function',
        default: '—'
    },
    {
        key: 'render-content',
        describe: '树节点的内容区的渲染 Function',
        type: 'function',
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
        describe: '点击叶节点(最后一个子节点)时是否检查或取消节点。版本：2.9.6',
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
        type: 'function',
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
        type: 'function',
        default: '—'
    },
    {
        key: 'allow-drop',
        describe: "拖拽时判定目标节点能否成为拖动目标位置。 如果返回 false ，拖动节点不能被拖放到目标节点。 type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
        type: 'function',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '选中值发生变化时触发',
        type: 'function'
    },
    {
        key: '@visible-change',
        describe: '下拉框出现/隐藏时触发',
        type: 'function'
    },
    {
        key: '@remove-tag',
        describe: '多选模式下移除tag时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '当 input 失去焦点时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当 input 获得焦点时触发',
        type: 'function'
    },
    {
        key: '@popup-scroll',
        describe: '下拉滚动时触发（版本 2.9.4）',
        type: 'function'
    },
    {
        key: '@node-click',
        describe: '当节点被点击的时候触发。回调参数：四个参数：对应于节点点击的节点对象，TreeNode 的 node 属性, TreeNode 和事件对象。',
        type: 'function'
    },
    {
        key: '@node-contextmenu',
        describe: '当某一节点被鼠标右键点击时会触发该事件。回调参数：共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
        type: 'function'
    },
    {
        key: '@check-change',
        describe: '当复选框被点击的时候触发。回调参数：共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点。',
        type: 'function'
    },
    {
        key: '@check',
        describe: '点击节点复选框之后触发。回调参数：共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性。',
        type: 'function'
    },
    {
        key: '@current-change',
        describe: '当前选中节点变化时触发的事件。回调参数：共两个参数，依次为：当前节点的数据，当前节点的 Node 对象。',
        type: 'function'
    },
    {
        key: '@node-expand',
        describe: '节点被展开时触发的事件。回调参数：共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
        type: 'function'
    },
    {
        key: '@node-collapse',
        describe: '节点被关闭时触发的事件。回调参数：共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
        type: 'function'
    },
    {
        key: '@node-drag-start',
        describe: '节点开始拖拽时触发的事件。回调参数：共两个参数，依次为：被拖拽节点对应的 Node、event。',
        type: 'function'
    },
    {
        key: '@node-drag-enter',
        describe: '拖拽进入其他节点时触发的事件。回调参数：共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event。',
        type: 'function'
    },
    {
        key: '@node-drag-leave',
        describe: '拖拽离开某个节点时触发的事件。回调参数：共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event。',
        type: 'function'
    },
    {
        key: '@node-drag-over',
        describe: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）。回调参数：共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event。',
        type: 'function'
    },
    {
        key: '@node-drag-end',
        describe: '拖拽结束时（可能未成功）触发的事件。回调参数：共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event。',
        type: 'function'
    },
    {
        key: '@node-drop',
        describe: '拖拽成功完成时触发的事件。回调参数：共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event。',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tree-select.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tree-select.html#api';
});
exports.default = {
    key: 'el-tree-select',
    attr,
    event
};
//# sourceMappingURL=el-tree-select.js.map