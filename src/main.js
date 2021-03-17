/*
入口js
*/
import Vue from 'vue';
import App from './App';
// 引入路由组件
import router from './router';
new Vue({
  el:'#app',
  render:h => h(App),// 把组件App导入到页面
  router,// 配置路由组件
})

/*{
  render:h => h(App),
  👇
	render: function(createElement) {
		return createElement(App);
	}
}*/
