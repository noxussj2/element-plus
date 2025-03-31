"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'checked',
        describe: '是否选中，可与 v-model 绑定',
        type: 'boolean',
        default: false
    },
    {
        key: 'v-model:checked',
        describe: '是否选中，支持 v-model 绑定',
        type: 'boolean',
        default: false
    },
    {
        key: 'disabled',
        describe: '是否禁用，2.8.2 版本新增',
        type: 'boolean',
        default: false
    },
    {
        key: 'type',
        describe: 'CheckTag 类型，可选值: primary，2.5.4 版本新增',
        type: 'enum',
        default: 'primary'
    }
];
const event = [
    {
        key: '@change',
        describe: '点击 Check Tag 时触发的事件',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#checktag-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#checktag-events';
});
exports.default = {
    key: 'el-check-tag',
    attr,
    event
};
//# sourceMappingURL=el-check-tag.js.map