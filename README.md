## 通讯录例子

书籍《揭秘Angular》第 19 章例子，

### 准备工作
- 请确保你的 node.js 版本 >= 6.0
- 运行 `npm install -g ionic cordova` 安装 ionic 和 cordova

### 运行 Web 开发版

- 运行 `npm install` 或者 `yarn install` 安装依赖
- 运行 `npm run ionic:serve` 构建并启动本地Server，构建完成后自动打开浏览器

### 在模拟器中运行
请确保已安装并配置好 ios（Xcode） 或 android（Android Studio） 的开发环境。


- 运行 `ionic cordova platform add ios` 或者 `ionic cordova platform add android` 添加运行平台
- 运行 `ionic cordova run ios` 或者 `ionic cordova run android` 启动模拟器运行应用