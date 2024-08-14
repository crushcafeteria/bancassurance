'use client'

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { faHamburger } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"
import Drawer from "./Drawer"

const mainMenu = [
    {
        label: 'Home',
        url: '/',
    },
    {
        label: 'About Bancassurance',
        url: '/about',
    },
    {
        label: 'Personal Solutions',
        url: '#',
    },
    {
        label: 'Corporate Solutions',
        url: '#',
    },
]

export default function Header() {

    const [openDrawer, setOpenDrawer] = useState(false)

    return (<>
        <div className="container mx-auto fixed lg:relative top-0 bg-white z-30 border-b shadow-lg">
            <div className="flex lg:px-0">
                <a href="/" className="flex-auto flex items-center lg:py-3">
                    <img src="/logo.png" className="max-h-14 aspect-auto" />
                </a>
                <div className="flex-shrink space-x-10 hidden lg:block">
                    {mainMenu.map((item, idx) => (
                        <div className={`items-center py-6 border-b-4 border-transparent inline-flex hover:border-banana`} key={item.label}>
                            <a
                                href={item.url}
                                className="text-xl"
                            >
                                {item.label}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className="flex-shrink space-x-10 block lg:hidden py-5 cursor-pointer" onClick={() => setOpenDrawer(!openDrawer)}>
                    <FontAwesomeIcon icon={faBars} className="h-10 w-10 text-earth" />
                </div>
            </div>
        </div>
        <Drawer open={openDrawer} setOpen={setOpenDrawer} menu={mainMenu} />
    </>
    )
}