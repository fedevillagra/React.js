import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = ({children}) => {
    const [open, setOpen] = useState(false)


    const navigation = {
      categories: [
        { name: 'NEW'},
        { name: 'Narguiles'},
        { name: 'Kit'},
        { name: 'Tobacco'},
        { name: 'Coal'},
        { name: 'Bowls'},
      ],
    }

    return (
        <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
  

  
                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    {navigation.categories.map((category) => (
                      <div key={category.name} className="flow-root">
                        <Link to={`/category/${category.name}`} className="-m-2 block p-2 font-medium text-gray-900">
                          {category.name}
                        </Link>
                      </div>
                    ))}
                  </div>
  
                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                    <Link to={'/signin'} className="-m-2 block p-2 font-medium text-gray-900">
                        Sign in
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link to={'/registration'} className="-m-2 block p-2 font-medium text-gray-900">
                        Create account
                      </Link>
                    </div>
                  </div>
  
                  <div className="border-t border-gray-200 py-6 px-4">
                    <a href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">USD</span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
  
        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>
  
          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-20 items-center">
                <button
                  type="button"
                  className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
  
                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link to="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-20 w-auto"
                      src="https://res.cloudinary.com/df7udj4nr/image/upload/v1670818593/myIMG/LOGO2_bxtken.png"
                      alt=""
                    />

                  </Link>
                </div>
  
                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                
                  <div className="flex h-full space-x-8">
                  
                    {navigation.categories.map((category) => (
                      <div key={category.name} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">   
                      <Link to={`/category/${category.name}`}>
                          {category.name} {/*catergories*/}
                      </Link>
                      </div>
                    ))}
                  </div>
                </Popover.Group>
  
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link to={'/signin'} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link to={'/registration'} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Create account
                    </Link>
                  </div>
  
                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-sm font-medium">USD</span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>
  
                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
  
                  {/* Cart -> CartWidget.jsx */}
                  {children}
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
}

export default NavBar