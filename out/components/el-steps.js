"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'space',
        describe: '每个 step 的间距，不填写将自适应间距。支持百分比。',
        type: 'number / string',
        default: "''"
    },
    {
        key: 'direction',
        describe: '显示方向。',
        type: 'enum',
        default: 'horizontal'
    },
    {
        key: 'active',
        describe: '设置当前激活步骤。',
        type: 'number',
        default: '0'
    },
    {
        key: 'process-status',
        describe: '设置当前步骤的状态。',
        type: 'enum',
        default: 'process'
    },
    {
        key: 'finish-status',
        describe: '设置结束步骤的状态。',
        type: 'enum',
        default: 'finish'
    },
    {
        key: 'align-center',
        describe: '进行居中对齐。',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'simple',
        describe: '是否应用简洁风格。',
        type: 'boolean',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/steps.html#steps-attributes';
});
event.forEach((x) => {
    x.link = '';
});
exports.default = {
    key: 'el-steps',
    attr,
    event
};
//# sourceMappingURL=el-steps.js.map