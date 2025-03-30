"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'image',
        describe: 'empty 组件的图像地址。',
        type: 'string',
        default: "''"
    },
    {
        key: 'image-size',
        describe: 'empty 组件的图像尺寸（宽度）。',
        type: 'number',
        default: '—'
    },
    {
        key: 'description',
        describe: 'empty 组件的描述信息。',
        type: 'string',
        default: "''"
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#attributes';
});
exports.default = {
    key: 'el-empty',
    attr,
    event
};
//# sourceMappingURL=el-empty.js.map