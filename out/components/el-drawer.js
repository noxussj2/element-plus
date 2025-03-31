"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '是否显示 Drawer',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'v-model',
        describe: '是否显示 Drawer',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'append-to-body',
        describe: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'append-to',
        describe: '挂载到哪个 DOM 元素 将覆盖 append-to-body (2.8.0)',
        type: 'string',
        default: 'body'
    },
    {
        key: 'lock-scroll',
        describe: '是否在 Drawer 出现时将 body 滚动锁定',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'before-close',
        describe: '关闭前的回调，会暂停 Drawer 的关闭',
        type: 'function',
        default: '—'
    },
    {
        key: 'close-on-click-modal',
        describe: '是否可以通过点击 modal 关闭 Drawer',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Drawer',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'open-delay',
        describe: 'Drawer 打开的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        key: 'close-delay',
        describe: 'Drawer 关闭的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        key: 'destroy-on-close',
        describe: '控制是否在关闭 Drawer 之后将子元素全部销毁',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'modal',
        describe: '是否需要遮罩层',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'direction',
        describe: 'Drawer 打开的方向',
        type: 'enum',
        default: 'rtl'
    },
    {
        key: 'show-close',
        describe: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'size',
        describe: "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
        type: 'number / string',
        default: '30%'
    },
    {
        key: 'title',
        describe: 'Drawer 的标题，也可通过具名 slot （见下表）传入',
        type: 'string',
        default: '—'
    },
    {
        key: 'with-header',
        describe: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'modal-class',
        describe: '遮罩层的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'header-class',
        describe: 'header 部分的自定义 class 名 (2.9.3)',
        type: 'string',
        default: '—'
    },
    {
        key: 'body-class',
        describe: 'body 部分的自定义 class 名 (2.9.3)',
        type: 'string',
        default: '—'
    },
    {
        key: 'footer-class',
        describe: 'footer 部分的自定义 class 名 (2.9.3)',
        type: 'string',
        default: '—'
    },
    {
        key: 'z-index',
        describe: '设置 z-index',
        type: 'number',
        default: '—'
    },
    {
        key: 'header-aria-level',
        describe: 'header 的 aria-level 属性 (a11y)',
        type: 'string',
        default: '2'
    },
    {
        key: 'custom-class',
        describe: 'Drawer 的自定义类名 (deprecated)',
        type: 'string',
        default: "''"
    }
];
const event = [
    {
        key: '@open',
        describe: 'Drawer 打开的回调',
        type: 'function'
    },
    {
        key: '@opened',
        describe: 'Drawer 打开动画结束时的回调',
        type: 'function'
    },
    {
        key: '@close',
        describe: 'Drawer 关闭的回调',
        type: 'function'
    },
    {
        key: '@closed',
        describe: 'Drawer 关闭动画结束时的回调',
        type: 'function'
    },
    {
        key: '@open-auto-focus',
        describe: '输入焦点聚焦在 Drawer 内容时的回调',
        type: 'function'
    },
    {
        key: '@close-auto-focus',
        describe: '输入焦点从 Drawer 内容失焦时的回调',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/drawer.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/drawer.html#%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-drawer',
    attr,
    event
};
//# sourceMappingURL=el-drawer.js.map