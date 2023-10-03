const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
mongoose.connect('mongodb+srv://asrajay968:EDa684Vm9B1mjfLL@cluster0.7poatss.mongodb.net/', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "courses" 
}).then(console.log(`Db connected successfully`))
  .catch(error => {
    console.log(`Db connection failed`);
    console.log(error);
    process.exit(1);
});


app.listen(3000, () => console.log('Server running on port 3000'));