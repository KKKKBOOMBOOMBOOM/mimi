/**
 * Created by Administrator on 2017/9/10.
 */
$(function () {
  var username = store.get('keyUsername');
  var password = store.get('keyPassword');
  username = username.replace(/^"|"$/g,"");
  password = password.replace(/^"|"$/g,"");

  console.log(username);
  console.log(password);
  $('.login').submit(function () {
    var userName=$('#user').val();
    var passWord=$('#password').val();
    if(userName==username && passWord ==password){
      store.add('isLogin',true);

    }else{
      alert('提交失败！');
      // oP2.style.borderColor = 'red';
      // oP2.innerHTML='输入密码有误';
      // oP2.style.color = 'red';
      return false;
    }
  })
})
