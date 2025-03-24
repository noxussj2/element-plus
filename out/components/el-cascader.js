"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string / number / object',
        default: '—'
    },
    {
        key: 'v-model',
        describe: 'v-model，选中项的绑定值，和 model-value 属性相同',
        type: 'string / number / object',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据源，value 和 label 可以通过 CascaderProps 自定义',
        type: 'object',
        default: '—'
    },
    {
        key: 'props',
        describe: '配置选项，请参阅下面 CascaderProps 表。',
        type: 'object',
        default: '—'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'clearable',
        describe: '是否支持清空选项',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'show-all-levels',
        describe: '输入框中是否显示选中值的完整路径，默认值为 true',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'collapse-tags',
        describe: '多选模式下是否折叠Tag',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags 属性必须设定为 true，默认值为 false',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'separator',
        describe: '用于分隔选项的字符，默认值为 " / "',
        type: 'string',
        default: "' / '"
    },
    {
        key: 'filterable',
        describe: '该选项是否可以被搜索',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'filter-method',
        describe: '自定义搜索逻辑，第一个参数是 node，第二个参数是 keyword，返回的布尔值表示是否保留该选项',
        type: 'Function',
        default: '—'
    },
    {
        key: 'debounce',
        describe: '搜索关键词正在输入时的去抖延迟，单位为毫秒，默认值为 300',
        type: 'number',
        default: '300'
    },
    {
        key: 'before-filter',
        describe: '过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。',
        type: 'Function',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: '弹出内容的自定义类名，默认值为空字符串',
        type: 'string',
        default: "''"
    },
    {
        key: 'teleported',
        describe: '弹层是否使用 teleport，默认值为 true',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'tag-type',
        describe: '标签类型，默认值为 info',
        type: 'enum',
        default: 'info'
    },
    {
        key: 'tag-effect',
        describe: 'tag effect，版本 2.7.8 之后为 light',
        type: 'enum',
        default: 'light'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量，只有当 collapse-tags 设置为 true 时才会生效，版本 2.3.10 之后默认为 1',
        type: 'number',
        default: '1'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置，参考 config-provider，版本 2.7.0',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值，参考 config-provider，版本 2.7.0',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        key: 'persistent',
        describe: '当下拉框未被激活并且 persistent 设置为 false，下拉框容器会被删除，版本 2.7.8 之后默认为 true',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions，请查看 popper.js 文档，版本 2.8.1',
        type: 'array',
        default: '—'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置，版本 2.8.1 默认为 bottom-start',
        type: 'enum',
        default: 'bottom-start'
    },
    {
        key: 'popper-append-to-body',
        describe: '是否将弹出的内容直接插入到 body 元素。在弹出内容的边框定位出现问题时，可将该属性设置为 false，已弃用',
        type: 'boolean',
        default: 'true'
    }
];
const event = [
    {
        key: '@change',
        describe: '当绑定值变化时触发的事件',
        type: 'Function'
    },
    {
        key: '@expand-change',
        describe: '当展开节点发生变化时触发',
        type: 'Function'
    },
    {
        key: '@blur',
        describe: '当失去焦点时触发',
        type: 'Function'
    },
    {
        key: '@focus',
        describe: '当获得焦点时触发',
        type: 'Function'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发，版本 2.7.7 后新增',
        type: 'Function'
    },
    {
        key: '@visible-change',
        describe: '下拉框出现/隐藏时触发',
        type: 'Function'
    },
    {
        key: '@remove-tag',
        describe: '在多选模式下，移除Tag时触发',
        type: 'Function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascader-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascader-events';
});
exports.default = {
    key: 'el-cascader',
    attr,
    event
};
//# sourceMappingURL=el-cascader.js.map