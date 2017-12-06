# vue-demo
## How to build a project
### A simple git process
1. `git clone https://github.com/newbienb/vue-demo.git`
2. add public key in github setting ->deploy key -> add
3. add Collaborators in github setting ->Collaborators -> add
4. copy invite link
5. modify you codes
6. in root fold, press `git add .`
7. `git commit -m "comments"`
8. `git push`
9. enter username and password for submit
10. Done

### Quick Start Vue
Vue Home
`https://cn.vuejs.org/`

1. 全局安装vue客户端`npm install vue-cli -g`
2. 全局安装webpack `npm install webpack -g`
3. 使用vue-cli新建工程`vue init webpack-simple project-name`

>> note: webpack-simple 是模板名称 也可以填写诸如webpack,simple等
>> project-name 这里输入vue-demo

4. `cd vue-demo`
5. 安装依赖包 `npm install`
6. 启动测试`npm run dev` 会自动弹出vue首页
7. 发布命令`npm run build`

### 项目文件
+ 需要关注的文件列表
    * webpack.config.js(项目打包配置文件)
    * src目录(项目代码文件夹)
        - main.js(项目初始化入口)
        - App.vue(main里面加载了App.vue,主要写页面及页面逻辑)
        - assets(项目的资源文件目录，比如图片)


