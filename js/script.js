var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "40px",
  duration: 2000,
  delay: 450,
  reset: true,
});

sr.reveal(".char-text", { delay: 200, origin: "left" });
sr.reveal(".char-image", { delay: 400, origin: "right" });
sr.reveal(".icons", { delay: 400, origin: "left" });
sr.reveal(".scroll-down", { delay: 300, origin: "right" });
sr.reveal(".desc-chrono", { delay: 300, origin: "left" });
sr.reveal(".cr7-image", { delay: 150, origin: "right" });
sr.reveal(".char-comb-text", { delay: 300, origin: "top" });
sr.reveal(".chrono-char", { delay: 250, origin: "left" });
sr.reveal(".moco-char", { delay: 350, origin: "left" });
sr.reveal(".kelly-char", { delay: 450, origin: "right" });
sr.reveal(".rafael-char", { delay: 550, origin: "right" });
sr.reveal(".baret", { delay: 300, origin: "right" });
sr.reveal(".awm", { delay: 300, origin: "left" });
sr.reveal(".sg2", { delay: 500, origin: "right" });
sr.reveal(".sg6", { delay: 500, origin: "left" });
