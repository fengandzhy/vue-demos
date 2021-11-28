/**
 * 1. vm.$set(this.user,'age',28), 给user添加一个属性, 属性名是age值是28, 并且添加的这个值是可以直接反应到页面上去的
 *
 * 2. 当打印这个的时候console.log(vm.user);发现这样一个奇怪的现象, vm.user显然是在属性值改变之前打印出来的, 但是改变属性值之后, 例如把name由Sam
 * 改成了Frank, 此时在控制台看这个的时候console.log(vm.user), 却发现Object里面的值是Frank而不是Sam, 但其下面的console.log(vm.user.name);
 * 打印出来的依然是Sam而不是Frank. 原因是这样的,vm.user这个是一个对象, 在控制台上看到的是一个可以折叠起来的Object,在把这个Object展开的过程中,
 * 就等于重新取了一遍这个对象, 而重新取到的这个对象的name值变成了Frank而不是Sam
 *
 * */