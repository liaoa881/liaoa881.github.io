let div = document.querySelector('#cursor');
let body = document.querySelector('body');


document.onmousemove = function(e){
    //move cursor
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    //animate background
    body.style.backgroundPositionX = e.e.pageX + 'px';
    body.style.backgroundPositionY = e.e.pageY + 'px';
}