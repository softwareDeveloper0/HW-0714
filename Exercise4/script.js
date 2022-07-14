var n = parseInt(prompt("Please enter a number: "));


function a(n) {
    for (let i = 0; i <= n; i++)
    {
        document.write("$".repeat(i));
        document.write("<br>");
    }
}

a(n);

