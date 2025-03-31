"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'type',
        describe: '对应列的类型。可选值：selection（显示多选框）、index（显示行索引，从 1 开始计算）、expand（显示可展开按钮）',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'index',
        describe: '如果 type=index，可以通过该属性自定义索引',
        type: 'number / Function',
        default: '—'
    },
    {
        key: 'label',
        describe: '显示的标题',
        type: 'string',
        default: '—'
    },
    {
        key: 'column-key',
        describe: 'column 的 key。如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
        type: 'string',
        default: '—'
    },
    {
        key: 'prop',
        describe: '字段名称。对应列内容的字段名，也可以使用 property 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'width',
        describe: '对应列的宽度',
        type: 'string / number',
        default: "''"
    },
    {
        key: 'min-width',
        describe: '对应列的最小宽度，与 width 的区别是 width 固定，min-width 会按比例分配剩余宽度',
        type: 'string / number',
        default: "''"
    },
    {
        key: 'fixed',
        describe: '列是否固定在左侧或者右侧。true 表示固定在左侧',
        type: 'enum / boolean',
        default: 'false'
    },
    {
        key: 'render-header',
        describe: '列标题 Label 区域渲染使用的 Function',
        type: 'function',
        default: '—'
    },
    {
        key: 'sortable',
        describe: "列是否可以排序。可选值：true、false、'custom'（自定义排序，需要监听 Table 的 sort-change 事件）",
        type: 'boolean / string',
        default: 'false'
    },
    {
        key: 'sort-method',
        describe: '指定数据排序的方法，仅当 sortable=true 时有效，应如同 Array.sort 返回一个 Number',
        type: 'function',
        default: '—'
    },
    {
        key: 'sort-by',
        describe: '指定数据排序的属性，仅当 sortable=true 且未设置 sort-method 时有效。可传数组，按优先级排序',
        type: 'Function / string / object',
        default: '—'
    },
    {
        key: 'sort-orders',
        describe: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。随着用户点击表头，该列依次按照数组中元素的顺序进行排序',
        type: 'object',
        default: "['ascending', 'descending', null]"
    },
    {
        key: 'resizable',
        describe: '对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'formatter',
        describe: '用来格式化内容',
        type: 'function',
        default: '—'
    },
    {
        key: 'show-overflow-tooltip',
        describe: '当内容过长被隐藏时显示 tooltip（从 2.2.28 版本开始支持 object 类型）',
        type: 'boolean / object',
        default: 'undefined'
    },
    {
        key: 'align',
        describe: '对齐方式',
        type: 'enum',
        default: 'left'
    },
    {
        key: 'header-align',
        describe: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
        type: 'enum',
        default: 'left'
    },
    {
        key: 'class-name',
        describe: '列的 className',
        type: 'string',
        default: '—'
    },
    {
        key: 'label-class-name',
        describe: '当前列标题的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'selectable',
        describe: '仅对 type=selection 的列有效，类型为 Function，返回值用来决定这一行的 CheckBox 是否可以勾选',
        type: 'function',
        default: '—'
    },
    {
        key: 'reserve-selection',
        describe: '数据刷新后是否保留选项，仅对 type=selection 的列有效。请注意，需指定 row-key 来让这个功能生效',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'filters',
        describe: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性',
        type: 'array',
        default: '—'
    },
    {
        key: 'filter-placement',
        describe: '过滤弹出框的定位',
        type: 'enum',
        default: '—'
    },
    {
        key: 'filter-class-name',
        describe: '过滤弹出框的 className（从 2.5.0 版本开始支持）',
        type: 'string',
        default: '—'
    },
    {
        key: 'filter-multiple',
        describe: '数据过滤的选项是否多选',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'filter-method',
        describe: '数据过滤使用的方法。如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示',
        type: 'function',
        default: '—'
    },
    {
        key: 'filtered-value',
        describe: '选中的数据过滤项。如果需要自定义表头过滤的渲染方式，可能会需要此属性',
        type: 'object',
        default: '—'
    },
    {
        key: 'tooltip-formatter',
        describe: '使用 show-overflow-tooltip 时自定义 tooltip 内容（从 2.9.4 版本开始支持）',
        type: 'function',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7';
});
exports.default = {
    key: 'el-table-column',
    attr,
    event
};
//# sourceMappingURL=el-table-column.js.map