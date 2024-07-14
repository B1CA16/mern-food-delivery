import mongoose from "mongoose"

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://abc:abc123456789@cluster0.r0walgh.mongodb.net/react-tailwind-mern-food-delivery').then(() => console.log('DB Connected'))
}