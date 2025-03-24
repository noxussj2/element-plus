const attr = [
    {
        key: 'size',
        describe: '尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'type',
        describe: '类型',
        type: 'enum',
        default: '—'
    },
    {
        key: 'plain',
        describe: '是否为朴素按钮',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'text',
        describe: '是否为文字按钮，2.2.0版本开始支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'bg',
        describe: '是否显示文字按钮背景颜色，2.2.0版本开始支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'link',
        describe: '是否为链接按钮，2.2.1版本开始支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'round',
        describe: '是否为圆角按钮',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'circle',
        describe: '是否为圆形按钮',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading',
        describe: '是否为加载中状态',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading-icon',
        describe: '自定义加载中状态图标组件',
        type: 'string / Component',
        default: 'Loading'
    },
    {
        key: 'disabled',
        describe: '按钮是否为禁用状态',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'icon',
        describe: '图标组件',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'autofocus',
        describe: '原生 autofocus 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'native-type',
        describe: '原生 type 属性',
        type: 'enum',
        default: 'button'
    },
    {
        key: 'auto-insert-space',
        describe: '自动在两个中文字符之间插入空格',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'color',
        describe: '自定义按钮颜色，并自动计算 hover 和 active 触发后的颜色',
        type: 'string',
        default: '—'
    },
    {
        key: 'dark',
        describe: 'dark 模式，意味着自动设置 color 为 dark 模式的颜色',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'tag',
        describe: '自定义元素标签，2.3.4版本开始支持',
        type: 'string / Component',
        default: 'button'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7';
});

export default {
    key: 'el-button',
    attr,
    event
};
