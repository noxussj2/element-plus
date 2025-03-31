const attr = [
    {
        key: 'src',
        describe: '图片源地址，同原生属性一致。',
        type: 'string',
        default: "''"
    },
    {
        key: 'fit',
        describe: '确定图片如何适应容器框，同原生 object-fit。',
        type: 'enum',
        default: "''"
    },
    {
        key: 'hide-on-click-modal',
        describe: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading',
        describe: '浏览器加载图像的策略，和浏览器原生能力一致。自 2.2.3 版本起支持。',
        type: 'enum',
        default: '—'
    },
    {
        key: 'lazy',
        describe: '是否使用懒加载。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'scroll-container',
        describe: '开启懒加载功能后，监听 scroll 事件的容器。',
        type: 'string | object',
        default: '—'
    },
    {
        key: 'alt',
        describe: '原生属性 alt。',
        type: 'string',
        default: '—'
    },
    {
        key: 'referrerpolicy',
        describe: '原生属性 referrerPolicy。',
        type: 'string',
        default: '—'
    },
    {
        key: 'crossorigin',
        describe: '原生属性 crossorigin。',
        type: 'enum',
        default: '—'
    },
    {
        key: 'preview-src-list',
        describe: '开启图片预览功能。',
        type: 'object',
        default: '[]'
    },
    {
        key: 'z-index',
        describe: '设置图片预览的 z-index。',
        type: 'number',
        default: '—'
    },
    {
        key: 'initial-index',
        describe: '初始预览图像索引，小于 url-list 的长度。',
        type: 'number',
        default: '0'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Image Viewer。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'preview-teleported',
        describe: 'image-viewer 是否插入至 body 元素上。嵌套的父元素属性会发生修改时应该将此属性设置为 true。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'infinite',
        describe: '是否可以无限循环预览。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'zoom-rate',
        describe: '图像查看器缩放事件的缩放速率。',
        type: 'number',
        default: '1.2'
    },
    {
        key: 'min-scale',
        describe: '图像查看器缩放事件的最小缩放比例。自 2.4.0 版本起支持。',
        type: 'number',
        default: '0.2'
    },
    {
        key: 'max-scale',
        describe: '图像查看器缩放事件的最大缩放比例。自 2.4.0 版本起支持。',
        type: 'number',
        default: '7'
    }
];

const event: any = [
    {
        key: '@load',
        describe: '图片加载成功时触发。',
        type: 'function'
    },
    {
        key: '@error',
        describe: '图片加载失败时触发。',
        type: 'function'
    },
    {
        key: '@switch',
        describe: '切换图像时触发。',
        type: 'function'
    },
    {
        key: '@close',
        describe: '当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发。',
        type: 'function'
    },
    {
        key: '@show',
        describe: '当 Viewer 显示时触发。',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/image.html#image-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/image.html#image-events';
});

export default {
    key: 'el-image',
    attr,
    event
};
