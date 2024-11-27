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
                        <title>Embedded Page</title>
                        <style>
                            html, body {
                                margin: 0;
                                padding: 0;
                                width: 100%;
                                height: 100%;
                                overflow: hidden;
                            }
                            iframe {
                                width: 100%;
                                height: 100%;
                                border: none;
                                display: block;
                            }
                        </style>
                    </head>
                    <body>
                        <iframe src="${url}" allowfullscreen></iframe>
                    </body>
                    </html>
                `);
                newTab.document.close(); 
            } else {
                alert("Unable to open a new tab. Please disable popup blockers.");
            }
        } else {
            alert("Please enter a valid URL!");
        }
    });
});
