$(function() {

  var cookieQuantitys = $("input");
  var btn = $("#btn");

  function setCookies() {
    $.each(cookieQuantitys, (index, cookie) => {
      Cookies.set(cookie.name, cookie.value);
    });
  };

  btn.on("click",  (e) => {
    e.preventDefault();
    setCookies();
  });

});
