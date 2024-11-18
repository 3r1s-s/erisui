const content = document.querySelector('.content');
const app = document.querySelector('.app');
let page;
let back;
let name;

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
                backButton.setAttribute('onclick', action);
                backButton.innerHTML = `${icon.back}`;

                back = action;
            } else {
                backButton.style.display = 'none';
                backButton.onclick = null;

                back = null;
            }
        },
        type(val) {
            if (val === 'large') {
                titlebar.classList.add('large');
                titlebar.classList.remove('trans');
            } else if (val === 'clear') {
                titlebar.classList.add('trans');
                titlebar.classList.remove('large');
            } else {
                titlebar.classList.remove('large');
                titlebar.classList.remove('trans');
            }
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

String.prototype.code = function() { 
    return `<div class="json-block">${this.sanitize()}</div>`;
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

function accordion(element) {
    if (element.parentNode.classList.contains('open')) {
        element.parentNode.style.maxHeight = element.scrollHeight + "px";
        element.parentNode.classList.remove('open');
    } else {
        element.parentNode.style.maxHeight = element.scrollHeight + element.parentNode.querySelector('.accordion-content').scrollHeight + "px";
        element.parentNode.classList.add('open');
    }
}

function toggleRadio(group, id) {
    const items = document.querySelectorAll(`.radio-group[data-group="${group}"] .menu-button`);
    items.forEach(item => {
        item.classList.remove('selected');
    });

    const selectedItem = document.getElementById(id);
    selectedItem.classList.add('selected');

    settings.set(group, id);
}

function navigateForward(topage) {
    content.classList.add('left');
    setTimeout(() => {
        content.classList.remove('left');
        content.classList.add('right');
        eval(topage);
        setTimeout(() => {
            content.classList.remove('right');
        }, 1);
    }, 100);
}

function navigateBack(topage) {
    content.classList.add('right-back');
    setTimeout(() => {
        content.classList.remove('right-back');
        content.classList.add('left-back');
        eval(topage);
        setTimeout(() => {
            content.classList.remove('left-back');
        }, 1);
    }, 100);
}

function navigateTab(topage) {
    content.classList.add('tab-in');
    eval(topage);
    setTimeout(() => {
        content.classList.remove('tab-in');
    }, 1);
}

function backGesture() {
    let touchStart = 0;
    let touchEnd = 0;
    let touchY = 0;

    const pulltab = document.querySelector('.pulltab');

    pulltab.innerHTML = `
        <div class="pulltab-icon">${icon.back}</div>
    `;

    window.addEventListener('touchstart', function(event) {

        touchStart = event.touches[0].clientX;
        touchY = event.touches[0].clientY;

        if (touchStart < 20) {
            pulltab.classList.add('gesture');
            pulltab.style.top = `${touchY}px`;

            content.style = `overflow: hidden;`;
        }
    }, false);
    
    window.addEventListener('touchmove', function(event) {

        touchEnd = event.touches[0].clientX;
        let delta = touchEnd - touchStart;
        if (delta > 0 && touchStart < 20) {
            pulltab.style.transform = `translateX(${Math.min(-15, Math.pow(delta, 1.1) - 120)}px)`;
        }
    }, false);
    
    window.addEventListener('touchend', function(event) {
        if (touchStart < 20 && touchEnd - touchStart > 100) {
            if (document.querySelector('.titlebar-back').onclick) {
                document.querySelector('.titlebar-back').onclick();
            }
        }
        pulltab.classList.remove('gesture');
        pulltab.style.transform = '';

        content.style = ``;
    }, false);
}

function pageElements() {
    const options = document.querySelectorAll('.menu-button');
    options.forEach(option => {
        if (settings.get(option.id)) {
            option.classList.add('checked');
        }
    });

    const radioGroups = document.querySelectorAll('.radio-group');
    radioGroups.forEach(group => {
        const groupName = group.dataset.group;
        const selectedId = settings.get(groupName);
        if (selectedId) {
            group.querySelectorAll('.menu-button').forEach(option => {
                if (option.id === selectedId) {
                    option.classList.add('selected');
                } else {
                    option.classList.remove('selected');
                }
            });
        }
    });

    document.querySelectorAll('.accordion').forEach(element => element.style.maxHeight = element.querySelector('.accordion-title').scrollHeight + "px");
}

function timeAgo(tstamp) {
    const currentTime = Date.now();
    const lastSeenTime = tstamp * 1000;
    const timeDifference = currentTime - lastSeenTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
}

function setTheme() {
    document.querySelector('html').classList = '';

    if (theme.get() === 'system') {
        if (window.matchMedia) {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
            if (systemDark.matches) {
            } else {
                document.querySelector('html').classList.add('light');
            }
        }
    } else {
        document.querySelector('html').classList.add(theme.get() || 'dark');
    }

    if (page === 'themes') {
        if (document.querySelector(`.theme-option.selected`)) {            
            document.querySelector('.theme-option.selected').classList.remove('selected');
        }
        if (theme.get()) {
            document.querySelector(`.theme-option.${theme.get()}`).classList.add('selected');
        } else {
            document.querySelector(`.theme-option.dark`).classList.add('selected');
        }
    }

    if (settings.get('disableBackdropBlur')) {
        document.querySelector('html').classList.add('disable-backdrop-blur');
    }

    if (settings.get('acrylicBackground')) {
        if (settings.get('acrylicBackground') === 'loom') {
            document.querySelector('html').style.setProperty('--wallpaper-url', 'url(src/assets/images/bg/loomdark.png)');
        } else if (settings.get('acrylicBackground') === 'bliss') {
            document.querySelector('html').style.setProperty('--wallpaper-url', 'url(src/assets/images/bg/6.jpg)');
        } else if (settings.get('acrylicBackground') === 'mojave') {
            document.querySelector('html').style.setProperty('--wallpaper-url', 'url(src/assets/images/bg/10-14-Night.jpg)');
        }
    }
}

function formatSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const size = (bytes / Math.pow(1024, i)).toFixed(2);
    return `${size} ${sizes[i]}`;
}