import Fullscreen from 'pkg/fullscreen';
import _joinPrefix from './utils/prefix';

const components = {
	Fullscreen
};

const install = function (Vue) {
	if (install.installed) return;
	install.installed = true;
	Object.keys(components).forEach((key) => {
		const name = _joinPrefix(key);
		Vue.component(name, {
			...components[key],
			name
		});
	});
};

// window 部分
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	v: '__VERSION__',
	install,
	...components
};

export { Fullscreen };
