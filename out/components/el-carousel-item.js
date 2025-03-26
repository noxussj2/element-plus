"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'name',
        describe: '幻灯片的名字，可用作 setActiveItem 的参数。',
        type: 'string',
        default: "''"
    },
    {
        key: 'label',
        describe: '该幻灯片所对应指示器的文本。',
        type: 'string / number',
        default: "''"
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#carousel-item-attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#carousel-item-attributes';
});
exports.default = {
    key: 'el-carousel-item',
    attr,
    event
};
//# sourceMappingURL=el-carousel-item.js.map