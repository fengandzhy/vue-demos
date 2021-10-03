/**
 * 1. 一般情况下 在父组件中调用子组件 <my-button>按钮</my-button> 按钮两个字是显示不出来的, 按钮两个字需要在子组件中设置
 * 但如果在子组件中加入了<slot></slot> 例如 <button type="button"><slot></slot></button> 那么按钮两个字就可以显示出来了.
 *
 * 2. 一般情况下我们不会在子组件中加入名称,我们只能在父组件中加入, 例如这个按钮叫提交 <my-button type="submit">提交</my-button>
 * 那个按钮叫再来一个 <my-button>再来一个</my-button> 那么就需要在子组件中设置 <slot></slot>
 *
 * 3. <slot></slot>中可以设置默认值 <slot>按钮</slot> 那么在父组件中直接调用子组件 <my-button></my-button> 渲染出来的就是按钮两个字
 *
 * */