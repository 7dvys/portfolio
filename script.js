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
let items = document.querySelectorAll('body main section#experience ul li.item');
let panels = document.querySelectorAll('body main section#experience .panel');

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


// GITHUB API
fetch('https://api.github.com/users/7dvys/repos') //Get repos
.then(response => response.json())
.then(repos_info => {
  let currentProject = 0;
  let currentProjectUrl = '';
  var repos_ready_to_display = [];
  
    repos_info.forEach(repo_info => {

    // LATEST PROJECT
      let compare = repo_info.updated_at.localeCompare(currentProject);
      if(compare == 1){
        currentProject = repo_info.updated_at;
        currentProjectUrl = repo_info.clone_url;
      }

      console.log(repo_info);

    // Work I have built :D
      let branch = 'master';
      fetch(repo_info.contents_url.slice(0,-7)+'?ref='+branch) //Get repo content
        .then(response => response.json())
        .then(repo_content => {
          if(repo_content.length != 0){
            let portfolio_banner = false;
            let readme = false;

            repo_content.forEach(file => { //filter repos ready to display :3
              if(file.name == 'portfolio_banner.png' || file.name == 'portfolio_banner.jpg' || file.name == 'portfolio_banner.jpeg'){
                portfolio_banner = true;
              }

              if(file.name == 'readme.md'){
                readme = true;
              }

              if(portfolio_banner != false && readme != false){  
                repos_ready_to_display.pop(file);
              }
            })
          }
        })
      })
    
    // Display Latest projext
    document.querySelector('a.current-project').href = currentProjectUrl;

  })

































  // fetch('https://api.github.com/repos/7dvys/portfolio/contents/?ref=dev')
  //   .then(response => response.json())
  //   .then(data => {
  //     fetch(data[1].download_url)
  //       .then(response => response.text())
  //       .then(data => {
  //         var parser = new DOMParser();
  //         var doc = parser.parseFromString(data,'text/html')
  //       })
  //   })

