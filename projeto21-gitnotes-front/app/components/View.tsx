import { ReactNode } from "react"

export default function View({children}: {children: ReactNode}) {
    return (
      <div className="h-full flex justify-center items-center bg-zinc-900	">
        { children }
      </div>
    )
}
