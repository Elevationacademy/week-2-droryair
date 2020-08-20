
let idArray = [] // this will be the porocessors' ids array

// defining a function for the generator's button:
let generatorClick = function(){
    // giving variables:
    let pId = $(this).closest('div').attr("id") // Processor's ID
    let Did = $(this).closest('div').parent().data().id  // data-id
    let Bnum = $(this).closest('div').parent().find('.BUS').text()  // BUS number

    // pushing pId to the idArray:
    idArray.push({cmp_id: pId})

    //loging the info:
    console.log("Processor's ID: ",pId)
    console.log("Data-id: ",Did)
    console.log("BUS number: ",Bnum)
    console.log("ID Array: ",idArray)

}

// assigning the generatorClick function to the generator's button on click listener
$('.generator').on('click' ,generatorClick)



// defining a function for the validator's button:
let validatorClick = function(){
    // giving variables
    let genTxt = $(this).closest('div').parent().prev('div').find('.generator').text()  // generator's text
    let mbTxt  = $(this).closest('div').parent().prevAll('.MB').text()   // MB's text
    let qrs = $(this).closest('div').parent().prev('div').find('.QR') // both QRs elements

    // logging the info:
    console.log("Genetor's text: ",genTxt)
    console.log("MB's text: ",mbTxt)

    // looping throught the QRs elements, and logging theing text:
    let pointer = 1
    for (let qr  of qrs){
        console.log(`QR ${pointer} text: ${$(qr).text()}`)
        pointer++
    }
}

// assigning the validatorClick function to the validator's button on click listener
$('.validator').on('click',validatorClick)