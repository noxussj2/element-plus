"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'value',
        describe: '单选框的值',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'label',
        describe: '单选框的 label 如果value没有值， label则作为value使用',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用单选框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '单选框的尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'name',
        describe: '原始 name 属性',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radio-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radio-events';
});
exports.default = {
    key: 'el-radio',
    attr,
    event
};
//# sourceMappingURL=el-radio.js.map