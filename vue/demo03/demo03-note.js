/**
 * 1. 直接引用data里面的值{{txt}}
 *
 * 2. 把data里面的值当html解析 用v-html指令 <span v-html="txt"></span><br/>
 *
 * 3. 把data里面的值放到某个属性里面去, 用v-bind:属性, <a v-bind:href="url">百度</a><br/>
 * 这种指令可以缩写<a :href="url">百度</a><br/> 也可以用将属性名赋值给变量<a :[attr_href]="url">百度</a><br/>
 * attr_href 是个变量名,它的值是href (参看下方attr_href:'href'), 特别要注意的是这个变量名必须是小写.
 *
 * 4. 大括号里可以运行javascript {{url.toUpperCase()}}
 *
 * 5 <a href="url">百度</a><br/> 这里无法解析,因为这种情况下url没有被当成变量,
 * 只有<a :href="url">百度</a><br/> 它就会把url当成一个变量来解析
 * */