// id 已經在 config.js 取得
const comments = document.querySelector('.comments');

function init() {
  // 防呆
  // if(id == undefined){
  //   alert('喔！看來沒有這個頁面，將返回留言首頁。');
  //   location.href = './posts.html'
  // }
  getPost(id);
  getComment(id);
}

init();

function getPost(id) {
  axios.get(`${_url}/posts/${id}?_expand=user`)
  .then(function(res) {
    let obj = res.data;
    document.querySelector('h1').textContent = obj.title;
    document.querySelector('.post-content').innerHTML = obj.content;
  })
};
function getComment(id) {
  axios.get(`${_url}/posts/${id}/comments?_expand=user`)
  .then(function (res){
    let str = '';
    if(!res.data.length){
      str = '<span>目前沒有留言</span>';
    }else{
      res.data.forEach(e => {
      str += `<li>${e.user.name}留言：${e.content}</li>`
    });
  }
    comments.innerHTML = str;
  })
}