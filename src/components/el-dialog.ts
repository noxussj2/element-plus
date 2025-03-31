const attr = [
    {
        key: 'model-value',
        describe: '是否显示 Dialog',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '是否显示 Dialog',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'title',
        describe: 'Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入',
        type: 'string',
        default: "''"
    },
    {
        key: 'width',
        describe: '对话框的宽度，默认值为 50%',
        type: 'string / number',
        default: "''"
    },
    {
        key: 'fullscreen',
        describe: '是否为全屏 Dialog',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'top',
        describe: 'dialog CSS 中的 margin-top 值，默认为 15vh',
        type: 'string',
        default: "''"
    },
    {
        key: 'modal',
        describe: '是否需要遮罩层',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'modal-class',
        describe: '遮罩的自定义类名',
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
        key: 'append-to-body',
        describe: 'Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'append-to',
        describe: 'Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body (2.4.3)',
        type: 'string / HTMLElement',
        default: 'body'
    },
    {
        key: 'lock-scroll',
        describe: '是否在 Dialog 出现时将 body 滚动锁定',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'open-delay',
        describe: 'dialog 打开的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        key: 'close-delay',
        describe: 'dialog 关闭的延时时间，单位毫秒',
        type: 'number',
        default: '0'
    },
    {
        key: 'close-on-click-modal',
        describe: '是否可以通过点击 modal 关闭 Dialog',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Dialog',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'show-close',
        describe: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'before-close',
        describe: '关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.',
        type: 'Function',
        default: '—'
    },
    {
        key: 'draggable',
        describe: '为 Dialog 启用可拖拽功能',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'overflow',
        describe: '拖动范围可以超出可视区 (2.5.4)',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'center',
        describe: '是否让 Dialog 的 header 和 footer 部分居中排列',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'align-center',
        describe: '是否水平垂直对齐对话框 (2.2.16)',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'destroy-on-close',
        describe: '当关闭 Dialog 时，销毁其中的元素',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'close-icon',
        describe: '自定义关闭图标，默认 Close',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'z-index',
        describe: '和原生的 CSS 的 z-index 相同，改变 z 轴的顺序',
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
        describe: 'Dialog 的自定义类名 (deprecated)',
        type: 'string',
        default: "''"
    }
];

const event: any = [
    {
        key: '@open',
        describe: 'Dialog 打开的回调',
        type: 'Function'
    },
    {
        key: '@opened',
        describe: 'Dialog 打开动画结束时的回调',
        type: 'Function'
    },
    {
        key: '@close',
        describe: 'Dialog 关闭的回调',
        type: 'Function'
    },
    {
        key: '@closed',
        describe: 'Dialog 关闭动画结束时的回调',
        type: 'Function'
    },
    {
        key: '@open-auto-focus',
        describe: '输入焦点聚焦在 Dialog 内容时的回调',
        type: 'Function'
    },
    {
        key: '@close-auto-focus',
        describe: '输入焦点从 Dialog 内容失焦时的回调',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/dialog.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/dialog.html#%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-dialog',
    attr,
    event
};
