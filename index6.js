let employee1 = {
    'name': 'Kai',
    'address': '高雄',
    '愛人':'hhh'
}

// console.log(employee1['address'])


employees = [
    {
        'name': 'Kai',
        'address': '高雄',
        '愛人':'hhh'
    },
    {
        'name': 'Mary',
        'address': '台北',
        '愛人':'hhh'
    },
    {
        'name': 'JJJ',
        'address': '台南',
        '愛人':'hhh'
    }
]

// console.log(employees[1]['address'])
// console.log(employees[2]['愛人'])
employees.forEach((emp)=>{
    console.log(emp['name'])
    if(emp['address']=='台北'){
        console.log(emp['name']+'天龍人')
    }
})

apples = [1,2,3]
apples.forEach((a)=>{
    console.log(a)
})


employees2 = [
    {
        'name': 'Kai',
        'address': '高雄',
        '愛人':[
            {
                'name':'lo',
                'phone':'093321312312',
            },
            {
                'name':'ppp',
                'phone':'0933123123',            
            },
            {
                'name':'wwww',
                'phone':'093321231',            
            }
        ]
    },
    {
        'name': 'Mary',
        'address': '台北',
        '愛人':'hhh'
    },
    {
        'name': 'JJJ',
        'address': '台南',
        '愛人':'hhh'
    }
]

console.log(employees2[0]['愛人'][2]['phone'])