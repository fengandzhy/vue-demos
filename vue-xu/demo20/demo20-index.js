/**
 * 1. vm.$destroy()表示vue元素销毁, Vue 实例与页面的 DOM 元素进行'解绑'
 *
 * 2. vm.$mount('#app') 表示将这个vue元素绑定到#app上面
 *
 * 3. beforeDestroy Vue 实例进入销毁阶段，此时实例上的 data、methods、过滤器、指令等等还是处于可用的状态，还没有真正执行销毁的过程
 *
 * 4. destroyed 实例被销毁（解除 Vue 实例与页面 DOM 元素的绑定，但该 vue 实例的对象、数据还是可以用）
 *
 * */