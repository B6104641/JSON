//ดึงข้อมูลจาก API ไปแสดง
//https://jsonplaceholder.typicode.com/ --> เว็บเทส API
//https://jsonplaceholder.typicode.com/users

const list = document.getElementById("test01")
let output = ''

async function getDataFromAPI() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const res = await fetch(url)
    const  json = await res.json()
    json.forEach(item => {
        output+="<li>"+item.name+"<li>"
        
    });
    list.innerHTML=output
    console.log(json);
}
getDataFromAPI()