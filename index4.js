// // 多久之後做
// setTimeout(()=>{
//     console.log('嗨嗨嗨')
// },3000)

// // 每個多久做一次
// setInterval(()=>{
//     console.log('在嗎?')
// },2000)

// // for迴圈(起始;執行條件;怎麼增加)
// for(i=0;i<10;i++){
//     console.log(i)
// }

// 每一秒執行，執行十次結束
// for(i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log('嗨嗨嗨')
//     },1000*i)
// }

// 隨機
// var randomNumber = Math.random()
// console.log(randomNumber)

// var opponentPaperScissorsStone = ''
// var myPaperScissorsStone = '石頭'

// if(randomNumber<=1/3){
//     opponentPaperScissorsStone = '剪刀'
// }else if(randomNumber<=2/3){
//     opponentPaperScissorsStone = '石頭'
// }else{
//     opponentPaperScissorsStone = '布'
// }

// console.log(opponentPaperScissorsStone)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// console.log(getRandomInt(3))
// 0~1=>0~3=>無條件捨去法=>0,1,2
var animalList = ['rabbit','dog', 'cat', 'fox', 'koala']
// console.log(animalList[3])

console.log(animalList[getRandomInt(5)])