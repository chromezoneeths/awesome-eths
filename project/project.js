(async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const project_name = urlParams.get('name');
	let projects = await (await fetch("../projects.json")).json()
	let project = projects[project_name]
	document.querySelectorAll(".name").forEach(element => element.innerHTML = project_name)
	document.querySelectorAll(".desc").forEach(element => element.innerHTML = project.description)
	document.querySelectorAll(".categories").forEach(element => element.innerHTML = project.categories.join(", "))
	document.querySelectorAll(".authors").forEach(element => element.innerHTML = project.authors.join(", "))
	document.querySelectorAll(".source").forEach(element => {
		if (project.source) {
			element.href = project.source
		} else {
			element.style.display = "none"
		}
	})
	document.querySelectorAll(".deployment").forEach(element => {
		if (project.deployment) {
			element.href = project.deployment
		} else {
			element.style.display = "none"
		}
	})
})()