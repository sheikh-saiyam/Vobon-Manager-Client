import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MobileNavbar = ({
  user,
  logOut,
  isOpen,
  setIsOpen,
  isOpenMenu,
  setIsOpenMenu,
}) => {
  return (
    <div className="dropdown dropdown-end md:hidden flex items-center gap-4">
      <div>
        <label
          tabIndex={0}
          className="btn bg-primary dark:border-none text-white  font-bold rounded duration-500"
          onClick={() =>
            isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)
          }
        >
          {isOpenMenu ? <MdClose size={25} /> : <GiHamburgerMenu size={25} />}
        </label>
        <ul
          tabIndex={0}
          className={` ${
            isOpenMenu
              ? "dropdown-content menu menu-vertical text-center bg-base-100 rounded z-10 w-64 p-4 mt-2 border shadow duration-500"
              : "hidden"
          }`}
        >
          <NavLink
            to={"/"}
            onClick={() => setIsOpenMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary"
                : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/apartments"}
            onClick={() => setIsOpenMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary"
                : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline"
            }
          >
            All Apartments
          </NavLink>

          {/* Private Routes */}

          {user && user.email && (
            <>
              <NavLink
                to={"/dashboard"}
                onClick={() => setIsOpenMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-base py-1 text-white rounded bg-primary border my-[5px] border-primary"
                    : "text-base font-semibold py-1 text-primary rounded bg-transparent border my-[5px] border-primary hover:text-white hover:bg-primary hover:underline"
                }
              >
                Go To Dashboard
              </NavLink>
            </>
          )}
          {/* Private Routes */}

          {/* Login button for mobile view */}
          {user && user.email && user?.photoURL ? (
            <div>
              <div className="dropdown dropdown-end">
                <div>
                  <img
                    className="mx-auto w-14 h-14 rounded-full my-4"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <p className="text-center font-semibold my-1">
                  {user.displayName}
                </p>
                <p className="text-center font-semibold my-1">{user.email}</p>
              </div>
              <button
                onClick={logOut}
                className="btn mt-2 w-full btn-sm rounded bg-white border border-primary text-primary hover:bg-primary hover:text-white tracking-wide text-lg font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              onClick={() => setIsOpenMenu(false)}
              className="btn mt-2 btn-sm rounded bg-white text-primary text-base border-primary hover:bg-primary hover:text-white"
            >
              Login
            </NavLink>
          )}
        </ul>
      </div>
      {/* Theme Controller */}
      <div className="md:hidden flex">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MobileNavbar;
