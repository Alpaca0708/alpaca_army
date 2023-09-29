
function calculategrade(score){
    if(score>=90){
        return 'A'
        // console.log('A')
    }else if(score>=80){
        return 'B'
        // console.log('B')
    }else if(score>=70){
        return 'C'
        // console.log('C')
    }else if(score>=60){
        return 'D'
        // console.log('D')
    }else{
        return 'F'
        // console.log('F')
    }
}


// &&和 ||或
var result = calculategrade(88)
if(result=='A'||result=='B'){
    console.log('恨棒')
}else{
    console.log('loser')
}