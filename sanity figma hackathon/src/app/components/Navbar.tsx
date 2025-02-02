'use client'
import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, X, Search } from 'lucide-react';
import Image from 'next/image';
import Frame from "../../../public/header/logo.png"
import Logo from "../../../public/header/nike logo.png"
import Link from 'next/link';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/all-products", label: "New & Featured" },
    { href: "/all-products", label: "Men" },
    { href: "/all-products", label: "Women" },
    { href: "/all-products", label: "Kids" },
    { href: "/all-products", label: "Sale" },
    { href: "/all-products", label: "SNKRS" }
  ];

  const topBarLinks = [
    { href: "/contact-us", label: "Find a Store" },
    { href: "/contact-us", label: "Help" },
    { href: "/join-us", label: "Join Us" },
    { href: "/signin", label: "Sign In" }
  ];

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 text-[11px] font-medium text-gray-500">
        <div className="flex items-center">
          <Link href="/"><Image src={Frame} alt={''} width={24} height={24} /> </Link>
        </div>
        <div className="hidden md:flex gap-4">
          {topBarLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gray-800"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4 relative">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Link href="/"><Image
            src={Logo}
            alt="Nike Logo"
            width={35} height={35}
          /></Link>

        </div>

        {/* Center section (Navigation Links) - Desktop */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-[16px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-black whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4">
          {/* Search Bar - Desktop */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" />
          </div>

          <div className="flex items-center gap-4">
            <a href="/cart">
              <Heart className="text-gray-700 w-[24px] h-[24px] cursor-pointer hover:text-black" />
            </a>
            <a href="/cart">
              <ShoppingBag className="text-gray-700 w-[24px] h-[24px] cursor-pointer hover:text-black" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="bg-white w-3/4 h-full absolute right-0 shadow-lg overflow-y-auto">
              <div className="p-6">
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-700 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>

                {/* Mobile Search */}
                <div className="relative mb-6 mt-12">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-500" />
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-gray-700 hover:text-black text-xl py-2 border-b"
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Mobile Top Bar Links */}
                  <div className="mt-4 space-y-3">
                    {topBarLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={toggleMenu}
                        className="block text-gray-600 hover:text-black"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}