(async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const category = urlParams.get('name');
	let projects = await (await fetch("../projects.json")).json()
	const categories = await (await fetch("../categories.json")).json()
	const projectTemplate = document.getElementById("project").innerHTML
	const projectParent = document.getElementById("projects")
	document.querySelectorAll(".category_name").forEach(element => element.innerHTML = category)
	document.querySelectorAll(".category_desc").forEach(element => element.innerHTML = categories[category])
	projectParent.innerHTML = ''
	for (const i of Object.keys(projects)) {
		if (projects[i].categories.includes(category)) {
			projectParent.innerHTML += projectTemplate
				.replace("{PROJECT_URLENCODED}", encodeURI(i))
				.replace("{PROJECT_NAME}", i)
				.replace("{PROJECT_DESCRIPTION}", projects[i].description)
				.replace("{PROJECT_CATEGORIES}", projects[i].categories.join(", "))
				.replace("{PROJECT_AUTHORS}", projects[i].authors.join(", "))
		}
	}
})()