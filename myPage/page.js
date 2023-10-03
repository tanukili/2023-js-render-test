// 取得頁面的 id：本頁網址 str 用 '=' 切割出 id
const id = location.href.split('=')[1];

// 不同頁面 get 不同資料
axios.get(`${_url}/todos/?id=${id}`)
.then(function(res){
  console.log(res.data[0]);
  document.querySelector('h1').textContent = res.data[0].id;
  document.querySelector('.content').textContent = res.data[0].content;
})