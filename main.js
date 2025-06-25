import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const connection = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Anas1234",
    database:"demo"
});

connection.connect().then(() => console.log("Connected to the database successfully!"))

app.post("/add", async (req, res) => {
    const {name,id}= req.body;
    
    const insert_Query='INSERT INTO demotable (name, id) VALUES ($1, $2)';

   connection.query(insert_Query, [name, id],(err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error inserting data");
            }
        else {
            console.log(result);
            res.status(200).send("Data inserted successfully");
        }

})
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}   );