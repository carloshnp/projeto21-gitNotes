import { ReactNode } from "react";

export default function DesignContainer({ children }: { children: ReactNode }) {
  return <div className="w-9/12 h-3/4 bg-slate-700 rounded-lg">{children}</div>;
}
