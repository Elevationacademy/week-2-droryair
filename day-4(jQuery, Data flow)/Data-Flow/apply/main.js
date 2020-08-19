
// RECAP EXERCISE
// link :https://kernel.elevation.ac/cohorts/53/lessons/53/apply/activity/3
let posts = [
    {
        name: "Name1",
        text: "Text1"
    },{
        name: "Name2",
        text: "Text2"
    },{
        name: "Name3",
        text: "Text3"
    }
]


const render = function (){
    $('#posts').empty()
    let id = 0
    for (let post of posts){
        $('#posts').append($(`<div class = "post" id ="p${id}">${post.name}: ${post.text}</div>`))
        id++
    }
}
render()

const onClick = function (){
    let name = $('#name').val()
    let text = $('#text').val()
    posts.push({name,text})
    render()
}
$('button').on('click', onClick)


// EXTENSION - removing a post when clicking on it
const removePost = function(){
    let postId = $(this).attr("id")
    let i = postId.replace('p','')
    i= Number(i)
    posts.splice(i,1)
    render()
        }

$('#posts').on('click','.post',removePost)
// console.log($('.post'))