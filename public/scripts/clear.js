$(function() {

  var cookieInfo = $("#cookie-info");
  var btnClear = $("#btn-clear");
  var btnHome = $("#btn-home");

  btnHome.css("display", "none");

  btnClear.on("click", (e) => {
    e.preventDefault();
    btnClear.css("display", "none");
    btnHome.css("display", "inline-block");

    Cookies.expire('sugar-cookie');
    Cookies.expire('chocolate-cookie');
    Cookies.expire('lemon-cookie');

    cookieInfo.text('Okay! You can go back to the home page :)')

  });

  btnHome.on("click", (e) => {
    e.preventDefault();

     window.location.href='/';
  });

});
