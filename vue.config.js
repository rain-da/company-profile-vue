const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  devServer: {
    port: 8089,
    allowedHosts: [
      'reiki.cpolar.cn', // 允许访问的域名地址，即花生壳内网穿透的地址
      //'.host.com'   // .是二级域名的通配符   
    ],
    //proxy: 'http://localhost:8086'
  },

  //关闭校验工具
  lintOnSave: false
})
