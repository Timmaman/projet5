


async function recup() {
	response = await fetch("http://localhost:3000/api/cameras");
	data = await response.json();
	return data; 
}


recup().then(function(data){
		create()
})

//function creat() {}

const create = () => {
	createLinks();

	createListener();
}	

const createLinks = () => {
	for (let article of data)
			{
			//pour créer la div parent de chaque produit
			let oldname=0;
			if(article.name!=oldname){
				const parent=document.getElementById('articles');
				const new_parent=document.createElement("a");
				let name=article.name;
				parent.append(new_parent);
				new_parent.id=article._id;
				new_parent.className="product";
				new_parent.href="produit.html";
				
				oldname=name;
				//Pour créer les paragraphes avec les infos
				if (article.name=oldname)
					{const child_photo=document.getElementById(article._id);
					const photo_child=document.createElement("img");
					photo_child.src=article.imageUrl;
					photo_child.alt=article.name;
					photo_child.title=article.name;
					child_photo.append(photo_child);
					photo_child.id="image";

					//Pour afficher le nom du produit
					const child_name=document.getElementById(article._id);
					const name_child=document.createElement("p");
					child_name.append(name_child);
					name_child.id="name";
					console.log (name_child.innerHTML+=article.name);

					//Affichage du prix
					const child_price=document.getElementById(article._id);
					const price_child=document.createElement("p");
					child_price.append(price_child);
					price_child.id="price";
					price=article.price/100;
					price+=" €";
					console.log (price_child.innerHTML+=price);
				}
			}
}	
}	
// Récupération de l'ID du produit sélectionné
const createListener = () => {
	var links = document.getElementsByClassName('product');
	for (let i = 0; i<links.length; i++) {
		links[i].addEventListener('click', function(e) {
			sessionStorage.setItem('article_id',event.currentTarget.getAttribute('id'));
		},)
	}
}