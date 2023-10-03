const list = document.querySelector('.list');
const text = document.querySelector('.txt');
const save = document.querySelector('.save');

let data = [];
const userId = localStorage.getItem('userId');
const token = localStorage.getItem('Token');

function init(){
  axios.get(`${_url}/posts?userId=${userId}`)
  .then(res => {
    data = res.data;
    console.log(data);
    renderPosts();
  })
}

init();

function renderPosts(){
  let str = '';
  data.forEach(function (e){
    str += `<li><h2>${e.title}</h2></li>`;
    list.innerHTML = str;
  })
}

save.addEventListener('click', function(e){
  console.log(text.value);
  axios.post(`${_url}/600/posts`, {
    "title": text.value,
    "userId": userId
  }, {
    headers: {
      "authorization": `Bearer ${token}`
    }
  })
  .then(res => {
    alert('新增成功');
    init();
  })
  .catch(err => {
    console.log(err);
  })
})
