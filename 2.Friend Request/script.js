var btn = document.querySelector('button')
var istatus = document.querySelector('h5')
var img = document.querySelector('img')
var flag = 0
btn.addEventListener('click', function(){
    if(flag==0) {
    istatus.innerHTML = 'Friends'
    istatus.style.color = 'green'
    btn.innerHTML = 'Remove Friend'
    img.style.borderColor = 'green'
    flag = 1
} else{
    istatus.innerHTML = 'Stranger'
    istatus.style.color = 'red'
    btn.innerHTML = 'Add Friend'
    img.style.borderColor = 'red'
    flag = 0
}
})