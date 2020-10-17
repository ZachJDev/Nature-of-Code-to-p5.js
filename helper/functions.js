function addTitleAndDesc(title, description) {

    // Create a new section to hold the content.
    const section = document.createElement("section")
    section.id = title;

    const titleElement = document.createElement("h3")
    titleElement.classList.add("subtitle");
    titleElement.innerText = title;

    const desc = document.createElement('p');
    desc.classList.add("description");
    desc.innerText = description

    section.appendChild(titleElement);
    section.appendChild(desc)
    document.body.appendChild(section);

}
