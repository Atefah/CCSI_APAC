function reswize(){
         document.getElementById("logo").style.width="150px";
          document.getElementById("logo").style.transition="all 0.5s ease-in-out 0";     
}


 $(document).ready(function () {
  $('.invisible-content').hide();
  $(document).on('click',"#btn", function () {
    var moreLessButton=$('.invisible-content').is(":visible")?'Read More' :'Read Less';
    $(this).text(moreLessButton);
    $(this).parent('.box').find('.invisible-content').toggle();
    $(this).parent('.box').find('.visible-content').toggle();
  })
      
})

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var btnText2 = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
(function($){
        function myFunction(x) {
            $(window).scroll(function () {
                if ($(document).scrollTop() == 0) {
                    $('#header_logo').removeClass('tiny');
                    $('#header_top_space').removeClass('tinySpace');
                } else {
                    $('#header_logo').addClass('tiny');
                    $('#header_top_space').addClass('tinySpace');
                }
            });
        }

        var x = window.matchMedia("(max-width: 576px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes 

    })(jQuery);