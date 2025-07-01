import { useState, useEffect } from 'react'
import {
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  BookOpen,
  Globe,
  Plane
} from 'lucide-react'
import pioneerLogo from '../../assets/logo.jpg'
import { Link } from 'react-router'
import { RiDiscussFill } from 'react-icons/ri'
import { FaPhoneAlt } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    let lastScrollY = 0
    let ticking = false

    const handleScroll = () => {
      lastScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(lastScrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const toggleDropdown = menu =>
    setActiveDropdown(prev => (prev === menu ? null : menu))

  const NavContent = () => (
    <>
      <div className='flex justify-between items-center '>
        {/* Logo */}
        <div className='flex items-center '>
          <img
            src={pioneerLogo}
            alt='Pioneer Solutions Logo'
            className='h-22'
            style={{ width: 'auto', }} // maxWidth optional
          />
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-[#1E8A6E] focus:outline-none'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center'>
          <Link
            to='/'
            className='px-4 py-2 text-black hover:bg-[#E8F5F0] rounded-lg transition-colors duration-300'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='px-4 py-2 text-black hover:bg-[#E8F5F0] rounded-lg transition-colors duration-300'
          >
            About
          </Link>
          {/* Services Dropdown */}
          <div className='dropdown dropdown-hover'>
            <a
              href='#'
              className='px-4 py-2 text-black hover:bg-[#E8F5F0] rounded-lg transition-colors duration-300'
            >
              Services
            </a>
            <div className='dropdown-content menu p-2 shadow bg-white rounded-box w-52'>
              <Link
                to='/consultation'
                className='flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg'
              >
                <RiDiscussFill className='h-4 w-4 text-[#1E8A6E]' />{' '}
                Consultation
              </Link>
              <Link
                to='/admissions'
                className='flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg'
              >
                <BookOpen className='h-4 w-4 text-[#1E8A6E]' /> Admissions &
                Visa
              </Link>
              {/* <Link to="/visa" className="flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg">
                <Users className="h-4 w-4 text-[#1E8A6E]" /> Visa Application
              </Link> */}
              <Link
                to='/pre-departure'
                className='flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg'
              >
                <Plane className='h-4 w-4 text-[#1E8A6E]' /> Pre-Departure
                Advice
              </Link>
              {/* <Link to="/ongoing-support" className="flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg">
                <MapPin className="h-4 w-4 text-[#1E8A6E]" /> Ongoing Support
              </Link> */}
            </div>
          </div>

          {/* Study Abroad Dropdown */}
          <div className='dropdown dropdown-hover'>
            <p className='px-4 py-2 text-black hover:bg-[#E8F5F0] rounded-lg transition-colors duration-300 cursor-pointer'>
              Study Abroad
            </p>
            <div className='dropdown-content menu p-2 shadow bg-white rounded-box w-52'>
              {['Malaysia'].map(country => (
                <Link to='/study/malaysia'>
                  <a
                    key={country}
                    href='#'
                    className='flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg'
                  >
                    <Globe className='h-4 w-4 text-[#1E8A6E]' /> {country}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to='/contact'
            className='px-4 py-2 text-black hover:bg-[#E8F5F0] rounded-lg transition-colors duration-300'
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden py-4 bg-[#1E8A6E] rounded-lg mb-4 shadow-lg'>
          <div className='flex flex-col'>
            <Link
              to='/'
              className='px-4 py-2 text-black hover:bg-[#E8F5F0] rounded-lg transition-colors duration-300'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='px-4 py-3 text-white hover:bg-[#167A5C] transition-colors duration-300'
            >
              About
            </Link>
            {/* Services */}
            <div className='border-b border-[#167A5C]'>
              <button
                onClick={() => toggleDropdown('services')}
                className='w-full flex justify-between items-center px-4 py-3 text-white hover:bg-[#167A5C] transition-colors duration-300'
              >
                <span>Services</span>
                <span>{activeDropdown === 'services' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'services' && (
                <div className='bg-[#E8F5F0] px-4 py-2'>
                  <Link
                    to='/consultation'
                    className='flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg'
                  >
                    <RiDiscussFill className='h-4 w-4 text-[#1E8A6E]' />{' '}
                    Consultation
                  </Link>
                  <Link
                    to='/admissions'
                    className='flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg'
                  >
                    <BookOpen className='h-4 w-4 text-[#1E8A6E]' /> Admissions &
                    Visa
                  </Link>
                  {/* <Link to="/visa" className="flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg">
                <Users className="h-4 w-4 text-[#1E8A6E]" /> Visa Application
              </Link> */}
                  <Link
                    to='/pre-departure'
                    className='flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg'
                  >
                    <Plane className='h-4 w-4 text-[#1E8A6E]' /> Pre-Departure
                    Advice
                  </Link>
                  {/* <Link to="/ongoing-support" className="flex items-center gap-2 px-4 py-2 hover:bg-[#E8F5F0] rounded-lg">
                <MapPin className="h-4 w-4 text-[#1E8A6E]" /> Ongoing Support
              </Link> */}
                </div>
              )}
            </div>

            {/* Study Abroad */}
            <div className='border-b border-[#167A5C]'>
              <button
                onClick={() => toggleDropdown('study')}
                className='w-full flex justify-between items-center px-4 py-3 text-white hover:bg-[#167A5C] transition-colors duration-300'
              >
                <span>Study Abroad</span>
                <span>{activeDropdown === 'study' ? '−' : '+'}</span>
              </button>
              {activeDropdown === 'study' && (
                <div className='bg-[#E8F5F0] px-4 py-2'>
                  {['Malaysia'].map(country => (
                    <Link to='/study/malaysia'>
                      <a
                        key={country}
                        href='#'
                        className='block py-2 pl-8 hover:text-[#167A5C] font-medium'
                      >
                        {country}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to='/contact'
              className='px-4 py-3 text-white hover:bg-[#167A5C] transition-colors duration-300 border-b border-[#167A5C]'
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )

  return (
    <section className='font-sans'>
      {/* Top Bar */}
      <div className='bg-[#1E8A6E] w-full py-2'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center mb-2 md:mb-0'>
              <FaPhoneAlt className='h-4 w-4 text-white mr-2' />
              <span className='text-white text-sm'>+8801345661988</span>
            </div>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-[#FFD84D] transition-colors duration-300'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover{text-[#FFD84D] transition-colors duration-300'
              >
                <Instagram className='h-5 w-5' />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-[#FFD84D] transition-colors duration-300'
              >
                <Twitter className='h-5 w-5' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Static Navbar */}
      <div className='bg-white shadow-lg'>
        <div className='container mx-auto px-4'>
          <NavContent />
        </div>
      </div>

      {/* Sticky Navbar */}
      <div
        className={`bg-white fixed top-0 left-0 right-0 z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSticky ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='container mx-auto px-4'>
          <NavContent />
        </div>
      </div>
    </section>
  )
}

export default Navbar
