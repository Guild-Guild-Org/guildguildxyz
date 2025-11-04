import ForceGraph2d from "react-force-graph-2d";
import React from "react";
// import { genRandomTree } from "@/datasets/random-data.js";
// import dataGuilds from "@/datasets/guilds.json";
import dataPoly from "@/datasets/poly.json";

export default function Graph() {
  return (
    <ForceGraph2d
      // graphData={genRandomTree()}
      graphData={dataPoly}
      nodeLabel="id"
      nodeAutoColorBy="group"
      backgroundColor="rgba(0,0,0,0)"
      nodeColor={(node) => {
        if (node.group === 1) {
          return "#3F3CE0";
        } else if (node.group === 2) {
          return "#32cd32";
        } else {
          return "red";
        }
      }}
      linkColor={(link) => (link.color = "#fff")}
      linkWidth={1}
      linkDirectionalParticles="value"
      linkDirectionalParticleSpeed={(d) => d.value * 0.001}
    />
  );
}
