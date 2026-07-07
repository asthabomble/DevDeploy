const dotenv = require("dotenv");

// Load .env file
const result = dotenv.config();

console.log("Dotenv Result:");
console.log(result);

console.log("PORT =", process.env.PORT);
console.log("MONGODB_URI =", process.env.MONGODB_URI);

const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});