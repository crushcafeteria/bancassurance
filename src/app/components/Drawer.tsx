/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Drawer({ open, setOpen, menu }: any) {

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-[50vw] transform transition duration-300 ease-in-out data-[closed]:translate-x-full sm:duration-300"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="border-b block p-2 shadow-lg">
                                    <div className="flex">
                                        <div className="flex-auto">
                                            <img src="/logo.png" className="max-h-11 aspect-auto" />
                                        </div>
                                        <div className="flex-shrink p-2">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">

                                    {menu.map((item, idx) => (
                                        <div className={`block border-l-4 border-transparent hover:border-l-banana p-4 -mt-0.5 cursor-pointer`} key={item.label}>
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
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
