oldname=0

async function test() {
	response = await fetch("http://localhost:3000/api/cameras");
	data = await response.json()
	return data; 
	}
	test().then(function(data){
	
		for (article of data)
			{
			//pour créer la div parent de chaque produit
			if(article.name!=oldname){
				parent=document.getElementById('open')
				new_parent=document.createElement("div");
				name=article.name
				parent.append(new_parent)
				new_parent.id=article.name
				oldname=name
				test=article.imageurl
					console.log(test)
				//Pour créer les paragraphes avec les infos
				if (article.name=oldname){
					//Pour afficher le nom du produit
					child_name=document.getElementById(article.name)
					name_child=document.createElement("p")
					child_name.append(name_child)
					name_child.id="name"
					console.log (name_child.innerHTML+=name)
					//Affichage du prix
					child_price=document.getElementById(article.name)
					price_child=document.createElement("p")
					child_price.append(price_child)
					price_child.id="price"
					article=article.price/100
					article+=" €"
					console.log (price_child.innerHTML+=article)
					
				}
			}
		
		}
	})




