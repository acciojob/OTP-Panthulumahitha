//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        if (e.inputType === "deleteContentBackward" && index > 0) {
            codes[index - 1].focus();
        } else if (e.target.value && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !code.value && index > 0) {
            codes[index - 1].focus();
        }
    });
});

