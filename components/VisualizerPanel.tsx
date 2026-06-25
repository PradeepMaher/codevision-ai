"use client";

import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input / SQL query" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "Parse logic" },
    position: { x: 200, y: 100 },
  },
  {
    id: "3",
    data: { label: "Execution result" },
    position: { x: 420, y: 200 },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

export default function VisualizerPanel() {
  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/20">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Execution view</p>
          <h2 className="text-xl font-semibold text-white">AI visualizer</h2>
        </div>
      </div>
      <div className="h-[620px] rounded-3xl bg-slate-900/80 p-2">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap />
          <Controls />
          <Background gap={16} color="#334155" />
        </ReactFlow>
      </div>
    </div>
  );
}
