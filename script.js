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
  
    repos_info.forEach(function(repo_info,index){

    // LATEST PROJECT
      let compare = repo_info.updated_at.localeCompare(currentProject);
      if(compare == 1){
        currentProject = repo_info.updated_at;
        currentProjectUrl = repo_info.html_url;
      }

    // Work I have built :D
      let branch = 'master';
      fetch(repo_info.contents_url.slice(0,-7)+'?ref='+branch) //Get repo content
        .then(response => response.json())
        .then(repo_content => {
          if(repo_content.length != 0){

            repo_content.forEach(file => { //filter repos ready to display :3
              if(file.name == 'portfolio_banner.png' || file.name == 'portfolio_banner.jpg' || file.name == 'portfolio_banner.jpeg'){
                repos_ready_to_display[index] = file;
              }

            })
          }
        })

        // Generate work panels (x3)
        

        // Generate work cards
        let work_section = document.querySelector("section#work");
        let archive_section = document.createElement('article');
        console.log(repos_ready_to_display);
        archive_section.classList.add('archive_side'+(index%2));

        archive_section.innerHTML =
          `
            <div class='card-header'>
              <h3>${repo_info.name}</h3>
              <a href='${repo_info.html_url}'>g</a>
              <a href='${repo_info.homepage}'>h</a>
            </div>
            <div class='card-body'>
              <p>${repo_info.description}</p>
            </div>
            <div class='card-footer'>
              <span>Last updated at ${repo_info.updated_at}</span>
              <span>Created at ${repo_info.created_at}</span>
            </div>
          `;

          //languages pending

        work_section.append(archive_section);
        console.log(work_section);
        console.log(repo_info);
        // name
        // description
        // html_url: url
        // Fetch-> languages_url: langs
        // created_at
        // updated_at
        // homepage

        
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

