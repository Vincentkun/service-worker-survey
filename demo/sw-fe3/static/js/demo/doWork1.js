// postMessage() 是将数据传回主线程的一种方法.
self.addEventListener(
	'message',
	function(e) {
		// Worker 直接返回了传递给它的消息
		self.postMessage(e.data);
	},
	false
);
