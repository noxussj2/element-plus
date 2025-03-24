const attr = [
    {
        key: 'model',
        describe: '表单数据对象。',
        type: 'object',
        default: '—'
    },
    {
        key: 'rules',
        describe: '表单验证规则。',
        type: 'object',
        default: '—'
    },
    {
        key: 'inline',
        describe: '行内表单模式。',
        type: 'boolean',
        default: false
    },
    {
        key: 'label-position',
        describe: '表单域标签的位置。当设置为 left 或 right 时，则也需要设置 label-width 属性。',
        type: 'enum',
        default: 'right'
    },
    {
        key: 'label-width',
        describe: '标签的长度，例如 "50px"。作为 Form 直接子元素的 form-item 会继承该值。可以使用 auto。',
        type: ['string', 'number'],
        default: "''"
    },
    {
        key: 'label-suffix',
        describe: '表单域标签的后缀。',
        type: 'string',
        default: "''"
    },
    {
        key: 'hide-required-asterisk',
        describe: '是否隐藏必填字段标签旁边的红色星号。',
        type: 'boolean',
        default: false
    },
    {
        key: 'require-asterisk-position',
        describe: '星号的位置。',
        type: 'enum',
        default: 'left'
    },
    {
        key: 'show-message',
        describe: '是否显示校验错误信息。',
        type: 'boolean',
        default: true
    },
    {
        key: 'inline-message',
        describe: '是否以行内形式展示校验信息。',
        type: 'boolean',
        default: false
    },
    {
        key: 'status-icon',
        describe: '是否在输入框中显示校验结果反馈图标。',
        type: 'boolean',
        default: false
    },
    {
        key: 'validate-on-rule-change',
        describe: '是否在 rules 属性改变后立即触发一次验证。',
        type: 'boolean',
        default: true
    },
    {
        key: 'size',
        describe: '用于控制该表单内组件的尺寸。',
        type: 'enum',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用该表单内的所有组件。如果设置为 true, 它将覆盖内部组件的 disabled 属性。',
        type: 'boolean',
        default: false
    },
    {
        key: 'scroll-to-error',
        describe: '当校验失败时，滚动到第一个错误表单项。',
        type: 'boolean',
        default: false
    },
    {
        key: 'scroll-into-view-options',
        describe: '当校验有失败结果时，滚动到第一个失败的表单项目。可通过 scrollIntoView 配置（2.3.2）。',
        type: ['object', 'boolean'],
        default: '—'
    }
];

const event = [
    {
        key: '@validate',
        describe: '任一表单项被校验后触发',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/form.html#form-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/form.html#form-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-form',
    attr,
    event
};
