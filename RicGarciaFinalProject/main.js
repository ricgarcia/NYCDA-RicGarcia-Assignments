$(document).ready(function() {
  Cookies.get('congrats')

    var signup = $('#somename').val()

    if (signup !== completedsignup)
      signup = alert('Today only, get 10% off subscription!')

    var completedsignup = signup
      $('#submit').click(function(completedsignup){
      Cookies.set('congrats', completedsignup)
        alert('Congratulations ' + $('#somename').val() + '!' + ' Welcome to our club!')
    })
  })
