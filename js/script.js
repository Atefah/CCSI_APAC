// function reswize(){
//          document.getElementById("logo").style.width="150px";
//           document.getElementById("logo").style.transition="all 0.5s ease-in-out 0";     
// }


 $(document).ready(function () {
  $('.invisible-content').hide();
  $(document).on('click',"#btn", function () {
    var moreLessButton=$('.invisible-content').is(":visible")?'Read More' :'Read Less';
    $(this).text(moreLessButton);
    $(this).parent('.box').find('.invisible-content').toggle();
    $(this).parent('.box').find('.visible-content').toggle();
    $(this).parent('.paraLeadership').find('.invisible-content').toggle();
    $(this).parent('.paraLeadership').find('.visible-content').toggle();

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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("logo").style.fontSize = "5px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "10px";
  }
}