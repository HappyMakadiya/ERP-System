/** code by webdevtrick ( https://webdevtrick.com ) **/
(function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.c-nav-dropdown').toggle();
        $('.c-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.c-nav-dropdown').hide();
      });
      $('#c-nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#c-nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);
