/**
 * 1. 在执行 beforeUpdate 钩子函数时，页面上的数据还是旧的数据，而 data中 message 属性已经将值修改成了最新的值
 * 也就是说当数据改变的时候会触发beforeUpdate函数, 在这个函数执行的时候, 仅仅是完成了Vue实例的数据改变, 并没有渲染到页面上去
 *
 * 
 * */