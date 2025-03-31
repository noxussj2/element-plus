const attr = [
    {
        key: 'height',
        describe: 'carousel 的高度。',
        type: 'string',
        default: "''"
    },
    {
        key: 'initial-index',
        describe: '初始状态激活的幻灯片的索引，从 0 开始。',
        type: 'number',
        default: 0
    },
    {
        key: 'trigger',
        describe: '指示器的触发方式。',
        type: 'enum',
        default: 'hover'
    },
    {
        key: 'autoplay',
        describe: '是否自动切换。',
        type: 'boolean',
        default: true
    },
    {
        key: 'interval',
        describe: '自动切换的时间间隔，单位为毫秒。',
        type: 'number',
        default: 3000
    },
    {
        key: 'indicator-position',
        describe: '指示器的位置。',
        type: 'enum',
        default: "''"
    },
    {
        key: 'arrow',
        describe: '切换箭头的显示时机。',
        type: 'enum',
        default: 'hover'
    },
    {
        key: 'type',
        describe: 'carousel 的类型。',
        type: 'enum',
        default: "''"
    },
    {
        key: 'cardScale',
        describe: '当 type 为 card时，二级卡的缩放大小。 (版本 2.7.8 引入)',
        type: 'number',
        default: 0.83
    },
    {
        key: 'loop',
        describe: '是否循环显示。',
        type: 'boolean',
        default: true
    },
    {
        key: 'direction',
        describe: '展示的方向。',
        type: 'enum',
        default: 'horizontal'
    },
    {
        key: 'pause-on-hover',
        describe: '鼠标悬浮时暂停自动切换。',
        type: 'boolean',
        default: true
    },
    {
        key: 'motion-blur',
        describe: '添加动态模糊以给走马灯注入活力和流畅性。 (版本 2.6.0 引入)',
        type: 'boolean',
        default: false
    }
];

const event: any = [
    {
        key: '@change',
        describe: '当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#carousel-api';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#carousel-events';
});

export default {
    key: 'el-carousel',
    attr,
    event
};
