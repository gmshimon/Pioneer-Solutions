/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import logo from '../../assets/logo.jpg'
import './Footer.css'
import { Link } from 'react-router'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail('')
  }

  return (
    <footer className='footer-container  text-white py-12 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 footer-grid'>
        {/* Company Info */}
        <div className='footer-section space-y-4'>
          <div className='h-26'>
            <img src={logo} alt='Pioneer Logo' className='h-full' />
          </div>
          <p className='text-sm text-gray-300 mt-4'>
            A trusted partner in education consulting, helping students achieve
            their dream of studying abroad.
            <br />
            <blockquote className='relative italic text-gray-200  py-2'>
              <span className='text-3xl text-[#1E8A6E] font-serif absolute left-2 top-0 select-none opacity-60'>
                “
              </span>
              <span className='font-medium'>
                Your Pathway To Global Education.
              </span>
              <span className='text-3xl text-[#1E8A6E] font-serif absolute right-2 bottom-0 select-none opacity-60'>
                ”
              </span>
            </blockquote>
          </p>
          <div className='flex space-x-4 mt-6'>
            <a href='#' className='social-icon hover:text-[#1DA1F2]'>
              <Twitter size={20} />
            </a>
            <a target='_blank' href='https://www.facebook.com/PioneerSolutions.bd' className='social-icon hover:text-[#4267B2]'>
              <Facebook size={20} />
            </a>
            <a href='#' className='social-icon hover:text-[#E4405F]'>
              <Instagram size={20} />
            </a>
            <a href='#' className='social-icon hover:text-[#0A66C2]'>
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='footer-section'>
          <h3 className='footer-title text-lg font-semibold mb-6'>
            Quick Links
          </h3>
          <ul className='space-y-3'>
            <li>
              <Link to='/about'>
                <a href='#' className='footer-link'>
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link to='/consultation'>
                <a href='#' className='footer-link'>
                  Our Services
                </a>
              </Link>
            </li>
            <li>
              <Link to='/study/malaysia'>
                <a href='#' className='footer-link'>
                  Study Destinations
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='footer-section'>
          <h3 className='footer-title text-lg font-semibold mb-6'>
            Contact Us
          </h3>
          <ul className='space-y-4'>
            {/* <li className='flex items-center space-x-3'>
              <MapPin size={18} className='text-white' />
              <span className='text-sm'>
                123 Education Street, Academic City, 12345
              </span>
            </li> */}
            <li className='flex items-center space-x-3'>
              <Phone size={18} className='text-white' />
              <a href='tel:+1234567890' className='footer-link text-sm'>
                +8801345661988
              </a>
            </li>
            <li className='flex items-center space-x-3'>
              <Mail size={18} className='text-white' />
              <a
                href='mailto:pioneersolutions.bd@hotmail.com'
                className='footer-link text-sm'
              >
                pioneersolutions.bd@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4'>
            <p className='text-sm text-white'>
              © {new Date().getFullYear()} Pioneer Solutions. All rights
              reserved.
            </p>
            <p className='text-sm text-white'>
              Designed by{' '}
              <a href='https://www.linkedin.com/in/gm-shimon/' target='_blank'>
                <span className='text-white cursor-pointer hover:underline'>
                  GM Shimon
                </span>
              </a>
            </p>
          </div>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a className='footer-link text-sm'>Privacy Policy</a>
            <a className='footer-link text-sm'>Terms of Service</a>
            <a className='footer-link text-sm'>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
