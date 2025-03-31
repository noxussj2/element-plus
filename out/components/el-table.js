"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'data',
        describe: '表数据',
        type: 'array',
        default: '[]'
    },
    {
        key: 'height',
        describe: 'table 的高度。默认为自动高度。number 类型单位 px，string 类型设置为 Table 的 style.height',
        type: 'string | number',
        default: '—'
    },
    {
        key: 'max-height',
        describe: 'table 的最大高度，单位 px 或数值',
        type: 'string | number',
        default: '—'
    },
    {
        key: 'stripe',
        describe: '是否为斑马纹 table',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'border',
        describe: '是否带有纵向边框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: 'Table 的尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'fit',
        describe: '列的宽度是否自撑开',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'show-header',
        describe: '是否显示表头',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'highlight-current-row',
        describe: '是否要高亮当前行',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'current-row-key',
        describe: '当前行的 key，仅支持只写属性',
        type: 'string | number',
        default: '—'
    },
    {
        key: 'row-class-name',
        describe: '行的 className 回调方法或固定 className',
        type: 'Function | string',
        default: '—'
    },
    {
        key: 'row-style',
        describe: '行的 style 回调方法或固定样式',
        type: 'Function | object',
        default: '—'
    },
    {
        key: 'cell-class-name',
        describe: '单元格的 className 回调方法或固定 className',
        type: 'Function | string',
        default: '—'
    },
    {
        key: 'cell-style',
        describe: '单元格的 style 回调方法或固定样式',
        type: 'Function | object',
        default: '—'
    },
    {
        key: 'empty-text',
        describe: '空数据时显示的文本内容，可通过 #empty 设置',
        type: 'string',
        default: 'No Data'
    },
    {
        key: 'default-expand-all',
        describe: '是否默认展开所有行，仅对包含展开行或树形表格有效',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'default-sort',
        describe: '默认的排序列的 prop 和顺序，若未设置 order，则默认为 ascending',
        type: 'object',
        default: '—'
    },
    {
        key: 'tooltip-effect',
        describe: '溢出的 tooltip 的 effect',
        type: 'enum',
        default: 'dark'
    },
    {
        key: 'tooltip-options',
        describe: '溢出 tooltip 的选项 (2.2.28 版本新增)',
        type: 'object',
        default: 'object'
    },
    {
        key: 'show-summary',
        describe: '是否在表尾显示合计行',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'sum-text',
        describe: '摘要行第一列的文本',
        type: 'string',
        default: 'Sum'
    },
    {
        key: 'select-on-indeterminate',
        describe: '多选表格中部分行被选中时，点击表头多选框的行为',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'indent',
        describe: '展示树形数据时，树节点的缩进',
        type: 'number',
        default: '16'
    },
    {
        key: 'lazy',
        describe: '是否懒加载子节点数据',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'table-layout',
        describe: '表格单元、行和列的布局方式',
        type: 'enum',
        default: 'fixed'
    },
    {
        key: 'show-overflow-tooltip',
        describe: '隐藏额外内容并在单元格悬停时使用 Tooltip (2.3.7 版本支持 object 类型)',
        type: 'boolean | object',
        default: '—'
    },
    {
        key: 'allow-drag-last-column',
        describe: '是否允许拖动最后一列 (2.9.2 版本新增)',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'tooltip-formatter',
        describe: '自定义 show-overflow-tooltip 的 tooltip 内容 (2.9.4 版本新增)',
        type: 'function',
        default: '—'
    },
    {
        key: 'preserve-expanded-content',
        describe: '折叠后是否在 DOM 中保留展开行内容 (2.9.7 版本新增)',
        type: 'boolean',
        default: 'false'
    }
];
const event = [
    {
        key: '@select',
        describe: '当用户手动勾选数据行的 Checkbox 时触发的事件',
        type: 'function'
    },
    {
        key: '@select-all',
        describe: '当用户手动勾选全选 Checkbox 时触发的事件',
        type: 'function'
    },
    {
        key: '@selection-change',
        describe: '当选择项发生变化时会触发该事件',
        type: 'function'
    },
    {
        key: '@cell-mouse-enter',
        describe: '当单元格 hover 进入时会触发该事件',
        type: 'function'
    },
    {
        key: '@cell-mouse-leave',
        describe: '当单元格 hover 退出时会触发该事件',
        type: 'function'
    },
    {
        key: '@cell-click',
        describe: '当某个单元格被点击时会触发该事件',
        type: 'function'
    },
    {
        key: '@cell-dblclick',
        describe: '当某个单元格被双击时会触发该事件',
        type: 'function'
    },
    {
        key: '@cell-contextmenu',
        describe: '当某个单元格被鼠标右键点击时会触发该事件',
        type: 'function'
    },
    {
        key: '@row-click',
        describe: '当某一行被点击时会触发该事件',
        type: 'function'
    },
    {
        key: '@row-contextmenu',
        describe: '当某一行被鼠标右键点击时会触发该事件',
        type: 'function'
    },
    {
        key: '@row-dblclick',
        describe: '当某一行被双击时会触发该事件',
        type: 'function'
    },
    {
        key: '@header-click',
        describe: '当某一列的表头被点击时会触发该事件',
        type: 'function'
    },
    {
        key: '@header-contextmenu',
        describe: '当某一列的表头被鼠标右键点击时触发该事件',
        type: 'function'
    },
    {
        key: '@sort-change',
        describe: '当表格的排序条件发生变化的时候会触发该事件',
        type: 'function'
    },
    {
        key: '@filter-change',
        describe: 'column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
        type: 'function'
    },
    {
        key: '@current-change',
        describe: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
        type: 'function'
    },
    {
        key: '@header-dragend',
        describe: '当拖动表头改变了列的宽度的时候会触发该事件',
        type: 'function'
    },
    {
        key: '@expand-change',
        describe: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）',
        type: 'function'
    },
    {
        key: '@scroll',
        describe: '当表格被用户滚动后触发（2.9.0+）',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-table',
    attr,
    event
};
//# sourceMappingURL=el-table.js.map