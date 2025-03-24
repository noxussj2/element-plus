const attr = [
    {
        key: 'alignment',
        describe: '对齐的方式',
        type: 'enum',
        default: 'align-items-center'
    },
    {
        key: 'class',
        describe: 'className',
        type: 'string / object / array',
        default: '—'
    },
    {
        key: 'direction',
        describe: '排列的方向',
        type: 'enum',
        default: 'horizontal'
    },
    {
        key: 'prefix-cls',
        describe: '给 space-items 的类名前缀',
        type: 'string',
        default: '—'
    },
    {
        key: 'style',
        describe: '额外样式',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'spacer',
        describe: '间隔符',
        type: 'string / number / VNode',
        default: '—'
    },
    {
        key: 'size',
        describe: '间隔大小',
        type: 'enum / number / array',
        default: 'small'
    },
    {
        key: 'wrap',
        describe: '设置是否自动折行',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'fill',
        describe: '子元素是否填充父容器',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'fill-ratio',
        describe: '填充父容器的比例',
        type: 'number',
        default: '100'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/space.html#attributes';
});

export default {
    key: 'el-space',
    attr,
    event
};
