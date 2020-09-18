let connect = document.querySelector('.connect')
let connectData = []

let getData = async() => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
        .then(connectListings => {
            console.log(connectListings);
            connectData = connectListings;
        })
        .catch(error => {
            console.log(error);
        });
        connectData.map(el => {
            connect.innerHTML +=
            `
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                        <p class="title is-4">`+el.title+`</p>
                        <p class="subtitle is-6">Written by user: `+el.userId+`</p>
                        </div>
                    </div>
                    <div class="content">
                        `+el.body+`
                    </div>
                </div>
            </div>
            <br>
            `;
        });
    };

getData();