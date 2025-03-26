const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值。',
        type: 'Date',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值。',
        type: 'Date',
        default: '—'
    },
    {
        key: 'range',
        describe: '时间范围，包括开始时间与结束时间。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。',
        type: 'array',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/calendar.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/calendar.html#attributes';
});

export default {
    key: 'el-calendar',
    attr,
    event
};
