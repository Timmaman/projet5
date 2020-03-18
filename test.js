

let elt= document.getElementById('open');

async function test() {
response = await fetch("http://localhost:3000/api/cameras");
data = await response.json()
.then((data) => { 
console.log(elt.innerHTML+=data);
})
}


