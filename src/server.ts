import app from "./app";
import cors from "cors";

app.use(cors());

app.listen(4000, () => console.log("App is listening on 4000"));
