const login = () => {
  // localStorage永远不会被删除
  localStorage.setItem('name', 'localStorage')
  // sessionStorage标签关闭时删除
  sessionStorage.setItem('name', 'sessionStorage')
}