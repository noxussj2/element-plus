const attr = [
    {
        key: 'append-to',
        describe: '指示 Tooltip 的内容将附加在哪一个网页元素上',
        type: 'CSSSelector / HTMLElement',
        default: '—'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种',
        type: 'enum',
        default: 'dark'
    },
    {
        key: 'content',
        describe: '显示的内容，也可被 slot#content 覆盖',
        type: 'string',
        default: "''"
    },
    {
        key: 'raw-content',
        describe: 'content 中的内容是否作为 HTML 字符串处理',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'placement',
        describe: 'Tooltip 组件出现的位置',
        type: 'enum',
        default: 'bottom'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'array',
        default: '—'
    },
    {
        key: 'visible',
        describe: 'Tooltip 组件可见性',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'v-model:visible',
        describe: 'Tooltip 组件可见性',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'disabled',
        describe: 'Tooltip 组件是否禁用',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'offset',
        describe: '出现位置的偏移量',
        type: 'number',
        default: '12'
    },
    {
        key: 'transition',
        describe: '动画名称',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数，请参考 popper.js 文档',
        type: 'object',
        default: '{}'
    },
    {
        key: 'show-after',
        describe: '在触发后多久显示内容，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        key: 'show-arrow',
        describe: 'tooltip 的内容是否有箭头',
        type: 'boolean',
        default: 'true'
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
        key: 'popper-class',
        describe: '为 Tooltip 的 popper 添加类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'enterable',
        describe: '鼠标是否可进入到 tooltip 中',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'teleported',
        describe: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'trigger',
        describe: '如何触发 Tooltip',
        type: 'enum',
        default: 'hover'
    },
    {
        key: 'virtual-triggering',
        describe: '用来标识虚拟触发是否被启用',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'virtual-ref',
        describe: '标识虚拟触发时的触发元素',
        type: 'HTMLElement',
        default: '—'
    },
    {
        key: 'trigger-keys',
        describe: '当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示',
        type: 'Array',
        default: "['Enter','Space']"
    },
    {
        key: 'persistent',
        describe: '当 tooltip 组件长时间不触发且 persistent 属性设置为 false 时, popconfirm 将会被删除',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '和 aria-label 属性保持一致',
        type: 'string',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tooltip.html#attributes';
});

event.forEach((x: any) => {
    x.link = '';
});

export default {
    key: 'el-tooltip',
    attr,
    event
};
