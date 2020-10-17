function addTitleAndDesc(title, description) {

    // Create a new section to hold the content.
    const section = document.createElement("section")
    section.id = title;

    const titleElement = document.createElement("h3")
    titleElement.classList.add("subtitle");
    titleElement.innerText = title;

    const desc = document.createElement('p');
    desc.classList.add("description");
    desc.innerHTML = description

    section.appendChild(titleElement);
    section.appendChild(desc)
    const sketchDiv = document.createElement("div")
    sketchDiv.id = `${title}-sketch`
    section.appendChild(sketchDiv)
    document.body.appendChild(section);

}