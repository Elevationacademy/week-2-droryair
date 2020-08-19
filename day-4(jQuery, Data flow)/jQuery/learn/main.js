// // SPOT CHECK 1
// const header = $("h1")
// console.log(header)


// //SPOT CHECK 2
// $('h1').css('color','blue')
// $('.red-div').css("color","red")
// $('ul :nth-child(1)').css("color","green")
// $('ul :nth-child(2)').css("color","pink")
// $('#brown-div').css("color","brown")

// //SPOT CHECK 3
// $('#b1').addClass('box')
// $('#b2').addClass('box')
// $('.box').css("color","teal")

// //SPOT CHECK 4
// $('#my-input').val("Terabyte")

// //SPOT CHECK 5
// const barcode = $('.div').data().barcode
// console.log(barcode)
// const expirationDate = $('.div').data().expirationdate
// console.log(`The item with barcode ${barcode} will expire on ${expirationDate}`)
// //                  conclusions :
// // 1)   If I want to access an element's data, it has to be specific to the element I want.
// //      Which means, I can't write $('div').data().something  if there are other div elements in the html document -
// //      I have to reach the wanted div using a specific id or class.
// // 2)   data's name MUSN'T include capital letters at all.
// //      for example: data-expirationDate  <- not a legit name (capital D)
// //                   data-expirationdate  <- a very legit name


// // SPOT CHECK 6
// $('#hover').on('mouseover', function (){
//     $(this).css("color","blue")
// })


// //SPOT CHECK 7

// const clicked = function (){
//     console.log(($("#input").val()))
// }
// $('button').on('click', clicked)



// // SPOT CHECK 8
// // const blue = $('.box').css("color","blue")
// // const purple =  $('.box').css("color","purple")

// const mouseOver = function(){
//     $(this).css("background-color","blue")
// }

// const mouseExit = function(){
//     $(this).css("background-color","purple")
// }

// $('.box').on('mouseover', mouseOver)
// $('.box').on('mouseleave', mouseExit)


// //SPOT CHECK 9

// const onclick = function(){
//     $('body').append($('<div>Feed me more</>'))
// }
// $('.feedme').on('click',onclick)

// // SPOT CHECK 10
// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
// for (let i in names){
//     $('body').append($(`<div class='human'>${names[i].first} - ${names[i].last}</div>`))
// }


// //SPOT CHECK 11
// const remove = function(){
//     $('h1').remove('#h1')
// }
// $('#h1').on('click',remove)


// //SPOT CHECK 12

// $('#blogs').text("BLOGS")

// const addDivToBlog = function(){
//     $('#blogs').append($('<div class = "blog">The same text</div>'))
// }

// const changeText = function(){
//     $('.blog').text ("blargh")
// }
// $('#post').on('click', addDivToBlog)
// $('#blogs').on('click', changeText)


// // SPOT CHECK 13
// $('#blogs').text("BLOGS")

// const addDivToBlog = function(){
//     $('#blogs').append($('<div class = "blog">The same text</div>'))
// }

// const changeText = function(){
//     $(this).text ("blargh")
// }
// $('#post').on('click', addDivToBlog)
// $('body').on('click', ".blog", changeText)
