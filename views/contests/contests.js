// const {get} = require('http');

let contests = document.querySelector('.contests');
let contestBox = document.querySelector('.contest-box');
let loaderBox = document.querySelector('.loader-box');
let contestsBody = document.querySelector('.contests-tbody');
let contestData = [];

let getData = async () => {
  await fetch('http://127.0.0.1:3000/contests')
    .then(response => {
      return response.json();
    })
    .then(contests => {
      console.log(contests);
      contestData = contests;
    })
    .catch(error => {
      console.log(error);
    });
  contestData.map(el => {
    contestsBody.innerHTML +=
      `
      <tr>
        <td>` +
      el.event +
      `</td>
        <td>` +
      el.start +
      `</td>
        <td>` +
      el.end +
      `</td>
        <td>` +
      el.duration / 100 +
      ` hours</td>
        <td><a href="` +
      el.href +
      `" target="__blank">Click Here!</a>
      </tr>
    `;
  });
};

getData();
