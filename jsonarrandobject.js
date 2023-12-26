//Json array & Object


let myObject = {
    "first_name": "Panyaporn",
    "lastname": "Ngaosri",
    "status": null,
    "languages": ["Eng","TH","German"],
    "general": {
        "weigth": 52,
        "height": 168,
        "gender": "Man"
    }
}
console.log(`Panyaporn can speak ${myObject.languages[1]} and ${myObject.languages[0]}`);
console.log(`He is ${myObject.general.gender}`);


//ดึงข้อมูลจากไฟล์ index.json ไปแสดง
const list = document.getElementById("list")
let output = ''

// fetch("index_app.json")
// .then(res=>res.json())
// .then(json=>{
//     json.users.forEach(item => {
//         output+="<li>"+item.name+"<li>"
//     });
//     list.innerHTML = output
// }).catch(err=>{
//     console.log(err);
// })

async function getUsers(){
 const res = await fetch("index_app.json")
 const json  = res.json()
 json.users.forEach(item => {
            output+="<li>"+item.name+"<li>"
    });
    list.innerHTML = output
}
getUsers()