exports.init = function() {
	// Worker 与其父网页之间的通信是通过事件模型和 postMessage() 方法实现的
	// postMessage() 可以接受字符串或 JSON 对象作为单个参数，具体取决于您的浏览器/版本
	// 新式浏览器的最新版支持传递 JSON 对象

	var worker = new Worker('js/demo/doWork1.js');

	// 在主网页中调用 postMessage() 时，我们的 Worker 通过定义 message 事件的 onmessage 处理程序来处理消息
	// 可以在 Event.data 中访问消息有效负载（此示例中为“Hello World”）。

	worker.addEventListener(
		'message',
		function(e) {
			console.log('Worker said: ', e.data);
		},
		false
	);

	// 将字符串“Hello World”传递给了 doWork.js 中的 Worker
	worker.postMessage('Hello World'); // Send data to our worker.
};
