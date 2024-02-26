$(function() {
    $('section h3').appear();  
    $(document.body).on('appear', 'section h3', function(e, $affected) {
      // this code is executed for each appeared element
      $(this).yellowFade();
      $affected.each(function() {
        console.log(this.innerHTML+"\n");
      })
    });
  
    $(document.body).on('disappear', 'section h3', function(e, $affected) {
      // this code is executed for each disappeared element
      $affected.each(function() {
        console.log(this.innerHTML+"\n");
      })
    });
  });