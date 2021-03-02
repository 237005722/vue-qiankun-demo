const microApps = [
  {
    name: 'history-qiankun-sub', // 和子应用vue.config.js里配置的出口一致
    entry: '//localhost:8888',
    container: '#subApp',
    activeRule: '/history-qiankun-sub'
  }
]

export default microApps
