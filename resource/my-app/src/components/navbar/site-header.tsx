
//https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx
import MainNav from "./main-nav"
type Props = {}

export default function SiteHeader({ }: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center px-4">
        <MainNav />
      </div>
    </header>
  )
}