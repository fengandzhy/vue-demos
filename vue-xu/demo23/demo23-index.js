/**
 * 1. 通过vm.$options得到vue对象的其他属性, 例如methods属性 vm.$options.methods
 *
 * 2. 通过vm.$options得到vue对象的自定义属性, 例如 vm.$options.name
 *
 * 3. 通过vm.$options来运行其他属性内的方法, 例如vm.$options.methods.storeMsg();
 *
 * 4. 通过vm.#refs得到元素, 例如vm.$refs.hello 这个元素必须有ref属性其值为hello, 就可以用这种方式得到了
 *
 * 5. vm.$refs 属性用来获取页面中所有具有 ref 属性的元素【因此要先设置 ref 属性】,返回的是 dom 元素集合对象
 *
 * */