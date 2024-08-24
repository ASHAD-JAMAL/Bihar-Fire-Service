import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaXing,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const navListMenuItems = [
  {
    title: "YouTube",
    icon: FaYoutube,
    link: "https://youtube.com/@BiharFireServiceHomeGuard?si=UgS5z9VH5AUHn_Q0",
  },
  {
    title: "X",
    icon: FaXing,
    link: "https://x.com/Biharfire112?t=qMmYeexotDOXW_tbtT0DqQ&s=09",
  },
  {
    title: "FaceBook",
    icon: FaFacebookF,
    link:
      "https://www.facebook.com/biharfireservicesandhomeguard?mibextid=ZbWKwL",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/biharfireservice?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/bihar-fire-service-home-guard/",
  },
];

function NavListMenu({ closeNav }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ icon, title, link }, key) => (
    <a
      href={link}
      key={key}
      target="_blank"
      rel="noopener noreferrer"
      onClick={closeNav}
    >
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-bold text-white cursor-pointer"
              selected={isMenuOpen}
            >
              Useful Links
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="max-w-screen-xl rounded-xl">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

function NavList({ closeNav }) {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    closeNav(); // Close the navbar after scrolling
  };

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        onClick={() => scrollToSection("home")}
        variant="small"
        href="#home"
        color="blue-gray"
        className="font-medium cursor-pointer"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white font-bold">
          Home
        </ListItem>
      </Typography>
      <Typography
        as="a"
        onClick={() => scrollToSection("about")}
        variant="small"
        color="blue-gray"
        href="#about"
        className="font-medium cursor-pointer"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white font-bold">
          About Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        onClick={() => scrollToSection("service")}
        variant="small"
        href="#service"
        color="blue-gray"
        className="font-medium cursor-pointer"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white font-bold">
          Services
        </ListItem>
      </Typography>
      <NavListMenu closeNav={closeNav} />
      <Typography
        as="a"
        onClick={() => scrollToSection("faq")}
        variant="small"
        href="#faq"
        color="blue-gray"
        className="font-medium cursor-pointer"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white font-bold">
          FAQ
        </ListItem>
      </Typography>
      <Typography
        as="a"
        onClick={() => scrollToSection("contact")}
        variant="small"
        href="#contact"
        color="blue-gray"
        className="font-medium cursor-pointer"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white font-bold">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 bg-[#ca4445]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center mb-2">
          <FaPhoneAlt className="mr-2 w-10 h-10 rounded-full text-[#ca4445] hover:text-white bg-white p-2 hover:bg-black group-hover:text-white duration-300 cursor-pointer" />
          <Typography as="a" href="tel:+123456789" className="text-white">
            <p>Emergency Call</p>
            +1 234 567 89
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList closeNav={closeNav} />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList closeNav={closeNav} />
      </Collapse>
    </Navbar>
  );
}

function Header() {
  return <NavbarWithMegaMenu />;
}

export default Header;
