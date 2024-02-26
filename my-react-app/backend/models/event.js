const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

// const password = '0608@iamkaran';

// const encodedPassword = encodeURIComponent(password);
// mongodb+srv://iamkaran_admin:${encodedPassword}@eventplanner.l6hqovn.mongodb.net/?retryWrites=true&w=majority

// mongoose.connect("mongodb+srv://iamkaran_admin:0608iamkaran@eventplanner.l6hqovn.mongodb.net/").then(() => {
//     console.log('Connection Succesfudmll');
// }).catch((err) => console.log('NO Connection hereee , err:', err));
// mongoose.connect("mongodb+srv://karanverma:karanverma@eventcluster.blixsin.mongodb.net/")
// mongoose.connect("mongodb://localhost:27017/eventDetail")
mongoose.connect("mongodb+srv://pass:pass@eventcluster.blixsin.mongodb.net/")
.then(() => {
    console.log('COnntedd!!!');
})
.catch((err) => {
    console.log('Errorrrr!!!', err);
})

// const mongourl = "mongodb+srv://karanverma:testing123@cluster.8b1os6j.mongodb.net/"


// MongoClient.connect(mongourl , (err, client)=>{
//     if(err){
//             throw err;
//     }
//     console.log('connnected to db')
// })
// mongoose.connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  
//   // Event listeners for connection events
//   mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB');
//   });
  
//   mongoose.connection.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
//   });
  
//   mongoose.connection.on('disconnected', () => {
//     console.log('Disconnected from MongoDB');
//   });


// const sampleschema = mongoose.Schema({
//     username: String,
//     name: String,
//     age: Number,
// });

// module.exports= mongoose.model("sampleDB", sampleschema);

const eventSchema = new mongoose.Schema({
    // First step data
    organizerPhone: String,
    organizerName: String,
    organizerEmail: String,
  
    // Second step data
    eventName: String,
    eventDescription: String,
    eventMode: String, // 'online' or 'offline'
    eventDate: Date,
    eventCategory: String,
    numberOfSeats: Number,

    // Newly added
    isrefundable:Boolean,
    eventloc:String,
    Ticketprice:Number,
    Duration:String,




  
    // Third step data
    showFullName: Boolean,
    showEmail: Boolean,
    showCollegeName: Boolean,
    showPhoneNumber: Boolean,

     uniqueId: String,
     Password: String,
     isVerified:Boolean,
     
     audience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Audience' }],
     //


  });


  
  const EventModel = mongoose.model('Event', eventSchema);
  
  module.exports = EventModel;