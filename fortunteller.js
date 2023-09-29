
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function abc(num){
    ranNumFromOneToThree = Math.random()*num
    ranNumFromOneToThreeAndDeletePoint = Math.floor(ranNumFromOneToThree)
    return ranNumFromOneToThreeAndDeletePoint
}

// let rrr = abc(5)
// // console.log(abc(5))
// console.log(rrr)



var lucky = ['大吉','吉', '中', '兇', '大凶', '爛']


// console.log(lucky[rrr])

// setInterval(()=>{
//     let result = lucky[getRandomInt(5)]
//     if(result =='大吉'){
//         // console.log('恭喜')
//         result = result + ' => 恭喜!!!'
//     }
//     console.log(result)
// },1000)

setInterval(()=>{

    let resultNum = getRandomInt(lucky.length)
    console.log(lucky[resultNum])

    if(resultNum== 0){
        console.log('恭喜')
        // result = '恭喜!!!'
    }
   
},1000)


// //var result = getRandomInt(0)
// //if(result==0){
//   //  console.log('恭喜')}


//    // var result = lucky(0)
//   //  if(result=='0'){
//   //      console.log('恭喜')}