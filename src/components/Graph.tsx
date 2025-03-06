import ForceGraph2d from "react-force-graph-2d";
import React from "react";
import { genRandomTree } from "@/datasets/random-data.js";

const sampleData = {
  nodes: [
    {
      id: "id1",
      name: "name1",
      val: 1,
    },
    {
      id: "id2",
      name: "name2",
      val: 10,
    },
    {
      id: "id3",
      name: "name3",
      val: 10,
    },
    {
      id: "id4",
      name: "name4",
      val: 10,
    },
    {
      id: "id5",
      name: "name5",
      val: 10,
    },
  ],
  links: [
    {
      source: "id1",
      target: "id2",
    },
    {
      source: "id2",
      target: "id4",
    },
    {
      source: "id5",
      target: "id1",
    },
    {
      source: "id3",
      target: "id5",
    },
    {
      source: "id5",
      target: "id1",
    },
  ],
};

export default function Graph() {
  return (
    <div>
      <ForceGraph2d
        graphData={genRandomTree()}
        // graphData={sampleData}
        backgroundColor="rgba(0,0,0,0)"
        nodeColor={(node) => (node.color = "#32cd32")}
        linkColor={(link) => (link.color = "#32cd32")}
        linkWidth={2}
      />
    </div>
  );
}
