let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let modal = document.querySelector('.modal')



function dataValidation() {
   
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value; 

    if(passwordValue.length < 8 || usernameValue.length > 15){
        modal.style.background = 'rgb(223, 28, 28)';
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد کنید';
        modal.style.display = 'inline';
      

    }else {
        modal.style.background = 'green';
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline';
    }


    setTimeout(function() {
        modal.style.display = 'none';
    },3000)
}