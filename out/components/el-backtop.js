"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'target',
        describe: '触发滚动的对象。',
        type: 'string',
        default: '—'
    },
    {
        key: 'visibility-height',
        describe: '滚动高度达到此参数值才出现。',
        type: 'number',
        default: 200
    },
    {
        key: 'right',
        describe: '控制其显示位置，距离页面右边距。',
        type: 'number',
        default: 40
    },
    {
        key: 'bottom',
        describe: '控制其显示位置，距离页面底部距离。',
        type: 'number',
        default: 40
    }
];
const event = [
    {
        key: '@click',
        describe: '点击按钮触发的事件。',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/backtop.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/backtop.html#events';
});
exports.default = {
    key: 'el-backtop',
    attr,
    event
};
//# sourceMappingURL=el-backtop.js.map