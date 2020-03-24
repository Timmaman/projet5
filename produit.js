function product(){
	
	let send=sessionStorage.setItem("product","test")
	document.location.href="produit.html"
	
	const product_select=document.getElementById('products');
	let product_other=sessionStorage.getItem("product")
	product_select.appendChild(product_other)
	
}

