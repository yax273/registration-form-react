import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className='bg-gray-800 text-white'>
                <div className='max-w-7xl mx-auto px-4 py-8'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        <div>
                            <div className='flex items-center mb-4'>
                                <div className='w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-white'>
                                    F

                                </div>
                                <span className='ml-3 text-2xl font-bold'> Form Bulider</span>

                            </div>
                            <p className='text-gray-400 mb-4'>Lorem ipsum dolor sit amet.</p>
                            <div className='flex space-x-4'>
                                <a href="#" className='text-gray-400 text-white'>F8</a>
                                <a href="#" className='text-gray-400 text-white'>Tw</a>
                                <a href="#" className='text-gray-400 text-white'>IG</a>
                                <a href="#" className='text-gray-400 text-white'>IN</a>

                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg mb-4'>Quick Links</h3>
                            <ul className='space-y-2'>
                                <li><a href="#" className='text-gray-400 hover:text-white'>Home</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-white'>About</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-white'>Services</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-white'>Contect</a></li>


                            </ul>
                        </div>
                        {/* Services */}
                        <div>
                            <h3 className='font-bold text-lg mb-4'>Services</h3>
                            <ul className='space-y-2'>
                                <li><a href="#" className='text-gray-400 hover:text-white'>Form Bulding</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-white'>Validation</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-white'>Templates</a></li>
                                <li><a href="#" className='text-gray-400 hover:text-white'>Support</a></li>


                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg mb-4'>Contact Us</h3>
                            <ul className='space-y-2 text-gray-400'>
                                <li>📧contactInformbilider.com</li>
                                <li>📞+91877377787</li>
                                <li>📍123 street,city</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer;
