"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string / number / boolean / object / array',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number / boolean / object / array',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据源，value 的 key 和 label 可以通过 props 自定义。',
        type: 'array',
        default: '—'
    },
    {
        key: 'props',
        describe: '配置选项，具体看下表。 版本 2.4.2',
        type: 'object',
        default: '—'
    },
    {
        key: 'multiple',
        describe: '是否多选',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'value-key',
        describe: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        type: 'string',
        default: 'value'
    },
    {
        key: 'size',
        describe: '组件大小',
        type: 'enum',
        default: "''"
    },
    {
        key: 'clearable',
        describe: '是否可以清空选项',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / object',
        default: 'CircleClose'
    },
    {
        key: 'collapse-tags',
        describe: '多选时是否将选中值按文字的形式展示',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'multiple-limit',
        describe: '多选时可被选择的最大数目。 当被设置为0时，可被选择的数目不设限。',
        type: 'number',
        default: '0'
    },
    {
        key: 'name',
        describe: '选择器的原生 name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种',
        type: 'enum / string',
        default: 'light'
    },
    {
        key: 'autocomplete',
        describe: '自动完成选择输入',
        type: 'string',
        default: 'off'
    },
    {
        key: 'placeholder',
        describe: '占位文字',
        type: 'string',
        default: 'Please select'
    },
    {
        key: 'filterable',
        describe: '是否可筛选',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'allow-create',
        describe: '是否允许创建新条目，当使用该属性时，filterable 必须设置为 true',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'filter-method',
        describe: '自定义筛选方法',
        type: 'function',
        default: '—'
    },
    {
        key: 'loading',
        describe: '是否从远程加载数据',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading-text',
        describe: '从服务器加载数据时显示的文本，默认为“Loading”',
        type: 'string',
        default: '—'
    },
    {
        key: 'reserve-keyword',
        describe: '筛选时，是否在选择选项后保留关键字',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'no-match-text',
        describe: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data”',
        type: 'string',
        default: '—'
    },
    {
        key: 'no-data-text',
        describe: '当在没有数据时显示的文字，你同时可以使用 empty 插槽进行设置。',
        type: 'string',
        default: 'No Data'
    },
    {
        key: 'popper-class',
        describe: '选择器下拉菜单的自定义类名',
        type: 'string',
        default: "''"
    },
    {
        key: 'teleported',
        describe: '是否使用 teleport。设置成 true 则会被追加到 append-to 的位置',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'append-to',
        describe: '下拉框挂载到哪个 DOM 元素。 版本 2.8.8',
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
        key: 'popper-options',
        describe: 'popper.js 参数',
        type: 'object',
        default: '{}'
    },
    {
        key: 'automatic-dropdown',
        describe: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'fit-input-width',
        describe: '无论下拉框的宽度是否与输入框相同，如果值为 number，则宽度是固定的。 版本 2.9.2',
        type: 'boolean / number',
        default: 'true'
    },
    {
        key: 'height',
        describe: '下拉菜单的高度，每一个选项为 34px',
        type: 'number',
        default: '274'
    },
    {
        key: 'item-height',
        describe: '下拉项的高度',
        type: 'number',
        default: '34'
    },
    {
        key: 'scrollbar-always-on',
        describe: '是否总是展示滚动条',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'remote',
        describe: '是否从服务器获取数据',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'remote-method',
        describe: '当输入值发生变化时触发的函数。它的参数就是当前的输入值。当 filterable 设置为 true 时才会生效',
        type: 'function',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'offset',
        describe: '下拉面板偏移量。版本 2.8.8',
        type: 'number',
        default: '12'
    },
    {
        key: 'show-arrow',
        describe: '下拉菜单的内容是否有箭头。版本 2.8.8',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置',
        type: 'enum',
        default: 'bottom-start'
    },
    {
        key: 'fallback-placements',
        describe: 'dropdown 可用的 positions 请查看 popper.js 文档。版本 2.5.6',
        type: 'array',
        default: "['bottom-start', 'top-start', 'right', 'left']"
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 只有当 collapse-tags 设置为 true 时才会生效。版本 2.3.0',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量。 只有当 collapse-tags 设置为 true 时才会生效。版本 2.3.0',
        type: 'number',
        default: '1'
    },
    {
        key: 'tag-type',
        describe: '标签类型。版本 2.5.0',
        type: 'enum',
        default: 'info'
    },
    {
        key: 'tag-effect',
        describe: '标签效果。版本 2.7.7',
        type: 'enum',
        default: 'light'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性。版本 2.5.0',
        type: 'string',
        default: '—'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置 参考 config-provider。版本 2.7.0',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值 参考 config-provider。版本 2.7.0',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        key: 'popper-append-to-body',
        describe: '是否将弹出框插入至 body 元素，当弹出框的位置出现问题时，可以设置为 false。版本已废弃',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'tabindex',
        describe: 'input 的 tabindex。版本 2.9.0',
        type: 'string / number',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '当所选值更改时触发，参数是当前选中的值',
        type: 'function',
        default: '—'
    },
    {
        key: '@visible-change',
        describe: '当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 true, 否则将是 false',
        type: 'function',
        default: '—'
    },
    {
        key: '@remove-tag',
        describe: '当一个标签在多个模式下被移除时触发，参数将被移除标签值',
        type: 'function',
        default: '—'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发',
        type: 'function',
        default: '—'
    },
    {
        key: '@blur',
        describe: '当选择器的输入框失去焦点时触发',
        type: 'function',
        default: '—'
    },
    {
        key: '@focus',
        describe: '当选择器的输入框获得焦点时触发',
        type: 'function',
        default: '—'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/select-v2.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/select-v2.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-select-v2',
    attr,
    event
};
//# sourceMappingURL=el-select-v2.js.map