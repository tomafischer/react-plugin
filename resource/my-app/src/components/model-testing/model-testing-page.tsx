
import { GoGear } from "react-icons/go";
import NavigationItem from "@/components/navbar/navigation-item";
import { modelRoutes, routes } from "@/models/routes";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ModelSidebar } from "@/components/model-testing/model-side-bar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store-redux/store";
import { Home } from "lucide-react";
import HomeContent from "./home-content";
import AzureConfContent from "./azure-conf-content";
import PlaygroundContent from "./playground-content";
//https://ui.shadcn.com/blocks#sidebar-07

type Props = {}
export default function ModelTestingPage({ }: Props) {
  const content_route = useSelector((state: RootState) => state.navmodel);
  return (
    <SidebarProvider>
    <div className="mt-14"/>
    <ModelSidebar />
    <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    {content_route.group}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{content_route.content}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {content_route.route ===  modelRoutes.home.route && <HomeContent />}
        {content_route.route ===  modelRoutes.playground.route && <PlaygroundContent />}
        {content_route.route ===  modelRoutes.azuresetting.route && <AzureConfContent />}

        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
  
    </SidebarProvider>
  )

}