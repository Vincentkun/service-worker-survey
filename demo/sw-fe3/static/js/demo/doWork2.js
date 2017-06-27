self.addEventListener(
	'message',
	function(e) {
		var data = e.data;
		switch (data.cmd) {
			case 'start':
				self.postMessage('WORKER STARTED: ' + data.msg);
				break;
			case 'stop':
				self.postMessage('WORKER STOPPED: ' + data.msg + '. (buttons will no longer work)');

				// 停止 Worker 的方法有两种：
				// 在主网页中调用 worker.terminate()，
				// 或在 Worker 本身内部调用 self.close()
				self.close();

				break;
			default:
				self.postMessage('Unknown command: ' + data.msg);
		}
	},
	false
);
