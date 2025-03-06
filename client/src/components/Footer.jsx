import React from "react";

const Footer = () => {
    return <>

    <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/aboutus" className=" hover:underline">About</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/contactus" className="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/legal" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="/legal" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                        <a href="/legal" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 flex justify-center ">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <a href="https://flowbite.com/"> ReadAround </a>. All Rights Reserved.
            </span>
        </div>
        </div>
    </footer>
    </>
}


export default Footer;