"use client";
import Image from "next/image";
import { FaGlobeAsia } from "react-icons/fa";
import { useRef } from "react";
import SignInContent from "./SIgnInContent";
import EmailLoginDialog from "./EmailLoginDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import JoinDialog from "./JoinDialog";
import Link from "next/link";
import { useSelector } from "react-redux";
import UserDropdown from "./UserDropdown"; // adjust path if needed



export default function Navbar() {
  const userInfo = useSelector((state) => state.user.userInfo);

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
    <nav className="max-w-6xl mx-auto h-16 flex justify-between items-center px-4 sm:px-6 lg:px-12 shadow-sm">


      {/* Left - Logo with text */}
      <Link href="/" className="flex items-center gap-2 h-full">
        <div className="relative w-[40px] h-[40px]">
          <Image
            src="/images/logo.png"
            alt="DailyDilli Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xl font-extrabold text-black">DailyDilli</span>
      </Link>

      {/* Center - Links with hover underline */}
     <div className="hidden md:flex gap-6 text-sm font-semibold text-black">
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


      {/* Right - Globe + Sign in */}
      <div className="flex items-center gap-4">
        {/* <button className="flex items-center gap-1 text-sm font-semibold">
          <FaGlobeAsia size={16} />
          <span>INR</span>
        </button> */}
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
    <dialog
  ref={optionsDialog}
  /*  👇  fixed to the viewport, then 50 % / 50 % + translate  */
  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             p-0 border-none rounded-xl max-w-md w-[90%] shadow-xl
             backdrop:bg-black/40"
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
