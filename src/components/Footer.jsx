import { GrMail } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiVisa, SiStripe, SiPaypal, SiWoo, } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-[20px] font-semibold text-white mb-4">Bookify</h2>
                    <p className="text-[16px] font-semibold mb-4">Want To Take Tour Packages?</p>
                    <Link to={'/tours'}>
                        <button
                            className="bg-green-500 hover:bg-green-600 duration-300 text-white py-[5px] px-4 rounded-lg">
                            Book a Tour
                        </button>
                    </Link>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
                    <div className="space-y-2 flex flex-col">
                        <Link to="/about" className="hover:text-white">About Us</Link>
                        <Link to="/destinations" className="hover:text-white">Destinations</Link>
                        <Link to="/tour-package" className="hover:text-white">Tour Package</Link>
                        <Link to="/articles" className="hover:text-white">Article</Link>
                        <Link to="/contact" className="hover:text-white">Contact Us</Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-[20px] font-semibold mb-4">More Inquiry</h3>
                    <p className="flex items-center mb-2"><FaPhoneAlt className="mr-2" /> +999-858 624 984</p>
                    <p className="flex items-center mb-2"><GrMail className="mr-2" /> info@example.com</p>
                    <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh</p>
                </div>

                <div>
                    <h3 className="text-[20px] font-semibold mb-4">We Are Here</h3>
                    <p className="mb-4">Quisque purus augue, facilisis andi neque idont accumsan fringilla massa. Vivamusol id nibhom condimentum.</p>
                    <h3 className="text-[20px] font-semibold mb-4">Payment Partner</h3>
                    <div className="flex space-x-4">
                        <SiVisa className="text-blue-600 text-[24px]" />
                        <SiStripe className="text-indigo-500 text-[24px]" />
                        <SiPaypal className="text-blue-400 text-[24px]" />
                        <SiWoo className="text-purple-500 text-[24px]" />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center md:flex md:items-center md:justify-between">
                <div>
                    <span className="">© Copyright 2024 BlackRise Theme | Coded By </span>
                    <Link to="/" className="text-green-500 hover:underline">@Samancikme</Link>
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
                    <Link to="#"><FaFacebook className="text-gray-300 hover:text-white" /></Link>
                    <Link to="#"><FaTwitter className="text-gray-300 hover:text-white" /></Link>
                    <Link to="#"><FaLinkedin className="text-gray-300 hover:text-white" /></Link>
                    <Link to="#"><FaInstagram className="text-gray-300 hover:text-white" /></Link>
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0 justify-center">
                    <Link to="/" className="hover:text-white">BlackRise</Link>
                    <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/terms-conditions" className="hover:text-white">Terms & Condition</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
