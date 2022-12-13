let header = document.getElementsByClassName("header")[0];

window.onscroll = () => {
  headerChangeColorOnScroll();
};

let headerChangeColorOnScroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "transparent";
  }
};
