document.querySelector('body').addEventListener('mousemove', eyeball);


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

})

function eyeball(){
  const eye = document.querySelectorAll('.pupil');
  eye.forEach(function(eye){
    let x = (eye.getBoundingClientRect().left) + (eye.
    clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.
    clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (60 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate("+rotation+"deg)"
  });

}
