const attr = [
    {
        key: 'url-list',
        describe: '用于预览的图片链接列表。',
        type: 'object',
        default: '[]'
    },
    {
        key: 'z-index',
        describe: '预览时遮罩层的 z-index。',
        type: 'number / string',
        default: '—'
    },
    {
        key: 'initial-index',
        describe: '初始预览图像索引，小于 url-list 的长度。',
        type: 'number',
        default: '0'
    },
    {
        key: 'infinite',
        describe: '是否可以无限循环预览。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'hide-on-click-modal',
        describe: '是否可以通过点击遮罩层关闭预览。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'teleported',
        describe: 'image 自身是否插入至 body 元素上。嵌套的父元素属性会发生修改时应该将此属性设置为 true。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'zoom-rate',
        describe: '图像查看器缩放事件的缩放速率。版本 2.2.27+。',
        type: 'number',
        default: '1.2'
    },
    {
        key: 'min-scale',
        describe: '图像查看器缩放事件的最小缩放比例。版本 2.4.0+。',
        type: 'number',
        default: '0.2'
    },
    {
        key: 'max-scale',
        describe: '图像查看器缩放事件的最大缩放比例。版本 2.4.0+。',
        type: 'number',
        default: '7'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Image Viewer。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'show-progress',
        describe: '是否显示预览图片的进度条内容。版本 2.9.4+。',
        type: 'boolean',
        default: 'false'
    }
];

const event: any = [
    {
        key: '@close',
        describe: '当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发。',
        type: 'Function'
    },
    {
        key: '@switch',
        describe: '切换图像时触发。',
        type: 'Function'
    },
    {
        key: '@rotate',
        describe: '旋转图像时触发。版本 2.3.13+。',
        type: 'Function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/image.html#image-viewer-attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/image.html#image-viewer-events';
});

export default {
    key: 'el-image-viewer',
    attr,
    event
};
