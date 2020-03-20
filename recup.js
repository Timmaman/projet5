
const new_parent=document.createElement("div");
new_parent.id= "test"
let parent= document.getElementById('open');

const new_child=document.createElement("p");
let child= document.getElementById('test');


async function test() {
    response = await fetch("http://localhost:3000/api/cameras");
    data = await response.json()
    return data; 
    }
    test().then(function(data){
    //console.log(data) pour tester déjà
    for (var article of data)
        {   parent.appendChild(new_parent);
            
            
            var name=article.name
            var price =article.price;
            child.appendChild(new_child);
            console.log= (new_child.innerHTMl+=name)
        }
    })
