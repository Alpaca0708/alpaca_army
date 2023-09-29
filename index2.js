//var ellie = 'beautiful'
//console.log(ellie)

var food = 0
function animalWorld(any){
    if(any=='fox'){
        food = 3
    }else if(any=='rabbit'){
        food = 1
    }else if(any=='sloth'){
        food = 5
    }else{
        // console.log('不是可愛動物')
        food = 0
    }
    console.log(any, food)
}

var animalList = ['rabbit','dog', 'cat', 'fox', 'koala']

animalList.forEach((animal)=>{
    animalWorld(animal)
})
//animalWorld('dog')