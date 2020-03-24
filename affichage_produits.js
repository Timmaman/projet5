


async function recup() {
	response = await fetch("http://localhost:3000/api/cameras");
	data = await response.json();
	return data; 
	}
	recup().then(function(data){
	
		for (let article of data)
			{
			//pour créer la div parent de chaque produit
			let oldname=0;
			if(article.name!=oldname){
				const parent=document.getElementById('articles');
				const new_parent=document.createElement("div");
				let name=article.name;
				parent.append(new_parent);
				new_parent.id=article.name;
				new_parent.onclick=product;
				
				oldname=name;
				//Pour créer les paragraphes avec les infos
				if (article.name=oldname)
					{const child_photo=document.getElementById(article.name);
					const photo_child=document.createElement("img");
					photo_child.src=article.imageUrl;
					photo_child.alt=article.name;
					photo_child.title=article.name;
					child_photo.append(photo_child);
					photo_child.id="image";

					//Pour afficher le nom du produit
					const child_name=document.getElementById(article.name);
					const name_child=document.createElement("p");
					child_name.append(name_child);
					name_child.id="name";
					console.log (name_child.innerHTML+=article.name);

					//Affichage du prix
					const child_price=document.getElementById(article.name);
					const price_child=document.createElement("p");
					child_price.append(price_child);
					price_child.id="price";
					price=article.price/100;
					price+=" €";
					console.log (price_child.innerHTML+=price);

					//Affichage description
					const child_desc=document.getElementById(article.name);
					const desc_child=document.createElement("p");
					child_desc.append(desc_child);
					desc_child.id="description";
					console.log (desc_child.innerHTML+=article.description);
				}
			}
		}
	})



function product(){
    let product=document.getElementById(this.id)
    
    const supp=document.getElementById('articles');
    while (supp.firstChild) { supp.removeChild(supp.firstChild);
    }
    supp.appendChild(product);

    let replace=document.getElementById("title").innerText="Voici la caméra que vous avez choisie";

    let top=document.getElementById("products");
    let index=document.getElementById("index");
    let garbage=top.removeChild(index);
    let button=document.createElement("button")
    top.append(button);
   	let test="Ajouter au panier"
    console.log(button.innerHTML=+test)

}

