/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

const mainMenu = [
    {
        label: 'Home',
        url: '#',
    },
    {
        label: 'About Bancassurance',
        url: '#',
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
    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className="flex-auto flex items-center">
                    <img src="/logo.png" className="max-h-14 aspect-auto" />
                </div>
                <div className="flex-shrink space-x-10">
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
            </div>
        </div>
    )
}