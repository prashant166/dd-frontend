"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
import SignInContent from "./SIgnInContent";
import EmailLoginDialog from "./EmailLoginDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import JoinDialog from "./JoinDialog";
import Link from "next/link";
import { useSelector } from "react-redux";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const optionsDialog = useRef(null);
  const emailDialog = useRef(null);
  const forgotDialog = useRef(null);
  const joinDialog = useRef(null);

  const openOptions = () => optionsDialog.current?.showModal();
  const closeOptions = () => optionsDialog.current?.close();
  const closeEmail = () => emailDialog.current?.close();
  const openForgot = () => forgotDialog.current?.showModal();
  const closeForgot = () => forgotDialog.current?.close();
  const openJoin = () => joinDialog.current?.showModal();
  const closeJoin = () => joinDialog.current?.close();

  const handleEmailClick = () => {
    closeOptions();
    emailDialog.current?.showModal();
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="max-w-5xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-12 shadow-sm relative">
        {/* Left - Hamburger for mobile */}
        <button
          className="md:hidden"
          onClick={() => setMobileNavOpen(true)}
        >
          <FaBars className="w-5 h-5 text-black" />
        </button>

        {/* Center - Logo and text (always centered) */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:relative md:left-0 md:transform-none"
        >
          <div className="relative w-[36px] h-[36px]">
            <Image
              src="/images/logo.png"
              alt="DailyDilli Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-extrabold text-black">DailyDilli</span>
        </Link>

        {/* Center Links - Desktop Only */}
        <div className="hidden md:flex gap-6 text-sm font-semibold text-black absolute left-1/2 transform -translate-x-1/2">
          {["Start a Trip", "Contribute", "About Us"].map((label) => {
            const customRoutes = {
              "Start a Trip": "/trip-planning",
              "Contribute": "/addplace",
            };

            const href = customRoutes[label] || `/${label.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <a
                key={label}
                href={href}
                className="relative group pb-1"
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            );
          })}
        </div>

        {/* Right - User Dropdown or Sign In */}
        <div className="flex items-center gap-4 ml-auto">
          {userInfo ? (
            <UserDropdown />
          ) : (
            <button
              onClick={openOptions}
              className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
            >
              Sign in
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Slide-in Drawer */}
      {mobileNavOpen && (
  <>
    {/* Backdrop with blur and click-to-close */}
    <div
      className="fixed inset-0 z-40 backdrop-blur-none
 bg-black/10"
      onClick={() => setMobileNavOpen(false)}
    />

    {/* Slide-in Drawer (60% width) */}
    <div className="fixed top-0 left-0 w-3/5 h-full bg-white z-50 shadow-lg flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="relative w-[32px] h-[32px]">
            <Image
              src="/images/logo.png"
              alt="DailyDilli Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold">DailyDilli</span>
        </div>
        <button onClick={() => setMobileNavOpen(false)} className="text-2xl font-bold">
          &times;
        </button>
      </div>

      {/* Menu Links */}
      <nav className="flex flex-col gap-4 text-base font-medium">
        <Link href="/trip-planning" onClick={() => setMobileNavOpen(false)}>Start a Trip</Link>
        <Link href="/addplace" onClick={() => setMobileNavOpen(false)}>Contribute</Link>
        <Link href="/about-us" onClick={() => setMobileNavOpen(false)}>About Us</Link>

        {!userInfo && (
          <button
            onClick={() => {
              setMobileNavOpen(false);
              openOptions();
            }}
            className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Sign in
          </button>
        )}
      </nav>
    </div>
  </>
)}


      {/* Dialogs */}
      <dialog
        ref={optionsDialog}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 border-none rounded-xl max-w-md w-[90%] shadow-xl backdrop:bg-black/40"
      >
        <SignInContent onClose={closeOptions} onEmailClick={handleEmailClick} />
      </dialog>

      <dialog
        ref={emailDialog}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 border-none rounded-xl max-w-md w-[90%] shadow-xl backdrop:bg-black/40"
      >
        <EmailLoginDialog
          onClose={closeEmail}
          onForgotClick={() => {
            closeEmail();
            openForgot();
          }}
          onJoinClick={() => {
            closeEmail();
            openJoin();
          }}
        />
      </dialog>

      <dialog
        ref={forgotDialog}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 border-none rounded-xl max-w-md w-[90%] shadow-xl backdrop:bg-black/40"
      >
        <ForgotPasswordDialog onClose={closeForgot} />
      </dialog>

      <dialog
        ref={joinDialog}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 border-none rounded-xl max-w-md w-[90%] shadow-xl backdrop:bg-black/40"
      >
        <JoinDialog
          onClose={closeJoin}
          onLoginClick={() => {
            closeJoin();
            emailDialog.current?.showModal();
          }}
        />
      </dialog>
    </>
  );
}
