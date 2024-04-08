import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 bg-opacity-50"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent8"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref
              >
                <NavLink
                to="/"
                  className={({isActive}) => ` lg:px-2
                  ${isActive? "text-pink-500 font-extrabold":"text-neutral-100 font-bold"}
                   focus:outline-none
                  aria-current="page"
                  
                  data-twe-nav-link-ref`}
                >
                  Home
                </NavLink>
              </li>
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref
              >
                <NavLink
                to="cheatsheet"
                  className={({isActive}) =>
                    ` ${isActive? "text-pink-500 font-extrabold":"text-neutral-100 font-bold"} lg:px-2
                   focus:outline-none
                  
                  aria-current="page"
                  
                  data-twe-nav-link-ref`
                  }
                >
                  React Cheatsheet
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
//text-black dark:text-white