var arr = [
   {
        name:'Shivangi',
        city:'Bhopal',
        age:20,
        salary:10000
    },
    {
        name:'Sarthak',
        city:'Katni',
        age:21,
        salary:15000
    },
    {
        name:'Roshan',
        city:'Rewa',
        age:22,
        salary:10000
    },
    {
        name:'Vansh',
        city:'Banglore',
        age:25,
        salary:2000
    },
    {
        name:'Shreya',
        city:'Jaipur',
        age:20,
        salary:10000
    },
]
var sum = ''
arr.forEach(function(elem) {
   sum += `<div class="cards">
        <h1>${elem.name}</h1>
        <h4>Age:${elem.age},</h4>
        <h4>City:${elem.city},</h4>
        <h4>Salary:${elem.salary}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At doloribus, ipsam voluptates harum vero velit?</p>
    </div>`
})
var body = document.querySelector('body')
body.innerHTML = sum