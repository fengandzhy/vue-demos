/**
 *  1. v-on:click="greet" 这个就是vue中的事件机制,其中 greet 方法是定义在method中的,
 *
 *  2. @click="greet" 是它的缩写
 *
 *  3. 它会自带一个参数e, 它是$event事件参数, 可以通过e.target.value取到值
 *
 *  4. 如果写成@keyup.enter="enter()",那么方法中定义的这个参数e就不起作用了必须写成@keyup.enter="enter($event)" 或者@keyup.enter="enter"
 *
 *
 *
 * */