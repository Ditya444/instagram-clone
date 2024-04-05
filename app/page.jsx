import {
    HamburgerLogo,
    HomeLogo,
    InstagramLogo,
    SettingLogo,
} from '@/components/Icons'

export default function Home() {
    return (
        <main className='min-h-screen w-full'>
            <div className='h-screen w-full flex items-center justify-center'>
                <InstagramLogo className='h-14 w-40' />
                <HomeLogo />
                <SettingLogo />
                <HamburgerLogo />
            </div>
        </main>
    )
}
