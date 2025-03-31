"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'array',
        default: ''
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'array',
        default: ''
    },
    {
        key: 'max',
        describe: '可添加标签的最大数量',
        type: 'number',
        default: ''
    },
    {
        key: 'tag-type',
        describe: '标签类型',
        type: 'enum',
        default: 'info'
    },
    {
        key: 'tag-effect',
        describe: '标签效果',
        type: 'enum',
        default: 'light'
    },
    {
        key: 'trigger',
        describe: '触发输入标签的按键',
        type: 'enum',
        default: 'Enter'
    },
    {
        key: 'draggable',
        describe: '是否可以拖动标签',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: 'enum',
        default: ''
    },
    {
        key: 'save-on-blur',
        describe: '当输入失去焦点时是否保存输入值 (2.9.7及以上版本)',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
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
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'readonly',
        describe: '等价于原生 readonly 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'autofocus',
        describe: '等价于原生 autofocus 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string',
        default: ''
    },
    {
        key: 'tabindex',
        describe: '等价于原生 tabindex 属性',
        type: 'string / number',
        default: ''
    },
    {
        key: 'maxlength',
        describe: '等价于原生 maxlength 属性',
        type: 'string / number',
        default: ''
    },
    {
        key: 'minlength',
        describe: '等价于原生 minlength 属性',
        type: 'string / number',
        default: ''
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        default: ''
    },
    {
        key: 'autocomplete',
        describe: '等价于原生 autocomplete 属性',
        type: 'string',
        default: 'off'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 aria-label 属性',
        type: 'string',
        default: ''
    }
];
const event = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: 'Function'
    },
    {
        key: '@input',
        describe: '在 Input 值改变时触发',
        type: 'Function'
    },
    {
        key: '@add-tag',
        describe: 'tag 被添加时触发',
        type: 'Function'
    },
    {
        key: '@remove-tag',
        describe: 'tag 被移除时触发',
        type: 'Function'
    },
    {
        key: '@focus',
        describe: '在 Input 获得焦点时触发',
        type: 'Function'
    },
    {
        key: '@blur',
        describe: '在 Input 失去焦点时触发',
        type: 'Function'
    },
    {
        key: '@clear',
        describe: '点击清除图标时触发',
        type: 'Function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-tag.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-tag.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-input-tag',
    attr,
    event
};
//# sourceMappingURL=el-input-tag.js.map