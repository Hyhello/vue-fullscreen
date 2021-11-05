/**
 * 作者：yeshengqiang
 * 时间：2021-09-14
 * 描述：
 */

import { oneOf } from '@/utils/utils';

const typeList = ['dblclick', 'click'];

export default {
	props: {
		// 绑定元素
		bind: {
			type: [String, HTMLElement, Function],
			default: '' // 默认为空 代表 document.documentElement
		},
		trigger: {
			type: String,
			default: 'click',
			validator(val) {
				return oneOf(val, typeList);
			}
		},
		// FullscreenOptions 参考 https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
		nativeOptions: {
			type: Object,
			default: () => {
				return {};
			}
		},
		// 是否启用keyboard
		keyboard: {
			type: Boolean,
			default: true
		},
		// beforeChange
		beforeChange: [Function]
	}
};
