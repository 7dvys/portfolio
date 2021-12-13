// NAV animation
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("body header").style.top = "0px";
  } else {
    document.querySelector("body header").style.top = "-4rem";
  }

  if(currentScrollPos != 0){
    document.querySelector("body header").style.boxShadow= "0px 2px 4px -4px var(--grey1)";
  }else{
    document.querySelector("body header").style.boxShadow= "none";
  }

  prevScrollpos = currentScrollPos;
}


// EXPERIENCE PANEL
items = document.querySelectorAll('body main section#experience ul li.item');
panels = document.querySelectorAll('body main section#experience .panel');

function experiencePanel(panel) {

  items.forEach(item => {
    item.classList.remove('active');
  });

  panels.forEach(panel => {
    panel.style.display = "none";
  });
 
  switch(panel){
    case 'mybusines':
      items[0].classList.add('active');
      panels[0].style.display = "block";
      break;
    case 'rpm':
      items[0].classList.add('active');
      panels[0].style.display = "block";
      break;
    case 'free':
      items[1].classList.add('active');
      panels[1].style.display = "block";
      break;
  }
}


// LATEST PROJECT
fetch('https://api.github.com/users/7dvys/repos')
  .then(response => response.json())
  .then(data => {
    $tmp = 0;
    console.log(data);
  })
1