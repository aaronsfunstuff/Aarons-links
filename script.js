function toggleSidebar() {
    const sidebar = document.querySelector(".Side-bar");
    sidebar.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const urlInput = document.getElementById("urlInput");
    const newTabButton = document.getElementById("newTabButton");

    newTabButton.addEventListener("click", () => {
        const url = urlInput.value.trim();

        if (url) {
            const newTab = window.open("about:blank", "_blank");
            if (newTab) {
                newTab.document.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${url}</title>
                    </head>
                    <body>
                        <iframe src="${url}"></iframe>
                    </body>
                    </html>
                `);
            } else {
                alert("Unable to open a new tab. Please disable popup blockers.");
            }
        } else {
            alert("Please enter a valid URL!");
        }
    });
});
