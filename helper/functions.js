function addTitleAndDesc(block) {

    const {title, description, id} = block

    // Create a new section to hold the content.
    const section = document.createElement("section")
    section.id = id;

    // Title
    const titleElement = document.createElement("h3")
    titleElement.classList.add("subtitle");
    titleElement.innerText = title;

    // Description
    const desc = document.createElement('p');
    desc.classList.add("description");
    desc.innerHTML = description


    // Button for Playing and Pausing:
    let button = document.createElement('button');
    button.innerText = "Play";;
    button.addEventListener("click", () => {
        if(button.innerText == "Play") button.innerText = "Pause";
        else button.innerText = "Play";
    })

    section.appendChild(titleElement);
    section.appendChild(desc)
    section.appendChild(button)
    document.body.appendChild(section);
}


const setButton = (id, context) => {

    let button = document.querySelector(`#${id} button`)
    console.log(button.textContent)
    button.addEventListener("click", () => {
        if(context.isLooping()) context.noLoop();
        else context.loop();
    })
}