module.exports = { 
    devServer: {                             
      proxy: {                                // 프록시 설정
        '/api': { 
          target: 'http://localhost:3000/api',    // 프록시 요청을 보낼 서버의 주소
          changeOrigin: true, 
          pathRewrite: { 
            '^/api': ''
          } 
        } 
      } 
    },
  }