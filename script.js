const form = document.querySelector("#contact-form");

if (form) {
    const status = document.querySelector("#form-status");
    const fields = [
        { input: document.querySelector("#name"), error: document.querySelector("#name-error") },
        { input: document.querySelector("#email"), error: document.querySelector("#email-error") },
        { input: document.querySelector("#message"), error: document.querySelector("#message-error") }
    ];

    const validateField = ({ input, error }) => {
        const isValid = input.checkValidity();
        input.setAttribute("aria-invalid", String(!isValid));
        error.hidden = isValid;
        return isValid;
    };

    fields.forEach((field) => {
        field.input.addEventListener("blur", () => validateField(field));
        field.input.addEventListener("input", () => {
            if (field.input.getAttribute("aria-invalid") === "true") {
                validateField(field);
            }
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const invalidFields = fields.filter((field) => !validateField(field));

        if (invalidFields.length > 0) {
            status.className = "form-status error";
            status.textContent = `Please correct ${invalidFields.length} highlighted field${invalidFields.length === 1 ? "" : "s"}.`;
            invalidFields[0].input.focus();
            return;
        }

        status.className = "form-status success";
        status.textContent = "Thank you. Your message passed validation and is ready to be sent.";
        form.reset();
        fields.forEach(({ input, error }) => {
            input.removeAttribute("aria-invalid");
            error.hidden = true;
        });
    });
}
