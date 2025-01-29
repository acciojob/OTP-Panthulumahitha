const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
    code.addEventListener("input", (e) => {
        const nextIndex = index + 1;
        if (e.target.value && nextIndex < codes.length) {
            codes[nextIndex].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (code.value) {
                code.value = "";
            } else if (index > 0) {
                codes[index - 1].focus();
            }
        }
    });
});
