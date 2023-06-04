
The running environment of this code is ubuntu, currently does not support windows system, if you need windows version, please contact the author contact wechat 714601476.

First, import the node extension.

step1: initialize lib. Call the Open function.

step2 to register the callback function. Streaming media programs generally use multi-threaded decoding. When the bottom layer decodes the data frame, it calls the callback on the JS side to process it. Three types of callbacks are temporarily supported here, namely "Video", "Audio", and "Error". When the bottom layer decodes a complete data frame, the callback of Video , Audio type is called. When an error occurs at the bottom layer, the Error type callback on the JS side is invoked.

step3:  to specify the decoded URI, which supports HTTP RTSP RTMP and so on.

step4:  you can run your own work, because the bottom layer has developed its own thread to handle the acceptance and decoding of data streams. It will not block the operation of the JS side.

Finally, the function of LIB can be turned off to release resources.
