// Wait for the document to load before running the script 
(function ($) {
  
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    
    // Now show the region specified in the URL hash
    $(region).show();
    
    // Highlight the menu link associated with this region by adding the .active CSS class
    //$('.main-menu a[href="'+ region +'"]').addClass('active'); 

    // HIDE CANVAS IN MOBILE BROWSER
    var isMobile = $('#tabla_canvas').attr('name');
    if (String(isMobile).toLowerCase() == "true") {
      $('#tabla_canvas').hide();
    };

    switch(region) {
      case '#industry-tradition':
        $('.main-menu a[href="#industry"]').addClass('active'); 
        break;
      case '#industry-4W3':
        $('.main-menu a[href="#industry"]').addClass('active'); 
        break;
      case '#industry-tech':
        $('.main-menu a[href="#industry"]').addClass('active'); 
        break;
      default:
        $('.main-menu a[href="'+ region +'"]').addClass('active'); 
    }

    // Alternate method: Use AJAX to load the contents of an external file into a div based on URL fragment
    // This will extract the region name from URL hash, and then load [region].html into the main #content div
    // var region = location.hash.toString() || '#first';
    // $('#content').load(region.slice(1) + '.html')
    
  });
  
})(jQuery);
