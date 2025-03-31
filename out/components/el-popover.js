"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'trigger',
        describe: '触发方式',
        type: 'enum',
        default: 'hover'
    },
    {
        key: 'title',
        describe: '标题',
        type: 'string',
        default: '—'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，Element Plus 内置了 dark / light 两种主题',
        type: 'enum / string',
        default: 'light'
    },
    {
        key: 'content',
        describe: '显示的内容，也可以通过写入默认 slot 修改显示内容',
        type: 'string',
        default: "''"
    },
    {
        key: 'width',
        describe: '宽度',
        type: 'string / number',
        default: '150'
    },
    {
        key: 'placement',
        describe: '出现位置',
        type: 'enum',
        default: 'bottom'
    },
    {
        key: 'disabled',
        describe: 'Popover 是否可用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'visible',
        describe: 'Popover 是否显示',
        type: 'boolean',
        default: 'null'
    },
    {
        key: 'v-model:visible',
        describe: 'Popover 是否显示',
        type: 'boolean',
        default: 'null'
    },
    {
        key: 'offset',
        describe: '浮层偏移量, Popover 是在 Tooltip,基础上开发的，Popover 的 offset 是 undefined, 但 Tooltip 的 offset 是 12',
        type: 'number',
        default: 'undefined'
    },
    {
        key: 'transition',
        describe: '定义渐变动画，默认是 el-fade-in-linear',
        type: 'string',
        default: '—'
    },
    {
        key: 'show-arrow',
        describe: '是否显示 Tooltip 箭头，欲了解更多信息，请参考 ElPopper',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 的参数',
        type: 'object',
        default: "{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}"
    },
    {
        key: 'popper-class',
        describe: '为 popper 添加类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-style',
        describe: '为 popper 自定义样式',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'show-after',
        describe: '在触发后多久显示内容，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        key: 'hide-after',
        describe: '延迟关闭，单位毫秒',
        type: 'number',
        default: '200'
    },
    {
        key: 'auto-close',
        describe: 'tooltip 出现后自动隐藏延时，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        key: 'tabindex',
        describe: 'Popover 组件的 tabindex',
        type: 'number / string',
        default: '0'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'persistent',
        describe: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'virtual-triggering',
        describe: '是否启用虚拟触发器',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'virtual-ref',
        describe: '代表 tooltip 所要附加的参照元素',
        type: 'HTMLElement',
        default: '—'
    }
];
const event = [
    {
        key: '@show',
        describe: '显示时触发',
        type: 'function'
    },
    {
        key: '@before-enter',
        describe: '显示动画播放前触发',
        type: 'function'
    },
    {
        key: '@after-enter',
        describe: '显示动画播放完毕后触发',
        type: 'function'
    },
    {
        key: '@hide',
        describe: '隐藏时触发',
        type: 'function'
    },
    {
        key: '@before-leave',
        describe: '隐藏动画播放前触发',
        type: 'function'
    },
    {
        key: '@after-leave',
        describe: '隐藏动画播放完毕后触发',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/popover.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/popover.html#events';
});
exports.default = {
    key: 'el-popover',
    attr,
    event
};
//# sourceMappingURL=el-popover.js.map