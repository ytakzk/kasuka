var host = 'http://kakureyard.com/kasuka/';

// Set a position of a sidebar to the center.
function setHeightToCenter( content ) {
    var t = Math.floor(($(window).height() - $(content).height()) / 2);

    $(content).css({
        'top': t+60,
    });
}

$(window).load(function(){
	setHeightToCenter('#sidebar');
});

$(window).resize(function(){
    setHeightToCenter('#sidebar');
});


var timer = false;
$(window).scroll(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        console.log('scroll');
        sidebarPos();
    }, 200);
});

function sidebarPos() {
    var sidebarOffset = $('#sidebar').offset().top;
    var footerOffset = $('footer').offset().top;

    //Value for the center of thescreen
    var t = Math.floor(($(window).height() - $('#sidebar').height()) / 2) + 60;

    if (sidebarOffset + $('#sidebar').height() > footerOffset-150) {
      t = $(window).height() - $('footer').height() - $('#sidebar').height(); //Adjust to upper of footer
    }

    $('#sidebar').animate({
      'top': t,
    },400);
}

$(function(){
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == " " ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

$(function(){
      var imgBox = $('#i1-c2');
      var fadeSpeed = 1000;
      var switchDelay = 5000;
       
      imgBox.find('img').hide();
      imgBox.find('img:first').stop().fadeIn(fadeSpeed);
   
      setInterval(function(){
          imgBox.find('img:first-child').fadeOut(fadeSpeed)
          .next('img').fadeIn(fadeSpeed)
          .end().appendTo(imgBox);
      },switchDelay);
});
