import { ReactNode } from "react"

export default function View({children}: {children: ReactNode}) {
    return (
      <div className="h-full flex justify-center items-center bg-slate-100">
        { children }
      </div>
    )
}
