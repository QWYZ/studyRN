import { PanResponder } from 'react-native';

/**Blob转base64
 * @param {Blob} blob
 */
export const blobToBase64 = (data) => {
	return new Promise((resolve, reject) => {
		const blob = new Blob([data], { type: "image/png" }); //类型一定要写！！！
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

/**手势滑动监听示例
 * @description 参考文档：https://reactnative.cn/docs/gesture-responder-system
 */
export const panResponder = PanResponder.create({
	//在用户开始触摸的时候（手指刚刚接触屏幕的瞬间），是否愿意成为响应者？
	onStartShouldSetPanResponder: () => true, 
	//如果 View 不是响应者，那么在每一个触摸点开始移动（没有停下也没有离开屏幕）时再询问一次：是否愿意响应触摸交互呢？
	onMoveShouldSetPanResponder: () => true,
	//View 现在要开始响应触摸事件了。这也是需要做高亮的时候，使用户知道他到底点到了哪里。
	onPanResponderGrant: (evt) => {
		console.log('开始移动：',evt);
	},
	//响应者现在“另有其人”而且暂时不会“放权”，请另作安排。
	onResponderReject:(evt) =>{
		console.log('onResponderReject',evt);
	},
	//用户正在屏幕上移动手指时（没有停下也没有离开屏幕）。
	onPanResponderMove: (evt, gs) => {
		// console.log('正在移动：X轴：' + gs.dx + '，Y轴：' + gs.dy);
	},
	//触摸操作结束时触发，比如"touchUp"（手指抬起离开屏幕）。
	onPanResponderRelease: (evt, gs) => {
		console.log('结束移动：X轴移动了：' + gs.dx + '，Y轴移动了：' + gs.dy);
		if (gs.dx > 50) {
			console.log('由左向右');
		} else if (gs.dx < -50) {
			console.log('由右向左');
		} else if (gs.dy > 50) {
			console.log('由上向下');
		} else if (gs.dy < -50) {
			console.log('由下向上');
		}
	}
});