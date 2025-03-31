const attr = [
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string | number | boolean',
        default: '—'
    },
    {
        key: 'size',
        describe: '单选框按钮或边框按钮的大小',
        type: 'string',
        default: 'default'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'text-color',
        describe: '按钮形式的 Radio 激活时的文本颜色',
        type: 'string',
        default: '#ffffff'
    },
    {
        key: 'fill',
        describe: '按钮形式的 Radio 激活时的填充色和边框色',
        type: 'string',
        default: '#409eff'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'aria-label',
        describe: '与 RadioGroup 中的 aria-label 属性相同',
        type: 'string',
        default: '—'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'id',
        describe: '原生 id 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'label',
        describe: '与 RadioGroup 中的 aria-label 属性相同',
        type: 'string',
        default: '—'
    }
];

const event = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radiogroup-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radiogroup-events';
});

export default {
    key: 'el-radio-group',
    attr,
    event
};
