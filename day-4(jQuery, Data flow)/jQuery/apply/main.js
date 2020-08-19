// //EXERCISES 1,2,4 (MUST)
// // link: https://kernel.elevation.ac/cohorts/53/lessons/60/apply/activity/26

// //EXERCISES 1 ,2
// $('body').append($(`<input id = "person-input" placeholder = "Person's name">`))
// $('body').append($('<button id = "add-person" >Add Pesron</button>'))

// const addPerson = function(){
//     let name = $('#person-input').val()
//     const listItem = $(`<li class = "person">${name}</li>`)
//     $('#people-list').append(listItem)
// }

// $('#add-person').on('click', addPerson)

// const removePerson = function(){
//     $(this).remove()
// }

// $('#people-list').on('click','.person', removePerson)



// EXERCISE 4
let cart = $('#cart')

let ShoeCount = 0
let MelonCount = 0

// declaring an 'onclick' function:
const onClick = function(){
    if($(this).data().instock){
        console.log(cart)
        for (item in cart){
            if ($('#cart:unth-child(item)').text() === "Shoe" ){
                ShoeCount++
                $('#cart:unth-child(item)').text("Shoe " +ShoeCount )
            }else{
                MelonCount++
                $('#cart:unth-child(item)').text("Melon " +MelonCount )
            }
        }
     cart.append(`<div class="cart-item">${$(this).text()}</div>`)
    }
}
$('.item').on('click',onClick)


// adding the extention:
const remove = function(){
    $(this).remove()
}
cart.on('click','.cart-item',remove)



// EXERCISES 3,5 EXTENSIONS (CHALLENGING)
//link: https://kernel.elevation.ac/cohorts/53/lessons/60/apply/activity/26



// //EXERCISE 3
// $('body').append($(`<div class = "box" ></div><div class = "box"></div>`))

// const toggleColor = function(){
//     $('.box').css("background-color","blue")
//     $(this).css("background-color","purple")
// }

// $('.box').on('mouseover',toggleColor)



// //EXERCISE 5
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]
// for (let fruit of fruits){
//     $('#basket').append($(`<div class = ${fruit.color}> ${fruit.name}</div>`))
// }

// // EXTENTION - COLOR PICKER

// // giving the spans classes and background colors:

//     //classes (to fit the css file)
// const colors = $('#colors')
// $("span").attr("class","picker")

//     //background colors:
// for (let span of $('span')){
//     color = $(span).data().color
//     $(span).css("background-color",color)
// }


// //onclick function
// const changeColor = function(){
//     $('.box').css("background-color",$(this).css("background-color"))
// }

// $('span').on('click',changeColor)


//EXTENSION - CART


















