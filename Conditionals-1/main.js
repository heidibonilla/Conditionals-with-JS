let season = 'summer';
let response;

// Add your code here
if (season === 'summer') {
response = 'It is summer'
} else if (season === 'winter') {
response = 'its cold outside'
} else {
response = 'enjoy the weather!'
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
