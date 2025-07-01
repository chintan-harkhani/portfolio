"use client";

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex  justify-center  items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-32 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold text-white'>Chintan <span className='text-accent'>.</span></h1>
                    </Link>
                </div>
                <nav className='flex flex-col  justify-center items-center gap-8'>
                    {
                        links.map((link, index) => {
                            const isActive = link.path === pathname;
                            return (
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={`text-xl capitalize transition-all border-b-2 ${isActive
                                            ? 'text-accent border-accent'
                                            : 'text-white border-transparent hover:text-accent'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
