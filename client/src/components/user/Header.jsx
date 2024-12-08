import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const navigation = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-yellow-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link>
              <h1 className="roboto-medium font-bold text-white text-3xl sm:text-5xl">
                Fryomi
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-4">
            <button className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-yellow-800 font-medium roboto transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Login
            </button>
            <button className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-yellow-800 font-medium roboto transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Signup
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <button className="w-full text-left rounded-md py-2 px-4 text-sm font-medium text-yellow-800 bg-white hover:bg-slate-700 hover:text-white focus:outline-none focus:bg-slate-700 focus:text-white">
              Login
            </button>
            <button className="w-full text-left rounded-md py-2 px-4 text-sm font-medium text-yellow-800 bg-white hover:bg-slate-700 hover:text-white focus:outline-none focus:bg-slate-700 focus:text-white">
              Signup
            </button>
          </div>
        </Disclosure.Panel>
      </div>
    </Disclosure>
  );
}
