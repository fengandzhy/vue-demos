/**
 * 1. v-bind 可以用来在标签上绑定标签的属性, 例如 v-bind:src="url" 这里的url一定是vue里面的变量
 * v-bind:width="width" 也可以简写成 :width="width"
 *
 * 2. :href="'http://www.baidu.com'" 里面要加单引号,这样写就没有问题
 *
 * 3. 如果只用一个样式 <p :class="'class1'">周洪元</p> 如果两个样式都用 <p :class="{class1:true,class2:true}">周洪元</p>
 *
 * */