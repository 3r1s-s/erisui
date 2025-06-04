function webkitHaptic() {
    try {
        const label = document.createElement("label");
        label.ariaHidden = "true";
        label.style.display = "none";

        const input = document.createElement("input");
        input.type = "checkbox";
        input.setAttribute("switch", "");
        label.appendChild(input);

        document.head.appendChild(label);
        label.click();
        document.head.removeChild(label);
    } catch {
        // ignore
    }
}

function haptic(x) {
    if (device.supports.haptics) {
        navigator.vibrate(x || 50);
    } else if (device.is.iPhone) {
        webkitHaptic();
    }
}