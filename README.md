# vue3-mobile-scaffold
```
vue3脚手架，这个是提供给移动端能快速搭建项目而使用。
整体项目是使用vue(3.0.7) && vuex(4.0.0) && vue-router(4.0.5) && vant(3.0)，兼容es6,7代码规范。
打包出来项目兼容安卓5.0以上，分多环境配置，该脚手架能满足移动端绝大部分功能开发。
有问题可以提issues，我会及时回复。谢谢大家支持。
```

## Project setup 安装项目 需要node12环境以上
```
npm install
```

## Project cli 安装
```
npm uninstall vue-cli -g
npm install -g @vue/cli  
yarn global add @vue/cli
```

## Project gui 可视化监控
```
vue ui
```

### Compiles and hot-reloads for development 运行开发模式
```
npm run dev
```

### Install vue-cli-service 安装vue-cli
```
yarn add vue-cli-service -S
```

### Compiles and minifies for production 构造代码
```
npm run build_dev
```

### Run your tests 跑测试
```
npm run build_test
```

### Run your online 跑线上
```
npm run build_product
```

### Lints and fixes files 代码检验跑eslint
```
npm run lint
```

### Run your end-to-end tests 单元测试
```
npm run test:e2e
```

### Run your unit tests 模块测试
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Tech Stack
```
 打包构建：Babel Webpack(4.x)
 代码风格：组件化
 UI：vant
 热更新：true
 包管理：Yarn || Npm
 框架库：vue(3.0.7) && vuex(4.0.0) 
 路由：vue-router(4.0.5)
 JS：ES6、ES7
 样式：less
 状态管理：vuex
 Ajax：Fetch
 跨域: 基于 CORS 实现
 代码校验: Eslint(airbnb)
 性能优化: true
 样式单位：px2rem
 设计搞尺寸：375px
 字体尺寸：+2px
 按需加载：true
 图片转svg：true
 上拉加载：true
 下拉更新：true
 est样式库：true
 兼容安卓5.0以上：ture
 测试用例：e2e && unit
 错误日志：接入fundebug
``` 
 
### Project Structure
```
├── vue.config.js              webpack配置
├── package.json               依赖包文件
├── cypress.json               cypress配置文件
├── babel.config.js            babel配置文件
├── .env.development           开发环境变量
├── .env.test                  测试环境变量
├── .env.production            生产环境变量
│
├── tests                      测试案例
│   ├──e2e                     e2e测试案例
│   └──unit                    unit测试案例
│
├── node_modules               node模块目录
├── dist                       打包文件
├── public                     初始模版
│   ├──common                  外部js文件
│   ├──favicon.ico
│   └──index.html              初始inden.html
│
├── src
│   ├── assets                 静态资源
│   │   ├── css              
│   │   ├── images  
│   │   ├── js   
│   │   └── less        
│   │   │   ├── common.less    公用基本样式
│   │   │   └── util.less      公用样式函数
│   ├── components             组件
│   │   ├── Confirm            组件名（名字母大写）
│   │   │   ├── Confirm.less   组件样式less
│   │   │   └── Confirm.vue    组件逻辑代码
│   │   ├── Demo               原型模板
│   │   │   
│   │   ├── views              页面
│   │   │   ├── UserIndex      
│   │   │   │   ├── UserIndex.less   页面样式less
│   │   │   │   └── UserIndex.vue    页面逻辑代码
│   │   │   └── Index.vue       ajax模块
│   │   │   ├── Demo            原型模板
│   │   │   
│   │   ├── shims-vue.d.js     
│   │   ├── shims-tsx.d.js     
│   │   ├── App.vue            js框架
│   │   ├── main.js            构造核心js （环境配置）
│   │   ├── store.js           数据处理器
│   │   └── routes.js          前端路由
└── 
```
