'use client';

import Link from 'next/link';
import { HamburgerLogo, HomeLogo, InstagramLogo, SettingLogo } from '../Icons';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
    { label: 'Home', url: '/' },
    { label: 'Profile', url: '/profile' },
];

export default function Aside() {
    const path = usePathname();

    const [active, setActive] = useState(false);

    return (
        <div className='fixed left-0 top-0 h-screen w-fit border-r bg-white'>
            <aside className='max-width flex h-dvh flex-col items-start px-3 pb-2 pt-5'>
                <div className='relative h-24 w-full'>
                    <div className='mb-5 size-full px-3 pb-4 pt-6'>
                        <Link href='/' className='size-full'>
                            <InstagramLogo className='block' />
                        </Link>
                    </div>
                </div>

                <div className='w-full flex-grow'>
                    {links.map((link, id) => (
                        <div
                            key={id}
                            className='group rounded-lg transition-all duration-300 hover:bg-zinc-200'
                        >
                            <Link
                                className={`${path === link.url ? 'font-bold' : ''} flex items-center gap-3 text-ellipsis whitespace-nowrap break-words p-3 transition-all duration-75 group-active:scale-95 group-active:opacity-50`}
                                href={link.url}
                            >
                                <span className='inline-block'>
                                    <HomeLogo />
                                </span>
                                <span className='inline-block text-lg'>
                                    {link.label}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>

                <button
                    className='my-1 w-full rounded-lg p-3 transition-all duration-300 hover:bg-zinc-200 active:scale-95 active:opacity-50'
                    onClick={() => setActive(!active)}
                >
                    <div className='flex items-center gap-4'>
                        <HamburgerLogo
                            className='inline-block'
                            stroke={active ? 4 : 2}
                        />
                        <span
                            className={`${active ? 'font-bold' : 'font-normal'} inline-block text-lg`}
                        >
                            Settings
                        </span>
                    </div>
                </button>
            </aside>
        </div>
    );
}
