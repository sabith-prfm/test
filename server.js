const express = require("express");
const app = express();
var mysql = require("mysql");

var con = mysql.createConnection({
  host: 'bgsozicv6sti5rho0ks7-mysql.services.clever-cloud.com', 
  user: 'uowsrqku18tcg8qo',      
  password: '1zVFc3DnX5NMs6cFLL0D',      
  database: 'bgsozicv6sti5rho0ks7',
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to Database");
});

//app.get("/motorcycle")

app.get("/", (req, res) => {
  //res.send("Welcome to node")
  con.query(
    "select * from main_category ",
    (err, result, fields) => {
      if (err) throw err;
      console.log(result);
      //result = JSON.parse(result)
    //data = console.log(result.map(item=>console.log(item)))
      res.send(result);
    }
  );

  //res.send("response")
});

app.listen(8080, () => {
  console.log("Server started on 8080");
});
