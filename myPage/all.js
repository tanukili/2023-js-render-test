const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');
let data = [];

// get 資料
function init() {
  axios.get(`${_url}/todos`)
  .then(function(res){
    data = res.data;
    renderData();
  })
}
// 網頁開啟時載入
init();

// 渲染畫面
function renderData(){
  let str = '';
  // 資料 arr 組成 str 並累加
  data.forEach(function (e, i){
    str += `<li><a href="page.html?id=${e.id}">${e.content}</a><input type="button" class="delete" data-num="${e.id}" value="刪除代辦"><input type="button" data-num="${e.id}" value="別的用途"></li>`;
  })
  list.innerHTML = str;
}

// 新增代辦事項：點擊按鈕 > 傳入資料
save.addEventListener('click', function(e){
  // 靜止空資料
  if (txt.value === ''){
    alert('請輸入內容'); // 彈出視窗
    return; // 中斷程式
  }
  // post
  let todo = {};
  todo.content = txt.value; // 賦予空資料 content 屬性與 input 中的 value 作為值
  axios.post(`${_url}/todos`, todo)
  .then(function(res){
    // 再次取得資料並渲染
    init();
  })
})

// 刪除代辦事項：點擊按鈕 > 刪除資料
list.addEventListener('click', function(e){
  // 綁定功能在 .delete 按鈕上
  if(e.target.getAttribute('class') !== 'delete'){
    return
  }
  // delete
  let num = e.target.getAttribute('data-num'); // 取得點擊按鈕的編號用屬性（自訂）
  axios.delete(`${_url}/todos/${num}`)
  .then(function(res){
    alert('刪除成功！');
    init();
  })
})