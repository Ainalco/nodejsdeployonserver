const http = require("http");
const fs = require("fs");
// this is for heroku
//const PORT = process.env.PORT;

const handleReadFile = (statusCode, fileLocation,res,req) => {
    fs.readFile(fileLocation, "utf-8",(err, data) => {
      if(err){
        console.log(err);
      }else{
        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  };
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handleReadFile(200, "./views/index.html",res,req);
      } else if (req.url === "/about") {
        handleReadFile(200, "./views/about.html",res,req);
      } else if (req.url === "/contact") {
        handleReadFile(200, "./views/contact.html",res,req);
      } else {
        handleReadFile(200, "./views/error.html",res,req);
      }
  });

  server.listen(process.env.PORT || 3000);
  // for heroku
  // server.listen(PORT, () => {
  //   console.log(`Server is running`);
  // });