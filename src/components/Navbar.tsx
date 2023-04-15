import { SignOutButton, useUser } from "@clerk/nextjs";
import {
  HomeIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  WalletIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { pathname } = useRouter();
  const { user } = useUser();

  return (
    <nav className="flex flex-col w-72 min-h-full bg-black">
      <div className="flex flex-col flex-1 mx-7 mt-12">
        <div className="flex justify-center mb-10">
          <span className="font-extrabold text-2xl text-white tracking-wider">
            FINANCE
          </span>
          <span className="font-medium text-2xl text-white tracking-wider">
            app
          </span>
        </div>
        <div className="flex flex-col w-full gap-4">
          <Link
            href="/home"
            className={`flex items-center gap-3 h-12 rounded text-lg hover:text-white transition-colors ${
              pathname === "/home"
                ? "bg-primary text-white font-semibold"
                : "text-special-bg2 font-normal"
            }`}
          >
            <HomeIcon className="ml-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 h-12 rounded text-lg hover:text-white transition-colors ${
              pathname === "/dashboard"
                ? "bg-primary text-white font-semibold"
                : "text-special-bg2 font-normal"
            }`}
          >
            <LayoutDashboardIcon className="ml-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/transactions"
            className={`flex items-center gap-3 h-12 rounded text-lg hover:text-white transition-colors ${
              pathname === "/transactions"
                ? "bg-primary text-white font-semibold"
                : "text-special-bg2 font-normal"
            }`}
          >
            <WalletIcon className="ml-4" />
            <span>Transactions</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mx-7 mb-12 gap-6">
        <div className="flex justify-center items-center ">
          <Image
            src={`${user?.profileImageUrl}`}
            alt="Profile image"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col ml-3">
            <span className="font-semibold text-white text-lg">
              {user?.fullName}
            </span>
            <Link
              href="/profile"
              className="font-normal text-special-bg2 text-sm hover:text-white transition-colors"
            >
              View profile
            </Link>
          </div>
        </div>
        <div className="border-b-2 border-special-bg3" />
        <SignOutButton>
          <button
            type="submit"
            className="flex items-center gap-3 h-12 rounded bg-special-bg3 text-lg text-white font-semibold"
          >
            <LogOutIcon className="ml-4" />
            <span>Logout</span>
          </button>
        </SignOutButton>
      </div>
    </nav>
  );
};

export default Navbar;
