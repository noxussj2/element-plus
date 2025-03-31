const attr = [
    {
        key: 'timestamp',
        describe: '时间戳',
        type: 'string',
        default: "''"
    },
    {
        key: 'hide-timestamp',
        describe: '是否隐藏时间戳',
        type: 'boolean',
        default: false
    },
    {
        key: 'center',
        describe: '是否垂直居中',
        type: 'boolean',
        default: false
    },
    {
        key: 'placement',
        describe: '时间戳位置，可选值: bottom',
        type: 'enum',
        default: 'bottom'
    },
    {
        key: 'type',
        describe: '节点类型',
        type: 'enum',
        default: "''"
    },
    {
        key: 'color',
        describe: '节点颜色',
        type: 'enum',
        default: "''"
    },
    {
        key: 'size',
        describe: '节点尺寸，可选值: normal',
        type: 'enum',
        default: 'normal'
    },
    {
        key: 'icon',
        describe: '自定义图标，支持字符串或组件',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'hollow',
        describe: '是否为空心点',
        type: 'boolean',
        default: false
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/timeline.html#timeline-item-attributes';
});

event.forEach((x: any) => {
    x.link = '';
});

export default {
    key: 'el-timeline-item',
    attr,
    event
};
