"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'autocomplete',
        describe: '原生 autocomplete 属性',
        type: 'string',
        default: 'off'
    },
    {
        key: 'autofocus',
        describe: '原生 autofocus 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clearable',
        describe: '是否可清空',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用输入框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'input-style',
        describe: '输入框的样式',
        type: 'object',
        default: '-'
    },
    {
        key: 'maxlength',
        describe: '最大输入长度',
        type: 'number',
        default: '-'
    },
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'string/number',
        default: '-'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '-'
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        default: '-'
    },
    {
        key: 'prefix-icon',
        describe: '输入框前缀图标',
        type: 'string',
        default: '-'
    },
    {
        key: 'readonly',
        describe: '是否只读',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-password',
        describe: '是否显示切换密码图标',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-word-limit',
        describe: '是否显示输入字数统计',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'suffix-icon',
        describe: '输入框后缀图标',
        type: 'string',
        default: '-'
    },
    {
        key: 'type',
        describe: '类型',
        type: 'string',
        default: 'text'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string/number',
        default: '-'
    }
];
const event = [
    {
        key: '@blur',
        describe: '当输入框失去焦点时触发',
        type: 'function'
    },
    {
        key: '@change',
        describe: '当输入框失去焦点或用户按下回车且输入值变化时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '当点击清除按钮时触发',
        type: 'function'
    },
    {
        key: '@compositionend',
        describe: '输入法输入结束时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@compositionstart',
        describe: '输入法输入开始时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@compositionupdate',
        describe: '输入法输入期间触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当输入框获得焦点时触发',
        type: 'function'
    },
    {
        key: '@input',
        describe: '在输入框中输入时触发',
        type: 'function'
    },
    {
        key: '@keydown',
        describe: '键盘按键被按下时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@keyup',
        describe: '键盘按键被释放时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@mouseenter',
        describe: '鼠标移入输入框时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@mouseleave',
        describe: '鼠标移出输入框时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@paste',
        describe: '粘贴内容到输入框时触发（原生 DOM 事件）',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/input.html#events';
});
exports.default = {
    key: 'el-input',
    attr,
    event
};
//# sourceMappingURL=el-input.js.map