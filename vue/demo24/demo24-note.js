/**
 * 1. slot的默认命名就是default
 *
 * 2. 当给一个slot命名时, <slot name="footer"></slot> 这里面的内容 <template v-slot:footer> 才会渲染到slot里面去, 注意一定要用template标签
 *
 * 3. v-slot:footer 可以改成 #footer来代替
 *
 * */