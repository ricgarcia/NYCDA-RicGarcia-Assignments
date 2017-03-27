$(document).ready(function() {
  Cookies.get('congrats')

    var signup = $('#somename').val()

    if (signup !== $('somename').val())
      alert('Today only, get 10% off subscription!')

    var completedsignup = signup
      $('#submit').click(function(){
      Cookies.set('congrats', completedsignup)
        alert('Congratulations ' + $('#somename').val() + '!' + ' Welcome to our club!')
    })
  })
