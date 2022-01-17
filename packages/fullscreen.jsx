/**
 * 作者：yeshengqiang
 * 时间：2021-09-14
 * 描述：fullscreen
 */
import screenfull from 'screenfull';
import { isFunction, isPromise, isElement } from '@hyhello/utils';
import { warn } from '@/utils/debug';
import props from './props';

export default {
	name: 'Fullscreen',
	abstract: true,
	mixins: [props],
	data() {
		return {
			loading: false
		};
	},
	computed: {
		element() {
			const { bind } = this;
			const el = isFunction(bind) ? bind() : bind;
			const docEl = document.documentElement || document.body;
			// eslint-disable-next-line no-nested-ternary
			return el ? (isElement(el) ? el : document.querySelector(el)) : docEl;
		}
	},
	mounted() {
		if (screenfull.isEnabled) {
			screenfull.on('error', warn);
			screenfull.on('change', this.toggleFullScreen);
			document.addEventListener('keydown', this.handleKeydown);
		} else {
			warn('current browser environment not support fullscreen');
		}
	},
	beforeDestroy() {
		if (screenfull.isEnabled) {
			screenfull.off('error', warn);
			screenfull.off('change', this.toggleFullScreen);
			document.removeEventListener('keydown', this.handleKeydown);
		}
	},
	methods: {
		next() {
			this.loading = false;
			screenfull.toggle(this.element, this.nativeOptions);
		},
		bindFullScreen() {
			if (!screenfull.isEnabled || this.loading) return;
			const { next, beforeChange } = this;
			this.loading = true;
			if (beforeChange && isFunction(beforeChange)) {
				const pro = beforeChange(next);
				if (isPromise(pro)) {
					pro.then(next).finally(() => {
						this.loading = false;
					});
				}
			} else {
				next();
			}
		},
		handleKeydown(event) {
			event.stopPropagation();
			if (event.keyCode === 122) {
				event.preventDefault();
				if (this.keyboard) {
					this.bindFullScreen();
				}
			}
			return false;
		},
		toggleFullScreen() {
			this.$emit('change', screenfull.isFullscreen);
		}
	},
	render() {
		try {
			const vnode = this.$slots.default[0]; // 子组件的vnode
			const event = vnode.data || {}; // 子组件绑定的click事件
			event.style = {
				cursor: 'pointer'
			};
			event.on = {
				[this.trigger]: this.bindFullScreen
			};
			if (!vnode.data) vnode.data = event;
			return vnode;
		} catch (e) {
			warn('components must contain elements');
			return null;
		}
	}
};
