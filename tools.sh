install gstreamer
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio


测试视频 需要修改尺寸
ffplay -i raw_yuv420 1.yuv -pixel_format yuv420p -s 1280x720 


测试音频 
for((i=1;i<=1300;i++)) do echo $i.pcm;done | xargs -i cat {} >> out.pcm
可能需要修改参数
ffplay -f f32le -ar 48000 -ac 2 out.pcm





