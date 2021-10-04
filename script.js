let x = 0, bool = false , interval;

const rotate = ()=> {
    
    const cubes = document.querySelectorAll('.cub')
    
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
 
}

const changePlayPause = () => {
    const i = document.querySelector('.play-pause i');  
    const cls = i.classList[1];
    if(cls === 'fa-play') {
        i.classList.remove('fa-play')
        i.classList.add('fa-pause')
    } else {
        i.classList.remove('fa-pause')
        i.classList.add('fa-play')
    }
    // console.log(cls)
}




const playPuse = () => {
    if(!bool) {
        interval = setInterval(()=> {
            x-= 90;
            rotate();
        },3000);
        changePlayPause()
        bool =true;
    } else {
        clearInterval(interval);
        changePlayPause()
        bool = false;
    }

   
}




document.querySelector('.left-arrow').addEventListener('click', () => {
    
    x += 90;
    rotate();

    if(bool) {
        playPuse();
    }

})
document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    
    x += 25;
    rotate();

})
document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    
    x -= 25;
    rotate();

})


document.querySelector('.right-arrow').addEventListener('click', ()=> {

        x -= 90
        rotate();

        if(bool) {
            playPuse();
        }
})

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    
    x -= 25;
    rotate();

})
document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    
    x += 25;
    rotate();

})


document.querySelector('.play-pause').addEventListener('click', ()=> {
    playPuse();


})