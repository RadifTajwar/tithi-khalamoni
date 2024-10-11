export default function footer() {
  return (

    <>
    <footer className="bg-gray-900 relative text-gray-200 ">
      <div className="container mx-auto px-6 text flex justify-center mx-auto sm:max- md:max-w- lg:max-w-6xl xl:max-w-7xl ">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                  <a href="#" className="text-[22px] focus:outline-none">
                    <h1 className='text-4xl font-bold' >Tithi</h1>
                  </a>
                  <p className="mt-6 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="inline">
                      <a
                        href="#"
                        className="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600 hover:bg-yellow-600"
                      >
                        {/* Facebook Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-gray-300" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600 hover:bg-yellow-600"
                      >
                        {/* Twitter Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-gray-300" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600 hover:bg-yellow-600"
                      >
                        {/* LinkedIn Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-gray-300" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-0 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600 hover:bg-yellow-600"
                      >
                        {/* Instagram Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-gray-300" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.208 0-4-1.791-4-4 0-2.208 1.792-4 4-4 2.209 0 4 1.792 4 4 0 2.209-1.791 4-4 4zm6.406-11.845c0 .796-.646 1.442-1.442 1.442-.797 0-1.442-.646-1.442-1.442 0-.797.646-1.442 1.442-1.442.796 0 1.442.645 1.442 1.442z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-8 md:col-span-12">
                  <div className="lg:ml-6">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                      <div className=" md:col-span-4">
                        <h4 className="font-semibold text-[18px] tracking-wide">Company</h4>
                        <ul className="list-none footer-list mt-6">
                          <li>
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> About us</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Services</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Team</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Pricing</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Project</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Careers</a>
                          </li>
                        </ul>
                      </div>
                    
                      <div className=" md:col-span-4 mt-[30px] md:mt-0">
                        <h4 className="font-semibold text-[18px] tracking-wide">Resources</h4>
                        <ul className="list-none footer-list mt-6">
                          <li>
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Contact</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> FAQ</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Blog</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Support</a>
                          </li>
                          <li className="mt-[10px]">
                            <a href="#" className="text-gray-300 hover:text-yellow-600"> Partners</a>
                          </li>
                        </ul>
                      </div>
                      <div className="lg:col-span-3 md:col-span-4 mt-[30px] md:mt-0">
                        <h4 className="font-semibold text-[18px] tracking-wide">Subscribe</h4>
                        <p className="text-gray-300 mt-6">
                          Sign up and receive the latest tips via email.
                        </p>
                        <form>
                          <div className="grid grid-cols-1 mt-6">
                            <div className="relative">
                              <input
                                type="email"
                                className="pt-[10px] pb-[10px] pl-4 text-gray-100 bg-transparent border border-gray-800 rounded-md max-w-[200px]"
                                placeholder="Your email :"
                                required
                              />
                              <button
                                type="submit"
                                className="btn bg-yellow-600 hover:bg-yellow-700 text-white rounded-md py-2 px-4 mt-3"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-12">
                <p className="text-gray-300">
                  © {new Date().getFullYear()} My Company. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>

  )
}
