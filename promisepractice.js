 const animal = "Lion";
const animal2 = "Tiger";
  const div = document.getElementById("canvas");
const picture = document.createElement("img");
picture.src = "/download.gif";
  div.appendChild(picture);


let funSignin = new Promise(function (resolve, reject) {
  if (animal === "Lion"|| animal2 === "Tiger") {
    setTimeout(() => resolve("These are the kings of the jungle"), 3000);
  } else {
    setTimeout(()=>reject("These are imposters"),3000)
  }
});


funSignin.then(function (newanimal) {
    console.log("I am Cheetah");
    return newanimal;
})
  
funSignin.then(function (newanimal) {
    console.log("I am Cheetah");
    return newanimal;
  })

funSignin.then(() => {
  setTimeout(() => {
    console.log("I'm here");
  }, 2000);
});