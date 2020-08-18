// EXERCISES 1-2 (MUST)
//link: https://kernel.elevation.ac/cohorts/53/lessons/51/apply/activity/9

// //EXERCISE 1
// const StringFormatter = function (){
//     const capitalizeFirst = function (str){
//         str = str.toLowerCase()
//         str = str[0].toUpperCase() + str.slice(1)
//         console.log("capitalizeFirst:", str)
//         return str
//     }

//     const skewerCase = function (str) {
//         str = str.replace(/\s/g, '-')
//         console.log("skewerCase:",str)
//         return str
//     }
//     return{
//         capitalizeFirst,
//         skewerCase
//     }

// }
// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box




// //EXERCISE 2
// const Bank = function(){
//     let money = 500

//     const depositCash = function(cash){
//         money+= cash
//     }
//     const checkBalance = function (){
//         console.log("Your balalnce is:", money)
//     }

//     return{
//         deposit: depositCash,
//         showBalance: checkBalance
//     }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950




// // EXERCISE 3 (CHALLENGING)
// // link: https://kernel.elevation.ac/cohorts/53/lessons/51/apply/activity/9
//  const SongsManager = function(){
//      let songs = []
//      const addSong = function(name,url){
//          url = url.replace("https://www.youtube.com/watch?v=","")
//         songs.push({name,url})
//     }
//     console.log(songs)
//      const getSong = function(name){
//         for (let i in songs){
//             if(songs[i].name === name){
//                 songs[i].url = "https://www.youtube.com/watch?v=" + songs[i].url
//                 console.log(songs[i].url)
//                 return songs[i].url
//             }
//         }  
//      }
//      return {
//          addSong,
//          getSong
//      }
//  }
//  const songsManager = SongsManager()
//  songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
//  songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
//  songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
 
//  songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
//// I'm so proud of myself :')