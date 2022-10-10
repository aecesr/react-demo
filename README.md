使用npm  run eject 解包，找到config下面的webpack.config.js,在里面配置less使用，可以通过搜索sassModuleRegex来进行查找到sass的地方，同级目录下配置
         

```js
      {
        test: /\.less$/,
        use: getStyleLoaders({}, "less-loader"),
    
          sideEffects: true,
      },
```
配置less
