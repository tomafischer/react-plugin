import { routes } from "@/models/routes";
import NavigationItem from "@/components/navbar/navigation-item";
import { LuBrainCircuit } from "react-icons/lu";
import { getFullPredictUrl, ctxf_default_request } from "@/lib/model-testing/azure-function-provider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
type Props = {}

export default function ModelTestingConfigPage({ }: Props) {
  return (
    <div className="p-3">

      <div className='flex justify-between mb-2'>
        <div className="font-semibold text-xl">
          Model Testing Configuration Page
        </div>
        <NavigationItem route={routes.modeltesting}>
          <div className="flex items-center gap-2">
            <LuBrainCircuit />
            <div>  Model Testing </div>
          </div>
        </NavigationItem>

      </div>
      <div className="flex">
        <Card>
          <CardHeader>
            <CardTitle>Azure Function Url</CardTitle>
            <CardDescription>The Url for the Azure Function endpoint</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="font-medium text-sm">
              ACC url for CTXF:
            </div>
            <div className="text-xs">{getFullPredictUrl('acc', 'ctxf')}
            </div>
            <div className="text-sm font-medium mt-1">
              Request:
            </div>
            <pre className="max-h-36 overflow-y-scroll mt-1 leading-3 border"><code className="text-xs">
              {ctxf_default_request}
            </code></pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}