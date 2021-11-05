// 小驼峰 aa-b -> aaB , -a => A
export const camelize = (str) => {
	return str.replace(/-+(.)?/g, (match, chr) => {
		return chr ? chr.toUpperCase() : '';
	});
};

// 判断是否是一个函数
export const isFunction = (fn) => {
	return typeof fn === 'function' || Object.prototype.toString.call(fn) === '[object Function]';
};

export const isObject = (target) => {
	return target !== null && typeof target === 'object';
};

export const isPromise = (target) => {
	// 初始promise 或 promise.then返回的，故target有可能是function
	return target && (isObject(target) || isFunction(target)) && isFunction(target.then);
};

// 判断是否是个元素
export const isElement = (el) => {
	return typeof el === 'object' && el.nodeType === 1;
};

// oneOf
export const oneOf = (target, list = []) => {
	return list.some((item) => target === item);
};
