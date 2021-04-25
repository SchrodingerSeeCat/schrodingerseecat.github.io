(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{586:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("本篇文章使用github action自动构建一个Vue3项目，并发布至github pages")])]),t._v(" "),a("h3",{attrs:{id:"_1-创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建仓库"}},[t._v("#")]),t._v(" 1. 创建仓库")]),t._v(" "),a("p",[t._v("正常创建即可")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/dingwanli/picture/raw/master/20210424115754.png",alt:"image-20210424115925196"}}),t._v(" "),a("h3",{attrs:{id:"_2-创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建项目"}},[t._v("#")]),t._v(" 2. 创建项目")]),t._v(" "),a("p",[a("code",[t._v("vite")]),t._v("构建速度特别快，因此本项目使用"),a("code",[t._v("vite")]),t._v("进行演示")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("初始化项目")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init @vitejs/app demo -- --template vue\n")])])])]),t._v(" "),a("li",[a("p",[t._v("进入项目安装依赖")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" demo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("启动测试")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])])]),t._v(" "),a("li",[a("p",[t._v("访问测试\n"),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/dingwanli/picture/raw/master/20210424114611.png",alt:"image-20210424114610907"}})])])]),t._v(" "),a("h3",{attrs:{id:"_3-更改vue3的打包路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-更改vue3的打包路径"}},[t._v("#")]),t._v(" 3. 更改vue3的打包路径")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vite.config.js")]),t._v("添加"),a("code",[t._v("base")]),t._v("字段，"),a("code",[t._v("base")]),t._v("的值为仓库的名称，如果要部署到"),a("code",[t._v("[用户名].github.io")]),t._v("可以不写")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vite'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vitejs/plugin-vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \tplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tbase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo"')]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-更改打包命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-更改打包命令"}},[t._v("#")]),t._v(" 4. 更改打包命令")]),t._v(" "),a("p",[t._v("这步是可选的，仅对于项目中引入"),a("code",[t._v("element-plus")]),t._v("的项目而言，因为如果引入"),a("code",[t._v("element-plus")]),t._v("的话，默认的打包方式会报错")]),t._v(" "),a("p",[t._v("打开"),a("code",[t._v("package.json")]),t._v("，修改"),a("code",[t._v("build")]),t._v("命令")]),t._v(" "),a("p",[t._v("将")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-tsc --noEmit && vite build"')]),t._v("\n")])])]),a("p",[t._v("更改为")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-tsc --noEmit --skipLibCheck && vite build"')]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-代码提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-代码提交"}},[t._v("#")]),t._v(" 5. 代码提交")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -M main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/用户名/demo.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main\n")])])]),a("h3",{attrs:{id:"_6-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-token"}},[t._v("#")]),t._v(" 6. token")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("申请token")]),t._v(" "),a("p",[t._v("勾选"),a("code",[t._v("repo")]),t._v("即可")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/dingwanli/picture/raw/master/20210424115925.png",alt:"image-20210424115925196"}})]),t._v(" "),a("li",[a("p",[t._v("复制token到"),a("code",[t._v("secrets")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/dingwanli/picture/raw/master/20210424120232.png",alt:"image-20210424120232037"}})])]),t._v(" "),a("h3",{attrs:{id:"_7-编写action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-编写action"}},[t._v("#")]),t._v(" 7. 编写action")]),t._v(" "),a("p",[t._v("在项目根目录下新建"),a("code",[t._v(".github/workflows/ci.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作流名称，不设置的话默认取配置文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deploy\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定触发 workflow 的条件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定触发事件时，可以限定分支或标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前是 只有 main分支上触发 push 事件时才执行工作流任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作流执行的一个或多个任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务运行的容器类型（虚拟机环境）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务执行的步骤")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤名称")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout 🛎️\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用的操作 actions，可以使用公共仓库，本地仓库，别人的仓库的action")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2.3.1\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build 🔧\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy 🚀\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建发布 Github pages")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@4.1.1\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该步骤所需的环境变量")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACTION_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_8-再次提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-再次提交"}},[t._v("#")]),t._v(" 8. 再次提交")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"action"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("p",[t._v("查看部署状态")]),t._v(" "),a("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://gitee.com/dingwanli/picture/raw/master/20210424122821.png",alt:"image-20210424122821303"}}),t._v(" "),a("h3",{attrs:{id:"_9-访问测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-访问测试"}},[t._v("#")]),t._v(" 9. 访问测试")]),t._v(" "),a("p",[a("code",[t._v("settings")]),t._v("中查看"),a("code",[t._v("pages")]),t._v("的地址")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/dingwanli/picture/raw/master/20210424123345.png",alt:"image-20210424122821303"}}),t._v(" "),a("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://gitee.com/dingwanli/picture/raw/master/20210424123457.png",alt:"image-20210424123457844"}})])}),[],!1,null,null,null);s.default=e.exports}}]);