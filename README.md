"# va-nodejs-addon"
grab video and audio frames from media stream in the nodejs addon enviroment.  the video output format is RGBA,  the audio output format is s16 pcm 

该代码的运行环境为 ubuntu ， 目前不支持 windows 系统， 如果需要 windows 版本， 可联系作者 contact ***wechat  714601476***。

index.js

`const lib = require('./build/Release/Decode.node')`

`// utils`

`function sleep(t) {`

​    `var start = new Date().getTime();`

​    `while (true) {`

​        `if (new Date().getTime() - start > t) {`

​            `break;`

​        `}`

​    `}`

`}`



`function doSomething() {`

​    `for (let i = 0; i < 10; i++) {`

​        `sleep(500)`

​        `console.log('current time in node,', new Date().getTime());`

​    `}`

`}`

`//========================================================================================`

`//                          Example OF Grabbing VIDEO and AUDIO`

`//========================================================================================`

`//step 1: init the lib`

`lib.Open()`



`//step 2: set callbacks here, we support 'Video', 'Audio', 'Error' 3 msg types.`

`lib.On('Video', (frame) => {`

​    `console.log('#Video format=', frame.format);`

​    `console.log('#Video width=', frame.width);`

​    `console.log('#Video height=', frame.height);`

​    `console.log('#Video size=', frame.size);`

​    `// console.log(frame.data);`

`})`

`lib.On('Audio', (frame) => {`

​    `console.log('#Audio format=', frame.format);`

​    `console.log('#Audio rate=', frame.rate);`

​    `console.log('#Audio size=', frame.size);`

​    `// console.log(frame.data);`

`})`

`lib.On('Error', (msg) => {`

​        `console.log('#5', msg);`

​    `})`

`//step 3: set uri, and begin to grab video and audio frames`

`lib.SetUri('https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv'); // can change to your own rtmp` 

`//step 4: you can your own work` 

`doSomething();`

`//step 5: finish`

`lib.Close()`


首先， 导入 node 扩展程序。

第一步，初始化 lib .  调用 Open 函数。

第二步， 注册回调函数， 流媒体程序一般采用多线程解码，当底层解码完数据帧后，调用 JS 端的回调来处理。 这里暂时支持三种类型的回调，即“Video”, "Audio", 和"Error"。 当底层解码一个完整的数据帧时候，调用 Video , Audio 类型的回调。 当底层发生错误时候，调用 JS 端的 Error 类型回调。

第三步，指定解码的 URI,  支持 HTTP   RTSP  RTMP 等。

第四步， 你可以运行自己的工作， 因为底层自己开发了线程处理数据流的接受和解码。并不会阻塞 JS 端的运行。

最后， 可以关闭 LIB 的功能，释放资源。


注意： 本项目基于gstreamer开发， 如果在使用过程中，碰到plugin找不到的情况，请自行安装gstreamer.

`sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio`


