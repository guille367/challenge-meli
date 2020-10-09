import "./LoadEnv"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";
import dotenv from "dotenv";
dotenv.config();

// Start the server
const port = Number(process.env.API_PORT || 3000);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});
