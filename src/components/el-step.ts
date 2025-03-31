const attr = [
    {
        key: 'title',
        describe: '标题',
        type: 'string',
        default: "''"
    },
    {
        key: 'description',
        describe: '描述文案',
        type: 'string',
        default: "''"
    },
    {
        key: 'icon',
        describe: 'Step 组件的自定义图标。也支持 slot 方式写入',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'status',
        describe: '设置当前步骤的状态， 不设置则根据 steps 确定状态',
        type: 'enum',
        default: "''"
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/steps.html#step-attributes';
});

event.forEach((x: any) => {
    x.link = '';
});

export default {
    key: 'el-step',
    attr,
    event
};
