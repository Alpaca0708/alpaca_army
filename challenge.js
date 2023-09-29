

function challenge(choice){
    if(choice===1){
        return '1.街搭'
         //console.log('A')
    }else if(choice===2){
        return '2.一天不滑手機'
         //console.log('B')
    }else if(choice===3){
        return '3.寫一封信給10年後的自己'
        // console.log('C')
    }else if(choice===4){
        return '4.選一組10分鐘以內的tabata,做3組'
         //console.log('D')
    }else if(choice===5){
        return '5.現在立刻馬上去定好機票或飯店，準備好一個人的旅行'
         //console.log('F')
    }else {
        return '請選擇1~5之間的整數'
         //console.log
    }
}
console.log (challenge(1))



