const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

//Adatbázis kapcsolat beállitása

const db = mysql.createConnection({
    host: "127.0.0.1",
    port: "3307",
    user: "root",
    password: "",
    database: "felveteli"
})

db.connect((err) => {
    if(err){
        console.error("Hiba történt a MySQL szerverhez való kapcsolódáskor: ", err)
    }
    else{
        console.log("Sikeresen csatlakozott a MySQL szerverhez!")
    }
})

app.get("/diakok",(request,response) => {
    db.query("select nev, agazat, hozott+kpmagy+kpmat as osszpont from diakok " +
    "inner join jelentkezesek on oktazon = jelentkezesek.diak " +
    "inner join tagozatok on akod = jelentkezesek.tag " +
    "order by nev asc", (err,results) => {
        if(err) return response.status(500).json(err)
        response.json(results)
    })

})

app.listen(5000, () => {
    console.log("A szerver fut az 5000-es porton!")
})