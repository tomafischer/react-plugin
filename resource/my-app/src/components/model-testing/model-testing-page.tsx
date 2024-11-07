
import { GoGear } from "react-icons/go";
import NavigationItem from "@/components/navbar/navigation-item";
import { routes } from "@/models/routes";

type Props = {}
export default function ModelTestingPage({ }: Props) {
  return (
    <div className="p-3">

      <div className='flex justify-between mb-3'>
        <div className="font-semibold text-xl">
          Model Testing Configuration Page
        </div>
        <NavigationItem route={routes.modeltestingconf}>
          <div className="flex items-center gap-2">
            <GoGear />
            <div> Configs </div>
          </div>
        </NavigationItem>
      </div>


    </div>

  )

}