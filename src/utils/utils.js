export const ArrayBufferToBase64 = (buffer) => {
    //第一步，将ArrayBuffer转为二进制字符串
	var binary = '';
	var bytes = new Uint8Array(buffer);
	for (var len = bytes.byteLength, i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
    //将二进制字符串转为base64字符串
	return  'data:image/png;base64,' + window.btoa(binary);
}

// export const ArrayBufferToBase64 = (buffer) => {

//     return btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''))
// }
