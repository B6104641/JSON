

//Jacascript Object

let customers = {
    name: "Sarathon",
    phone_number: "091232432",
    job: 'programer',
    getData () {
        console.log(`First = ${this.name} Phone =  ${this.phone_number} `)
    }
}

let name = `{
    "first_name": "Panyaporn",
    "last_name": "Ngaosri"

}`
console.log(typeof customers)
console.log(customers.name)
customers.name = "Panyaporn"
console.log(customers.name)
customers.getData()
console.log('===============================')
console.log(typeof this.name);
console.log(name);
console.log('===============================')
//json parse --> json string --> js object
let myJson =  `{
    "first_name": "Arm",
    "last_name": "KKK"

}`
console.log(myJson);
let  newMyJson = JSON.parse(myJson)
console.log(newMyJson);
console.log('===============================')

//js obkect --> JSON
let data = {
    name01: "Kimmmmm",
    name02: "Jacccck"
}
console.log(data);
console.log('===============================')
let  newData = JSON.stringify(data)
console.log(newData)


