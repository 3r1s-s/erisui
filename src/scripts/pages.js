function overviewPage() {
    page = `overview`;

    titlebar.set(``);
    titlebar.clear(true);
    titlebar.show();
    titlebar.back(``);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
        <div class="settings">
            <span class="settings-title">Overview</span>
            <span class="settings-options-title">Title</span>
            <div class="settings-options">
                <div class="menu-button" onclick="navigateForward('titlebarsPage()')"><span>Titlebars</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('modalsPage()')"><span>Modals</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('accordionsPage()')"><span>Accordions</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('progressbarPage()')"><span>Progressbars</span>${icon.arrow}</div>
            </div>
            <div class="settings-options">
                <div class="menu-button" onclick="navigateForward('devicePage()')"><span>Device Info</span>${icon.arrow}</div>
            </div>
        </div>
    `;

    pageElements();

    document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
    document.querySelector('.nav').getElementsByClassName('nav-item')[0].classList.add('active');
}

function infoPage() {
    page = `info`;

    titlebar.set(`Info`);
    titlebar.clear(false);
    titlebar.show();
    titlebar.back(``);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span class="settings-title">Hello!!!</span>
        <span>im gonna add accordions and &lt;option&gt; elements, more loading things, radio buttons</span>
        <span>and other things that get suggested</span>
        <span>stay tuned!! :3</span>
        <span>- Eris</span>
    <div>
    `;

    pageElements();

    document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
    document.querySelector('.nav').getElementsByClassName('nav-item')[1].classList.add('active');
}

function devicePage() {
    page = `device`;

    titlebar.set(`Device`);
    titlebar.clear(false);
    titlebar.show();
    titlebar.back('navigateBack(`overviewPage()`)');

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="settings">
        <span class="settings-options-title">Device</span>
        <div class="json-block">${JSON.stringify(device, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</div>
        <span class="settings-options-title">Settings</span>
        <div class="json-block">${JSON.stringify(storage.settings.all()).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</div>
        <span class="settings-options-title">LocalStorage</span>
        <div class="json-block">${JSON.stringify(storage.all()).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</div>
        <div class="settings-options">
            <div class="menu-button red" onclick="openAlert({title: 'Clear LocalStorage', message: 'Are you sure?', buttons: [{text: 'OK', action: 'storage.clear();closeAlert()'},{text: 'Cancel', action: 'closeAlert()'}]})"><span>Clear LocalStorage</span></div>
        </div>
    <div>
    `;

    pageElements();
}

function modalsPage() {
    page = `modals`;

    titlebar.set(`Modals`);
    titlebar.clear(false);
    titlebar.show();
    titlebar.back('navigateBack(`overviewPage()`);');

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="settings">
        <div class="settings-options">
            <div class="menu-button" onclick="openModal({title: 'Example Modal', body: 'This is an example modal.'})"><span>Example Modal</span>${icon.arrow}</div>
            <div class="menu-button" onclick="openAlert({title: 'Example Alert', message: 'This is an example alert.'})"><span>Example Alert</span>${icon.arrow}</div>
            <div class="menu-button" onclick="openAlert({title: 'Example Alert', message: 'This is an example alert with buttons.', buttons: [{text: 'OK', action: 'closeAlert()'},{text: 'Yay', action: 'closeAlert()'}]})"><span>Example Alert with Buttons</span>${icon.arrow}</div>
            <div class="menu-button" onclick="tooltip({icon: icon.alert, title: 'Example Tooltip'})"><span>Example Tooltip</span>${icon.arrow}</div>
        </div>
    <div>
    `;

    pageElements();
}

function accordionsPage() {
    page = `accordions`;

    titlebar.set(`Accordions`);
    titlebar.clear(false);
    titlebar.show();
    titlebar.back('navigateBack("overviewPage()");');

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="settings">
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Accordion with content</span>${icon.dropdown}</div>
            <div class="accordion-content">
                <div class="accordion-content-inner"><span>Hello hello let me tell you what it's like to be a zero zero</span></div>
            </div>
        </div>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Accordion with a button</span>${icon.dropdown}</div>
            <div class="accordion-content">
                <div class="menu-button" onclick="navigateForward('infoPage()')"><span>Information</span>${icon.arrow}</div>
            </div>
        </div>
    <div>
    `;

    pageElements();
}

function progressbarPage() {
    page = `progressbars`;

    titlebar.set(`Loaders & Progressbars`);
    titlebar.clear(false);
    titlebar.show();
    titlebar.back('navigateBack("overviewPage()");');

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span>Progressbar at 50%</span>
        <div class="progressbar">
            <span class="progress" style="width: 50%"></span>
        </div>
        <span>Intermediate progressbar</span>
        <div class="progressbar">
            <span class="progress intermediate"></span>
        </div>
        <span>Loading spinner</span>
        <span class="loader animate">${icon.loader}</span>
    <div>
    `;

    pageElements();
}

function titlebarInnerPage() {
    page = `titlebar-inner`;

    titlebar.set(`Default Titlebar`);
    titlebar.clear(false);
    titlebar.show();    
    titlebar.back('navigateBack(`titlebarsPage()`);');

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span>This page uses the default titlebar, it also has a back button.</span>
    <div>
    `;

    pageElements();
}

function titlebarsPage() {
    page = `titlebars`;

    titlebar.set(``);
    titlebar.clear(true);
    titlebar.show();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span class="settings-title">Titlebars</span>
        <span>This page has no titlebar, and has a back button.</span>
        <div class="settings-options">
            <div class="menu-button" onclick="navigateForward('titlebarInnerPage()')"><span>Default Titlebar</span>${icon.arrow}</div>
        </div>
    <div>
    `;

    pageElements();

    document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
    document.querySelector('.nav').getElementsByClassName('nav-item')[1].classList.add('active');
}