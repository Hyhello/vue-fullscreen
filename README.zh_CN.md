# 快速开始

## @hyhello/vue-fullscreen

@hyhello/vue-fullscreen 适用于 Vue2 的全屏组件，支持单页应用。

## Examples

[codepen.io](https://codepen.io/vue-book/pen/oNGvKGm)

## Use Setup

### install @hyhello/vue-fullscreen

```javascript
npm install @hyhello/vue-fullscreen --save
```

### Vue mount

```vuejs
// global use
import Vue from 'vue';
import CFullscreen from '@hyhello/vue-fullscreen';

// use  @params：支持 options 全局配置
Vue.use(CFullscreen, [options]);

// or Local use
import { Fullscreen } from '@hyhello/vue-fullscreen';

export default {
    components: { Fullscreen }
};
```

### Use in SPA

```html
<template>
	<div>
		<div class="bindEl">全屏文档</div>
		<vue-fullscreen bind=".bindEl">
			<button>fullscreen toggle</button>
		</vue-fullscreen>
	</div>
</template>
<script>
	import { Fullscreen as CFullscreen } from '@hyhello/vue-fullscreen';

	export default {
		components: { vueFullscreen },
		data: function () {
			return {
				options: {
					navigationUI: 'hide'
				}
			};
		},
		methods: {
			change(val) {
				console.log('状态:', val ? '全屏' : '非全屏');
			}
		}
	};
</script>
```

## Api

### Attributes

| 参数          | 说明                                                                                                               | 类型                            | 可选值           | 默认值                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------- | ---------------- | ------------------------ |
| bind          | 绑定需要放大的元素                                                                                                 | string / HTMLElement / function | —                | document.documentElement |
| trigger       | 触发的 methods                                                                                                     | string                          | click / dblclick | click                    |
| nativeOptions | 控制向全屏模式过渡的行为的对象，[参考](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen) | object                          | —                | {}                       |
| keyboard      | 是否启用键盘控制(F11)                                                                                              | boolean                         | —                | true                     |
| beforeChange  | 改变之前触发                                                                                                       | function                        | —                | —                        |

### Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| change | 监听当前是否全屏 | 全屏状态（boolean） |
