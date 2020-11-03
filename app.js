const colors = ['#686565', '#add8e6', '#ffb0cb', '#663399', 'b13d50', '#539957', '#1ec427'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length);;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})



 