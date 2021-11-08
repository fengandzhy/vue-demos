/**
 * 1. watch 如果要监听data()里面的name变量的变化, 在watch里面就得定义一个与之相等名称的函数, 也就是说在watch里面定义的函数名必须为name才能
 * 监听到data()里面name的变化.
 *
 * 2. 监听computed里面的变量也是要同名函数的, 例如监听getName, 那么同名函数的名称也必须是getName
 *
 * 3. 注意这里的classifies是深度监听, 就是对于一个复杂对象任意部分改变都会别监听到, 这个在watch里面的classifies方法必须和data()的变量同名
 * 另外在这个classifies里面函数名是必须要是handler 这个函数不一定有参数, 但如果有参数，那么第一个参数必然是 data()里面的变量
 *
 * 4. 另外, 深度监听时 deep设置成true deep:true
 * */