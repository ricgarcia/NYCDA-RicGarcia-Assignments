Your Name:<br>
  <input type="text" id='somename' name="somename" value="">
  <br>
  <input type="submit" id='submit' value="Submit">

  $(document).ready(function() {
    Cookies.get('congrats'))
   
        $('#submit').click(function(){
        Cookies.set('congrats', $('#somename').val())
          alert('Congratulations' + $('#somename').val() + '!' + ' Welcome to our club!')
      })
    })
  /*$('#somename').hide().animate({opacity: "0.50"}, 2500)*/
  //*  $('h1').val($('#somename').val())*/
