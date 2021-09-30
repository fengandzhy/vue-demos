/**
 * 1. {{member}} 会优先去取data()里面的member, 如果取不到就会去computed里面找member的变量, 如果还没有就找computed里面的member的函数.
 *
 * 2. 对于computed里面叫member的变量, 首先这个变量必须要有get方法, 我们才能在前台用{{member}}来找到它, 它必须要有set方法, 才能使前台
 * 给它赋值.其实这个作用, 它就等于向前台封装了abc这个变量, 前台对abc这个变量的赋值取值都可以通过 member的 set 和 get方法来得到.
 *
 * 3. 如果 {{member}} 这里的member是computed里面的一个函数, 此函数必须要有return 才能让前台页面看到值, 否则看不到值.
 *
 *
 * */