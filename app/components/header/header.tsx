import { homePath } from '@/app/paths'
import { LucideHouse } from 'lucide-react'
import Link from 'next/dist/client/link'

const Header = () => {
  return (
    <div className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-10 flex items-center justify-between">              
          <Link href={homePath()} className="flex items-center justify-start gap-3 w-full px-2 buttonVariant({variant: isActive(homePath()) ? 'secondary' : 'default'})">
              <LucideHouse className="h-5 w-5 shrink-0" />
                  <span>Home</span>
             </Link>
            </div>
  )
}

export { Header }