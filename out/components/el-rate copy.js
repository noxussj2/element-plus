"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'number',
        default: '0'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'number',
        default: '0'
    },
    {
        key: 'max',
        describe: '最大分值',
        type: 'number',
        default: '5'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否为只读',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'allow-half',
        describe: '是否允许半选',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'low-threshold',
        describe: '低分和中等分数的界限值，值本身被划分在低分中',
        type: 'number',
        default: '2'
    },
    {
        key: 'high-threshold',
        describe: '高分和中等分数的界限值，值本身被划分在高分中',
        type: 'number',
        default: '4'
    },
    {
        key: 'colors',
        describe: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
        type: 'object',
        default: "['#f7ba2a', '#f7ba2a', '#f7ba2a']"
    },
    {
        key: 'void-color',
        describe: '未选中 icon 的颜色',
        type: 'string',
        default: '#c6d1de'
    },
    {
        key: 'disabled-void-color',
        describe: '只读时未选中 icon 的颜色',
        type: 'string',
        default: '#eff2f7'
    },
    {
        key: 'icons',
        describe: '图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名',
        type: 'object',
        default: '[StarFilled, StarFilled, StarFilled]'
    },
    {
        key: 'void-icon',
        describe: '未被选中的图标组件',
        type: 'string / Component',
        default: 'Star'
    },
    {
        key: 'disabled-void-icon',
        describe: '禁用状态的未选择图标',
        type: 'string / Component',
        default: 'StarFilled'
    },
    {
        key: 'show-text',
        describe: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-score',
        describe: '是否显示当前分数，show-score 和 show-text 不能同时为真',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'text-color',
        describe: '辅助文字的颜色',
        type: 'string',
        default: "''"
    },
    {
        key: 'texts',
        describe: '辅助文字数组',
        type: 'array',
        default: "['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise']"
    },
    {
        key: 'score-template',
        describe: '分数显示模板',
        type: 'string',
        default: '—'
    },
    {
        key: 'clearable',
        describe: '是否可以重置值为 0',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'id',
        describe: '原生 id 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '和 Rate 的 aria-label 属性保持一致',
        type: 'string',
        default: '—'
    },
    {
        key: 'label',
        describe: '和 Rate 的 aria-label 属性保持一致',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '分值改变时触发',
        type: 'Function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/rate.html#attributes';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/rate.html#events';
});
exports.default = {
    key: 'el-rate',
    attr,
    event
};
//# sourceMappingURL=el-rate%20copy.js.map