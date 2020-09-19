let search = document.querySelector('.search')
let searchData = [];

let getData = async() => {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(searchListings => {
            console.log(searchListings);
            searchData = searchListings;
        })
        .catch(error => {
            console.log(error);
        });
        searchData.map(el => {
            search.innerHTML +=
              `
              <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <p class="title is-4">`+el.name+`</p>
                            <p class="subtitle is-6"><a>@`+el.username+`</a></p>
                            <p>Email: <a href = "mailto: `+el.email+`">`+el.email+`</a></p>
                            <p>Phone: `+el.phone+`</p>
                            <p>Address: `
                            +el.address.street+`, `
                            +el.address.suite+`, `
                            +el.address.city+`, `
                            +el.address.zipcode+`
                            </p>
                            <p>Website: <a href = "http://`+el.website+`">`+el.website+`</a></p>
                            <p>Company: `+el.company.name+`</p>
                        </div>
                    </div>
                </div>
              </div>
              <br>
              `;
        });
};

getData();