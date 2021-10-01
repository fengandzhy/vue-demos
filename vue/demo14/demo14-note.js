/**
 * 1. v-model="name" 如果写成 v-model="this.name" 将绑定失败
 *
 * 2. 参看index1 可以将局部组件抽取出来, 作为一个变量, 但这个变量含有data() 以及 templates
 *
 * 3 关于组件的套用参看index2 PublicComponent 是全局组件, 因此在AComponent中套用全局组件不需要加入components,
 * 但BComponent 是局部组件, 它里面要引用另外一个局部组件 AComponent 就得在 components中加入
 *
 * 4. components:{ BComponent} 这是ES6的语法糖，相当于  components:{ BComponent:BComponent }
 *
 * 5. 在这些templates虚拟的dom中 可以支持驼峰命名 <public-component></public-component> 可以写成 <PublicComponent></PublicComponent>
 * 而在真正的HTML里面就不行了.
 *
 *
 * */