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
const data = {

}

export function ModelSidebar() {
  return (
    <Sidebar>
      <SidebarHeader >
        <div className="flex items-center gap-2 md:mt-14">
          <LuBrainCircuit />
          <div className="font-semibold">Model Testing</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Playground</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton >
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
              <SidebarMenuButton >
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

