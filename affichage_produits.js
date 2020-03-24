


async function recup() {
	response = await fetch("http://localhost:3000/api/cameras");
	data = await response.json();
	return data; 
}

recup().then(function(data){
		localStorage.setItem('articles', data);
		display()

})
//function display() {}

const display = () => {
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
				new_parent.id=article.name;
				new_parent.className="test";
				new_parent.onclick="setLocalStorage";
				new_parent.href="produit.html";
				
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

					
				}
			}
}	// localStorage de tous les articles
		//  createLinks( (creeer liens)
			// for each links => addEventListener('click'=>setLocalStorage('currentArticle', event.target.getAttr('id'))))
}	
const createListener = () => {
	var links = document.getElementsByClassName('test');
	for (let i = 0; i<=links.length; i++) {
		links[i].addEventListener('click', function(e) {
			console.log("event :"+e)
			localStorage.setItem('article_id',event.target.getAttr('id'));
		})
	}
}