const attr = [
    {
        key: 'checked',
        describe: '是否选中，可与 v-model 绑定',
        type: 'boolean',
        default: false
    },
    {
        key: 'v-model:checked',
        describe: '是否选中，支持 v-model 绑定',
        type: 'boolean',
        default: false
    },
    {
        key: 'disabled',
        describe: '是否禁用，2.8.2 版本新增',
        type: 'boolean',
        default: false
    },
    {
        key: 'type',
        describe: 'CheckTag 类型，可选值: primary，2.5.4 版本新增',
        type: 'enum',
        default: 'primary'
    }
];

const event: any = [
    {
        key: '@change',
        describe: '点击 Check Tag 时触发的事件',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#checktag-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#checktag-events';
});

export default {
    key: 'el-check-tag',
    attr,
    event
};
