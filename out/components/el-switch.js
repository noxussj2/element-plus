"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型',
        type: 'boolean / string / number',
        default: 'false'
    },
    {
        key: 'v-model',
        describe: '绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型',
        type: 'boolean / string / number',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading',
        describe: '是否显示加载中',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: 'switch 的大小',
        type: 'enum',
        default: "''"
    },
    {
        key: 'width',
        describe: 'switch 的宽度',
        type: 'number / string',
        default: "''"
    },
    {
        key: 'inline-prompt',
        describe: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'active-icon',
        describe: 'switch 状态为 on 时所显示图标，设置此项会忽略 active-text',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'inactive-icon',
        describe: 'switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'active-action-icon',
        describe: 'on状态下显示的图标组件 (v2.3.9及以上)',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'inactive-action-icon',
        describe: 'off状态下显示的图标组件 (v2.3.9及以上)',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'active-text',
        describe: 'switch 打开时的文字描述',
        type: 'string',
        default: "''"
    },
    {
        key: 'inactive-text',
        describe: 'switch 的状态为 off 时的文字描述',
        type: 'string',
        default: "''"
    },
    {
        key: 'active-value',
        describe: 'switch 状态为 on 时的值',
        type: 'boolean / string / number',
        default: 'true'
    },
    {
        key: 'inactive-value',
        describe: 'switch的状态为 off 时的值',
        type: 'boolean / string / number',
        default: 'false'
    },
    {
        key: 'name',
        describe: 'switch 对应的 name 属性',
        type: 'string',
        default: "''"
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'before-change',
        describe: 'switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换',
        type: 'boolean / Function',
        default: '—'
    },
    {
        key: 'id',
        describe: 'input 的 id',
        type: 'string',
        default: '—'
    },
    {
        key: 'tabindex',
        describe: 'input 的 tabindex',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性 (v2.7.2及以上)',
        type: 'string',
        default: '—'
    },
    {
        key: 'active-color',
        describe: '当在 on 状态时的背景颜色(推荐使用 CSS var --el-switch-on-color ) (已废弃)',
        type: 'string',
        default: "''"
    },
    {
        key: 'inactive-color',
        describe: 'off 状态时的背景颜色(推荐使用 CSS var --el-switch-off-color ) (已废弃)',
        type: 'string',
        default: "''"
    },
    {
        key: 'border-color',
        describe: '开关的边框颜色 ( 推荐使用 CSS var --el-switch-border-color ) (已废弃)',
        type: 'string',
        default: "''"
    },
    {
        key: 'label',
        describe: '等价于原生 input aria-label 属性 (已废弃)',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: 'switch 状态发生变化时的回调函数',
        type: 'Function',
        default: '—'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/switch.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/switch.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-switch',
    attr,
    event
};
//# sourceMappingURL=el-switch.js.map