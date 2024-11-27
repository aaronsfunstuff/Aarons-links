function toggleSidebar() {
    const sidebar = document.querySelector(".Side-bar");
    sidebar.classList.toggle("open");
}
function openGame() {
    var userInput = prompt("Enter the URL to embed:");
    if (userInput && userInput.trim() !== "") {
        var win = window.open();
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = userInput.trim();
        win.document.body.style.margin = "0";
        win.document.body.style.padding = "0";
        win.document.body.style.height = "100%";
        win.document.body.appendChild(iframe);
    } else {
        alert("Please enter a valid URL.");
    }
}
