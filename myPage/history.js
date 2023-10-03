const addbtn = document.querySelector('.addname .btn');
const addtxt = document.querySelector('.addname .txt');
const historyList = document.querySelector('.name-list');

let history = []; 

addbtn.addEventListener('click', function(e){
  // 確認有 input
  if (addtxt.value){
    // 存到 local storage
    history.push({'name': addtxt.value});
    let localString = JSON.stringify(history)
    localStorage.setItem('names', localString);
    render();
    // 清空值
    addtxt.value = '';
  }
})


function render(){
  // 取得並賦予到 historyList
  let localArray= JSON.parse(localStorage.getItem('names'));
  let str = '';
  localArray.forEach(e => {
    str += `<li>${e.name}</li>`;
    historyList.innerHTML = str;
  });
}

render();
