const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

})


function updateTime() {
  let today = new Date();
  console.log(today);
  let thisMonth = today.getMonth();
  console.log(thisMonth);
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(months[thisMonth]);
  let thisDate = today.getDate();
  console.log(thisDate);
  let thisWeekday = today.getDay();
  console.log(thisWeekday);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  console.log(days[thisWeekday]);
  let thisYear = today.getFullYear();
  let dateElem = document.getElementById("dateHere");
  let dateDay = document.getElementById("dateDay");
  let dateYear = document.getElementById("dateYear");
  dateElem.innerHTML = months[thisMonth];
  dateDay.innerHTML = thisDate ;
  dateYear.innerHTML = thisYear ;
  let thisHour = today.getHours();
  let thisMinute = today.getMinutes();
  let thisSecond = today.getSeconds();
    
  if(thisSecond < 10) {
    thisSecond = "0" + thisSecond;
  }
    
  if(thisMinute < 10) {
    thisMinute = "0" + thisMinute;
  }
    
  if(thisHour < 10) {
    thisHour = "0" + thisHour;
  }
    
  if(thisHour > 12) {
    thisHour = thisHour - 12;
  }
  
  // ADD TO INNER HTML
  let timeElem = document.getElementById("timeHere");
  timeElem.innerHTML = + thisHour + ":" + thisMinute ;
    
  }

  setInterval(updateTime, 1000);




  function changeShape() {
    let secondElem = document.getElementById("myShape");
    let today = new Date();
    let seconds = today.getSeconds().toString().padStart(2, '0'); 
    secondElem.textContent = seconds;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    secondElem.style.top = Math.random() * (viewportHeight - secondElem.clientHeight) + "px";
    secondElem.style.left = Math.random() * (viewportWidth - secondElem.clientWidth) + "px";
    secondElem.style.width = Math.random() * 800 + "px";
    secondElem.style.height = Math.random() * 800 + "px";
    secondElem.style.borderRadius = Math.random() * 50 + "%";
    secondElem.style.transformOrigin = "center";
    secondElem.style.textAlign = "center";
    secondElem.style.transform = "rotate(" + Math.random() * 360 + "deg)";
}

setInterval(changeShape, 1000);

function map(value, low1, high1, low2, high2){
  
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);

}

