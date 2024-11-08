import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import NavigationItem from "./navigation-item"
import { routes } from "@/models/routes"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type Props = {}

export default function MainNav({ }: Props) {
  return (
    <div className="mr-4 hidden md:flex">
      <NavigationItem route={routes.home} className="mr-4 flex items-center space-x-2 lg:mr-6">
        <span className="hidden font-bold lg:inline-block">
          APC
        </span>
      </NavigationItem>
      {/* Actual links  */}
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <NavigationItem route={routes.home}>Home</NavigationItem>
        <NavigationItem route={routes.modeltesting}>Model Testing</NavigationItem>
        <NavigationItem route={routes.testredux}>Redux</NavigationItem>
        
        
      </nav>
    </div>
  )
}