document.addEventListener("DOMContentLoaded", () => {
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        code.addEventListener("input", (e) => {
            const nextIndex = index + 1;
            if (e.target.value && nextIndex < codes.length) {
                codes[nextIndex].focus();
                codes[nextIndex].setSelectionRange(1, 1); // Ensures cursor is inside input
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (code.value) {
                    code.value = "";
                } else if (index > 0) {
                    codes[index - 1].focus();
                    codes[index - 1].setSelectionRange(1, 1);
                }
            }
        });
    });

    // Ensure the first input is focused on page load
    codes[0].focus();
});
