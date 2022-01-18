const mongoose = require("mongoose");

const dbName = "productsDB";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>{ console.log (`Connected to database ${dbName}!`)})
    .catch((err) => { console.log(`Problem connecting to database ${dbName}!`, err)})