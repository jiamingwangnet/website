class Item {
    constructor(name, backgroundImage, tags, descriptionHTML, redirect) {
        this.name = name;
        this.backgroundImage = backgroundImage;
        this.tags = tags;
        this.descriptionHTML = descriptionHTML;
        this.redirect = redirect;

        // generate as html node

        // generate item
        this.item = document.createElement("div");
        this.item.classList.add("bg-image");
        this.item.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(${backgroundImage});`;
        this.item.onclick = () => {OpenModal(name);};

        const title = document.createElement("h1");
        title.innerText = name;
        title.classList.add("imageTitle");

        this.item.append(title, document.createElement("br"));

        const tagContainer = document.createElement("div");
        tagContainer.classList.add("tags");

        for(const tag of tags) {
            const tagElement = document.createElement("div");
            tagElement.classList.add("normal-tag", tag);
            tagElement.appendChild(document.createElement("p"));

            tagElement.addEventListener("click", event => {
                event.stopPropagation();
            });

            tagContainer.append(tagElement);
        }

        this.item.appendChild(tagContainer);

        const image = document.createElement("img");
        image.src = backgroundImage;
        image.classList.add("columnIMG");

        this.item.appendChild(image);

        // generate popup
        this.popup = document.createElement("div");
        this.popup.classList.add("modal_");
        this.popup.id = name;

        const popupContent = document.createElement("div");
        popupContent.classList.add("modal-content_");
        popupContent.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.671), rgba(0, 0, 0, 0.877)),
        url(${backgroundImage});`;

        const modalNav = document.createElement("div");
        modalNav.classList.add("modal-nav");
        
        const closeButton = document.createElement("span");
        closeButton.classList.add("close_");
        closeButton.innerHTML = "&times;";

        const navTitle = document.createElement("h1");
        navTitle.innerText = name;
        navTitle.style = "text-align: center;padding: 20px; font-size: 200%;";

        const playButton = document.createElement("button");
        playButton.classList.add("playButton");

        playButton.addEventListener("click", () => {
            window.location.href = redirect;
        });

        playButton.innerText = "Play";

        modalNav.append(closeButton, navTitle, playButton);

        const modalDescription = document.createElement("div");
        modalDescription.classList.add("blurBackdrop", "center2");
        modalDescription.style = "height: 100%;";

        const modalText = document.createElement("div");
        modalText.classList.add("modalText");
        modalText.innerHTML = descriptionHTML;

        modalText.appendChild(document.createElement("br"));

        const tagsTitle = document.createElement("span");
        tagsTitle.innerText = "Tags: ";

        modalText.appendChild(tagsTitle);

        for(const tag of tags) {
            const tagElement = document.createElement("div");
            tagElement.classList.add("normal-tag", tag);
            tagElement.appendChild(document.createElement("p"));

            modalText.appendChild(tagElement);
        }

        modalDescription.append(modalText);

        popupContent.append(modalNav, modalDescription);

        this.popup.appendChild(popupContent);
    }
}


function AddItem(item, itemListId, modalContainerId) {
    const itemList = document.getElementById(itemListId);
    const modalContainer = document.getElementById(modalContainerId);

    itemList.appendChild(item.item);
    modalContainer.appendChild(item.popup);
}

function AddItems(items, itemListId, modalContainerId) {
    for(const item of items) {
        AddItem(item, itemListId, modalContainerId);
    }
}

function SplitBetweenColumns(items, columnClass) {
    const columns = document.querySelectorAll(`.${columnClass}`);

    let columnIndex = 0;
    for(const item of items)
    {
        AddItem(item, columns[columnIndex].id, "modals");
        columnIndex = (columnIndex + 1) % columns.length;
    }
}