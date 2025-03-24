"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'label',
        describe: '复选框的 value 值',
        type: 'string/number/boolean',
        default: '-'
    },
    {
        key: 'true-label',
        describe: '选中时的 value 值',
        type: 'string/number',
        default: '-'
    },
    {
        key: 'false-label',
        describe: '未选中时的 value 值',
        type: 'string/number',
        default: '-'
    },
    {
        key: 'disabled',
        describe: '是否禁用复选框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'indeterminate',
        describe: '设置复选框的中间状态',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'checked',
        describe: '当前是否勾选',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'array/string/number',
        default: '-'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '-'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'false'
    }
];
//# sourceMappingURL=el-checkbox-updated.js.map