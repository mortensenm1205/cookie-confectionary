$(function() {

  var cookieQuantitys = $("input");
  var btn = $("#btn");
  var results = $("#results");

  function setCookies() {
    $.each(cookieQuantitys, (index, cookie) => {
      Cookies.set(cookie.name, cookie.value);
    });
  };


  btn.on("click",  (e) => {
    e.preventDefault();

    if(document.cookie) {
      results.text("Damn you want to change the amount already? Clear your cookies first!")
    } else {
      setCookies();
      cookieQuantitys.each((i) => {
        results.append(` You choose an amount of ${Cookies.get(`${cookieQuantitys[i].name}`)} cookies for ${cookieQuantitys[i].name}!  <br/>`);
      });
      results.append('Come back for more anytime!');
    }
  });

});
