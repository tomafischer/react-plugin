import { Skeleton } from "./ui/skeleton"

export const SkeletonDefault = () => {
  return (<div className="flex overflow-auto w-full gap-4 flex-col">
    <Skeleton className="h-20 w-full" />
    <Skeleton className="h-20 w-full" />
    <Skeleton className="h-20 w-full" />
    <Skeleton className="h-20 w-full" />
  </div>
  )
}