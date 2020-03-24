function product(){
	
	let send=localStorage.setItem("product","test")
	
	const product_select=document.getElementById('products');
	let product_other=sessionStorage.getItem("product")
	product_select.appendChild(product_other)
	
}

