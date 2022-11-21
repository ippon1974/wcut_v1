jQuery(window).load(function () {
    jQuery('.viewport').each(function () { var imgHeight = jQuery(this).find('>img').css('height'); 
    jQuery(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
    setTimeout("jQuery('.viewport').parent().parent().closest('div').parent().hover(function(){ jQuery(this).find('.viewport').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() {var imgHeight = jQuery(this).find('.viewport').find('>img').css('height'); jQuery(this).find('.viewport').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });", 500);
});
