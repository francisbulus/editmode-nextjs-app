import React from "react";
import { Editmode, Chunk } from "editmode-react";

export default function Hero() {
  return (
    <Editmode projectId="prj_TnN3cMjGrc4u">
      <div className="flex items-center">
        <Chunk identifier="cnk_cb6ab5d4a6ade8c6fb95" />
        <div className="text-xl font-bold">{name}</div>
      </div>
    </Editmode>
  );
}
