const attr = [
    {
        key: 'type',
        describe: '菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效。',
        type: 'enum',
        default: "''"
    },
    {
        key: 'size',
        describe: '菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。',
        type: 'enum',
        default: "''"
    },
    {
        key: 'button-props',
        describe: '按钮组件的 props，参考 按钮属性。',
        type: 'object',
        default: '—'
    },
    {
        key: 'max-height',
        describe: '菜单最大高度。',
        type: 'string / number',
        default: "''"
    },
    {
        key: 'split-button',
        describe: '下拉触发元素呈现为按钮组。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'placement',
        describe: '菜单弹出位置。',
        type: 'enum',
        default: 'bottom'
    },
    {
        key: 'trigger',
        describe: '触发下拉的行为。',
        type: 'enum',
        default: 'hover'
    },
    {
        key: 'triggerKeys',
        describe: '指定键盘上哪些按键可以触发操作（2.9.1 版本新增）。',
        type: 'array',
        default: "['Enter', 'Space', 'ArrowDown', 'NumpadEnter']"
    },
    {
        key: 'hide-on-click',
        describe: '是否在点击菜单项后隐藏菜单。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'show-timeout',
        describe: '展开下拉菜单的延时，仅在 trigger 为 hover 时有效。',
        type: 'number',
        default: '150'
    },
    {
        key: 'hide-timeout',
        describe: '收起下拉菜单的延时，仅在 trigger 为 hover 时有效。',
        type: 'number',
        default: '150'
    },
    {
        key: 'role',
        describe: '下拉菜单的 ARIA 属性。根据具体场景，您可能想要将此更改为“navigation”。',
        type: 'enum',
        default: 'menu'
    },
    {
        key: 'tabindex',
        describe: 'Dropdown 组件的 tabindex。',
        type: 'number / string',
        default: '0'
    },
    {
        key: 'popper-class',
        describe: '自定义浮层类名。',
        type: 'string',
        default: "''"
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数。',
        type: 'object',
        default: "{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}"
    },
    {
        key: 'teleported',
        describe: '是否将下拉列表插入至 body 元素（2.2.20 版本新增）。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'persistent',
        describe: '当下拉菜单处于非活动状态且 persistent 为 false 时，下拉菜单将被销毁（2.9.5 版本新增）。',
        type: 'boolean',
        default: 'true'
    }
];

const event: any = [
    {
        key: '@click',
        describe: 'split-button 为 true 时，点击左侧按钮的回调。',
        type: 'Function'
    },
    {
        key: '@command',
        describe: '当下拉项被点击时触发，参数是从下拉菜单中发送的命令。',
        type: 'Function'
    },
    {
        key: '@visible-change',
        describe: '当下拉菜单出现/消失时触发器，当它出现时，参数将是 true，否则将是 false。',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/dropdown.html#dropdown-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/dropdown.html#dropdown-events';
});

export default {
    key: 'el-dropdown',
    attr,
    event
};
