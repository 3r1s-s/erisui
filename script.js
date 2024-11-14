const content = document.querySelector('.content');

const app = document.querySelector('.app');

const titlebar = (() => {
    const titlebar = document.querySelector('.titlebar');
    const backButton = titlebar.querySelector('.titlebar-back');

    return {
        hide() { titlebar.style.display = 'none'; },
        show() { titlebar.style.display = ''; },
        set(title) {
            titlebar.querySelector('.title').textContent = title;
        },
        back(action) {
            if (action) {
                backButton.style.display = 'flex';
                backButton.onclick = action;
                backButton.innerHTML = `${icon.back}`;
            } else {
                backButton.style.display = 'none';
                backButton.onclick = null;
            }
        },
        clear(val) {
            titlebar.classList.toggle('trans', val && val !== 'chat');
            titlebar.classList.toggle('chat-trans', val === 'chat');
        }
    };
})();

const navigation = (() => {
    const nav = document.querySelector('.nav');

    return {
        hide() { nav.style.display = 'none'; },
        show() { nav.style.display = ''; },
        set(data) {
            nav.innerHTML = '';
            data.forEach(item => {
                const navItem = document.createElement('div');
                navItem.classList.add('nav-item');
                navItem.setAttribute('onclick', item.action);
                navItem.innerHTML = `
                    <div class="nav-item-inner">
                        <div class="nav-icon">${item.icon}</div>
                        <div class="nav-text"><span>${item.name}</span></div>
                    </div>
                `;
                nav.appendChild(navItem);
            });
        }
    };
})();

const storage = (() => {
    let storageData = {};
    let storageName = 'eris-ui-data';

    try {
        storageData = JSON.parse(localStorage.getItem(storageName) || '{}');
    } catch (e) {
        console.error(e);
    }

    return {
        get(key) {
            return storageData[key];
        },

        set(key, value) {
            storageData[key] = value;
            localStorage.setItem(storageName, JSON.stringify(storageData));
        },

        delete(key) {
            delete storageData[key];
            localStorage.setItem(storageName, JSON.stringify(storageData));
        },

        all() {
            return storageData;
        },

        clear() {
            storageData = {};
            localStorage.setItem(storageName, JSON.stringify(storageData));
        },

        settings: {
            get(key) {
                return storageData && storageData.settings && storageData.settings[key];
            },

            set(key, value) {
                if (!storageData.settings) {
                    storageData.settings = {};
                }
                storageData.settings[key] = value;
                localStorage.setItem(storageName, JSON.stringify(storageData));
            },

            delete(key) {
                if (storageData.settings) {
                    delete storageData.settings[key];
                    localStorage.setItem(storageName, JSON.stringify(storageData));
                }
            },

            all() {
                return storageData.settings || {};
            },

            clear() {
                if (storageData.settings) {
                    storageData.settings = {};
                    localStorage.setItem(storageName, JSON.stringify(storageData));
                }
            }
        },
    };
})();

const settings = storage.settings;

const theme = (() => {
    return {
        get() {
            return storage.get('theme');
        },
        set(theme) {
            storage.set('theme', theme);
            setTheme();
        }
    };
})();

String.prototype.sanitize = function() { 
    return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/`/g, '&#96;').replace(/'/g, '&#39;');
};

const device = {
    is: {
      iPhone: /iPhone/.test(navigator.userAgent),
      iPad: /iPad/.test(navigator.userAgent),
      iOS: /iPhone|iPad|iPod/.test(navigator.userAgent),
      android: /Android/.test(navigator.userAgent),
      mobile: /Mobi|Android/i.test(navigator.userAgent) // matches most mobile browsers
    },
    prefers: {
      language: navigator.language || navigator.userLanguage,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      reducedTransparency: window.matchMedia('(prefers-reduced-transparency: reduce)').matches
    },
    supports: {
      share: typeof navigator.share === 'function',
      directDownload: 'download' in document.createElement('a')
    },
    userAgent: navigator.userAgent
};

navigation.set([
    { name: 'Overview', icon: icon.kit, action: 'examplePage()' },
    { name: 'Info', icon: icon.kit, action: 'infoPage()' },
]);

navigation.show();
examplePage();

function toggleSetting(id) {
    const element = document.getElementById(id);
    if (settings.get(id) === true) {
        element.classList.remove('checked');
        settings.set(id, false);
    } else {
        element.classList.add('checked');
        settings.set(id, true);
    }
}

function examplePage() {
    page = `example`;

    titlebar.set(`Eris UI`);
    titlebar.clear(false);
    titlebar.show();
    titlebar.back(``);

    navigation.show();
    content.classList.remove('max');
    content.scrollTo(0,0);
    content.style = ``;

    content.innerHTML = `
        <div class="settings">
            <span class="settings-options-title">Header</span>
            <div class="settings-options">
                <div class="menu-button" id="exampleSetting" onclick="toggleSetting('exampleSetting')"><span>Example Setting</span><div class="toggle">${icon.check}</div></div>
                <div class="menu-button" id="settingTwo" onclick="openAlert({title: 'Message', message: 'Are you sure?', buttons: [{text: 'OK', action: 'toggleSetting(\\'settingTwo\\');closeAlert()'},{text: 'Cancel', action: 'closeAlert()'}]})"><span>Double Checking</span><div class="toggle">${icon.check}</div></div>
            </div>
            <span class="settings-options-sub">A subtitle.</span>
            <div class="settings-options">
                <div class="menu-button" onclick="openModal({title: 'Example Modal', body: 'This is an example modal.'})"><span>Example Modal</span>${icon.arrow}</div>
                <div class="menu-button" onclick="openAlert({title: 'Example Alert', message: 'This is an example alert.'})"><span>Example Alert</span>${icon.arrow}</div>
                <div class="menu-button" onclick="openAlert({title: 'Example Alert', message: 'This is an example alert with buttons.', buttons: [{text: 'OK', action: 'closeAlert()'},{text: 'Yay', action: 'closeAlert()'}]})"><span>Example Alert with Buttons</span>${icon.arrow}</div>
                <div class="menu-button" onclick="tooltip({icon: icon.alert, title: 'Example Tooltip'})"><span>Example Tooltip</span>${icon.arrow}</div>
            </div>
            <div class="settings-options">
                <div class="menu-button" onclick="transitionPage('infoPage()')"><span>Information</span>${icon.arrow}</div>
            </div>
            <span class="settings-options-title">Device</span>
            <div class="json-block">${JSON.stringify(device, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</div>
            <span class="settings-options-title">Settings</span>
            <div class="json-block">${JSON.stringify(storage.settings.all()).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</div>
            <span class="settings-options-title">LocalStorage</span>
            <div class="json-block">${JSON.stringify(storage.all()).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}</div>
            <div class="settings-options">
                <div class="menu-button red" onclick="openAlert({title: 'Clear LocalStorage', message: 'Are you sure?', buttons: [{text: 'OK', action: 'storage.clear();closeAlert()'},{text: 'Cancel', action: 'closeAlert()'}]})"><span>Clear LocalStorage</span></div>
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
        <span>this is a loading icon</span>
        <div class="loader animate text">${icon.loader}</div>
        <span>im gonna add accordions and &lt;option&gt; elements, more loading things, radio buttons</span>
        <span>and other things that get suggested</span>
        <span>stay tuned!! :3</span>
        <span>- Eris</span>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Accordion</span>${icon.dropdown}</div>
            <div class="accordion-content">
                <div class="accordion-content-inner"><span>Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet, vivamus faucibus.</span></div>
            </div>
        </div>
        <div class="accordion">
            <div class="accordion-title" onclick="accordion(this)"><span>Accordion</span>${icon.dropdown}</div>
            <div class="accordion-content">
                <div class="menu-button" onclick="transitionPage('examplePage()')"><span>Overview</span>${icon.arrow}</div>
            </div>
        </div>
    <div>
    `;

    pageElements();

    document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
    document.querySelector('.nav').getElementsByClassName('nav-item')[1].classList.add('active');
}

function accordion(element) {
    if (element.parentNode.classList.contains('open')) {
        element.parentNode.style.maxHeight = element.scrollHeight + "px";
        element.parentNode.classList.remove('open');
    } else {
        element.parentNode.style.maxHeight = element.scrollHeight + element.parentNode.querySelector('.accordion-content').scrollHeight + "px";
        element.parentNode.classList.add('open');
    }
}

function transitionPage(topage) {
    if (page !== topage) {
        content.classList.add('left');
        setTimeout(() => {
            content.classList.remove('left');
            content.classList.add('right');
            eval(topage);
            setTimeout(() => {
                content.classList.remove('right');
            }, 50);
        }, 100);
    };
}

function pageElements() {
    const options = document.querySelectorAll('.menu-button');
    options.forEach(option => {
        if (settings.get(option.id)) {
            option.classList.add('checked');
        }
    });

    document.querySelectorAll('.accordion').forEach(element => element.style.maxHeight = element.querySelector('.accordion-title').scrollHeight + "px");
}