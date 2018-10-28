/**
 * Created by Administrator on 2018/10/28.
 */
import Vue from 'vue'
import Router from 'vue-router'
const helloWorld = () => import('../components/HelloWorld')
Vue.use(Router)
var router = new Router({
  routes:[{
    path:"/",
    component:helloWorld,
    name:"helloWorld"
  }]
});
export default router
