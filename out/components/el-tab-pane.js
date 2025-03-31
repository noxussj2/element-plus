"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'label',
        describe: '选项卡标题',
        type: 'string',
        default: "''"
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'name',
        describe: '与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是tab面板的序列号，如第一个 tab 是 0',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'closable',
        describe: '标签是否可关闭',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'lazy',
        describe: '标签是否延迟渲染',
        type: 'boolean',
        default: 'false'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tabs.html#tab-pane-attributes';
});
event.forEach((x) => {
    x.link = '';
});
exports.default = {
    key: 'el-tab-pane',
    attr,
    event
};
//# sourceMappingURL=el-tab-pane.js.map