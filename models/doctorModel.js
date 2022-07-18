const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    phone: { type: String, trim: true, required: true },
    address: { type: String, trim: true, required: true },
    price: { type: String, trim: true, required: true },
    specialize: { type: String, trim: true, required: true },
    about: { type: String, trim: true, required: true },
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
    patient : [
      {type: mongoose.Schema.Types.ObjectId,ref:'Patient'}
  ]
  });

  const setImageURL = (doc) => {
    if (doc.image) {
      const imageUrl = `${process.env.BASE_URL}/doctors/${doc.image}`;
      doc.image = imageUrl;
    }
  };

  DoctorSchema.post('init', (doc) => {
    setImageURL(doc);
  });
  
  // create
  DoctorSchema.post('save', (doc) => {
    setImageURL(doc);
  });

  module.exports = mongoose.model("Doctor", DoctorSchema);