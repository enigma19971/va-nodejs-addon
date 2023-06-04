const lib = require('./build/Release/Decode.node')
    // utils
function sleep(t) {
    var start = new Date().getTime();
    while (true) {
        if (new Date().getTime() - start > t) {
            break;
        }
    }
}

function doSomething() {
    for (let i = 0; i < 10; i++) {
        sleep(500)
        console.log('current time in node,', new Date().getTime());
    }
}
//========================================================================================
//                          Example OF Grabbing VIDEO and AUDIO
//========================================================================================
//step 1: init the lib
lib.Open()

//step 2: set callbacks here, we support 'Video', 'Audio', 'Error' 3 msg types.
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
    //step 3: set uri, and begin to grab video and audio frames
lib.SetUri('https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv'); // can change to your own rtmp 

//step 4: you can your own work 
doSomething();

//step 5: finish
lib.Close()