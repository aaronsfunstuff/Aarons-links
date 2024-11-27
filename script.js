document.addEventListener("DOMContentLoaded", () => {
    const urlInput = document.getElementById("urlInput");
    const loadButton = document.getElementById("loadButton");

    loadButton.addEventListener("click", () => {
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
                        <style>
                            body {
                                font-family: "Playfair Display", serif;
                                color: #ECDFCC;
                                background-color: #3C3D37;
                                margin: 0;
                                padding: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                            }
                            iframe {
                                width: 100%;
                                height: 100%;
                                border: none; /* No border for fullscreen effect */
                            }
                        </style>
                    </head>
                    <body>
                        <iframe src="${url}" title="Embedded Page"></iframe>
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
