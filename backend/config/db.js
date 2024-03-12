const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://omsinkar03bit:z4Hn6Nf7SARTBXXR@cluster0.zhssb6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/DB1");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
connectDB();

