/**
 * 1. .self修饰符使得事件只在自身发生的时候被触发. 例如在本例在div1和button上都有click事件, 如果点击button它也会触发div1的click事件
 * 如果在button的事件上加入.stop就是阻止了事件的冒泡,这样的话点击button就不会触发div1的click事件了.
 * 但是如果在div1上加入.self的话, div1的click事件只能单纯的在div1被点击时触发, 例如你点击button虽然是在div1的内部但这个不是单纯的div1事件
 * 所以不触发.
 *
 * 2. .once指的是事件只发生一次，@click.once只的是只有第一次发生事件, 之后的点击就不起作用了
 *
 *
 *
 * */