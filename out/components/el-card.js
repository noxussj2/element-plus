"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'header',
        describe: '卡片的标题。你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点。',
        type: 'string',
        default: '—'
    },
    {
        key: 'footer',
        describe: '卡片页脚。你既可以通过设置 footer 来修改卡片底部内容，也可以通过 slot#footer 传入 DOM 节点。 (版本 2.4.3 引入)',
        type: 'string',
        default: '—'
    },
    {
        key: 'body-style',
        describe: 'body 的 CSS 样式。',
        type: 'object',
        default: '—'
    },
    {
        key: 'body-class',
        describe: 'body 的自定义类名。 (版本 2.3.10 引入)',
        type: 'string',
        default: '—'
    },
    {
        key: 'shadow',
        describe: '卡片阴影显示时机。',
        type: 'enum',
        default: 'always'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/card.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/card.html#attributes';
});
exports.default = {
    key: 'el-card',
    attr,
    event
};
//# sourceMappingURL=el-card.js.map