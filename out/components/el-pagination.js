"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'size',
        describe: '分页大小。版本 2.7.6+。',
        type: 'enum',
        default: "'default'"
    },
    {
        key: 'background',
        describe: '是否为分页按钮添加背景色。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'page-size',
        describe: '每页显示条目个数。',
        type: 'number',
        default: '—'
    },
    {
        key: 'v-model:page-size',
        describe: '双向绑定每页显示条目个数。',
        type: 'number',
        default: '—'
    },
    {
        key: 'default-page-size',
        describe: '每页默认的条目个数，不设置时默认为 10。',
        type: 'number',
        default: '—'
    },
    {
        key: 'total',
        describe: '总条目数。',
        type: 'number',
        default: '—'
    },
    {
        key: 'page-count',
        describe: '总页数。total 和 page-count 设置任意一个即可达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性。',
        type: 'number',
        default: '—'
    },
    {
        key: 'pager-count',
        describe: '设置最大页码按钮数。页码按钮的数量，当总页数超过该值时会折叠。',
        type: 'number',
        default: '7'
    },
    {
        key: 'current-page',
        describe: '当前页数。',
        type: 'number',
        default: '—'
    },
    {
        key: 'v-model:current-page',
        describe: '双向绑定当前页数。',
        type: 'number',
        default: '—'
    },
    {
        key: 'default-current-page',
        describe: '当前页数的默认初始值，不设置时默认为 1。',
        type: 'number',
        default: '—'
    },
    {
        key: 'layout',
        describe: '组件布局，子组件名用逗号分隔。',
        type: 'string',
        default: "'prev, pager, next, jumper, ->, total'"
    },
    {
        key: 'page-sizes',
        describe: '每页显示个数选择器的选项设置。',
        type: 'object',
        default: '[10, 20, 30, 40, 50, 100]'
    },
    {
        key: 'append-size-to',
        describe: '下拉框挂载到哪个 DOM 元素。版本 2.8.4+。',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: '每页显示个数选择器的下拉框类名。',
        type: 'string',
        default: "''"
    },
    {
        key: 'prev-text',
        describe: '替代图标显示的上一页文字。',
        type: 'string',
        default: "''"
    },
    {
        key: 'prev-icon',
        describe: '上一页的图标，比 prev-text 优先级更高。',
        type: 'string / Component',
        default: 'ArrowLeft'
    },
    {
        key: 'next-text',
        describe: '替代图标显示的下一页文字。',
        type: 'string',
        default: "''"
    },
    {
        key: 'next-icon',
        describe: '下一页的图标，比 next-text 优先级更高。',
        type: 'string / Component',
        default: 'ArrowRight'
    },
    {
        key: 'disabled',
        describe: '是否禁用分页。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'teleported',
        describe: '是否将下拉菜单 teleport 至 body。版本 2.3.13+。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'hide-on-single-page',
        describe: '只有一页时是否隐藏。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'small',
        describe: '是否使用小型分页样式（已废弃）。',
        type: 'boolean',
        default: 'false'
    }
];
const event = [
    {
        key: '@size-change',
        describe: 'page-size 改变时触发。',
        type: 'function'
    },
    {
        key: '@current-change',
        describe: 'current-page 改变时触发。',
        type: 'function'
    },
    {
        key: '@change',
        describe: 'current-page 或 page-size 更改时触发。版本 2.4.4+。',
        type: 'function'
    },
    {
        key: '@prev-click',
        describe: '用户点击上一页按钮改变当前页时触发。',
        type: 'function'
    },
    {
        key: '@next-click',
        describe: '用户点击下一页按钮改变当前页时触发。',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/pagination.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-pagination',
    attr,
    event
};
//# sourceMappingURL=el-pagination.js.map