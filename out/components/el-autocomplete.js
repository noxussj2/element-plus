"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'placeholder',
        describe: '占位文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'clearable',
        describe: '是否可清空',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '自动补全组件是否被禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'value-key',
        describe: '输入建议对象中用于显示的键名',
        type: 'string',
        default: 'value'
    },
    {
        key: 'debounce',
        describe: '获取输入建议的防抖延时，单位为毫秒',
        type: 'number',
        default: '300'
    },
    {
        key: 'placement',
        describe: '菜单弹出位置',
        type: 'enum',
        default: 'bottom-start'
    },
    {
        key: 'fetch-suggestions',
        describe: '获取输入建议的方法，仅当数据 resolve 时通过 callback(data:[]) 返回',
        type: 'Array / Function',
        default: '—'
    },
    {
        key: 'trigger-on-focus',
        describe: '是否在输入框获取焦点时显示建议',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'select-when-unmatched',
        describe: '在输入没有匹配建议时，按下回车是否触发 select 事件',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性 (2.7.2+)',
        type: 'string',
        default: '—'
    },
    {
        key: 'hide-loading',
        describe: '是否隐藏远程加载时的加载图标',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'popper-class',
        describe: '下拉列表的类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'teleported',
        describe: '是否将下拉列表元素插入 append-to 指向的元素下',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'highlight-first-item',
        describe: '是否默认高亮远程搜索结果的第一项',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'fit-input-width',
        describe: '下拉框的宽度是否与输入框相同',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'popper-append-to-body',
        describe: '是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false（已废弃）',
        type: 'boolean',
        default: 'false'
    }
];
const event = [
    {
        key: '@blur',
        describe: '当选择器的输入框失去焦点时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当选择器的输入框获得焦点时触发',
        type: 'function'
    },
    {
        key: '@input',
        describe: '在 Input 值改变时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '在点击由 clearable 属性生成的清空按钮时触发',
        type: 'function'
    },
    {
        key: '@select',
        describe: '点击选中建议项时触发',
        type: 'function'
    },
    {
        key: '@change',
        describe: '在 Input 值改变时触发',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/autocomplete.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/autocomplete.html#events';
});
exports.default = {
    key: 'el-autocomplete',
    attr,
    event
};
//# sourceMappingURL=el-autocomplete.js.map