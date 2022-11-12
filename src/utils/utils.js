
// export const ArrayBufferToBase64 = (buffer) => {
// 	let bytes = new Uint8Array(buffer);
// 	//btoa() 方法可以将一个二进制字符串（例如，将字符串中的每一个字节都视为一个二进制数据字节）编码为 Base64 编码的 ASCII 字符串
// 	let a = bytes.reduce((data, byte) => data + String.fromCharCode(byte), '')
// 	let base = `data:text/css;base64,${Buffer.from(a).toString('base64')}`;
// 	return base
// }


export const blobToBase64 = (blob) => {
	return new Promise((resolve, reject) => {
		// const blob = new Blob([data], { type: "image/jpeg" }); //类型一定要写！！！
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}