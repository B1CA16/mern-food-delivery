import mongoose from "mongoose"

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI || 'mongodb+srv://your-username:your-password@your-cluster.mongodb.net/react-tailwind-mern-food-delivery')
    .then(() => console.log('DB Connected'))
}
