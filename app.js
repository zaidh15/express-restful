const express = require("express");
const { process_params } = require("express/lib/router");

const app = express();

// definisikan port
app.listen(3000, () => {
    console.log("Server is running at https://localhost:3000");
});

// menggunakan middleware
const router = require("./routes/api");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// menggunakan routing
app.use(router);
