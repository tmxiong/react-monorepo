#  简介
## monorepo?
Monorepo(monolithic repository) 是管理项目代码的一个方式，指在一个项目仓库 (repo) 中管理多个模块/包 (package)，不同于常见的每个模块建一个 repo。
目前不少大型开源项目采用了这种方式，如 Babel、React、Vue 等。monorepo 管理代码只要搭建一套脚手架，就能管理（构建、测试、发布）多个 package。

使用pnpm构建的monorepo项目, 目前同时包含pc与h5及公共仓库, 目录结构如下:
```
    ├── libs
    │   ├── core    // 公共核心模块
    │   ├── ui      // 公共组件
    │   ├── api     // 服务端接口
    │   ├── util    // 公共工具模块
    ├── projects
    │   ├── h5      // 移动端站点
    │   ├── pc      // 电脑端站点
    ├── package.json
    ├── pnpm-lock.yaml
    └── pnpm-workspace.yaml
```

# 使用
* 安装pnpm
    ```
    npm install -g pnpm
    ```
* 安装依赖
  > 因为是monorepo项目, 所以必须使用pnpm    
  > pnpm使用: `https://pnpm.io/zh/installation`
  * 首次安装:
  ```
  pnpm i 
  ```
  * 单独安装外部包到某个子项目, 比如在h5(项目名称指`package.json`的`name`值)中安装antd-mobile:
  ```
  pnpm i antd-mobile -F h5
  ```
  * 安装本地包到某个子项目, 比如在h5中安装ui包:
    ```
    // 1. h5的pacakge.json dependencies增加:
    "@libs/ui": "workspace:*" // * 表示不考虑版本号
    // 2. 根目录执行
    pnpm i
    ```
* 启动
  ```
  npm run dev:h5
  npm run dev:pc
  ```
* 打包
  ```
  npm run build:h5
  npm run build:pc
  ```
