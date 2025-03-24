"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'size',
        describe: '用于控制该按钮组内按钮的大小',
        type: 'enum',
        default: '—'
    },
    {
        key: 'type',
        describe: '用于控制该按钮组内按钮的类型',
        type: 'enum',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/button.html#buttongroup-%E5%B1%9E%E6%80%A7';
});
exports.default = {
    key: 'el-button-group',
    attr,
    event
};
//# sourceMappingURL=el-button-group.js.map