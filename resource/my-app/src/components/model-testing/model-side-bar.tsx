import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LuBrainCircuit } from "react-icons/lu"
import { TbPlayBasketball } from "react-icons/tb";
import { SiAzurefunctions } from "react-icons/si";

import { useDispatch, useSelector } from "react-redux";
import { modelRoutes } from "@/models/routes";
import { AppDispatch, navigateModelContent } from "@/lib/store-redux/store";
export function ModelSidebar() {
  const dispatch: AppDispatch = useDispatch();

  const navigateModel = (route: string) => {
    //console.log("about to Navigate to: ", route);
    dispatch(navigateModelContent(route));
  }

  return (
    <Sidebar>
      <SidebarHeader onClick={()=>navigateModel(modelRoutes.home.route)} >
        <div className="flex items-center gap-2 md:mt-14">
          <LuBrainCircuit />
          <div className="font-semibold">Model Testing</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel >Playground</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={()=>navigateModel(modelRoutes.playground.route)}>
                <TbPlayBasketball /> 
                <div className="font-semibold">Playground</div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Assets</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={()=>navigateModel(modelRoutes.azuresetting.route)} >
                <SiAzurefunctions />
                <div className="font-semibold">Azure Site Settings</div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

