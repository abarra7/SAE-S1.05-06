window.onscroll = function() {
  growShrinkLogo()
};
  
function growShrinkLogo() {
  var Logo = document.getElementById("logo")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height = '30px';
  } else {
    Logo.style.height = '60px';
  }
}