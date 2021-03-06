## 什么是微前端？

微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。-- [Micro Frontends 官网](https://micro-frontends.org/)

**核心价值**：

- 技术栈无关
- 独立开发、独立部署
- 增量升级
- 独立运行时

**讨论：**

- 如果是 widget 级别，那么微前端跟业务组件的区别在哪里？微前端到底是因何而生？

- **微前端的核心价值在于 "技术栈无关"，**

  **微前端首先解决的，是如何解构巨石应用**

- **玉伯：**今天看各 BU 的业务问题，微前端的前提，还是得有主体应用，然后才有微组件或微应用，解决的是可控体系下的前端协同开发问题（含空间分离带来的协作和时间延续带来的升级维护）

- **kuitos：**「空间分离带来的协作问题」是在一个规模可观的应用的场景下会明显出现的问题，而「时间延续带来的升级维护」几乎是所有年龄超过 3 年的 web 应用都会存在的问题。

- 我认为正确的微前端方案的目标应该是：方案上跟使用 iframe 做微前端一样简单，同时又解决了 iframe 带来的各种体验上的问题。

**话题：**

- [当前市面上的微前端是否有真正解决方案？-- 知乎](https://www.zhihu.com/question/427695845/answer/1557432112)

## Why not iframe?

https://www.yuque.com/kuitos/gky7yw/gesexv

## 微前端解决方案

- ##### [QIANKUN](https://qiankun.umijs.org/zh/guide)（蚂蚁）

- ##### [EMP](https://github.com/efoxTeam/emp/blob/main/README-zh_CN.md)（YY 中台web 团队）

- ...



## qiankun