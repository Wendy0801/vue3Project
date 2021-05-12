# vueproject-vuecli3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue3的特点
```
1.优化了diff 算法 :
静态标记
静态提升
事件侦听缓存
2. 组合API(composition api): 具有独立公用功能的api
组合API的本质: 在运行的时候,将组合api中暴露出去的数据/方法注入到vue2.0(optoin api) 中的 data/methods 等
```
### 创建vue3 项目 （Vite方式）
```
Vite 原理是利用Es6 的import 会发送请求去加载文件的特性,拦截这些请求，做些预编译，省去webpack 冗长的打包时间

1.安装 Vite ： npm install -g create-vite-app
2.创建vite vue3 项目 create-vite-app projectName

vue2.0 存在饿问题就说数据和方法分散


```

