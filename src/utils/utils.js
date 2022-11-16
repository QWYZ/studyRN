/**Blob转base64
 * @param {Blob} blob
 */
export const blobToBase64 = (blob) => {
	return new Promise((resolve, reject) => {
		// const blob = new Blob([data], { type: "image/jpeg" }); //类型一定要写！！！
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}