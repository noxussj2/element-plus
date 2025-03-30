const attr = [
    {
        key: 'image',
        describe: 'empty 组件的图像地址。',
        type: 'string',
        default: "''"
    },
    {
        key: 'image-size',
        describe: 'empty 组件的图像尺寸（宽度）。',
        type: 'number',
        default: '—'
    },
    {
        key: 'description',
        describe: 'empty 组件的描述信息。',
        type: 'string',
        default: "''"
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#attributes';
});

export default {
    key: 'el-empty',
    attr,
    event
};
