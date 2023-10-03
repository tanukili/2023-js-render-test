const list = document.querySelector('.posts-list');

let data = [];

function init(){
  axios.get(`${_url}/posts?_expand=user`)
  .then(res => {
    data = res.data;
    renderPosts();
  })
}

init();

function renderPosts(){
  let str = '';
  data.forEach(function (e){
    str += `<li><h2>${e.title}</h2><a href="postDetail.html?id=${e.id}">查看貼文</a></li>`;
    list.innerHTML = str;
  })
}