import logo from "../../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";
import { MdLogin, MdOutlineSpaceDashboard } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { SlLogout } from "react-icons/sl";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-[#f2fbff] border-primary border-b-2">
      <div className="mx-auto w-11/12 max-w-screen-2xl pt-4 pb-8 md:py-4 flex justify-between items-center">
        <div>
          <Link>
            <img
              className="w-28 h-24 border-l border-dashed"
              src={logo}
              alt="Vobon Manager"
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {/* Navbar for larger screens */}
          <ul className="menu menu-horizontal items-center space-x-6 hidden md:flex">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "font-extrabold tracking-wider text-base text-primary rounded-xl"
                  : "text-base font-semibold hover:text-primary hover:underline"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/apartments"}
              className={({ isActive }) =>
                isActive
                  ? "font-extrabold tracking-wider text-base text-primary rounded-xl"
                  : "text-base font-semibold hover:text-primary hover:underline"
              }
            >
              All Apartments
            </NavLink>
          </ul>

          {/* private routes & Conditional login btn & user dropdown with logout */}
          <div className="hidden md:flex">
            {user ? (
              <div className="dropdown hover:dropdown-open dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn flex items-center bg-white shadow-sm shadow-secondary border-none hover:bg-accent text-accent duration-300 hover:text-white rounded-full avatar"
                >
                  <div>
                    <span>
                      <IoMenu size={35} />
                    </span>
                  </div>
                  <div className="w-10 rounded-full">
                    <img
                      referrerPolicy="no-referrer"
                      alt={user?.displayName}
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded mt-1 z-10 w-max p-4 shadow border"
                >
                  <div className="flex gap-4 items-center">
                    <div>
                      <img
                        referrerPolicy="no-referrer"
                        className="mx-auto w-14 h-14 rounded-full my-4"
                        src={user?.photoURL}
                        alt={user?.displayName}
                      />
                    </div>
                    <div>
                      <p className="font-semibold my-1">{user?.displayName}</p>
                      <p className="font-semibold my-1">{user.email}</p>
                    </div>
                  </div>
                  <div>
                    <NavLink
                      to={"/dashboard"}
                      className={
                        "flex gap-2 btn btn-sm rounded items-center bg-primary text-white text-lg font-semibold hover:text-primary duration-300 hover:bg-white border border-primary hover:border-primary"
                      }
                    >
                      <MdOutlineSpaceDashboard />
                      Go To Dashboard
                    </NavLink>
                  </div>
                  <div className="mt-4 mx-auto w-2/3">
                    <button
                      onClick={logOut}
                      className="btn  duration-300  rounded w-full btn-sm bg-white text-primary hover:bg-primary hover:text-white border-primary hover tracking-wide text-lg font-semibold"
                    >
                      <SlLogout /> Logout
                    </button>
                  </div>
                </ul>
              </div>
            ) : loading ? (
              <span className="loading loading-spinner loading-md text-primary"></span>
            ) : (
              <div>
                <NavLink
                  to={"/login"}
                  className="btn rounded bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary border-2 border-transparent duration-300 tracking-wide text-lg font-semibold flex items-center"
                >
                  <MdLogin />
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
        {/* private routes & Conditional login btn & user dropdown with logout */}

        {/* Navbar for mobile (md and below) */}
        <MobileNavbar
          user={user}
          logOut={logOut}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />
        {/* Navbar for mobile (md and below) */}
      </div>
    </div>
  );
};

export default Navbar;
