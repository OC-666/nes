# 老霸王
红白机模拟器，[试玩 Flappy Bird](https://oc-666.github.io/nes/?rom=https%3A%2F%2Fraw.githubusercontent.com%2Fretrobrews%2Fnes-games%2Fmaster%2Fflappybird.nes)

+ [x] 免费、无广告
+ [x] 运行本地 rom
+ [x] 点开（[含 rom 下载链接的链接](https://oc-666.github.io/nes/?rom=https%3A%2F%2Fraw.githubusercontent.com%2Fretrobrews%2Fnes-games%2Fmaster%2Fflappybird.nes)、本地 rom 文件）即玩
+ [x] 支持键盘和手柄
+ [ ] 按键映射
+ [x] 回溯（不小心死了？回退到 10 秒前！）
+ [ ] 一次安装、不怕断网
+ [ ] 存档
+ [ ] 联机

### 链接
+ [快捷键说明](./docs/shortcut_key.md)
+ [TODO](https://github.com/OC-666/nes/wiki/TODO)

### 本地开发
> 现有未知的问题导致不能使用 `npm run dev`，每次修改代码后，要手动 `npm run build`

``` bash
git clone https://github.com/OC-666/nes.git
cd nes
npm install
npm run build # 编译
npm run serve # 开启静态文件服务器
```

然后浏览器访问 http://127.0.0.1:8080/nes/

### 发布到你自己的 Github pages
先 fork 到你自己的 Github 账号

``` bash
git clone https://github.com/OC-666/nes.git # 这里的仓库链接要换成你 fork 后的链接
cd nes
npm install
npm run publish
```

然后在 Github 的仓库设置里打开 Github pages 服务就行了。

## 感谢
+ 图标是 DALL.E 生成的，感谢 DALL.E
+ 模拟器的启动器使用的是 [Nostalgist.js](https://nostalgist.js.org/)，感谢 [arianrhodsandlot](https://github.com/arianrhodsandlot)，ta 还做了一个可以[玩更多老游戏的平台](https://retroassembly.com/)
