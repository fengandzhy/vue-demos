/**
 * 1. 这里的反单引号就是把多行的字符串拼接在一起的意思 例如可以这么写
 * console.log(`多行字符串的拼接
 来我们只是这个引号`); 还有,模板字符串中嵌入变量，需要将变量名写在${}之中
 *
 * 2. beforeCreat 方法运行在组件实例刚刚被创建，还未进行数据的观测和事件配置,
 * Vue 实例中的挂载点元素、 data、message 属性，在 beforeCreated 生命周期钩子函数执行时，
 * 都没有进行了初始化，methods 对象产生了，但下面方法不能使用.
 *
 * 3. 简单点说就是vm创建了, 但是里面的东西还是不能用
 *
 *
 * */