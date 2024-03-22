
let number = ["two", "three", "four", "five"]
let month = ["September", "October", "November", "December"]
let power = ["love", "hate", "happiness", "passion"]
let texture = ["softest", "hardest", "toughest", "warmest"]
let randomNumber = (Math.floor(Math.random()* number.length));
let randomMonth = (Math.floor(Math.random()* month.length));
let randomPower = (Math.floor(Math.random()* power.length));
let randomTexture = (Math.floor(Math.random()* texture.length));

document.getElementById("number").innerHTML = (number[randomNumber])
document.getElementById("month").innerHTML = (month[randomMonth])
document.getElementById("power").innerHTML = (power[randomPower])
document.getElementById("texture").innerHTML = (texture[randomTexture])