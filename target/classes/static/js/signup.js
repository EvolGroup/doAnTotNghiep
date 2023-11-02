var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirmPassword').value) {
      document.getElementById('messagePassword').style.color = 'green';
      document.getElementById('messagePassword').innerHTML = 'Mật khẩu khớp';
      document.getElementById('formSubmit').type = 'submit';

    } else {
      document.getElementById('messagePassword').style.color = 'red';
      document.getElementById('messagePassword').innerHTML = 'Mật khẩu không khớp';
      document.getElementById('formSubmit').type = 'button';
    }
  }

  var test = function() {
    var type = document.getElementById('formSubmit').type
    console.log(type)
    if(type == 'button'){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vui lòng kiểm tra lại form',
          })
    }else {
        Swal.fire({
            icon: 'success',
            title: 'Đăng ký thành công',
            showConfirmButton: false,
            timer: 1500
          })
    }
}