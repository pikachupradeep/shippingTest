import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RiMenu4Fill } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import Image from "next/image";



const navLinks = [
  {id:"1", name: 'Home', href: '/' },
  {id:"2", name: 'About', href: '/about' },
  {id:"3", name: 'Services', href: '/services' },
  {id:"5", name: 'Contact', href: '/contact' },
];

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
       <RiMenu4Fill className="text-yellow-500" size={20} />
      </SheetTrigger>
      <SheetContent className="bg-gray-900 text-white">
        <SheetHeader className="p-8">
          <SheetTitle>
            <Link href="/">
            <Image className='h-20 sm:h-12 md:h-14 w-auto object-cover' src="/meridian.png" alt='logo' width={800} height={800} />
            </Link>
          </SheetTitle>
          <SheetDescription>
            <span className="text-blue-400 font-blod text-[18px] sm:text-10">Meridian Freight <br/> Logistics (pvt) Ltd.</span>
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
           <ul className='flex flex-col gap-16'>
             {navLinks.map((link)=>(
            <li key={link.id}>
              <SheetTrigger asChild>
                <Link className="text-[1.3rem]" href={link.href}>{link.name}</Link>
              </SheetTrigger>
                
            </li>
             ))}
            </ul>
        </div>
        </div>
        <SheetFooter>

          <SheetClose asChild>

          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
