
The running environment of this code is ubuntu, currently does not support windows system, if you need windows version, please contact the author contact wechat 714601476.

Browse index.js

First, import the node extension.

step1: initialize lib. Call the Open function.  
`lib.Open()`

step2 to register the callback function. Streaming media programs generally use multi-threaded decoding. When the bottom layer decodes the data frame, it calls the callback on the JS side to process it. Three types of callbacks are temporarily supported here, namely "Video", "Audio", and "Error". When the bottom layer decodes a complete data frame, the callback of Video , Audio type is called. When an error occurs at the bottom layer, the Error type callback on the JS side is invoked.
```
lib.On('Video', (frame) => {
    console.log('#Video format=', frame.format);
    console.log('#Video width=', frame.width);
    console.log('#Video height=', frame.height);
    console.log('#Video size=', frame.size);
    // console.log(frame.data);
})
lib.On('Audio', (frame) => {
    console.log('#Audio format=', frame.format);
    console.log('#Audio rate=', frame.rate);
    console.log('#Audio size=', frame.size);
    // console.log(frame.data);
})
lib.On('Error', (msg) => {
        console.log('#5', msg);
    })
```
    
step3:  to specify the decoded URI, which supports HTTP RTSP RTMP and so on.  
`lib.SetUri('https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv'); // can change to your own rtmp `


step4:  you can run your own work, because the bottom layer has developed its own thread to handle the acceptance and decoding of data streams. It will not block the operation of the JS side.
doSomething();

Finally, the function of LIB can be turned off to release resources.  
`lib.Close()`

Note: This project is developed based on gstreamer. If the plugin cannot be found during use, please install gstreamer yourself.
```
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio```
