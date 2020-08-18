// EXERCISES 1-7 (MUST)
// link: https://kernel.elevation.ac/cohorts/53/lessons/50/apply/activity/11
//proirity: 1,2,4,5


// //EXERCISE 1
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   const pushPull = function(func){
//       func()
//   }

//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"



// //EXERCISE 2

// const getTime = function (func){
//     const time = new Date()
//     func(time)
// }

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   getTime(returnTime)


// //EXERCISE 3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
  
//   const logData = function(data){
//       console.log(data)
//   }
//   displayData(alert, logData, "I like to party")



// //EXERCISE 4
// const sum = (x,y,z) => x+y+z
// console.log(sum(1,2,3))


// //EXERCISE 5
// const capitalize = (str) =>{
//     str = str.toLowerCase()
//     str = str[0].toUpperCase() + str.slice(1)
//    return ( str)
// } 
// console.log(capitalize("bOb") )// returns Bob
// console.log(capitalize("TAYLOR")) // returns Taylor
// console.log(capitalize("feliSHIA")) // returns Felishia)


// //EXERCISE 6
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }

//   const commentOnWeather = temp => `it's ${determineWeather(temp)}`

//   console.log(commentOnWeather(30)) //returns "It's hot"
//   console.log(commentOnWeather(22) )//returns "It's cold"


// //EXERCUSE 7
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound =>{
//     alert(sound)
//     document.getElementById("box").innerHTML = sound // just fooling around
//   }      
      
//   explode(shineLight, makeSound, "BOOM")


