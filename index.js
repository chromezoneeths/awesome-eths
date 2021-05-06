(async () => {
	console.log("Hello world");
	const categories = await (await fetch("./categories.json")).json()
	
	const categories_parent = document.getElementById("categories")
	const category_template = document.getElementById("category").innerHTML

	categories_parent.innerHTML = ""
	
	for (const i of Object.keys(categories)) {
		const category = categories[i];
		let category_string = category_template
			.replace("{CATEGORY_NAME}", i)
			.replace("{CATEGORY_URLENCODED}", encodeURI(i))
			.replace("{CATEGORY_DESCRIPTION}", category);
		categories_parent.innerHTML += category_string
	}
})()
