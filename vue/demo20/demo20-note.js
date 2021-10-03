/**
 * 1.  .tab.active 这里的  .tab 和 .active 之间不能有空格. 因为 .tab 和 .active 是平级不是上下级 <div class="tab active">菜品详情</div>
 *
 * 2. 注意这里的class属性写法 :class="{'tab':true,'active':item.active}" 'tab':true 表示加上.tab 这个class样式
 *
 * 3. 动态组件 <comment :is="currentComponent"></comment> 它一定是comment 不能叫别的名字 :is= 后面跟的变量一定是原来的组件名
 * 比方说你原来要渲染一个 <details-component></details-component> 组件 那么details-component 就要出现在 :is=的变量中
 *
 * 4. <keep-alive> 保持原有数据不变
 *
 * */