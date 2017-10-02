import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function(){
	const a ='webpack';
	var rootDom = document.getElementById('root');
	var layer = new Layer();
	// rootDom.innerHTML = layer.tpl;
	rootDom.innerHTML = layer.tpl({
		name: 'John',
		arr: ['apple', 'xiaomi', 'oppo']
	});
	alert(a);
	console.log(layer);
}

new App();