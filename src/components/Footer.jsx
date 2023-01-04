import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {SlSocialPintarest} from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-300 w-full mt-24 py-4 px-2'>
      <div className='max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-6 py-2 px-2 border-b-2 border-gray-600'>
        <div>
          <h3 className="font-bold uppercase pt-2">Solutions</h3>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruise</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">Support</h3>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Tours</li>
            <li className="py-1">Refunds</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">Company</h3>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase pt-2">Legal</h3>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>The Latest deals, articles and resources sent to your inbox weekly.</p>
          <form className='flex flex-col sm:flex-row'>
            <input className='rounded-md w-full p-2 mr-4 mb-4' type="email" placeholder='Enter Email' />
            <button className='rounded-md p-2 mb-4 cursor-pointer'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col max-w-[1100px] justify-between px-2 py-4 mx-auto sm:flex-row text-center'>
        <p className='text-gray-600 py-3'>2022 Experiences,LLC. All rights reserved</p>
        <div className='flex justify-between pt-4 sm:w-[300px] text-2xl'>
          <FaFacebook />
          <FaInstagram/>
          <FaTwitter/>
          <SlSocialPintarest/>
        </div>
      </div>
      
    </div>
  )
}

export default Footer;
