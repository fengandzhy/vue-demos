/**
 * 1. 全局的异步组件 Vue.component('async-component',(resolve,reject)=>{ }); 左边是组件名称, 右边是工厂函数.
 *
 * 2. 对于一个全局的非异步组件 Vue.component('PublicComponent',Vue.extend({})); 左边是组件名称, 右边是一个对象.
 *
 * 3. 对于局部异步组件来说 let AsyncComponent = (resolve,reject)=>{}; =右边一个工厂函数来返回的.
 *
 * 4. 对于局部非异步组件来说 let ClassifyComponent = {} =右边直接是一个对象.
 *
 * */