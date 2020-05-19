const server = require("./api/server");
const port = process.env.port || 5000;
server.listen(port, () =>
  console.log(`\n |*| Server live on port ${port} |*| \n`)
);
