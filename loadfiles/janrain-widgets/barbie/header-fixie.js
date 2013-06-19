/* fix ie hover class */
function fixIEStyle(){
  if(jQuery.browser.msie){
    // fix IE request css background image over and over again

    try {document.execCommand('BackgroundImageCache', false, true)}
    catch(err) {}	
		
    if(jQuery.browser.version < 7 && !window.XMLHttpRequest){

      // top navigation
      addHover('#mdn-top-nav li', "sfhover") ;
      addHover('#form-site-search input', "sfhover") ;

      DD_belatedPNG.fix('#mdn-hd .hd-bg-wrap, #nav-dropdown-menu, #mdn-hd #site-logo');
    }
  }
}

function addHover(match, className) {
  return jQuery(match).each(function(i, el){
    jQuery(el).hover(function(){
      jQuery(this).addClass(className);
    }, function(){
      jQuery(this).removeClass(className);
    })
  })
};