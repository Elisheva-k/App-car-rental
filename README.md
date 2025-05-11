# 🚗 Car Rental System – React Final Project

## 📄 Overview

This is a **React-based full-stack web application** for managing a complete car rental system, including **user and admin interfaces**, vehicle management, booking and return functionality, and advanced data filtering. This project is designed as a final project for a web development course, demonstrating skills in `React`, `Redux`, `React Router`, component composition, and modern JavaScript best practices.

### Transactions
- `Rentals`: RentalID, UserID, VehicleID, Date, Time
- `Returns`: ReturnID, RentalID, Return Date, Return Time, Remaining Fuel, Total Payment, Paid (Boolean)

## 🧭 Functional 

### 🧍 User Interface (Client)

#### 1. **Authentication**
- User registration with form validation.
- Login with ID, phone, and password.
- If not registered → redirect to registration.

#### 2. **Main Interface**
- Homepage with promotional content and images.
- After login → navigate to vehicle listing and show user name or icon in the menu.

#### 3. **Vehicle Listing**
- Display all available vehicles.
  - City
- Display availability: ✅ Green (available), ❌ Red (unavailable).

#### 4. **Vehicle Details**
- Click on a vehicle (only when logged in) to view:
  - Full specs
  - Rent button (enabled if available)

#### 5. **Renting a Vehicle**
- On "Rent" button:
  - Submit rental request → save to system
  - Update vehicle status to unavailable
  - Return rental code to user

#### 6. **Returning a Vehicle**
- Enter Rental Code
- Fill current city, street, and fuel remaining
- Pricing:
  - Calculate hours * price per hour
  - Adjust cost if fuel is less than before (according to price per liter)
- Update vehicle status to available

## 🛠️ Admin Interface

Accessible only to users with admin privileges:

#### 1. **Authentication**
- Login as admin → access management interface

#### 2. **Admin Functionalities**
- View and update engine types and fuel pricing
- View, add and filter vehicle models by company or type
- Add, update, or delete vehicles
- View all rentals, including:
  - Whether returned or not
  - Show return details if available


## 🖼️ UI / UX Guidelines

- Clean and modern design using CSS or component libraries (if applicable)
- Clear layout with component separation
- Logical and intuitive navigation
- Visual feedback (loading, errors, confirmations)
- Fully responsive layout (mobile/tablet/desktop)

## ⚙️ Project Structure (Suggested)

```
src/
│
├── components/         # Reusable UI components
├── pages/              # Page components (Home, Login, Register, Vehicles)
├── services/           # API and logic services
├── redux/              # Redux slices & store
├── utils/              # Helper functions
├── assets/             # Images & static files
└── App.js              # Main app component
```

## 🔄 Future Improvements

- Integration with a backend (Node.js, Firebase, etc.)
- Full payment gateway support
- Enhanced security (token-based authentication)
- Multi-language support

## ✨ Good luck and enjoy coding!