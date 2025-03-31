const attr = [
    {
        key: 'percentage',
        describe: '进度条的百分比，必填。',
        type: 'number',
        default: '0'
    },
    {
        key: 'type',
        describe: '进度条类型。',
        type: 'enum',
        default: "'line'"
    },
    {
        key: 'stroke-width',
        describe: '进度条的宽度。',
        type: 'number',
        default: '6'
    },
    {
        key: 'text-inside',
        describe: "进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）。",
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'status',
        describe: '进度条当前状态。',
        type: 'enum',
        default: '—'
    },
    {
        key: 'indeterminate',
        describe: '是否为动画进度条。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'duration',
        describe: '控制动画进度条速度和条纹进度条流动速度。',
        type: 'number',
        default: '3'
    },
    {
        key: 'color',
        describe: '进度条背景色（会覆盖 status 状态颜色）。',
        type: 'string / function / Array',
        default: "''"
    },
    {
        key: 'width',
        describe: '环形进度条画布宽度（仅 type 为 circle 或 dashboard 时可用）。',
        type: 'number',
        default: '126'
    },
    {
        key: 'show-text',
        describe: '是否显示进度条文字内容。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'stroke-linecap',
        describe: 'circle/dashboard 类型路径两端的形状。',
        type: 'enum',
        default: "'round'"
    },
    {
        key: 'format',
        describe: '指定进度条文字内容。',
        type: 'function',
        default: '—'
    },
    {
        key: 'striped',
        describe: '在进度条上增加条纹。版本 2.3.4+。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'striped-flow',
        describe: '让进度条上的条纹流动起来。版本 2.3.4+。',
        type: 'boolean',
        default: 'false'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/progress.html#%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/progress.html#%E5%B1%9E%E6%80%A7';
});

export default {
    key: 'el-progress',
    attr,
    event
};
