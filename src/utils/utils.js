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
		console.log('开始移动：', evt);
	},
	//响应者现在“另有其人”而且暂时不会“放权”，请另作安排。
	onResponderReject: (evt) => {
		console.log('onResponderReject', evt);
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

/**数组求和 
 *  @param {Array} arr
*/
const sum = (arr) => {
	return arr.reduce(function (prev, curr, index, arr) {
		return prev + curr;
	});
}

/**一个数组分成两个数组，并使各数组和之差的绝对值最小
 * 
 */
export const averageArray = (arr) => {
	let list = [...arr];
	const num = Math.ceil(sum(arr)/2); //数组和除以2向上取整）
	list = list.sort(function(a,b){return b-a});//倒序
	// console.log(num);
	let arr1=[], 
		arr2=[], 
		arrSum1=0,
		arrSum2=0

	for(let i=0; i<list.length; i++) {
		var data = list[i];
		if(arrSum1 <= arrSum2 && (arrSum1 + data) <= num) {
			arr1.push(data);
			arrSum1 += data;
		}else{
			arr2.push(data);
			arrSum2 += data;
		}
	}
	// console.log(arr1);
    // console.log(arr2);
}

/**图片数据对象数组高度求和 
 *  @param {Array} arr
*/
const sumImageH = (arr) => {
	return arr.reduce(function (prev, curr, index, arr) {
		if(index == 1){
			return prev.height + curr.height
		}else{
			return prev + curr.height;
		}
	});
}

/**
 * 根据图片高度拆分成两个数组(图片瀑布流)
 * @param {*} arr 
 */
export const splitImagesArray = (oldData, arr) => {
	let list = [...arr];
	let heightSum = Math.ceil(sumImageH(arr)/2); //数组和除以2向上取整）
	// console.log('heightSum',heightSum);
	// list = list.sort(function(a,b){return b.height-a.height});//倒序
	
	let arr1=[], 
		arr2=[], 
		arrSum1=0,
		arrSum2=0;
	if(oldData && oldData.length>0){
		arr1 = oldData[0].data
		arr2 = oldData[1].data
		arrSum1 = oldData[0].totalH
		arrSum2 = oldData[1].totalH
		heightSum = Math.ceil((sumImageH(arr) + oldData[0].totalH + oldData[1].totalH)/2);
	}
	for(let i=0; i<list.length; i++) {
		var data = list[i];
		if(arrSum1 <= arrSum2 && (arrSum1 + data.height) <= heightSum) {
			arr1.push(data);
			arrSum1 += data.height;
		}else{
			arr2.push(data);
			arrSum2 += data.height;
		}
	}
	// console.log(arr1, 'arrSum1:',arrSum1);
    // console.log(arr2, 'arrSum2:',arrSum2);
	return [
		{
			key:'col1',
			totalH:arrSum1,
			data:arr1
		},
		{
			key:'col2',
			totalH:arrSum2,
			data:arr2
		}
	]
}