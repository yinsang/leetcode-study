React
一层薄的Node层
video标签能满足90%的场景，但有些场景没办法很好的支持；
- 内存控制
- 自适应码率
media source extensions 媒体串可以通过js创建，并且通过使用 audio video进行播放

MSE 让我们能够根据内容获取的大小和频率，或是内存占用详情（例如什么时候缓存被回收），进行更加精准地控制。它是基于它可扩展的 API 建立自适应比特率流客户端（例如 DASH 或 HLS 的客户端）的基础。
根据设备和网络情况操作sourcebuffer，下载对应码率的视频块 track buffer

hls.js 等库是基于mse的上层建筑。苹果推出的 自适应码率的。safari内核层就做完了。

mepg dash hls对视频分段长度有严格限制。dash更自由一些。

两个协议都经过了很多迭代。最终技术选择上取决于视频来源，播放在哪。

三星的avplay，对比发现dash性能更好。需要测试以后才能知道。
mse受限制于浏览器，有些智能电视厂商自带的SDK可以使用更多的cpu、内存等
根据产品进行发布在哪平台，使用哪些sdk

hls协议 .m3u8 存的是一系列的 对应的码率/分辨率 
有时候音频、字幕是分开的。

加密 media key session 有的 lisence 需要二次校验
 证书不匹配怎么办呢？有时候会提供none