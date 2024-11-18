function overviewPage() {
    page = `overview`;

    titlebar.set(`Overview`);
    titlebar.type('large');
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
                <div class="menu-button" onclick="navigateForward('progressbarPage()')"><span>Progressbars</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('themesPage()')"><span>Themes</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('examplePage()')"><span>Example</span>${icon.arrow}</div>
                <div class="menu-button" onclick="navigateForward('iconsPage()')"><span>Icons</span>${icon.arrow}</div>
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
            <div class="menu-button" onclick="navigateForward('titlebarInnerPage(0)')"><span>Clear Titlebar</span>${icon.arrow}</div>
            <div class="menu-button" onclick="navigateForward('titlebarInnerPage(1)')"><span>Default Titlebar</span>${icon.arrow}</div>
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

function titlebarInnerPage(x) {
    page = `titlebar-inner`;

    if (x) {
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
    } else {
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
                <div class="theme-option dark" onclick="theme.set('dark')" style="--app-500: #1a1825;--app-900: #3e3b50;">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Dark</span>
                    </div>
                </div>
                <div class="theme-option light" onclick="theme.set('light')">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Light</span>
                    </div>
                </div>
                <div class="theme-option catppuccin-macchiato" onclick="theme.set('catppuccin-macchiato')">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Twilight</span>
                    </div>
                </div>
                <div class="theme-option oled" onclick="theme.set('oled')">
                    <div class="theme-colour">
                    </div>
                    <div class="theme-name">
                        <span>Black</span>
                    </div>
                </div>
                <div class="theme-option acrylic" onclick="theme.set('acrylic')">
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
        <span style="white-space: pre-line;">Hey-hey-hey
Yeah-ah

Sheets of empty canvas, untouched sheets of clay
Were laid spread out before me, as her body once did
All five horizons revolved around her soul as the Earth to the Sun
Now, the air I tasted and breathe has taken a turn

Mmm, and all I taught her was everything
Mmm-hmm, I know she gave me all that she wore

And now my bitter hands chafe beneath the clouds
Of what was everything
All the pictures had all been washed in black
Tattooed everything

I take a walk outside
I'm surrounded by some kids at play
I can feel their laughter
So, why do I sear?

Mmm, and twisted thoughts that spin 'round my head
I'm spinning, oh-oh, I'm spinning
How quick the Sun can drop away?

And now my bitter hands cradle broken glass
Of what was everything
All the pictures have all been washed in black
Tattooed everything

All the love gone bad turned my world to black
Tattooed all I see, all that I am
All I'll be, yeah-yeah
Oh-oh, oh-oh, ooh

I know someday, you'll have a beautiful life
I know you'll be a star in somebody else's sky
But why, why, why can't it be
Oh, can't it be mine?

Ooh
Ah, yeah
Ah, ooh-ooh

Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo (oh, oh-yeah)

Doo-doo-doo-doo, doo-doo-doo
Doo doo doo, doo, doo-doo-doo (ah-ah)
Doo-doo-doo-doo, doo-doo-doo (ah-ah)
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo (yeah)
Doo-doo-doo-doo, doo-doo-doo (ah-ah, yeah)
Doo-doo-doo-doo, doo-doo-doo (yeah, ah)
Doo-doo-doo-doo, doo-doo-doo (yeah-yeah-yeah)
Doo-doo-doo-doo, doo-doo-doo
Doo-doo-doo-doo, doo-doo-doo (oh-oh)

Oh-oh, oh-oh
Doo-doo-doo-doo, doo-doo-doo
Ooh-ooh, ooh-ooh
Ooh-hoo
        </span>
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