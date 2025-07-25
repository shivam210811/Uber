const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ firstName, lastName, color, email, password, plate, capacity, vehicleType }) => {
  if (!firstName || !email || !password || !plate || !color || !capacity || !vehicleType) {
    throw new Error("All fields are required"); 
  }

  const captain = await captainModel.create({
    fullName: {
      firstName,
      lastName
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType
    }
  });

  return captain;
};
