// const foo = function () {
//     const x = 1
  
//     const bar = function () {
//       console.log(x) //notice this inner function using the outer function's variable
//     }
  
//     return bar
//   }
  
//   const baz = foo() //out here, x doesn't exist
//   baz() //but when we invoke baz, we're printing x!


// const setCounter = function (num) {
//     let counter = 0
  
//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }
  
//     return count
//   }
  
//   const increment = setCounter(2)
//   increment()
//   increment()



//SPOT CHECK 1
// const Family = function (){
//     let members =[]
//     const birth = function (name){
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// let giveBirth = Family() // question: Am I not invoking the 'Family' function when using it like that?
// giveBirth('child1')
// giveBirth('child2')
// giveBirth('child3')


// //SPOT CHECK 2

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//       add,
//       sub: subtract,
//       mult:multiply,
//       div:divide
//     }
// }

// let x = 10
// let y = 9
// console.log(m.sub (x,y))
// const m = mathOperations()
// console.log(m.add (13,29))
// console.log(m.mult (1.75,24))
// console.log(m.mult(7,m.div (36,6)))



// // WRITING MY OWN MODULE
// const MyModule = function(){
//     const f1 = function(){
//         console.log("I am function number 1")
//     }

//     const f2 = function (num){
//         if (typeof(num)== typeof(2)){
//         console.log(`I am function number 2. You gave me the number ${num}. `)
//         }else{
//             console.log(`What did you give me? thats a ${typeof(num)}, not a Number! You brat!`)
//         }
//     }

//     const f3 = function (obj){
//         if (typeof(obj)== typeof({n:1})){
//             console.log(`I an function number 3. The name property of the Object you gave me is: ${obj.name}. `)
//         }else {
//             console.log(`Dude. What you gave me wasn't an Object at all! It's a ${typeof(obj)}!`)
//         }

//     }
//     return {
//         f1,
//         f2,
//         f3
//     }
// }

// const mode = MyModule()

// mode.f1()

// mode.f2(4456)
// mode.f2('Lol') // annoying f2

// mode.f3({
//     name: 'Dror',
//     age: 22,
//     gender: 'Female'
// })
// mode.f3({  // f3 with undefined name
//     age:22,
//     gender: 'Female'
// }) 
// mode.f3(666)// annoying f3



// // SPOT CHECK 3
// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()

// usersModule.addUser('Nmae1')
// usersModule.addUser('Name2')
// console.log(usersModule.users)// question: why don't we write "_users"