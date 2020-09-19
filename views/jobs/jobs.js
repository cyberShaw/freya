let jobs = document.querySelector('.jobs');
let jobContent = document.querySelector('.job-content');
let loaderBox = document.querySelector('.loader-box');
let jobData = [];
async function getData() {
  await fetch('http://127.0.0.1:3000/jobs')
    .then(response => {
      return response.json();
    })
    .then(jobListings => {
      console.log(jobListings);
      jobData = jobListings.data;
      console.log(jobData);
    })
    .catch(error => {
      console.log(error);
    });
  jobData.map(el => {
    jobs.innerHTML +=
      `
    <div class="column is-half">

      <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="` +
      el.company_logo +
      `" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4 role">` +
      el.title +
      `</p>
      <p class="subtitle is-6 company-name">` +
      el.company +
      `</p>
          </div>
        </div>
    
        <div class="content desc">
        
          <p class="subtitle created-at">
          <time>` +
      el.created_at +
      `</time>
      <a href="` +
      el.url +
      `" target="__blank">  
        <button class="button is-danger is-pulled-right">Apply -></button>
      </a>
          </p>
          <span class="location">
          ` +
      el.location +
      `
        </span>
        </div>
      </div>
    </div>
  </div>  
    `;
  });
  loaderBox.style.display = 'none';
  jobContent.style.display = 'block';
}

// window.onload(getData());
getData();
// let arr = [];
// let getPosts = async () => {
//   await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(jobs => {
//       console.log(jobs);
//       let arr = jobs;
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   console.log(arr);
// };

// getPosts();

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(jobs => {
//     console.log(jobs);
//     let arr = jobs;
//   })
//   .catch(error => {
//     console.log(error);
//   });
// console.log(arr);

arr.map(element => {});
