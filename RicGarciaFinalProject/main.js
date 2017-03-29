$(document).ready(function() {
    if (Cookies.get('congrats')) {
      alert('Today only, get 10% off subscription!')
      $(Cookies.get('congrats'))
    }
      $('#submit').click(function() {
        var signup = $('#somename').val()
          Cookies.set('congrats', signup)
          alert('Congratulations ' + signup + '! Welcome to our club!')
    })
    $("#proddscpt1").hide();
    $("#prod1 button").click(function(){
        $("#proddscpt1").toggle();
    });
    $("#proddscpt2").hide();
    $("#prod2 button").click(function(){
        $("#proddscpt2").toggle();
    });
    $("#proddscpt3").hide();
    $("#prod3 button").click(function(){
        $("#proddscpt3").toggle();
    });
    $("#proddscpt4").hide();
    $("#prod4 button").click(function(){
        $("#proddscpt4").toggle();
    });
    $("#proddscpt5").hide();
    $("#prod5 button").click(function(){
        $("#proddscpt5").toggle();
    });
  })
