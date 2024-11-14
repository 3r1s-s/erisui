function openModal(data) {
    const modalOuter = document.querySelector(".modal-outer");
    const modalInner = document.querySelector(".modal-inner");
    const modal = document.querySelector(".modal");

    if (data) {
        if (data.small) {
            modal.classList.add("small");
        }
        if (data.title) {
            let titleElement = document.createElement("span");
            titleElement.classList.add("modal-header");
            titleElement.textContent = data.title.sanitize()
            modalInner.append(titleElement);
        }

        if (data.body) {
            let bodyElement = document.createElement("div");
            bodyElement.classList.add("modal-body");
            bodyElement.innerHTML = data.body;
            if (data.bodyStyle) {
                if (bodyElement) {    
                    bodyElement.style = data.bodyStyle;
                }
            }
            modalInner.append(bodyElement);
        }
        
        if (data.style) {
            modal.style = data.style;
        } else {
            modal.style = '';
        }

        if (data.id) {
            modal.id = data.id;
        } else {
            modal.id = '';
        }

        document.querySelector(".modal-options").innerHTML = `
        <button class="modal-button" onclick="closeModal()">Close</button>
        `;
    }
    modalOuter.style.visibility = "visible";
    modalOuter.classList.add("open");
}

function closeModal() {
    const modalOuter = document.querySelector(".modal-outer");
    const modalInner = document.querySelector(".modal-inner");
    const modal = document.querySelector(".modal");

    modalOuter.classList.remove("open");

    setTimeout(() => {
        modalOuter.style.visibility = "hidden";
        modal.classList.remove("small");
        modalInner.innerHTML = ``;
        document.querySelector(".modal-options").innerHTML = ``;
    }, 500);
}

function closeAlert() {
    const modalOuter = document.querySelector(".alert-outer");
    const modalInner = document.querySelector(".alert-inner");
    const modal = document.querySelector(".alert");

    modalOuter.classList.remove("open");

    setTimeout(() => {
        modalOuter.style.visibility = "hidden";
        modal.classList.remove("small");
        modalInner.innerHTML = ``;
        document.querySelector(".alert-options").innerHTML = ``;
    }, 500);
}

function openAlert(data) {
    const modalOuter = document.querySelector(".alert-outer");
    const modalInner = document.querySelector(".alert-inner");
    const modal = document.querySelector(".alert");

    document.querySelector(".alert-options").style.display = "flex";

    modalInner.innerHTML = ``;

    if (data) {
        if (data.title) {
            let titleElement = document.createElement("span");
            titleElement.classList.add("alert-header");
            titleElement.textContent = data.title.sanitize();
            modalInner.append(titleElement);
        }

        if (data.message) {
            let messageElement = document.createElement("span");
            messageElement.classList.add("alert-message");
            messageElement.textContent = data.message.sanitize();
            modalInner.append(messageElement);
        }

        if (data.id) {
            modal.id = data.id;
        } else {
            modal.id = '';
        }

        let buttons = ``;
        if (data.buttons) {
            data.buttons.forEach(button => {
                buttons += `<button class="modal-button" onclick="${button.action}">${button.text}</button>`;
            });
        } else if (data.buttons === false) {
            buttons = ``;
            document.querySelector(".alert-options").style.display = "none";
        } else {
            buttons = `<button class="modal-button" onclick="closeAlert()">Close</button>`;
        }

        document.querySelector(".alert-options").innerHTML = buttons;
    }
    modalOuter.style.visibility = "visible";
    modalOuter.classList.add("open");
}

function openImage(url) {
    const modalOuter = document.querySelector(".view-image-outer");
    const modalInner = document.querySelector(".view-image-inner");
    const modal = document.querySelector(".view-image");

    const baseURL = url.split('?')[0];
    const fileName = baseURL.split('/').pop();

    modalInner.innerHTML = `
    <img class="image-view" src="${url}" alt="${fileName}"/>
    `;

    document.querySelector(".view-image-options").innerHTML = `
    <div class="image-option" onclick="closeImage()">${icon.cross}</div>
    <div class="image-option" onclick="shareImage('${url}')">${icon.share}</div>
    `;

    modalOuter.style.visibility = "visible";
    modalOuter.classList.add("open");


    const image = document.querySelector(".image-view");
    image.setAttribute("style", "");

    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    const maxDragDistance = window.innerHeight / 2;

    function startDrag(e) {
        startY = e.touches ? e.touches[0].clientY : e.clientY;
        isDragging = true;
        image.style.transition = 'none';
    }

    function onDrag(e) {
        if (!isDragging) return;

        currentY = e.touches ? e.touches[0].clientY : e.clientY;
        let dragDistance = currentY - startY;

        if (dragDistance > 0 && dragDistance <= maxDragDistance) {
            image.style.transform = `translateY(${dragDistance}px) scale(${1 - dragDistance / maxDragDistance / 2})`;
        }
    }

    function endDrag() {
        isDragging = false;

        if (currentY - startY > maxDragDistance / 2) {
            closeImage();
        } else {
            image.style.transition = 'transform 0.3s ease';
            image.style.transform = 'translateY(0)';
        }
    }

    image.addEventListener('touchstart', startDrag);
    image.addEventListener('touchmove', onDrag);
    image.addEventListener('touchend', endDrag);
}

function openVideo(url) {
    const modalOuter = document.querySelector(".view-image-outer");
    const modalInner = document.querySelector(".view-image-inner");
    const modal = document.querySelector(".view-image");

    const baseURL = url.split('?')[0];
    const fileName = baseURL.split('/').pop();

    modalInner.innerHTML = `
    <video class="image-view" src="${url}" alt="${fileName}" autoplay controlsList="nodownload nofullscreen noremoteplayback"/></video>
    `;

    document.querySelector(".view-image-options").innerHTML = `
    <div class="image-option" onclick="closeImage()">${icon.cross}</div>
    <div class="image-option" onclick="shareImage('${url}')">${icon.share}</div>
    `;

    modalOuter.style.visibility = "visible";
    modalOuter.classList.add("open");


    const image = document.querySelector(".image-view");
    image.setAttribute("style", "");

    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    const maxDragDistance = window.innerHeight / 2;

    function startDrag(e) {
        startY = e.touches ? e.touches[0].clientY : e.clientY;
        isDragging = true;
        image.style.transition = 'none';
    }

    function onDrag(e) {
        if (!isDragging) return;

        currentY = e.touches ? e.touches[0].clientY : e.clientY;
        let dragDistance = currentY - startY;

        if (dragDistance > 0 && dragDistance <= maxDragDistance) {
            image.style.transform = `translateY(${dragDistance}px) scale(${1 - dragDistance / maxDragDistance / 2})`;
        }
    }

    function endDrag() {
        isDragging = false;

        if (currentY - startY > maxDragDistance / 2) {
            closeImage();
        } else {
            image.style.transition = 'transform 0.3s ease';
            image.style.transform = 'translateY(0)';
        }
    }

    image.addEventListener('touchstart', startDrag);
    image.addEventListener('touchmove', onDrag);
    image.addEventListener('touchend', endDrag);
}

function closeImage() {
    const modalOuter = document.querySelector(".view-image-outer");
    const modalInner = document.querySelector(".view-image-inner");
    const modal = document.querySelector(".view-image");
    const image = document.querySelector(".image-view");
    modalOuter.classList.remove("open");

    const video = document.querySelector("video.image-view");
    if (video ) {
        video.pause();
    }

    setTimeout(() => {
        if (video ) {
            video.removeAttribute("src");
            video.load();
        }
        modalOuter.style.visibility = "hidden";
        modalInner.innerHTML = ``;
        document.querySelector(".view-image-options").innerHTML = ``;
    }, 350);
}

function tooltip(data) {
    document.querySelectorAll('.tooltip').forEach(tooltip => {
        tooltip.classList.remove('visible');
        setTimeout(() => {
            tooltip.remove();
        }, 1000);
    });

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    tooltip.innerHTML = `
        ${data.icon ? `<div>${data.icon}</div>` : ``}
        ${data.title ? `<span>${data.title.sanitize()}</span>` : ``}
    `;
    
    document.body.appendChild(tooltip);

    setTimeout(() => {
        tooltip.style = `visibility: visible;`;
        tooltip.classList.add('visible');
    }, 10);

    setTimeout(() => {
        tooltip.classList.remove('visible');
        setTimeout(() => {
            tooltip.remove();
        }, 1000);
    }, 3000);
}

// tooltip({'title':"Copied!",'icon':icon.copy})