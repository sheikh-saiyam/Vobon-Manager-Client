# Vobon Manager: Building Management System

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
- ️👨🏻‍💻** Admin Role**️: Full control over the system, including managing users, members, apartments, announcements, agreements, and coupons.

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
