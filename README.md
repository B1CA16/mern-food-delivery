# Food Delivery

A demo food delivery application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.

## About the Project

This project consists of three main components:
- **Frontend**: React
- **Backend**: Node.js with Express
- **Admin Panel**: React
- **Database**: MongoDB

## Features

- User registration and authentication
- Browse restaurant menu items
- Add items to cart
- Checkout process with Stripe integration
- Order tracking
- Admin panel for restaurant management
- Menu item management (add, edit, delete)
- Order processing and status updates

## Note

If, when you open the website, it shows 'No dishes found.' below 'Find our best dishes', it is likely because the backend is starting up.
Sometimes, if the backend has been inactive for a certain period, it may take a couple of minutes to resume full operation due to the limitations of the free instance on Render.com.

## Project Setup

### Prerequisites
- Node.js
- npm or other package manager
- MongoDB Atlas account or local MongoDB
- Stripe account for payment processing

### Installation

1. Clone the repository:
```bash
git clone https://github.com/B1CA16/react-tailwind-mern-food-delivery.git
cd react-tailwind-mern-food-delivery
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Install admin panel dependencies:
```bash
cd ../admin
npm install
```

### Configuration

#### Backend Configuration

1. Create a `.env` file in the backend folder with the following variables:
```
JWT_SECRET="random#secret"
STRIPE_SECRET_KEY="your_stripe_secret_key"
MONGODB_URI="your_mongodb_connection_string"
PORT=5000 #You can change this to any port you prefer
```

2. Update the MongoDB connection in `backend/config/db.js`:
```javascript
import mongoose from "mongoose"

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI || 'mongodb+srv://your-username:your-password@your-cluster.mongodb.net/react-tailwind-mern-food-delivery')
    .then(() => console.log('DB Connected'))
}
```

#### Frontend Configuration

Update the backend API URL in `frontend/src/context/StoreContext.jsx`:
```javascript
const API_URL = "http://localhost:5000"; // or your deployed backend URL
```

#### Admin Panel Configuration

1. Update the backend API URL in `admin/src/assets/assets.js`:
```javascript
export const API_URL = "http://localhost:5000"; // or your deployed backend URL
```

2. Update the backend API URL in `admin/src/App.jsx`:
```javascript
const url = 'http://localhost:5000' // or your deployed backend URL
```

### Running the Project

1. Start the backend:
```bash
cd backend
node server.js
```

2. In another terminal, start the frontend:
```bash
cd frontend
npm run dev
```

3. In a third terminal, start the admin panel:
```bash
cd admin
npm run dev
```

4. Access the applications at:
   - Frontend: `http://localhost:5173`
   - Admin Panel: `http://localhost:5174` (port may vary)
   - Backend API: `http://localhost:5000`

## Stripe Payment Testing

This application uses Stripe for payment processing. To test the payment functionality:

1. Use the following test card details:
   - Card number: `4000 0062 0000 0007`
   - Expiration date: Any future date
   - CVC: Any 3 digits

2. The test payment will be processed without charging any real money.
