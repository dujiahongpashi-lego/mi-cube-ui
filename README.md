# 你的礼物--MI智能魔方PC版程序
- 需要[小米智能魔方](https://www.mi.com/buy/detail?product_id=11051)，若链接失效可全网搜索“小米智能魔方”
- 小米智能魔方的姊妹“计客Giiker超级魔方系列”未做验证，不保证兼容性
- 请理性消费，请理性消费，请理性消费。重要的事情说三遍！

### 墙裂建议不要冲动消费。如果没有魔方，请仔细阅反复阅读文档以及代码后，确认自己动手能力可以HOLD住此程序，再考虑购买魔方商品 ！！！

***注意：对于零编程基础的观众，运行此程序可能有些困难。因为毕竟是从源码开始，而不是封装好的可执行程序。***

代码是JS的。相比Python，JS的各种库也非常丰富，而且不管是PC端（NodeJS）、WEB（如React、VUE）还是手机APP（React Native，各类小程序等），JS适应性更强。***所以我认为JS更适合你拿来做各种魔改。***

#### 任何使用问题，欢迎在视频下方留言讨论

------
## 关于运行该程序，你需要知道的

1. 程序功能请参考程序演示视频
1. 通过源码运行程序，你需要有一定的NodeJS基础
1. 本程序是WEB版纯前端程序，基于React
1. 本程序框架通过create-react-app自动创建，所以保留了框架自带的README内容，放在这篇文档的最后。因此程序的一些基础启动和调试步骤也可以在最后找到。
1. 运行前别忘了先 `npm i`
1. 3D部分使用了three.js，除此之外无再引入任何其他库，以尽可能的精简。
1. `npm start`后会使用HTTPS，这是让浏览器解除此程序对蓝牙使用的限制。启动后你的浏览器会出安全访问提示，直接通过就好。如果只希望通过[http://localhost:3000](http://localhost:3000)访问，你也可以在`package.json`中关掉HTTPS。
1. 如果需要装SSH证书什么的，请自行寻找教程。好像可能也不需要这一步，我忘了。
1. 不管是手机端还是PC端访问，只验证了Chrome浏览器。
1. 魔方连接不上，可以多试几次。我常用的办法是：打开F12，看输出信息，判断是否连接成功。搜索不到时，魔方快速转动4下，进入魔方自带的智能家居模式，然后再拧两下，就能搜到了。刷新页面会断开连接，连接断开的标志是魔方快速滴滴滴3声。如果不断开旧连接则没办法进行新连接，因此当你不确定是否有旧连接是保持还是断开时，可用官方APP进行连接后，再断开魔方，以确保断开任何旧连接。
1. 魔方和浏览器成功连接后，魔方才会正确的显示出自己的名字。


------
## 关于程序实现，我需要告诉你的
1. 3D魔方的实现参考的是[这篇文章](https://zhuanlan.zhihu.com/p/33580374)，感谢作者！
1. 实现乐高主控连接魔方，用的是micropython的蓝牙API；此程序是Web Bluetooth。乐高主控内部支持micropython，而Chrome浏览器内部支持Web Bluetooth。
1. 蓝牙协议本身不再赘述。使用任何一款蓝牙调试工具，都可以找到魔方数据的CHARACTERISTIC地址，它支持Read和Notify。乐高主控读数据使用的是主动循环Read，而此程序用的是接收Notify触发回调的方式。
1. 魔方数据经过parser解析后，数据顺序参考[大神资料](https://github.com/wachino/xiaomi-mi-smart-rubik-cube)中给出来的图片里的顺序即可。
1. 乐高机器人中，色块顺序需要按魔方机器人认识的内部数据顺序调整，而此程序中，色块需要映射到27个3D图形块上。
1. 判断魔方转动，原理是判断转动前后块0和块26的前后位置。这样做的限制可想而知：首先你不能转动的太快，而且只能判断单次单面转动90度，等等，还有很多问题。。。。啊，如此多的漏洞，我也是为了省事，剩下的，靠你的智慧来进行完善就好了！
1. 不接受提BUG，哈哈，你自己改就行。欢迎随意魔改，尽情使劲儿改吧！


------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
