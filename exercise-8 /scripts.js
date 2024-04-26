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
  dateElem.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;
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
  
  if(thisSecond % 30) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  
  
  // ADD TO INNER HTML
  let timeElem = document.getElementById("timeHere");
  timeElem.innerHTML = + thisHour + ":" + thisMinute + ":" + thisSecond;
    
  }


  setInterval(updateTime, 1000);

  function changeShape() {

    let shapeElem = document.getElementById("myShape");
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    shapeElem.style.top = Math.random() * (viewportHeight - shapeElem.clientHeight) + "px";
    shapeElem.style.left = Math.random() * (viewportWidth - shapeElem.clientWidth) + "px";
    shapeElem.style.right = Math.random() * 500 + "px";
    shapeElem.style.width = Math.random() * 500 + "px";
    shapeElem.style.height = Math.random() * 500 + "px";
    shapeElem.style.borderRadius = Math.random() * 50 + "%";
    shapeElem.style.transformOrigin = "center";
    shapeElem.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      
    }
    setInterval(changeShape, 1000);
