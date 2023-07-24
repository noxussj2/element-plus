<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Discord-%23000?style=flat-square&logo=discord&logoColor=%235865F2">
    <img src="https://img.shields.io/badge/vscode-%23000?style=flat-square&logo=visualstudio&logoColor=%23007ACC">
    <img src="https://img.shields.io/badge/noxussj2-%23000?style=flat-square&logo=wechat&logoColor=%2307C160">
</p>

# Element Plus Snippets

基于 `Element Plus` 实现的一款代码提示插件

语法采用 `4` 个空格缩进的形式

## 特性

-   开箱即用：安装插件后，即可直接在代码中使用

-   组件支持：提供了大部分常用组件的语法提示

## 开始第一个语法提示

在 `.vue` 文件中输入 `el-` 时就会出现一系列 `Element Plus` 组件的代码提示。

<img src="./images/el2.png">

<br />

## 目前支持的组件提示

| 序号 |           触发建议            | 说明                             |
| :--- | :---------------------------: | :------------------------------- |
| 1    |         `<el-button>`         | `Button 按钮`                    |
| 2    |          `<el-row>`           | `Layout 行布局`                  |
| 3    |          `<el-col>`           | `Layout 列布局`                  |
| 4    |          `<el-link>`          | `Link 链接`                      |
| 5    |       `<el-scrollbar>`        | `Scrollbar 滚动条`               |
| 6    |        `<el-checkbox>`        | `Checkbox 多选框`                |
| 7    |      `<el-date-picker>`       | `Date Picker 日期选择器`         |
| 7    |   `<el-date-picker--year>`    | `Date Picker 日期选择器（年份）` |
| 7    |   `<el-date-picker--month>`   | `Date Picker 日期选择器（月份）` |
| 7    | `<el-date-picker--daterange>` | `Date Picker 日期选择器（范围）` |
| 7    | `<el-date-picker--datetime>`  | `Date Picker 日期选择器（时间）` |
| 8    |          `<el-form>`          | `Form 表单`                      |
| 9    |         `<el-input>`          | `Input 输入框`                   |
| 9    |    `<el-input--password>`     | `Input 输入框（密码）`           |
| 9    |    `<el-input--textarea>`     | `Input 输入框（文本域）`         |
| 10   |         `<el-radio>`          | `Radio 单选框`                   |
| 11   |         `<el-select>`         | `Select 选择器`                  |
| 11   |    `<el-select--multiple>`    | `Select 选择器（多选）`          |
| 12   |         `<el-switch>`         | `Switch 开关`                    |
| 13   |      `<el-time-picker>`       | `Time Picker 时间选择器`         |
| 14   |      `<el-time-select>`       | `Time Select 时间选择器`         |
| 15   |        `<el-calendar>`        | `Calendar 日历`                  |
| 16   |        `<el-carousel>`        | `Carousel 走马灯`                |
| 17   |         `<el-image>`          | `Image 图片`                     |
| 18   |       `<el-pagination>`       | `Pagination 分页`                |
| 19   |         `<el-table>`          | `Table 表格`                     |
| 20   |          `<el-tag>`           | `Tag 标签`                       |
| 21   |       `<el-breadcrumb>`       | `Breadcrumb 面包屑`              |
| 22   |          `<el-tabs>`          | `Tabs 标签页`                    |
| 23   |         `<el-dialog>`         | `Dialog 对话框`                  |
| 24   |         `<el-drawer>`         | `Drawer 抽屉`                    |

## 详细代码片段

### Basic 基础组件

```html
<!-- el-button -->
<el-button>Default</el-button>

<!-- el-row -->
<el-row></el-row>

<!-- el-col -->
<el-col></el-col>

<!-- el-link -->
<el-link href="https://element-plus.org" target="_blank">default</el-link>

<!-- el-scrollbar -->
<el-scrollbar height="400px"></el-scrollbar>
```

### Form 表单组件

```html
<!-- el-checkbox -->
<el-checkbox-group v-model="checkList">
    <el-checkbox label="Option 1" />
    <el-checkbox label="Option 2" />
    <el-checkbox label="Option 3" />
</el-checkbox-group>

<!-- el-date-picker -->
<el-date-picker v-model="value" type="date" placeholder="请选择日期" />

<!-- el-date-picker--year -->
<el-date-picker v-model="value" type="year" placeholder="请选择年份" />

<!-- el-date-picker--month -->
<el-date-picker v-model="value" type="month" placeholder="请选择月份" />

<!-- el-date-picker--daterange -->
<el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />

<!-- el-date-picker--datetime -->
<el-date-picker v-model="value" type="datetime" placeholder="请选择日期时间" />

<!-- el-form -->
<el-form ref="formRef" :model="form" label-width="auto">
    <el-form-item label="Activity name" prop="name">A</el-form-item>
    <el-form-item label="Activity zone" prop="zone">B</el-form-item>
    <el-form-item label="Activity time" prop="time">C</el-form-item>
</el-form>

<!-- el-input -->
<el-input v-model="input" placeholder="请输入" />

<!-- el-input--password -->
<el-input v-model="input" type="password" placeholder="请输入" show-password />

<!-- el-input--textarea -->
<el-input v-model="textarea1" :rows="5" type="textarea" placeholder="请输入" />

<!-- el-radio -->
<el-radio-group v-model="radio">
    <el-radio label="A">Option A</el-radio>
    <el-radio label="B">Option B</el-radio>
    <el-radio label="C">Option C</el-radio>
</el-radio-group>

<!-- el-select -->
<el-select v-model="value" placeholder="请选择">
    <el-option label="Options1" value="1" />
    <el-option label="Options2" value="2" />
</el-select>

<!-- el-select--multiple -->
<el-select v-model="value" multiple collapse-tags placeholder="请选择">
    <el-option label="Options1" value="1" />
    <el-option label="Options2" value="2" />
</el-select>

<!-- el-switch -->
<el-switch v-model="value" />

<!-- el-time-picker -->
<el-time-picker v-model="value" placeholder="请选择时间" />

<!-- el-time-select -->
<el-time-select v-model="value" start="08:30" step="00:15" end="18:30" placeholder="请选择时间" />
```

### Data 数据展示

```html
<!-- el-calendar -->
<el-calendar v-model="value" />

<!-- el-carousel -->
<el-carousel trigger="click" height="150px">
    <el-carousel-item> container1 </el-carousel-item>
    <el-carousel-item> container2 </el-carousel-item>
    <el-carousel-item> container3 </el-carousel-item>
</el-carousel>

<!-- el-image -->
<el-image :src="url" :preview-src-list="[url]" fit="cover" />

<!-- el-pagination -->
<el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[100, 200, 300, 400]"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
/>

<!-- el-table -->
<el-table :data="tableData" :style="{ width: '100%' }">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
</el-table>

<!-- el-tag -->
<el-tag :style="{ marginRight: '6px' }">Tag 1</el-tag>
<el-tag :style="{ marginRight: '6px' }" type="success">Tag 2</el-tag>
<el-tag :style="{ marginRight: '6px' }" type="info">Tag 3</el-tag>
<el-tag :style="{ marginRight: '6px' }" type="warning">Tag 4</el-tag>
<el-tag :style="{ marginRight: '6px' }" type="danger">Tag 5</el-tag>
```

### Navigation 导航

```html
<!-- el-breadcrumb -->
<el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>

<!-- el-tabs -->
<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
</el-tabs>
```

### Feedback 反馈组件

```html
<!-- el-dialog -->
<el-dialog v-model="show" title="Shipping address">
    <main>container</main>
    <template #footer>
        <span class="dialog-footer">
            <el-button @click="show = false">Cancel</el-button>
            <el-button type="primary" @click="show = false"> Confirm </el-button>
        </span>
    </template>
</el-dialog>

<!-- el-drawer -->
<el-drawer v-model="show" title="I have a nested table inside!" direction="rtl" size="50%">
    <main>container</main>
</el-drawer>
```
