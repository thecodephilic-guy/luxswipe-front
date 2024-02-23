import {FaInstagram ,FaLinkedinIn,FaTwitter} from 'react-icons/fa' ;

const Footer = () => {
  const Year =new Date().getFullYear()  
  return (
        <footer className='bg-[#D64E86]'>
        <div className="bottom-0 left-0 w-full overflow-hidden text-white">
            <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="relative block fill-white"></path>
            </svg>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-20">
                
                <div className="flex flex-col gap-5">
                    <ul>
                        <li className="text-3xl list-none font-semibold py-2">Shop For</li>
                        <li className="my-4 list-none">Summers</li>
                        <li className="my-4 list-none">Winters</li>
                        <li className="my-4 list-none">Footwears</li>
                    </ul>
                </div>


                <div className="flex flex-col gap-5">
                    <ul>
                     <li className="text-3xl list-none font-semibold py-2">Help</li>
                     <li className="my-4 list-none">FAQs</li>
                     <li className="my-4 list-none">Site Demo</li>
                     <li className="my-4 list-none">How To Get Started</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <ul>
                     <li className="text-3xl list-none font-semibold py-2">About</li>
                     <li className="my-4 list-none">Our Story</li>
                     <li className="my-4 list-none">Team</li>
                     <li className="my-4 list-none">Careers</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <ul>
                     <li className="text-3xl list-none font-semibold py-2">Contact Us</li>
                     <li className="my-4 list-none">Email:hello@luxswipe.in</li>
                     <li className="my-4 list-none">Phone:+91 XXXXX-XXXXX</li>
                     <li className="my-4 list-none">Location:MJPRU Campus Pilibhit Bypass Road ,Bareilly, Uttar Pradesh-243006</li>

                    </ul>

                    <div className='flex space-x-5'>
                        <a className='hover:text-black transition-all duration-150 ease-in-out transform hover:scale-150' href="https://www.instagram.com/lux_swipe?igsh=MTh5cWpjZmVmbGcyeQ==" alt="Instagram">
                            <FaInstagram/>
                        </a>

                        <a className='hover:text-black transition-all duration-150 ease-in-out transform hover:scale-150' href="https://www.linkedin.com/company/luxswipe/" alt="LinkedIn">
                            <FaLinkedinIn/>
                        </a>

                        <a className='hover:text-black transition-all duration-150 ease-in-out transform hover:scale-150' href="" alt ="Twitter">
                            <FaTwitter/>
                        </a>
                    </div>
                         
                    <div className='mt-20'>
                        <div className='h-full flex items-center justify-center mb-5'>
                            <form className='w-96 relative' action=''>
                                <input className='w-full text-gray-700 p-4 h-10 rounded-full focus:outline-none focus:border border-pink-' type='email'/>
                                <button className='bg-pink-400 px-8 py-2 rounded-full text-white absolute top-0 right-0' type='Subscribe'>Subscribe!</button>
                            </form>
                        </div>
                    </div>

                    <h5 className='text-center'>&copy;{Year} Swipe Industries.All Rights Reserved</h5>
                </div>

            </div>
        </div>
        </footer>
  );
};

export default Footer;
