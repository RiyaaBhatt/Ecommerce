const mysql=require("mysql2")
                const db = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "1410",
                    database:"ecommerce",
                });
                db.connect((err) => {
                    if (err) {
                    console.error('Error connecting to the database:', err);
                    }
                    console.log('Connected to the MySQL database.');
                });
module.exports=db