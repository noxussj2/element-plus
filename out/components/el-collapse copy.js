"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '当前活动面板。在手风琴模式下，其类型是 string，在其他模式下是 array。',
        type: 'string | array',
        default: '[]'
    },
    {
        key: 'v-model',
        describe: '当前活动面板。在手风琴模式下，其类型是 string，在其他模式下是 array。（v-model 语法糖）',
        type: 'string | array',
        default: '[]'
    },
    {
        key: 'accordion',
        describe: '是否手风琴模式。',
        type: 'boolean',
        default: 'false'
    }
];
const event = [
    {
        key: '@change',
        describe: '切换当前活动面板，在手风琴模式下其类型是string，在其他模式下是array',
        type: 'Function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/collapse.html#collapse-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/collapse.html#collapse-events';
});
exports.default = {
    key: 'el-collapse',
    attr,
    event
};
//# sourceMappingURL=el-collapse%20copy.js.map