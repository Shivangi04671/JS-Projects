let teams = ['CSK', 'MI', 'KKR', 'GT', 'SRH', 'RR', 'LSG', 'PBKS', 'DC'];
let btn = document.querySelector('button');
let txt = document.querySelector('h2');
btn.addEventListener('click', function(){
    let num = Math.floor(Math.random() * teams.length);
    txt.innerHTML = teams[num];
});