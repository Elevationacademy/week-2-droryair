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

// declaring an 'onclick' function:
const onClick = function(){
    if($(this).data().instock){
     cart.append(`<div class="cart-item">${$(this).text()}</div>`)
    }
}

$('.item').on('click',onClick)



// EXERCISES 3,5 EXTENSIONS (CHALLENGING)
//link: https://kernel.elevation.ac/cohorts/53/lessons/60/apply/activity/26







