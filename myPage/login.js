const account = document.querySelector('.account');
const password = document.querySelector('.password');
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');

let data = {
  "email": "",
  "password": ""
};
let token = localStorage.getItem('Token'); // 一般不能這樣寫

signupBtn.addEventListener('click', function(e) {
  data.email = account.value;
  data.password = password.value;
  signUp(data);
  console.log(data);
})

loginBtn.addEventListener('click', function(e) {
  data.email = account.value;
  data.password = password.value;
  logIn(data);
  console.log(data);
})

function signUp(obj){
  axios.post(`${_url}/signup`, obj)
  .then(res => {
    alert('註冊成功')
  })
  .catch(err => {
    alert('註冊失敗')
  })
}

// olivier@mail.com
// new123456789
function logIn(obj){
	axios.post(`${_url}/login`, obj)
	.then(res => {
    // 儲存 token , id
    localStorage.setItem('Token', res.data.accessToken);
    localStorage.setItem('userId', res.data.user.id);
    alert('登入成功')
    location.href = 'userAddPost.html';
	})
	.catch(err => {
		alert('登入失敗')
	})
}

function updaterPassword() {
  axios.patch(`${_url}/600/users/1`, {
    "password": "new123456789"
  },{
    headers: {
      // Bearer 有加密時需要的權限
      "authorization": `Bearer ${token}`
    }
  })
  .then(res => {
    console.log(res.data);
    alert('修改成功');
  })
  .catch(err => {
    console.log(err.response);
  })
}
