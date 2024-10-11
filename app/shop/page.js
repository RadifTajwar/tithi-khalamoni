
export default function page() {
    return (
        <>
            <div className="full_container">
                <div className="upper_text max-w-8xl flex justify-center my-8 ">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold ">
                            <span style={{ color: '#E8A811' }}>SHOP</span> NOW
                        </h1>
                        <div className="category_section large-screen">
                            <ul className="hidden lg:flex items-center justify-start gap-x-6 sm:gap-x-5 lg:gap-x-7 xl:gap-x-16 2xl:gap-x-20 py-3 sm:justify-center">

                                <li className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        WALLETS
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                    {/* 2nd level menu */}
                                    <div className="absolute flex top-full left-0 min-w-[250px] bg-white border border-slate-200 p-2  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                        <div className="items w-full">
                                            <ul className="w-full p-2">
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Bifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Long Wallet
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Trifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>

                                </li>
                                <li className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        CORPORATE
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                    {/* 2nd level menu */}
                                    <div className="absolute flex top-full left-0 min-w-[250px] bg-white border border-slate-200 p-2  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                        <div className="items w-full">
                                            <ul className="w-full p-2">
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Bifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Long Wallet
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Trifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>

                                </li>
                                <li className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        COMBO OFFER
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                    {/* 2nd level menu */}
                                    <div className="absolute flex top-full left-0 min-w-[250px] bg-white border border-slate-200 p-2  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                        <div className="items w-full">
                                            <ul className="w-full p-2">
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Bifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Long Wallet
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Trifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>

                                </li>
                                <li className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        BAGS
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                    {/* 2nd level menu */}
                                    <div className="absolute flex top-full left-0 min-w-[250px] bg-white border border-slate-200 p-2  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                        <div className="items w-full">
                                            <ul className="w-full p-2">
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Bifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Long Wallet
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Trifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>

                                </li>
                                <li className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        FASHIONS
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                    {/* 2nd level menu */}
                                    <div className="absolute flex top-full left-0 min-w-[250px] bg-white border border-slate-200 p-2  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                        <div className="items w-full">
                                            <ul className="w-full p-2">
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Bifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Long Wallet
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Trifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>

                                </li>
                                <li className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        TRAVELS
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                    {/* 2nd level menu */}
                                    <div className="absolute flex top-full left-0 min-w-[250px] bg-white border border-slate-200 p-2  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                        <div className="items w-full">
                                            <ul className="w-full p-2">
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Bifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Long Wallet
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Trifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>

                                </li>
                                <li className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        ACCESSORIES
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                    {/* 2nd level menu */}
                                    <div className="absolute flex top-full left-0 min-w-[250px] bg-white border border-slate-200 p-2  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                        <div className="items w-full">
                                            <ul className="w-full p-2">
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Bifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Long Wallet
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>
                                                <li className="group/nested relative w-full mb-4">
                                                    {/* Nested group for submenu */}
                                                    <a className="group/nested w-full" href="#" style={{ fontSize: '.9rem' }}>
                                                        <p className="text-gray-900 group-hover/nested:text-gray-600 text-start font-semibold text-md">
                                                            Trifold
                                                        </p>
                                                        <p className="text-gray-400  text-start text-sm">
                                                            8 Products
                                                        </p>
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>

                                </li>
                            </ul>

                        </div>
                        <div className="category_section small-screen">
                            <div className="lg:hidden flex items-center justify-start gap-x-6 sm:gap-x-5 lg:gap-x-7 xl:gap-x-16 2xl:gap-x-20 py-3 sm:justify-center">

                                <div className="group relative">
                                    <a href="#" title="" className="py-3 flex items-center text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-primary-500" style={{ fontSize: '.9rem' }}>
                                        CATEGORIES
                                        <svg
                                            className="ml-2 w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-primary-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </a>
                                    <span
                                        className="absolute bottom-2 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.67)' }}
                                    ></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
