<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Discord-%23000?style=flat-square&logo=discord&logoColor=%235865F2">
    <img src="https://img.shields.io/badge/vscode-%23000?style=flat-square&logo=visualstudio&logoColor=%23007ACC">
    <img src="https://img.shields.io/badge/noxussj2-%23000?style=flat-square&logo=wechat&logoColor=%2307C160">
</p>

# Element Plus Snippets

-   主要提供 `Element Plus 🌱` 组件库语法支持

-   额外提供 `Vue3 ⚡` `ES6 ⚡` 常用语法支持

-   兼容：`.vue` `.ts` `.scss`

-   驱动更新：下一次更新条件，当下载量达到 `520` 时

<br />

## 开始第一个语法提示

在 `.vue` 文件中输入 `el-` 时就会出现一系列 `Element Plus` 组件的代码提示。

<img src="https://raw.githubusercontent.com/noxussj2/element-plus/main/images/el.png">

<br />

## `.ts` 支持

| 序号 |      触发建议      | 说明                                                       | 类型 |
| :--- | :----------------: | :--------------------------------------------------------- | :--- |
| 1    |    `importApi`     | `import { ? } from '@/api/?'`                              | ⚡   |
| 2    | `importComponents` | `import ? from '@/components/?/index.vue'`                 | ⚡   |
| 3    |      `props`       | `defineProps({})`                                          | ⚡   |
| 4    |    `propsType`     | `PropType<any[]>`                                          | ⚡   |
| 5    |      `emits`       | `defineEmits<EmitsType>`                                   | ⚡   |
| 6    |    `modelValue`    | `update:modelValue`                                        | ⚡   |
| 7    |     `forEach`      | `.forEach((x: any) => {})`                                 | ⚡   |
| 8    |       `map`        | `.map((x: any) => {})`                                     | ⚡   |
| 8    |       `find`       | `.find((x: any) => x.value === ?)`                         | ⚡   |
| 8    |       `then`       | `.then((res: any) => {})`                                  | ⚡   |
| 9    |      `rules`       | `[{ required: true, message: '请输入', trigger: 'blur' }]` | 🌱   |

<br />

## `.scss` 支持

| 序号 |   触发建议   | 说明                                | 类型 |
| :--- | :----------: | :---------------------------------- | :--- |
| 1    | `background` | `background: url('@/assets/.png');` | ⚡   |
| 2    |  `#409EFF`   | `Brand Color`                       | 🌱   |
| 3    |  `#67C23A`   | `Success Color`                     | 🌱   |
| 4    |  `#E6A23C`   | `Warning Color`                     | 🌱   |
| 5    |  `#F56C6C`   | `Danger Color`                      | 🌱   |
| 6    |  `#909399`   | `Info Color`                        | 🌱   |
| 7    |    `...`     | `...`                               | 🌱   |

<br />

## `.html` & `<template>` 支持

| 序号 |          触发建议           | 说明                                     | 类型 |
| :--- | :-------------------------: | :--------------------------------------- | :--- |
| 1    |           `v-for`           | `v-for="(item, index) in " :key="index"` | ⚡   |
| 2    |            `img`            | `<img alt="" src="@/assets/.png" />`     | ⚡   |
| 3    |         `el-button`         | `<el-button>`                            | 🌱   |
| 4    |          `el-row`           | `<el-row>`                               | 🌱   |
| 5    |          `el-col`           | `<el-col>`                               | 🌱   |
| 6    |          `el-link`          | `<el-link>`                              | 🌱   |
| 7    |       `el-scrollbar`        | `<el-scrollbar>`                         | 🌱   |
| 8    |        `el-checkbox`        | `<el-checkbox>`                          | 🌱   |
| 9    |      `el-date-picker`       | `<el-date-picker type="date">`           | 🌱   |
| 10   |   `el-date-picker--year`    | `<el-date-picker type="year">`           | 🌱   |
| 11   |   `el-date-picker--month`   | `<el-date-picker type="month">`          | 🌱   |
| 12   | `el-date-picker--daterange` | `<el-date-picker type="daterange">`      | 🌱   |
| 13   | `el-date-picker--datetime`  | `<el-date-picker type="ddatetimeate">`   | 🌱   |
| 14   |          `el-form`          | `<el-form>`                              | 🌱   |
| 15   |         `el-input`          | `<el-input>`                             | 🌱   |
| 16   |    `el-input--password`     | `<el-input type="password">`             | 🌱   |
| 17   |    `el-input--textarea`     | `<el-input type="textarea">`             | 🌱   |
| 18   |         `el-radio`          | `<el-radio>`                             | 🌱   |
| 19   |         `el-select`         | `<el-select>`                            | 🌱   |
| 20   |    `el-select--multiple`    | `<el-select multiple>`                   | 🌱   |
| 21   |         `el-switch`         | `<el-switch>`                            | 🌱   |
| 22   |      `el-time-picker`       | `<el-time-picker>`                       | 🌱   |
| 23   |      `el-time-select`       | `<el-time-select>`                       | 🌱   |
| 24   |        `el-calendar`        | `<el-calendar>`                          | 🌱   |
| 25   |        `el-carousel`        | `<el-carousel>`                          | 🌱   |
| 26   |         `el-image`          | `<el-image>`                             | 🌱   |
| 27   |       `el-pagination`       | `<el-pagination>`                        | 🌱   |
| 28   |         `el-table`          | `<el-table>`                             | 🌱   |
| 29   |          `el-tag`           | `<el-tag>`                               | 🌱   |
| 30   |       `el-breadcrumb`       | `<el-breadcrumb>`                        | 🌱   |
| 31   |          `el-tabs`          | `<el-tabs>`                              | 🌱   |
| 32   |         `el-dialog`         | `<el-dialog>`                            | 🌱   |
| 33   |         `el-drawer`         | `<el-drawer>`                            | 🌱   |

<br />

## `.vue` 支持

| 序号 |     触发建议      | 说明                         | 类型 |
| :--- | :---------------: | :--------------------------- | :--- |
| 1    |    `template`     | `<template>`                 | ⚡   |
| 2    | `script-ts-setup` | `<script lang="ts" setup>`   | ⚡   |
| 3    |      `scss`       | `<style lang="scss" scoped>` | ⚡   |
| 4    |   `scss-import`   | `@import './index.scss';`    | ⚡   |
