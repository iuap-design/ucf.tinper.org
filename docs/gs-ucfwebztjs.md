# UCF-Web 整体架构设计和介绍

<a name="61a3ec66"></a>
## 一、关于UCF-Web介绍

[UCF-WEB](https://www.yuque.com/ucf-web/book) 是一个专注性能和效率的微前端框架，是 [企业级大前端基础设施 ](http://tinper.org/)[tinper ](http://tinper.org/)中提供的核心编程模型之一，通过提供云原生的前端开发方式，帮助开发者快速高效开发企业云服务的个性化产品体验，UCF-Web 与云原生编程模型的Java 解决方案 UCF-CN 配合，形成完整的云原生开发编程模型。

<a name="1SHGj"></a>
### 1.1 架构设计
UCF-Web 中将前端基础工程化能力（资源构建、开发调试等）、标准组件体系、应用状态管理和路由解决方案、前端开发规范、最佳实践案例、微前端架构设计等能力融为一体，详细架构设计参照下图：

![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564628781866-78d7d682-35d4-4317-aa36-313d641bf574.png#align=left&display=inline&height=720&name=image.png&originHeight=1440&originWidth=3236&size=2060479&status=done&width=1618)

<a name="ELJSX"></a>
### 1.2 关键特性

- 将前端技术收敛化（无需纠结对框架、工具的选型和配置）、标准化（提出规范，并结合应用开发形成最佳实践）
- 不受开源前端框架约束，并支持遗留系统迁移
- 支持多种微应用开发模式，打破铁桶一块的巨石应用
- 基于统一设计语言之上构建标准组件体系，具备一致性UI 体验
- 采用简化易理解的应用状态解决方案，没有复杂的样板代码

<a name="LCnEw"></a>
### 1.3 快速上手及规范解读

UCF-Web 中提供了两个基于 Node.js 封装的前端CLI工具-UCF-CLI 和 UCF-Scripts。

- UCF-CLI ：用户快速初始化项目，快速创建页面模板，以及其他GUI 交互模式；
- UCF-Scripts：用于实现个性化项目的前端工作流配置、前端整体资源的构建（编译、打包、压缩、合并、校验等）

![1564630699893.jpg](http://cdn.nlark.com/yuque/0/2019/jpeg/85184/1564630714849-a921a5c8-36e2-4b38-a249-6ec85c0c937c.jpeg#align=left&display=inline&height=1936&name=1564630699893.jpg&originHeight=1936&originWidth=2564&size=277841&status=done&width=2564)

初始化之后的项目规范：

```bash
.
├── LICENSE												# 开源协议
├── README.md											# 项目脚手架说明
├── docs													# 开发业务说明文档目录
│   └── README.md
├── package.json									# npm packages 依赖包
├── ucf-apps											# 【目录名不可修改】微服务应用根目录，用于加载微服务
│   ├── demo-app-org							# 组织管理示例
│   └── demo-app-staff						# 同上不在阐述
├── ucf-common										# 【目录名不可修改】公共组件、样式、图片、字体等静态资源存放
│   ├── README.md									# 描述公共组件等说明
│   └── src
├── ucf-publish										# 【目录名不可修改】构建出来的静态资源
│   ├── demo-app-org							# 组织管理示例
│   └── demo-app-staff
└── ucf.config.js									# ucf 核心配置文件
```

<a name="xs97I"></a>
### 1.4 开源推进情况

![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564631369171-ca1471d0-284b-48b9-8478-377e8a1a4ea1.png#align=left&display=inline&height=1084&name=image.png&originHeight=2168&originWidth=4044&size=2007578&status=done&width=2022)


<a name="p1tFG"></a>
## 二、UCF-Web 能力及开发模式

<a name="gt0wg"></a>
### 2.1 基础开源技术应用
ucf-web 微前端框架是工具与最佳实践融合，分两部分进行说明：

**开源前端工具：**
> ucf-web 中的 ucf-scripts 工具默认基于 webpack 4.x 进行封装，并默认集成了以下工具集：

- webpack & webpack-dev-server
- webpack loader & plugin
  - http-proxy-middleware
  - css-loader\less-loader\babel-loader
- babel v7 JavaScript编译器
- postcss相关插件（autoprefix、cssnano等）
- less 预处理器
- ES5/6/7 语法支持

**语言和开源框架：**
> ucf-web 中的微应用默认都在ucf-apps目录下，不同微应用开发遵循同一套技术栈：

- 选择基于 React.js 作为底层渲染引擎
- 选择基于ES6+新语法特性
- 异步操作统一采用 async/await 方式
- 选择基于mirrorx作为应用状态解决方案，在redux、react-redux、react-router的基础上进行了简化封装
- 选择基于tinper-bee作为基础UI组件库

<a name="lqmtY"></a>
### 2.2 体验能力

UCF-Web 中采用基于 iuap design 设计语言的前端开源组件库 tinper-bee，tinper-bee 是用友云平台大前端团队从2016 年开始开发的面向企业级应用的开源组件库。[详细体验能力可以通过：bee.tinper.org 访问。](http://bee.tinper.org/)

![屏幕快照 2019-08-01 上午11.20.43.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564629801939-145f6330-55c9-4995-82d1-1533de216247.png#align=left&display=inline&height=466&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-08-01%20%E4%B8%8A%E5%8D%8811.20.43.png&originHeight=1800&originWidth=2880&size=981386&status=done&width=746)

![屏幕快照 2019-08-01 上午11.20.48.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564629794318-41a531e6-1cfe-4d11-8fd1-f113496bce16.png#align=left&display=inline&height=1800&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-08-01%20%E4%B8%8A%E5%8D%8811.20.48.png&originHeight=1800&originWidth=2880&size=520668&status=done&width=2880)

![屏幕快照 2019-08-01 上午11.58.20.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564631975209-b8518436-ede7-436d-8800-654c43447dea.png#align=left&display=inline&height=1800&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-08-01%20%E4%B8%8A%E5%8D%8811.58.20.png&originHeight=1800&originWidth=2880&size=602089&status=done&width=2880)
<a name="umf7d"></a>
### 3.3 对微前端架构理念的实现

微前端概念的提出与实践

_我们已经从引入_[_微服务架构_](https://www.thoughtworks.com/radar/techniques/microservices)_中获得了明显的好处，微服务 架构可以让团队裁剪出独立部署的交付物以及可维护的服务。不幸的是，我们还看到许多团队在后端服务之上创建了 前端单体——一个单一，庞大和杂乱无绪的浏览器应用。我 们首选的（经过验证的）方法是将基于浏览器的代码拆分成 __微前端。在这种方法中，Web应用程序被分解为多个特性， 每个特性都由不同的前后端团队拥有。这确保每个特性都 独立于其他特性开发，测试和部署。这样可以使用多种技术 来重新组合特性——有时候是页面，有时候是组件——最终 整合成一个内聚的用户体验。_<br />_--- By 《_[_ThoughtWorks 2017技术雷达_](https://www.cnblogs.com/Wolfmanlq/p/8097663.html)_》_

从上文的节选内容可以看到，[ThoughtWorks ](https://www.cnblogs.com/Wolfmanlq/p/8097663.html)最早提出了微前端这一概念，与微服务类似。微前端也希望将某个单体架构的巨石型(Monolithic)应用转化为多个可以独立运行、独立开发、独立部署、独立维护的服务或者应用的聚合，从而满足业务快速变化及分布式多团队并行开发的需求。

微服务与微前端在软件工程中的基本原理同样相通，都是遵循单一职责(Single Responsibility)、关注分离(Separation of Concerns)、模块化(Modularity)与分而治之(Divide & Conquer)等基本的原则。

**微前端解决的核心问题：**

构建一个复杂的企业应用是一个系统性的软件工程问题，我们不断通过对技术架构、应用架构、团队协作、研发管理等方向的研究和实践来使事情变得更加美好，各种是我们所有从业人员不断思考和实践的方向。

- [x] 不同产品线选择不同技术栈，技术沉淀困难
- [x] 业务模块较多，并行开发困难，效率低
- [x] 业务模块较多，带来的耦合性问题，样式层叠严重，需要小心维护
- [x] 业务模块较多，带来的耦合性问题，改动某个模块的代码，不经意会影响其他稳定模块
- [x] 构建产出的资源包体积较大，很难合理的做好公共抽取
- [x] 脚手架太多，没有约定，或者是一个项目配一套开发工作流，且不易复用。



![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564630154820-3c6dff52-dfb4-463a-b8a8-2d7b1e9950ab.png#align=left&display=inline&height=820&name=image.png&originHeight=1640&originWidth=3640&size=932954&status=done&width=1820)

实现的关键技术挑战和特性：

![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564630110559-e8274fd0-f5fd-4a86-9369-095effbaea62.png#align=left&display=inline&height=898&name=image.png&originHeight=1796&originWidth=2408&size=1161603&status=done&width=1204)

<a name="Ko0Vc"></a>
### 3.4 最佳实践
![屏幕快照 2019-08-01 上午11.25.15.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564630009170-9dc47c7e-dbae-4f97-8ea4-46c6a0caba5f.png#align=left&display=inline&height=1800&name=%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-08-01%20%E4%B8%8A%E5%8D%8811.25.15.png&originHeight=1800&originWidth=2880&size=570638&status=done&width=2880)

![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564629956977-96bdf052-ebcb-42a5-95de-f33a76510e92.png#align=left&display=inline&height=336&name=image.png&originHeight=448&originWidth=937&size=63941&status=done&width=703)

<a name="XNdAf"></a>
## 三、推广应用情况

<a name="Eq2l9"></a>
### 3.1 部分应用情况说明
![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564631111539-c472418b-3364-4ecc-96af-9ca5b7af0865.png#align=left&display=inline&height=448&name=image.png&originHeight=448&originWidth=670&size=70856&status=done&width=670)

**用友系产品：**

- 大型混合云应用情况：NC Cloud V1909 & V1903
- iuap 云平台应用情况：iuap  V3.5.6 专属云、能力广场、开发平台、diwork 统一工作入口等
- 行业云应用情况：用友金融、畅捷通T+、能源等
- 领域云应用情况：渠道云、工程云、智能制造等

**大型企业级专属化项目：**

- 中兴通讯-供应链系统
- 江铜贵冶-智能工厂
- 绿城中国
- 华新丽华-MES
- 杭州路桥
- 绵阳九院

<a name="choLc"></a>
### 3.2 部分效果展示
![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564630857304-69b7d0fa-4805-49ef-853c-693fccd2d7c5.png#align=left&display=inline&height=207&name=image.png&originHeight=267&originWidth=960&size=439212&status=done&width=746)<br />（图示：贵冶-智能工厂）<br />![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564630840618-08e26ba4-51ce-4725-bc78-33c88505da63.png#align=left&display=inline&height=419&name=image.png&originHeight=435&originWidth=775&size=109453&status=done&width=746)<br />（图示：华新丽华-MES）

![image.png](http://cdn.nlark.com/yuque/0/2019/png/85184/1564630828234-e6d94205-5bf9-4756-bfbc-d99d76c69d2a.png#align=left&display=inline&height=389&name=image.png&originHeight=441&originWidth=845&size=71886&status=done&width=746)<br />（图示：NC Cloud 部分效果，底层采用的UCF-Web）


