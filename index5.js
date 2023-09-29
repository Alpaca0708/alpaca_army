var names = ['apple']

names.push('Kai')
names.push('贏')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


names.splice(1,1)

console.log(names[getRandomInt(names.length)])