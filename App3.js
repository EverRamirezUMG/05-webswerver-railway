const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("id, nombre\n");
    res.write("1, Ever\n");
    res.write("2, José\n");
    res.write("3, Lisa\n");
    res.write("4, Marcos\n");
    res.end();
  })

  .listen(8080);

console.log("Escuchando el puerto", 8080);
