"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { BsStar } from "react-icons/bs";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchData();
  }, []);
  const dropdownRef = useRef(null);
  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2">
        <Image
          src="/assets/images/logo.svg"
          width={50}
          height={50}
          alt="logo"
        />
        <p className="logo_text">Prmt</p>
      </Link>
      {/* <div className="sm:flex hidden">
        {session?.user ? (
          <div className="">
           
            <button className="outline_btn" onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={30}
                height={30}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="outline_btn"
                  key={provider.name}
                  type="button"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div> */}
      <div className="flex relative cursor-pointer" ref={dropdownRef}>
        {session?.user ? (
          <div className="flex gap-3 md:gap-5 ">
            {toggleDropDown && (
              <div className="dropdown">
                <Link href="/profile" className="dropdown_link  w-full">
                  profile
                </Link>

                <button
                  className=" mt-3 w-full black_btn"
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
            <Link href="/liked" className=" rounded-full border border-black bg-black py-1.5 px-2 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center;">
              <BsStar />
            </Link>
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <Image
              src={session?.user.image}
              width={30}
              height={30}
              alt="profile"
              className="rounded-full"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="outline_btn"
                  key={provider.name}
                  type="button"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
