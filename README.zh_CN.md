# 快速开始

## @cestc/c-fullscreen

@cestc/c-fullscreen 适用于Vue2的全屏组件，支持单页应用。

## Examples

[demo](https://whgitlab2.cestc.cn/yeshengqiang/fullscreen/blob/master/index.html)

## Use Setup

### install @cestc/c-fullscreen

```javascript
npm install @cestc/c-fullscreen --save
```

### Vue mount

```vuejs
// global use
import Vue from 'vue';
import CFullscreen from '@cestc/c-fullscreen';

// use  @params：支持 options 全局配置
Vue.use(CFullscreen, [options]);

// or Local use
import { Fullscreen } from '@cestc/c-fullscreen';

export default {
    components: { Fullscreen }
};
```

### Use in SPA

```html
<template>
    <c-fullscreen bind="bindEl">
        <button>全屏切换</button>
    </c-fullscreen>
</template>
<script>
    import { Fullscreen as CFullscreen } from '@cestc/c-fullscreen';

    export default {
        components: { CFullscreen },
        data () {
            return {
                bindEl: document.body
            };
        }
    }
</script>
```

## Api

### Attributes

| 参数              | 说明                 | 类型            | 可选值 | 默认值 |
| ----------------- | ------------------- | --------------- | ------ | ------ |
| bind              | 绑定需要放大的元素    | string / HTMLElement / function    | —     |  document.documentElement  |
| trigger              | 触发的methods        | string          | click / dblclick | click |
| nativeOptions     | 控制向全屏模式过渡的行为的对象，[参考](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen)           | object  | —    | {}     |
| keyboard          | 是否启用键盘控制(F11) | boolean  | —    | true     |
| beforeChange      | 改变之前触发          | function  | —   | —    |

### Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| change  | 监听当前是否全屏 | 全屏状态（boolean） |
