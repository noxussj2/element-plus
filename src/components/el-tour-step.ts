const attr = [
    {
        key: 'target',
        describe: '获取引导卡片指向的元素， 为空时居中于屏幕。 自2.5.2以来支持字符串和函数类型。 字符串类型是文档.querySelector的选择器。',
        type: 'HTMLElement | string | Function',
        default: '—'
    },
    {
        key: 'show-arrow',
        describe: '是否显示箭头',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'title',
        describe: '标题部分',
        type: 'string',
        default: '—'
    },
    {
        key: 'description',
        describe: '主要描述部分',
        type: 'string',
        default: '—'
    },
    {
        key: 'placement',
        describe: '引导卡片相对于目标元素的位置',
        type: 'enum',
        default: 'bottom'
    },
    {
        key: 'content-style',
        describe: '为content自定义样式',
        type: 'CSSProperties',
        default: '—'
    },
    {
        key: 'mask',
        describe: '是否启用蒙层，也可传入配置改变蒙层样式和填充色',
        type: 'boolean | Object',
        default: 'true'
    },
    {
        key: 'type',
        describe: '类型，影响底色与文字颜色',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'next-button-props',
        describe: '“下一步”按钮的属性',
        type: 'Object',
        default: '—'
    },
    {
        key: 'prev-button-props',
        describe: '“上一步”按钮的属性',
        type: 'Object',
        default: '—'
    },
    {
        key: 'scroll-into-view-options',
        describe: '是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 scrollIntoViewOptions 属性',
        type: 'boolean | ScrollIntoViewOptions',
        default: '—'
    },
    {
        key: 'show-close',
        describe: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'close-icon',
        describe: '自定义关闭图标，默认Close',
        type: 'string | Component',
        default: '—'
    }
];

const event: any = [
    {
        key: '@close',
        describe: '关闭引导时的回调函数',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tour.html#tourstep-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tour.html#tourstep-events';
});

export default {
    key: 'el-tour-step',
    attr,
    event
};
