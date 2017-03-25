$(document).ready(function() {
  var current_sugar_count = Cookies.get('sugar-key')
  $('#sugar-count').html(current_sugar_count)

  $('#sugar').click(function() {
    var current_sugar_count = parseInt(Cookies.get('sugar-key'))

    if (!current_sugar_count) {
      current_sugar_count = 0
    }
    var new_sugar_count = current_sugar_count + 1
    Cookies.set('sugar-key', new_sugar_count)
    $('#sugar-count').html(new_sugar_count)
  })

  var current_chocolate_count = Cookies.get('chocolate-key')
  $('#chocolate-count').html(current_chocolate_count)

  $('#chocolate').click(function() {
    var current_chocolate_count = parseInt(Cookies.get('chocolate-key'))

    if (!current_chocolate_count) {
      current_chocolate_count = 0
    }
    var new_chocolate_count = current_chocolate_count + 1
    Cookies.set('chocolate-key', new_chocolate_count)
    $('#chocolate-count').html(new_chocolate_count)
  })

  var current_lemon_count = Cookies.get('lemon-key')
  $('#lemon-count').html(current_lemon_count)

  $('#lemon').click(function() {
    var current_lemon_count = parseInt(Cookies.get('lemon-key'))

    if (!current_lemon_count) {
      current_lemon_count = 0
    }
    var new_lemon_count = current_lemon_count + 1
    Cookies.set('lemon-key', new_lemon_count)
    $('#lemon-count').html(new_lemon_count)
  })



  $('#reset').click(function() {
    Cookies.set('sugar-key', 0)
    $('#sugar-count').html(0)
  })
  $('#reset3').click(function() {
  Cookies.set('lemon-key', 0)
  $('#lemon-count').html(0)
  })
  $('#reset2').click(function() {
  Cookies.set('chocolate-key', 0)
  $('#chocolate-count').html(0)
  })
})
