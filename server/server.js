const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

const AllMyRoutes = require("./routes/pet.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
