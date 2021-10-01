/**
 * 1. 父组件通过给子组件设置属性来给子组件传值, 例如本例中父组件通过title 和 sub-title
 *
 * 2. 对于子组件来说, 父组件传过来的值储存在props 中
 *
 * 3. 本例中对于{{title}}来说, 它首先会去找 props 里面找值, 看看有没有同名的, 然后再去 data() 里面找
 *
 * 4. 对于{{subTitle}}来说, 它只能接受驼峰命名法, 它无法接受 {{sub-title}}
 *
 * 5. 对于 index1 子组件中可以把props 由数组改成 json, 在这个json中对这个传入值的类型做限制, 如果父组件传入的值类型不对
 * 那就要报错
 *
 * 6. 关于这个类型String 不能写成 string 一共有 String, Number, Boolean, Array, Object, Function, Date, Function, Symbol
 * 这么多类型
 *
 * 7. 当这个 props 改成 json的时候, 也可以设置属性是否为必有属性 required:true 也可以设置默认值属性 default:'默认值属性!'
 *
 * 8. 当这个type是Array的时候, 如果需要设置default的值的时候, 一定要设置成一个有return的函数
 *
 * 9. 另外注意 'list-arr' 写到template 里面去的时候 一定是listArr
 *
 * 10. 子组件不能直接去改变props 里面的值 会有警告, 应该吧props里面的值赋值给 data()里面的变量
 *
 * 
 * */