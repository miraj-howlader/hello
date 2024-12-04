"use client";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { SignedIn,SignedOut,SignInButton,UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const Header = () => {
  const path = usePathname();
  const {theme,setTheme} = useTheme();


  return (
    <Navbar className=" border-b-2">
      <Link
        href="/"
        className=" self-center whitespace-nowrap text-sm
       sm:text-xl font-semibold dark:text-white"
      >
        <span
          className=" px-2 py-1 bg-gradient-to-r
         from-indigo-500 via-purple-600
          to-pink-500 rounded-lg text-white"
        >
          Miraj
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={IoIosSearch}
          className=" hidden lg:inline"
        />
      </form>
      <Button className=" w-12 h-10 lg:hidden" color="gray" pill>
        <IoIosSearch />
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button
        onClick={()=>setTheme(theme ==='light'?'dark':'light')}
         className=" w-12 h-10 hidden sm:inline" color="gray" pill>
          {
            theme === 'light'?<FaSun/>:<FaMoon/>
          }
        </Button>
        <SignedIn>
            <UserButton
            appearance={{
                baseTheme: theme === 'light' ? light : dark,
            }}
            />
        </SignedIn>
        <SignedOut>
            <Link href='/sign-in'>
        <Button gradientDuoTone="purpleToBlue" outline
         >
            Sign In
          </Button>
          </Link>
        </SignedOut>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active={path === "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link href="/about">
          <Navbar.Link active={path === "/about"} as={"div"}>
            About
          </Navbar.Link>
        </Link>
        <Link href="/projects">
          <Navbar.Link active={path === "/projects"} as={"div"}>
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
