const attr = [
    {
        key: 'model-value',
        describe: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'type',
        describe: '风格类型',
        type: 'enum',
        default: "''"
    },
    {
        key: 'closable',
        describe: '标签是否可关闭',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'addable',
        describe: '标签是否可增加',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'editable',
        describe: '标签是否同时可增加和关闭',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'tab-position',
        describe: '选项卡所在位置',
        type: 'enum',
        default: 'top'
    },
    {
        key: 'stretch',
        describe: '标签的宽度是否自撑开',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'before-leave',
        describe: '切换标签之前的钩子函数， 若返回 false  或者返回被 reject 的 Promise，则阻止切换。',
        type: 'Function',
        default: '() => true'
    }
];

const event: any = [
    {
        key: '@tab-click',
        describe: 'tab 被选中时触发',
        type: 'Function',
        default: '—'
    },
    {
        key: '@tab-change',
        describe: 'activeName 改变时触发',
        type: 'Function',
        default: '—'
    },
    {
        key: '@tab-remove',
        describe: '点击 tab 移除按钮时触发',
        type: 'Function',
        default: '—'
    },
    {
        key: '@tab-add',
        describe: '点击 tab 新增按钮时触发',
        type: 'Function',
        default: '—'
    },
    {
        key: '@edit',
        describe: '点击 tab 的新增或移除按钮后触发',
        type: 'Function',
        default: '—'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tabs.html#tabs-attributes';
});

event.forEach((x: any) => {
    x.link = '';
});

export default {
    key: 'el-tabs',
    attr,
    event
};
