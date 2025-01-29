# 🏢 Vobon Manager: Building Management System

## 🌟 Description

**Vobon Manager** is an innovative **Building Management System (BMS)** tailored for efficient and seamless management of a single building. Designed to cater to tenants, residents, and administrators, the platform simplifies apartment bookings, rental payment processes, and day-to-day operations.

With a user-friendly interface, Vobon Manager offers tenants the ability to browse apartments, make agreements, manage rental payments, and stay updated on announcements. Meanwhile, administrators benefit from tools to efficiently manage members, announcements, agreements, and even exclusive coupons.

Whether you’re a resident looking for convenience or an admin managing building operations, **Vobon Manager** is your go-to solution for streamlined building management.

---

## 🔗 Key Links:

- [**Live Website Link**](https://saiyam-assignment12.netlify.app/)
- [**Github Client Repository**](https://github.com/sheikh-saiyam/Vobon-Manager-Client)
- [**Gtihub Server Repository**](https://github.com/sheikh-saiyam/Vobon-Manager-Server)

## 🔑 Admin Login Credentials

- **Email:** project-admin@admin.com
- **Password:** Project-admin//password

---

## 🚀️ Key Features

### 👤 User Features

- 🔐 **Secure login/register** with email/password or social login.
- 🏢 **Browse Apartments:** View apartment and filter apartments by rent range.
- 📑 **Agreement Requests :** Submit apartment agreement request to the admin.
- 📣 **Announcements:** View all building announcements posted by the admin.

### 👨‍💼 Member Features

- 📊 **Dashboard Access:** Members can access their private dashboard with routes for My Profile, Make Payment, Payment History, and Announcements.
- 🖼 **My Profile️**: Displays the member’s name, image, email, agreement accept date, and rented apartment details (floor, block, room number).
- 💸 **Make Payment:** Allows members to pay rent, select a month, and apply discount coupons for reduced rent. Members can proceed to a secure payment page once the coupon is applied and validated.
- 🗂 **Payment History️**: View a detailed table of all past payments, including amounts, months, and confirmation dates.
- 📣 Announcements: View building announcements shared by the owner.

### ️👨🏻‍💻 Admin Features

- 🖥 **Dashboard Access️**: Admins have access to a private dashboard with routes for Admin Profile, Manage Members, Make Announcement, Agreement Requests, and Manage Coupons.
- 🖼 **Admin Profile️**: Displays the admin's name, image, email, total rooms, percentage of available and rented rooms, and the total number of users.
- 👥 **Manage Members:** View a list of all members with options to remove them. Removing a member demotes their role to 'user,' granting access only to the user dashboard.
- 📢 **Make Announcement:** Admins can create and publish building-wide announcements with a title and description.
- 📑 **Agreement Requests:** Admins can review apartment agreement requests, view details like user info, floor, block, rent, and request date. Admins can accept or reject requests, updating the user’s role to member or keeping them as a user.
- 🎟 **Manage Coupons️**: Admins can view, add, update, or remove discount coupons, manage their availability, and store new coupon details in the database.

## 💡 Role-Based Features

- 👤 **User Role:** Limited access to the user dashboard for browsing apartments and viewing announcements.
- 🧑‍💼 **Member Role:** Full access to member dashboard, with the ability to manage payments, apply coupons, and view payment history.
- ️👨🏻‍💻 **Admin Role:**️ Full control over the system, including managing users, members, apartments, announcements, agreements, and coupons.

## 🌟 Additional Features

- Role-based access control with **JWT**.
- Responsive design for all devices.
- Search apartments by rent range with advanced filtering.
- Coupon management with dynamic discounts.
- Real-time updates on agreement status.

## 🛡️ Security

- Secure authentication with Firebase and JWT.
- Role-based route protection for sensitive pages.
- **Verify Functions:**
  - `verifyAdmin`: Validates admin privileges using the JWT token.
  - `verifyMember`: Validates member privileges and checks role permissions.
- **Protected Routes:**
  - Admin-only pages like managing members and agreements are secured using `verifyAdmin` middleware.
  - Member-specific pages like rent payment are secured using `verifyMember` middleware.

---

## 📄 Pages Overview

## `Public Pages`

### 🏠 Home Page `/`

- **Hero Banner:** Beautiful banner showcasing the building with sliding images.
- **About the Building:** Brief overview of the building facilities, amenities, and About the Building Story, emphasizing what makes it special.
- **Explore Our Apartments:** Featured card section with apartment previews, including apartment photo, apartment-number, and rental price.
- **Exclusive Coupons:** Highlighting current promotions and discount offers with quick access to coupon codes.

- **Our Location:** Interactive map image showing the building’s location, nearby landmarks, and easy access to directions for convenience.

### 🏢 Apartments Page `/apartments`

- The Apartments Page is designed to showcase all available apartments in a clear and user-friendly way. This page allows users to explore different apartment options, view detailed information, and filter apartments based on rent range.

- **Key features include like:**

  - **Apartment Listings:** Each apartment is displayed in a card format that includes essential information such as:

    - Apartment Image, Floor Number, Block Name, Apartment Number, Rent
    - Agreement Button for booking the apartment

  - **Pagination:** The page is organized to show a maximum of 6 apartments per page, allowing users to easily navigate through multiple pages
  - **Search & Filter Functionality:**
    - Users can filter apartments based on their rent range. A simple range input lets users specify a minimum and maximum rent (e.g., 1000 tk to 2000 tk), ensuring they can easily find apartments within their budget.
    - The search feature enhances the experience by allowing users to quickly discover apartments that fit their financial preferences.

### 🔑 Login & Register Page `/login` & `/register`

- Authentication pages for users and members and admins.
- Social login options like google for faster registration.

## `Role-Based Private Pages`

### User Dashboard 📊

- **My Profile `/dashboard`**

  - User details like user **name, email, photo and role**.
  - Empty placeholder agreement information for non-member user.
  - User notice for agreement request status.

- **Announcements `/dashboard/announcements`**
  - Show total announcements count.
  - Show all the announcements on this page announced by the owner.

### Member Dashboard 📊

- **My Profile `/dashboard`**

  - Member details like **member name, email, photo and role**.
  - Placeholder containing agreement request, accept date & apartment informations.
  - Button named make-payment for easy navigate to make-payment page

- **Make Payment `/dashboard/make-payment`**

  - Intuitive form containing member email, apartment informations.
  - Select month option for select which month the member want to pay.
  - A pay button after select the month button will be active.
  - onclick the pay button will be navigate the user to the payment page.

- **Payment `/dashboard/payment`**

  - The Payment Page is designed for members to easily pay their monthly rent, apply valid discount coupons, and securely complete the transaction
  - **The page includes the following key features:**
    - **Payment Details Review:** Before proceeding with the payment, members can review the payment details to confirm their transaction,
    - **The information displayed includes:**
      - Month member want to Pay **,** Original Rent Price
    - **Coupon Code Apply:** Members have the option to apply a valid coupon code to reduce their rent.
      - If the code is valid, the rent price will be automatically reduced by the discount percentage specified in the coupon.
      - A "Apply Coupon" button enables the coupon functionality, providing real-time feedback on whether the coupon was successfully applied.
    - **Stripe Payment Integration:** For a seamless and secure payment experience, members are redirected to a Stripe payment system.
    - **Payment Confirmation:** After successful payment, a confirmation modal will show the payment details, including the transaction ID and other relevant information. The system will store the transaction data in the database, ensuring accurate records for future reference.

- **Payment History `/dashboard/payment-history`**

  - Detailed record of all rent payments history including payment-month, payment-amount, payment-confirm date.
  - Stripe Payment Transaction ID

- **Announcements `/dashboard/announcements`**
  - Show total announcements count.
  - Show all the announcements on this page announced by the owner.

### Admin Dashboard 📊

- **Admin Profile `/dashboard`**

  - The **Admin Profile Dashboard** is a centralized hub where administrators can view key building statistics and manage essential details. This dashboard provides a streamlined overview of building operations, including users & members and apartments data.
  - **Key features include:**
    - Admin details like **admin name, email, photo.**
    - **Building Overview:** A summary of vital statistics for effective building management.
      - Total Apartments: Displays the total number of apartments in the building.
      - Users & Members Count: Provides a clear distinction between users and members.
    - **Apartment Statistics:** Offers a quick snapshot of the current status of the building's apartments.
      - Available Apartments: The percentage of apartments currently vacant and ready for agreements.
      - Agreement Apartments: The percentage of apartments already rented out or under agreements.

- **Manage Members `/dashboard/manage-members`**

  - The **Manage Members** section allows administrators to efficiently oversee all registered members and control their roles.
  - **Key Features:**
    - **Member List:** Displays all members in a tabular format with the following details like: Member name, email and remove button
    - **Role Management:**
      - Clicking the Remove button changes the member's role to user
      - The member loses access to the Member Dashboard and can only access the User Dashboard.

- **Make Announcement `/dashboard/make-announcement`**

  - The Make Announcement page enables administrators to efficiently create and publish important **announcments or notices.**
  - Simple form to create announcements with the following fields: **title, description.**

- **Agreement Requests `/dashboard/agreement-requests`**

  - The Agreement Requests page allows administrators to review and process apartment agreement applications from users efficiently.
  - **Key features include:**
    - **Request Details:** Each agreement request is displayed in a table format with the following information: **User Name, User Email, Floor Number, Block Name, Apartment Number, Rent, Agreement Request Date**
    - **Action Buttons:**
      - Accept Button:
        - Changes the agreement status to Checked.
        - Updates the user’s role to Member, granting access to the Member Dashboard.
      - Reject Button:
        - Changes the agreement status to Rejected.
        - Keeps the user’s role will remain the same.
    - **Automatic Cleanup:** Once processed, the request is removed from the list for a clean and organized view.

- **Manage Coupons `/dashboard/manage-coupons`**
  - The Manage Coupons page provides administrators with a centralized space to oversee and manage discount coupons effectively.
  - **Key features include:**
    - **Coupon List:** Tabular display of all coupons with details:
      - Code, Discount %, Description, and Availability Status.
    - **Add New Coupon:** Add Coupon button opens a modal with fields:
      - Code, Discount %, Description, and Submit.
      - Saves the coupon in the database.
    - **Update Availability:**
      - Admins can switch coupons availability between Available and Unavailable.

---

## ⚙️ JSON Data Structure

### Apartment Data

```json
{
  "_id": "678a3bd548a654b2a0d520a9",
  "apartmentImage": "https://apartment-j-1001-image.com",
  "apartmentNumber": "J-1001",
  "floorNumber": 10,
  "blockName": "J",
  "rent": 420,
  "status": "available"
}
```

### Agreement Data

```json
{
  "_id": "678a5783ebcc43944b0fcb06",
  "user_details": {
    "email": "agreementuser@gmail.com",
    "name": "Agreement User"
  },
  "apartment_id": "678a3bd548a654b2a0d520ab",
  "apartmentNumber": "A-103",
  "floorNumber": 1,
  "blockName": "A",
  "rent": 170,
  "agreement_status": "checked",
  "agreement_request_date": "2025-01-17T13:13:31.485Z",
  "agreement_accept_date": "2025-01-17T17:39:20.000Z"
}
```

### Announcement Data

```json
{
"_id": "678b64a2b69e30a402b0f266",
"title": "User Notice: Agreement Request Status",
"description": "If you have requested an agreement, please wait your agreement request is still
pending or has not been accepted by the owner.Once accepted, you'll gain access to your agreement,
and your role will be updated to Member.Thank you for your patience!"
}
```

### Coupon Data

```json
{
"_id": "678765eb42e885021e1dcf62",
"coupon_code": "VOBON10",
"discount_Percentage": 10,
"coupon_description": "Get 10% off your first apartment booking fee or rental payment made
through Vobon Manager",
"availability": "available"
}
```

### Payment Data

```json
{
  "_id": "678cabff5b4ac89f9f8662a4",
  "member_email": "agreementuser@gmail.com",
  "member_name": "Agreement User",
  "payment_month": "January",
  "payment_date": "2025-01-19T07:38:39.671Z",
  "payment_amount": 119,
  "transaction_id": "pi_3Qit5bHFQO7rYaGg1iNHguBl"
}
```

---

## 🌐 Tech Stack

### **Frontend**:

- Tailwind CSS for styling
- React.js with React Router
- Firebase Authentication

### **Backend**:

- Node.js with Express.js
- MongoDB for data storage
- JWT for secure sessions

### **Hosting**:

- **Client**: Netlify
- **Server**: Vercel

---

## 📦 NPM Packages

### Client

```json
  "dependencies": {
    "@stripe/react-stripe-js": "^3.1.1",
    "@stripe/stripe-js": "^5.5.0",
    "@tanstack/react-query": "^5.64.1",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hot-toast": "^2.5.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.1",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1"
  }
```

### Server

```json
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.12.0",
    "stripe": "^17.5.0"
  }
```

---

## 📷 Project Images Highlights

### 📷 Home Page `"/"` Image

![Home Page](https://i.ibb.co.com/drd3vNW/Screenshot-2025-01-28-160254.png)

### 📷 Apartments Page `"/apartments"` Image

![Apartment List](https://i.ibb.co.com/VB7hBBz/Screenshot-2025-01-28-160328.png)

### 📷 Admin Dashboard `"/dashboard"` Image

![Admin Dashboard](https://i.ibb.co.com/CwzRkXL/Screenshot-2025-01-28-160415.png)

### 📷 Member Dashboard `"/dashboard"` Image

![Admin Dashboard](https://i.ibb.co.com/RSkDTT4/Screenshot-2025-01-28-161116.png)

### 📷 Payment Page `"/payment"` Image

![Payment Section](https://i.ibb.co.com/f4B98ZY/Screenshot-2025-01-28-160508.png)

---

## ⚙️ Installation & Setup

### Client Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sheikh-saiyam/Vobon-Manager-Client
   cd Vobon-Manager-Client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env.local` file:

   ```env
   VITE_apiKey=your_firebase_apiKey
   VITE_authDomain=your_firebase_authDomain
   VITE_projectId=your_firebase_projectId
   VITE_storageBucket=your_firebase_storageBucket
   VITE_messagingSenderId=your_firebase_messagingSenderId
   VITE_appId=your_firebase_appId

   VITE_API_URL=your_server_api_link
   VITE_STRIPE_PUBLIC_KEY=your_stripe_Publishable_Key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Server Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sheikh-saiyam/Vobon-Manager-Server
   cd Vobon-Manager-Server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables in a `.env` file:
   ```env
   DB_USER=your_db_user_name
   DB_PASS=your_db_user_password
   JWT_SECRET=jwt_secret_code
   STRIPE_SECRET_KEY=your_stripe_Secret _Key
   ```
4. Run the development server:
   ```bash
   npm start
   ```

---
