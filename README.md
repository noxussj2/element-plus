<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Discord-%23000?style=flat-square&logo=discord&logoColor=%235865F2">
    <img src="https://img.shields.io/badge/vscode-%23000?style=flat-square&logo=visualstudio&logoColor=%23007ACC">
    <img src="https://img.shields.io/badge/noxussj2-%23000?style=flat-square&logo=wechat&logoColor=%2307C160">
</p>

# Element Plus Snippets

🚀 Element Plus Snippets 是一个为 Element Plus 组件库提供代码提示的 VSCode 插件，帮助你快速开发 Vue 组件，提高编码效率。另外提供博主的学习笔记：https://note.noxussj.top/?s=ep

## ✨ 插件特性

-   支持 `Element Plus ⚡` 组件代码片段：为每个组件提供代码片段提示。

-   属性与事件提示：在组件中输入空格或 @ 符号，提供相关的属性或事件提示。

-   API 文档快速跳转：支持快速跳转到对应的组件 API 文档，查阅官方文档更方便

-   兼容多种文件类型：兼容 `.vue` `.html` 文件。

-   使用前必须要检查 Visual Code 的版本号是否大于 `1.46.0`

<br />

## 组件代码片段提示

✅ 例如在 `.vue` 文件中输入 `el-` 时就会出现一系列 `Element Plus` 组件的代码提示。

<img src="./images/1.png">

<br />

✅ 在组件中输入空格、或者手动触发属性提示

<img src="./images/2.png">

<br />

✅ 在组件中输入 `@` 触发事件提示

<img src="./images/3.png">

## 📌 支持的组件

以下是本插件支持的 `Element Plus` 组件代码片段，所有组件均支持代码补全、属性 & 事件提示。

### Basic 基础组件

| 序号 |    触发代码    | 组件名称          | 符号 |
| :--- | :------------: | :---------------- | :--- |
| 1    |  `el-button`   | Button 按钮       | ⚡   |
| 2    | `el-container` | Container 容器    | ⚡   |
| 3    |  `el-header`   | Header 页头       | ⚡   |
| 4    |   `el-aside`   | Aside 侧边栏      | ⚡   |
| 5    |   `el-main`    | Main 主要区域容器 | ⚡   |
| 6    |  `el-footer`   | Footer 页脚       | ⚡   |
| 7    |   `el-icon`    | Icon 图标         | ⚡   |
| 8    |    `el-row`    | Row 行            | ⚡   |
| 9    |    `el-col`    | Col 列            | ⚡   |
| 10   |   `el-link`    | Link 链接         | ⚡   |
| 11   |   `el-text`    | Text 文本         | ⚡   |
| 12   | `el-scrollbar` | Scrollbar 滚动条  | ⚡   |
| 13   |   `el-space`   | Space 间距        | ⚡   |

### Form 表单组件

| 序号 |     触发代码      | 组件名称                        | 符号 |
| :--- | :---------------: | :------------------------------ | :--- |
| 1    | `el-autocomplete` | Autocomplete 自动补全输入框     | ⚡   |
| 2    |   `el-cascader`   | Cascader 级联选择器             | ⚡   |
| 3    |   `el-checkbox`   | Checkbox 多选框                 | ⚡   |
| 4    | `el-color-picker` | Color Picker 颜色选择器         | ⚡   |
| 5    | `el-date-picker`  | DatePicker 日期选择器           | ⚡   |
| 6    |     `el-form`     | Form 表单                       | ⚡   |
| 7    |    `el-input`     | Input 输入框                    | ⚡   |
| 8    | `el-input-number` | Input Number 数字输入框         | ⚡   |
| 9    |  `el-input-tag`   | Input Tag 标签输入框            | ⚡   |
| 10   |   `el-mention`    | Mention 提及                    | ⚡   |
| 11   |    `el-radio`     | Radio 单选框                    | ⚡   |
| 12   |     `el-rate`     | Rate 评分                       | ⚡   |
| 13   |    `el-select`    | Select 选择器                   | ⚡   |
| 14   |  `el-select-v2`   | Virtualized Select 虚拟化选择器 | ⚡   |
| 15   |    `el-slider`    | Slider 滑块                     | ⚡   |
| 16   |    `el-switch`    | Switch 开关                     | ⚡   |
| 17   | `el-time-picker`  | Time Picker 时间选择器          | ⚡   |
| 18   | `el-time-select`  | Time Select 时间选择            | ⚡   |
| 19   |   `el-transfer`   | Transfer 穿梭框                 | ⚡   |
| 20   | `el-tree-select`  | TreeSelect 树形选择             | ⚡   |
| 21   |    `el-upload`    | Upload 上传                     | ⚡   |

### Data 数据展示

| 序号 |     触发代码      | 组件名称                     | 符号 |
| :--- | :---------------: | :--------------------------- | :--- |
| 1    |    `el-avatar`    | Avatar 头像                  | ⚡   |
| 2    |    `el-badge`     | Badge 徽标                   | ⚡   |
| 3    |   `el-calendar`   | Calendar 日历                | ⚡   |
| 4    |     `el-card`     | Card 卡片                    | ⚡   |
| 5    |   `el-carousel`   | Carousel 走马灯              | ⚡   |
| 6    |   `el-collapse`   | Collapse 折叠面板            | ⚡   |
| 7    | `el-descriptions` | Descriptions 描述列表        | ⚡   |
| 8    |    `el-empty`     | Empty 空状态                 | ⚡   |
| 9    |    `el-image`     | Image 图片                   | ⚡   |
| 10   |  `el-pagination`  | Pagination 分页              | ⚡   |
| 11   |   `el-progress`   | Progress 进度条              | ⚡   |
| 12   |    `el-result`    | Result 结果                  | ⚡   |
| 13   |   `el-skeleton`   | Skeleton 骨架                | ⚡   |
| 14   |    `el-table`     | Table 表格                   | ⚡   |
| 15   |   `el-table-v2`   | Virtualized Table 虚拟化表格 | ⚡   |
| 16   |     `el-tag`      | Tag 标签                     | ⚡   |
| 17   |   `el-timeline`   | Timeline 时间线              | ⚡   |
| 18   |     `el-tour`     | Tour 漫游式引导              | ⚡   |
| 19   |     `el-tree`     | Tree 树形控件                | ⚡   |
| 20   |   `el-tree-v2`    | Tree V2 虚拟化树形控件       | ⚡   |
| 21   |  `el-statistic`   | Statistic 统计组件           | ⚡   |
| 22   |  `el-segmented`   | Segmented 分段控制器         | ⚡   |

### Navigation 导航

| 序号 |     触发代码     | 组件名称          | 符号 |
| :--- | :--------------: | :---------------- | :--- |
| 1    |    `el-affix`    | Affix 固钉        | ⚡   |
| 2    |   `el-anchor`    | Anchor 锚点       | ⚡   |
| 3    |   `el-backtop`   | Backtop 回到顶部  | ⚡   |
| 4    | `el-breadcrumb`  | Breadcrumb 面包屑 | ⚡   |
| 5    |  `el-dropdown`   | Dropdown 下拉菜单 | ⚡   |
| 6    |    `el-menu`     | Menu 菜单         | ⚡   |
| 7    | `el-page-header` | PageHeader 页头   | ⚡   |
| 8    |    `el-steps`    | Steps 步骤条      | ⚡   |
| 9    |    `el-tabs`     | Tabs 标签页       | ⚡   |

### Feedback 反馈组件

| 序号 |    触发代码     | 组件名称              | 符号 |
| :--- | :-------------: | :-------------------- | :--- |
| 1    |   `el-alert`    | Alert 提示            | ⚡   |
| 2    |   `el-dialog`   | Dialog 对话框         | ⚡   |
| 3    |   `el-drawer`   | Drawer 抽屉           | ⚡   |
| 4    | `el-popconfirm` | Popconfirm 气泡确认框 | ⚡   |
| 5    |  `el-popover`   | Popover 弹出框        | ⚡   |
| 6    |  `el-tooltip`   | Tooltip 文字提示      | ⚡   |

### Others 其他

| 序号 |   触发代码   | 组件名称       | 符号 |
| :--- | :----------: | :------------- | :--- |
| 1    | `el-divider` | Divider 分割线 | ⚡   |
