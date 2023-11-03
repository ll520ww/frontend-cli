# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

## 提交规范

按照规范来提交代码可以大大增加提交时的可读性

提交规范的语法为 git commit -m "feat: 你的内容" 可以根据不同的情况来提交。

- feat: 新功能（feature）
- fix: 修补 bug
- docs: 文档（documentation）
- style: 格式（不影响代码运行的变动）
- refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）
- chore: 构建过程或辅助工具的变动
- revert: 撤销，版本回退
- perf: 性能优化
- test：测试
- improvement: 改进
- build: 打包
- ci: 持续集成

## 解决 commit 无法检测问题

```bash
chmod 777 .husky/*
```

## 动态加载路由

src/app.tsx 通过 export layout 应该可以定制 ProLayout。

umi layout 的底层就是 [ProLayout]('https://procomponents.ant.design/components/layout#menu')

## 请求

services/页面名称

## 数据流

models/业务名称

## constants配置

配置标题 and 服务前缀

## 开发

本地开发插入依赖 npm i 开发编译 npm start

## 线上

编译 npm run build

