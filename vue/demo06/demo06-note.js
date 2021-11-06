/**
 *  1. v-on:click="greet" 这个就是vue中的事件机制,其中 greet 方法是定义在method中的,
 *
 *  2. @click="greet" 是它的缩写
 *
 *  3. 它会自带一个参数e, 它是$event事件参数, 可以通过e.target.value取到值
 *
 *  4. 如果写成@keyup.enter="enter()",那么方法中定义的这个参数e就不起作用了必须写成@keyup.enter="enter($event)" 或者@keyup.enter="enter"
 *
 * 5. @click.stop 这个是防止事件冒泡的, 如果没有.stop 那么这个click就会传导到上一层.
 *
 * 6. @keyup.enter 这个是监听回车事件 .enter是回车键的别名
 *
 * 7. 包括这个 @click="hello('Hello World!')" 如果写成这样, 那么在hello方法里找不到事件参数, 必须写成 @click="hello('Hello World!',$event)"
 * */