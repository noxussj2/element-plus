const attr = [
    {
        key: 'action-required',
        describe: '请求 URL。',
        type: 'string',
        default: '#'
    },
    {
        key: 'headers',
        describe: '设置上传的请求头部。',
        type: 'object',
        default: '—'
    },
    {
        key: 'method',
        describe: '设置上传请求方法。',
        type: 'string',
        default: 'post'
    },
    {
        key: 'multiple',
        describe: '是否支持多选文件。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'data',
        describe: '上传时附带的额外参数，从 v2.3.13 开始支持 Awaitable 数据，和 Function。',
        type: 'object / Function',
        default: '{}'
    },
    {
        key: 'name',
        describe: '上传的文件字段名。',
        type: 'string',
        default: 'file'
    },
    {
        key: 'with-credentials',
        describe: '支持发送 cookie 凭证信息。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-file-list',
        describe: '是否显示已上传文件列表。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'drag',
        describe: '是否启用拖拽上传。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'accept',
        describe: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）。',
        type: 'string',
        default: "''"
    },
    {
        key: 'crossorigin',
        describe: '原生属性 crossorigin。',
        type: 'enum',
        default: '—'
    },
    {
        key: 'on-preview',
        describe: '点击文件列表中已上传的文件时的钩子。',
        type: 'function',
        default: '—'
    },
    {
        key: 'on-remove',
        describe: '文件列表移除文件时的钩子。',
        type: 'function',
        default: '—'
    },
    {
        key: 'on-success',
        describe: '文件上传成功时的钩子。',
        type: 'function',
        default: '—'
    },
    {
        key: 'on-error',
        describe: '文件上传失败时的钩子。',
        type: 'function',
        default: '—'
    },
    {
        key: 'on-progress',
        describe: '文件上传时的钩子。',
        type: 'function',
        default: '—'
    },
    {
        key: 'on-change',
        describe: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用。',
        type: 'function',
        default: '—'
    },
    {
        key: 'on-exceed',
        describe: '当超出限制时，执行的钩子函数。',
        type: 'function',
        default: '—'
    },
    {
        key: 'before-upload',
        describe: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
        type: 'function',
        default: '—'
    },
    {
        key: 'before-remove',
        describe: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',
        type: 'function',
        default: '—'
    },
    {
        key: 'file-list',
        describe: '默认上传文件。',
        type: 'object',
        default: '[]'
    },
    {
        key: 'v-model:file-list',
        describe: '绑定文件列表，控制上传文件。',
        type: 'object',
        default: '[]'
    },
    {
        key: 'list-type',
        describe: '文件列表的类型。',
        type: 'enum',
        default: 'text'
    },
    {
        key: 'auto-upload',
        describe: '是否自动上传文件。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'http-request',
        describe: '覆盖默认的 Xhr 行为，允许自行实现上传文件的请求。',
        type: 'function',
        default: '请参考 ajaxUpload'
    },
    {
        key: 'disabled',
        describe: '是否禁用上传。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'limit',
        describe: '允许上传文件的最大数量。',
        type: 'number',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = '';
});

export default {
    key: 'el-upload',
    attr,
    event
};
