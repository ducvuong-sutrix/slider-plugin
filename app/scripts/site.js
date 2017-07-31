/**
 * @name Site
 * @description Global variables and functions
 * @version 1.0
 */

 var Site = (function($, window, undefined) {
  'use strict';

  var privateVar = null;
  var privateMethod = function() {

    $(document).ready(function(){

      $(".navbar-btn").click(function(){
        $(".navbar-wrapper").slideToggle();
      });
    });
  };

  return {
    publicVar: privateVar,
    publicMethod: privateMethod
  };

})(jQuery, window);

jQuery(function() {
  Site.publicMethod();
});
