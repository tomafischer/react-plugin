import { NavigationMenu } from "@radix-ui/react-navigation-menu"
import {  NavigationMenuItem, NavigationMenuLink, NavigationMenuList  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { useDispatch, useSelector } from "react-redux"
import { navigate } from "@/lib/store-redux/store"

type Props = {}

export default function NavBar({ }: Props) {
  const dispatch = useDispatch();
  const handleNavClick = (route: string) => {
    dispatch(navigate(route));
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <div className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> */}
            <span className="hidden font-bold sm:inline-block">
              APC
            </span>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuLink onClick={() => handleNavClick('redux-tests')} className={navigationMenuTriggerStyle()}>
                    Redux Tests
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  )
}