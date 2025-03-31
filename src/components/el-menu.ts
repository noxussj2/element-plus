const attr = [
    {
        key: 'mode',
        describe: '菜单展示模式。',
        type: 'enum',
        default: 'vertical'
    },
    {
        key: 'collapse',
        describe: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'ellipsis',
        describe: '是否省略多余的子项（仅在横向模式生效）。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'ellipsis-icon',
        describe: '自定义省略图标 (仅在水平模式下可用)（2.4.4 版本新增）。',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'popper-offset',
        describe: '弹出层的偏移量(对所有子菜单有效)（2.4.4 版本新增）。',
        type: 'number',
        default: '6'
    },
    {
        key: 'default-active',
        describe: '页面加载时默认激活菜单的 index。',
        type: 'string',
        default: "''"
    },
    {
        key: 'default-openeds',
        describe: '默认打开的 sub-menu 的 index 的数组。',
        type: 'object',
        default: '[]'
    },
    {
        key: 'unique-opened',
        describe: '是否只保持一个子菜单的展开。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'menu-trigger',
        describe: '子菜单打开的触发方式，只在 mode 为 horizontal 时有效。',
        type: 'enum',
        default: 'hover'
    },
    {
        key: 'router',
        describe: '是否启用 vue-router 模式。启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'collapse-transition',
        describe: '是否开启折叠动画。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'popper-effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种主题，当菜单折叠时生效（2.2.26 版本新增）。',
        type: 'enum / string',
        default: 'dark'
    },
    {
        key: 'close-on-click-outside',
        describe: '可选，单击外部时是否折叠菜单（2.4.4 版本新增）。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'popper-class',
        describe: '为 popper 添加类名（2.5.0 版本新增）。',
        type: 'string',
        default: '—'
    },
    {
        key: 'show-timeout',
        describe: '菜单出现前的延迟（2.5.0 版本新增）。',
        type: 'number',
        default: '300'
    },
    {
        key: 'hide-timeout',
        describe: '菜单消失前的延迟（2.5.0 版本新增）。',
        type: 'number',
        default: '300'
    },
    {
        key: 'background-color',
        describe: '菜单的背景颜色 (十六进制格式) (推荐在样式类中使用 --el-menu-bg-color)（已弃用）。',
        type: 'string',
        default: '#ffffff'
    },
    {
        key: 'text-color',
        describe: '菜单的文字颜色 (十六进制格式) (推荐在样式类中使用 --el-menu-text-color)（已弃用）。',
        type: 'string',
        default: '#303133'
    },
    {
        key: 'active-text-color',
        describe: '活动菜单项的文本颜色（十六进制格式）（推荐使用 css var --el-menu-active-color）（已弃用）。',
        type: 'string',
        default: '#409eff'
    },
    {
        key: 'persistent',
        describe: '当菜单处于非活动状态且 persistent 为 false 时，下拉菜单将被销毁（2.9.5 版本新增）。',
        type: 'boolean',
        default: 'true'
    }
];

const event: any = [
    {
        key: '@select',
        describe: '菜单激活回调。',
        type: 'function'
    },
    {
        key: '@open',
        describe: 'sub-menu 展开的回调。',
        type: 'function'
    },
    {
        key: '@close',
        describe: 'sub-menu 收起的回调。',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-events';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-events';
});

export default {
    key: 'el-menu',
    attr,
    event
};
