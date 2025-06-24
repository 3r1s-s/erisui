function overviewPage() {
    page = `overview`;

    titlebar.set(`ErisUI`);
    titlebar.type('large');
    titlebar.banner('src/assets/images/bg/bluefoam.jpg');
    titlebar.show();
    titlebar.back(``);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
        <div class="settings">
            <span class="settings-options-title">Title</span>
            <div class="settings-options">
                <div class="menu-button" onclick="navigateForward('titlebarsPage()')"><span>Titlebars</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('buttonsPage()')"><span>Buttons</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('modalsPage()')"><span>Modals</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('accordionsPage()')"><span>Accordions</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('textInputsPage()')"><span>Text Inputs</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('checksPage()')"><span>Checkboxes & Radios</span>${icon.arrow}</div>
            </div>
            <span class="settings-options-title">Another Title</span>
            <div class="accordion">
                <div class="accordion-title" onclick="accordion(this)"><span>More</span>${icon.dropdown}</div>
                <div class="accordion-content">
                    <div class="menu-button" onclick="navigateForward('progressbarPage()')"><span>Progressbars</span>${icon.arrow}</div>
                    <div class="menu-button" onclick="navigateForward('themesPage()')"><span>Themes</span>${icon.arrow}</div>
                    <div class="menu-button" onclick="navigateForward('examplePage()')"><span>Example</span>${icon.arrow}</div>
                    <div class="menu-button" onclick="navigateForward('iconsPage()')"><span>Icons</span>${icon.arrow}</div>
            </div>
            </div>
            <div class="settings-options">
                <div class="menu-button" onclick="navigateForward('devicePage()')"><span>Device Info</span>${icon.arrow}</div>
            </div>
            <div class="page-footer">
                <button class="hyperlink" onclick="navigateForward('infoPage()')">More info</button>
            </div>
        </div>
    `;

    pageElements();

    document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
    document.querySelector('.nav').getElementsByClassName('nav-item')[0].classList.add('active');
}

function infoPage() {
    page = `info`;

    titlebar.set(`Hello!!`);
    titlebar.type('large');
    titlebar.show();
    titlebar.back(``);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span>Since TeleMeow is dead I decided to make a UI framework out of it.</span>
        <span>Please give awesome feedback!! :3</span>
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
    titlebar.type();
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
    titlebar.type();
    titlebar.show();
    titlebar.back('navigateBack(`overviewPage()`);');

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="settings">
        <div class="settings-options">
            <div class="menu-button" onclick="openModal({title: 'Example Modal', body: loremipsum})"><span>Example Modal</span>${icon.arrow}</div>
            <div class="menu-button" onclick="openAlert({title: 'Example Alert', message: 'This is an example alert.'})"><span>Example Alert</span>${icon.arrow}</div>
            <div class="menu-button" onclick="openAlert({title: 'Example Alert', message: 'This is an example alert with buttons.', buttons: [{text: 'OK', action: 'closeAlert()'},{text: 'Yay', action: 'closeAlert()'}]})"><span>Example Alert with Buttons</span>${icon.arrow}</div>
            <div class="menu-button" onclick="openAlert({center: true, title: 'Example Alert', message: 'This is an example alert.'})"><span>Centered Example Alert</span>${icon.arrow}</div>
            <div class="menu-button" onclick="openAlert({center: true, title: 'Example Alert', message: 'This is an example alert with buttons.', buttons: [{text: 'OK', action: 'closeAlert()'},{text: 'Yay', action: 'closeAlert()'}]})"><span>Centered Example Alert with Buttons</span>${icon.arrow}</div>
            <div class="menu-button" onclick="tooltip({icon: icon.alert, title: 'Example Tooltip'})"><span>Example Tooltip</span>${icon.arrow}</div>
        </div>
    <div>
    `;

    pageElements();
}

function accordionsPage() {
    page = `accordions`;

    titlebar.set(`Accordions`);
    titlebar.type();
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
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                ${'<div class="accordion">\n<div class="accordion-title" onclick="accordion(this)"><span>Accordion with a button</span>${icon.dropdown}</div>\n<div class="accordion-content">\n<span>Hello World!</span>\n</div>\n</div>'.code()}
            </div>
        </div>
    <div>
    `;

    pageElements();
}

function progressbarPage() {
    page = `progressbars`;

    titlebar.set(`Loaders & Progressbars`);
    titlebar.type();
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
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                ${'<div class="progressbar">\n<span class="progress" style="width: 50%"></span>\n</div>'.code()}
            </div>
        </div>
        <span>Intermediate progressbar</span>
        <div class="progressbar">
            <span class="progress intermediate"></span>
        </div>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                ${'<div class="progressbar">\n<span class="progress intermediate"></span>\n</div>'.code()}
            </div>
        </div>
        <span>Loading spinner</span>
        <span class="loader animate">${icon.loader}</span>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                ${'<span class="loader animate">${icon.loader}</span>'.code()}
            </div>
        </div>
    <div>
    `;

    pageElements();
}

function titlebarsPage() {
    page = `titlebars`;

    titlebar.set(`Titlebars`);
    titlebar.type('large');
    titlebar.show();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span>This page has a large titlebar, and a back button.</span>
        <div class="settings-options">
            <div class="menu-button" onclick="navigateForward('titlebarInnerPage(2)')"><span>Clear Titlebar</span>${icon.arrow}</div>
            <div class="menu-button" onclick="navigateForward('titlebarInnerPage(1)')"><span>Default Titlebar</span>${icon.arrow}</div>
            <div class="menu-button" onclick="navigateForward('titlebarInnerPage(3)')"><span>Banner Titlebar</span>${icon.arrow}</div>
        </div>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
            ${'titlebar.set("Title");\ntitlebar.type("large");\ntitlebar.show();'.code()}
            </div>
        </div>
    <div>
    `;

    pageElements();
}

function titlebarInnerPage(input) {
    page = `titlebar-inner`;

    if (input == '1') {
        titlebar.set(`Default Titlebar`);
        titlebar.type();
        titlebar.show();    
        titlebar.back('navigateBack(`titlebarsPage()`);');

        content.innerHTML = `
        <div class="page">
            <span>This page uses the default titlebar, it also has a back button.</span>
            <div class="accordion">
                <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
                <div class="accordion-content">
                    ${'titlebar.set("Title");\ntitlebar.type("");\ntitlebar.show();'.code()}
                </div>
            </div>
        <div>
        `;
    } else if (input == '2') {
        titlebar.set(``);
        titlebar.type('clear');
        titlebar.show();    
        titlebar.back('navigateBack(`titlebarsPage()`);');

        content.innerHTML = `
        <div class="page">
            <span>This page uses a clear titlebar, it might have a back button.</span>
            <div class="accordion">
                <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
                <div class="accordion-content">
                    ${'titlebar.set("Title");\ntitlebar.type("clear");\ntitlebar.show();'.code()}
                </div>
            </div>
        <div>
        `;
    } else if (input == '3') {
        titlebar.set(`Banner`);
        titlebar.type('banner');
        titlebar.show();
        titlebar.banner('src/assets/images/bg/AuroraBanner.jpeg');
        titlebar.back('navigateBack(`titlebarsPage()`);');

        content.innerHTML = `
        <div class="page">
            <span>This page has a banner titlebar</span>
            <div class="accordion">
                <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
                <div class="accordion-content">
                    ${'titlebar.set("Title");\ntitlebar.type("clear");\ntitlebar.show();\ntitlebar.banner("url(src/assets/images/bg/AuroraBanner.jpeg)");'.code()}
                </div>
            </div>
            <span>${loremipsum}</span>
        <div>
        `;
    } else {
    }

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    pageElements();
}

function buttonsPage() {
    page = `buttons`;

    titlebar.set(`Buttons`);
    titlebar.type('large');
    titlebar.show();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span>A simple button with text content.</span>
        <button>Standard Button</button>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                ${'<button>Standard Button</button>'.code()}
            </div>
        </div>
        <span>Accent styled button.</span>
        <button class="accent">Accent Style Button</button>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                ${'<button class="accent">Accent Style Button</button>'.code()}
            </div>
        </div>
        <span>A hyperlink button that handles a Click event.</span>
        <button class="hyperlink">Hyperlink Button</button>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                ${'<button class="hyperlink">Hyperlink Button</button>'.code()}
            </div>
        </div>
    <div>
    `;

    pageElements();
}

function themesPage() {
    page = `themes`;

    titlebar.set(`Themes`);
    titlebar.type();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);

    content.innerHTML = `
        <div class="settings appearance">
            <div class="theme-options">
                <div class="theme-option dark" onclick="theme.set('dark');haptic()" style="--app-500: #1a1825;--app-900: #3e3b50;">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Dark</span>
                    </div>
                </div>
                <div class="theme-option light" onclick="theme.set('light');haptic()">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Light</span>
                    </div>
                </div>
                <div class="theme-option catppuccin-macchiato" onclick="theme.set('catppuccin-macchiato');haptic()">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Twilight</span>
                    </div>
                </div>
                <div class="theme-option oled" onclick="theme.set('oled');haptic()">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Black</span>
                    </div>
                </div>
                <div class="theme-option acrylic" onclick="theme.set('acrylic');haptic()">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Acrylic</span>
                    </div>
                </div>
            </div>
            <span class="settings-options-title">Acrylic Background</span>
            <div class="settings-options radio-group" data-group="acrylicBackground">
                <div class="menu-button" id="bliss" onclick="toggleRadio('acrylicBackground', 'bliss');setTheme();"><span>Bliss</span><div class="radio"></div></div>
                <div class="menu-button" id="mojave" onclick="toggleRadio('acrylicBackground', 'mojave');setTheme();"><span>Mojave</span><div class="radio"></div></div>
                <div class="menu-button" id="loom" onclick="toggleRadio('acrylicBackground', 'loom');setTheme();"><span>Loom</span><div class="radio"></div></div>
                <div class="menu-button" id="none" onclick="toggleRadio('acrylicBackground', 'none');setTheme();"><span>None</span><div class="radio"></div></div>
            </div>
            <div class="settings-options">
                <div class="menu-button" id="disableBackdropBlur" onclick="toggleSetting('disableBackdropBlur');setTheme()"><span>Disable Backdrop Blur</span><div class="toggle">${icon.check}</div></div>
            </div>
        </div>
    `;

    pageElements();
    setTheme();
}

function examplePage() {
    page = `example`;

    titlebar.set(`Title`);
    titlebar.type('large');
    titlebar.show();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span style="">
            ${loremipsum}
        </span>
        <img src="src/assets/images/Concepción_from_Maderas_(landscape).jpg" class="preview">
        <div class="carousel" style="--carousel-item-width: 200px;">
            <img src="src/assets/images/id/bab.jpg" class="preview clickable carousel-item" onclick="openImage('src/assets/images/id/bab.jpg')">
            <img src="src/assets/images/id/eoe.jpg" class="preview clickable carousel-item" onclick="openImage('src/assets/images/id/eoe.jpg')">
            <img src="src/assets/images/id/ide.jpg" class="preview clickable carousel-item" onclick="openImage('src/assets/images/id/ide.jpg')">
            <img src="src/assets/images/id/itm.jpg" class="preview clickable carousel-item" onclick="openImage('src/assets/images/id/itm.jpg')">
            <img src="src/assets/images/id/jgh.jpg" class="preview clickable carousel-item" onclick="openImage('src/assets/images/id/jgh.jpg')">
            <img src="src/assets/images/id/pcd.jpg" class="preview clickable carousel-item" onclick="openImage('src/assets/images/id/pcd.jpg')">
            <img src="src/assets/images/id/w96.jpg" class="preview clickable carousel-item" onclick="openImage('src/assets/images/id/w96.jpg')">
        </div>
    <div>
    `;

    pageElements();
}

function iconsPage() {
    page = `icons`;

    titlebar.set(`Icons`);
    titlebar.type('large');
    titlebar.show();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span>Instead of writing out svgs for each icon, you can call the icons, and define them in the icons object for reuse.</span>
        <span style="display:flex;flex-direction:row;flex-wrap:wrap;gap:10px">
            ${icon.home}${icon.settings}${icon.arrow}
        </span>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                <span>
                    ${'${icon.iconName}'.code()}
                </span>
            </div>
        </div>
    <div>
    `;

    pageElements();
}

function textInputsPage() {
    page = `textInputs`;

    titlebar.set(`Text Inputs`);
    titlebar.type('large');
    titlebar.show();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="page">
        <span>A simple text input, the icon is optional and can be anything</span>
        <div class="text-input">
            <input type="text" placeholder="Placeholder" autocomplete="off"/>${icon.search}
        </div>
        <span>A form</span>
        <div class="form">
            <input class="form-input" id="id" type="text" autocomplete="">
            <label for="id">Label</label>
        </div>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Show Code</span>${icon.dropdown}</div>
            <div class="accordion-content">
                <span>
                    ${'<div class="text-input"><input type="text" placeholder="Placeholder" autocomplete="off"/>${icon.search}</div>'.code()}
                </span>
                <span>
                    ${'<div class="form"><input class="form-input" id="id" type="text" autocomplete=""><label for="id">Label</label></div>'.code()}
                </span>
            </div>
        </div>
    <div>
    `;

    pageElements();
}

function checksPage() {
    page = `checks`;

    titlebar.set(`Checkboxes & Radios`);
    titlebar.type('large');
    titlebar.show();
    titlebar.back(`navigateBack('overviewPage()');`);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
    <div class="settings">
        <span class="settings-options-title">Checkbox</span>
        <div class="settings-options">
            <div class="menu-button" id="example-1" onclick="toggleSetting('example-1');"><span>Me</span><div class="toggle">${icon.check}</div></div>
            <div class="menu-button" id="example-2" onclick="toggleSetting('example-2');"><span>Myself</span><div class="toggle">${icon.check}</div></div>
            <div class="menu-button" id="example-3" onclick="toggleSetting('example-3');"><span>I</span><div class="toggle">${icon.check}</div></div>
        </div>
        <span class="settings-options-title">Radio</span>
        <div class="settings-options radio-group" data-group="example-radio">
            <div class="menu-button" id="there" onclick="toggleRadio('example-radio', 'there')"><span>There</span><div class="radio"></div></div>
            <div class="menu-button" id="can" onclick="toggleRadio('example-radio', 'can')"><span>Can</span><div class="radio"></div></div>
            <div class="menu-button" id="only" onclick="toggleRadio('example-radio', 'only')"><span>Only</span><div class="radio"></div></div>
            <div class="menu-button" id="be" onclick="toggleRadio('example-radio', 'be')"><span>Be</span><div class="radio"></div></div>
            <div class="menu-button" id="one" onclick="toggleRadio('example-radio', 'one')"><span>One</span><div class="radio"></div></div>
        </div>
    <div>
    `

    pageElements();
}