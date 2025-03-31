const attr = [
    {
        key: 'animated',
        describe: '是否使用动画。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'count',
        describe: '渲染多少个 template，建议使用尽可能小的数字。',
        type: 'number',
        default: '1'
    },
    {
        key: 'loading',
        describe: '是否显示加载结束后的 DOM 结构。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'rows',
        describe: '骨架屏段落数量。',
        type: 'number',
        default: '3'
    },
    {
        key: 'throttle',
        describe:
            '渲染延迟（以毫秒为单位）。数字代表延迟显示，也可以设置为延迟隐藏，例如 { leading: 500, trailing: 500 }。当需要控制初始加载值时，可以设置 { initVal: true }。',
        type: 'number / object',
        default: '0'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/skeleton.html#skeleton-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/skeleton.html#skeleton-attributes';
});

export default {
    key: 'el-skeleton',
    attr,
    event
};
