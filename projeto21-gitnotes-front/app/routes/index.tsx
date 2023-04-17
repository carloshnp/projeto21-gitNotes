import React from "react";
import View from "~/components/View";
import { useNavigate } from "@remix-run/react";

export default function IndexRoute() {
  const navigate = useNavigate();
  return (
    <View>
      <button className="w-40 h-16 bg-slate-700" onClick={() => navigate("/designview")}>Press me to design!</button>
    </View>
  )
}