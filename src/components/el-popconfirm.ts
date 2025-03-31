const attr = [
    {
        key: 'title',
        describe: '标题',
        type: 'string',
        default: '—'
    },
    {
        key: 'confirm-button-text',
        describe: '确认按钮文字',
        type: 'string',
        default: '—'
    },
    {
        key: 'cancel-button-text',
        describe: '取消按钮文字',
        type: 'string',
        default: '—'
    },
    {
        key: 'confirm-button-type',
        describe: '确认按钮类型',
        type: 'enum',
        default: 'primary'
    },
    {
        key: 'cancel-button-type',
        describe: '取消按钮类型',
        type: 'enum',
        default: 'text'
    },
    {
        key: 'icon',
        describe: '自定义图标',
        type: 'string / Component',
        default: 'QuestionFilled'
    },
    {
        key: 'icon-color',
        describe: 'Icon 颜色',
        type: 'string',
        default: '#f90'
    },
    {
        key: 'hide-icon',
        describe: '是否隐藏 Icon',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'hide-after',
        describe: '关闭时的延迟',
        type: 'number',
        default: '200'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'persistent',
        describe: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'width',
        describe: '弹层宽度，最小宽度 150px',
        type: 'string / number',
        default: '150'
    }
];

const event: any = [
    {
        key: '@confirm',
        describe: '点击确认按钮时触发',
        type: 'function'
    },
    {
        key: '@cancel',
        describe: '点击取消按钮时触发',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/popconfirm.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/popconfirm.html#events';
});

export default {
    key: 'el-popconfirm',
    attr,
    event
};
