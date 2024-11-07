import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@/lib/store-redux/store";
import { cn } from '@/lib/utils';
type Props = {
  route:string,
  children: React.ReactNode,
  className?: string,
}

export default function NavigationItem({route, className, children}: Props) {
  const dispatch = useDispatch();
  const currentRoute = useSelector((state: any) => state.nav);

  const handleNavClick = () => {
   // console.log("Navigate to: ", route);
    dispatch(navigate(route));
  }
 // console.log("Current Route navitem: ", currentRoute);
  return (
    <div className={cn(
      "transition-colors hover:text-foreground/80",
      currentRoute === route ? "text-foreground" : "text-foreground/60",
      className
    )}>
    <a href='#' onClick={() => handleNavClick()}>{children}</a>
    </div>
  )
}