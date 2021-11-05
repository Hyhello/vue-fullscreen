# Quick start

## @cestc/c-fullscreen

The @cestc/c-fullscreen component for vue2, supports single page applications.

Read this document in: [简体中文](https://github.com/Hyhello/geo-cli/blob/master/README.zh_CN.md).

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
        <button>fullscreen toggle</button>
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

| params              | explain                 | type            | Optional value | Default value |
| ----------------- | ------------------- | --------------- | ------ | ------ |
| bind              | Bind elements that need to be enlarged    | string / HTMLElement / function    | —     |  document.documentElement  |
| trigger              | Triggered methods        | string          | click / dblclick | click |
| nativeOptions     | An object that controls the behavior of the transition to full screen mode，[Api](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen)           | object  | —    | {}     |
| keyboard          | Enable keyboard control(F11) | boolean  | —    | true     |
| beforeChange      | Trigger before change          | function  | —   | —    |

### Events

| eventName | explain               | Callback Arguments |
| ------ | ------------------ | -------- |
| change  | Monitor whether the current screen is full | status（boolean） |
