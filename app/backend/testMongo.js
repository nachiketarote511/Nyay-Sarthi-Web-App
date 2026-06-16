const mongoose = require("mongoose");

const uri =
"mongodb+srv://nyaysarthi_user:NyaySarthi123@cluster0.5h5eqjg.mongodb.net/icjip?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
.then(() => {
    console.log("MongoDB Connected");
    process.exit(0);
})
.catch((err) => {
    console.error(err);
    process.exit(1);
});