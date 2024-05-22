jQuery(document).ready(function(){

    jQuery("#subirTopo").hide();

    jQuery('a#subirTopo').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#subirTopo').fadeIn();
        } else {
            jQuery('#subirTopo').fadeOut();
        }

        
        if (jQuery(this).scrollTop() > 40) {
            jQuery('#gg').fadeOut();
        }else{  
            jQuery('#gg').fadeIn();
        }
    });

            
});
