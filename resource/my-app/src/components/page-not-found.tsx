import { useSelector } from "react-redux"

type Props = {}

export default function PageNotFound({}: Props) {
  const currentRoute = useSelector((state: any) => state.nav);
  return (
    <div>Page not Found: {currentRoute}</div>
  )
}