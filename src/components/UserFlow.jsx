import React, { useEffect, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function UserFlow() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const getNodeStyle = (lightBg, darkBg, borderColor) => ({
    background: isDarkMode ? darkBg : lightBg,
    border: `2px solid ${borderColor}`,
    color: isDarkMode ? "#ffffff" : "#000000",
    borderRadius: 8,
    padding: 10,
    width: 120,
    height: 60,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const initialNodes = [
    {
      id: "1",
      data: { label: "🔐 Login" },
      position: { x: 100, y: 100 },
      style: getNodeStyle("#eff6ff", "#1e3a8a", "#3b82f6"),
    },
    {
      id: "2",
      data: { label: "📊 Dashboard" },
      position: { x: 300, y: 100 },
      style: getNodeStyle("#eef2ff", "#312e81", "#6366f1"),
    },
    {
      id: "3",
      data: { label: "👥 User List" },
      position: { x: 500, y: 100 },
      style: getNodeStyle("#faf5ff", "#581c87", "#8b5cf6"),
    },
    {
      id: "4",
      data: { label: "🔍 Filter / Sort" },
      position: { x: 700, y: 100 },
      style: getNodeStyle("#f0fdf4", "#14532d", "#10b981"),
    },
  ];

  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      animated: true,
      style: { stroke: "#3b82f6", strokeWidth: 2 },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
      animated: true,
      style: { stroke: "#6366f1", strokeWidth: 2 },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      type: "smoothstep",
      animated: true,
      style: { stroke: "#10b981", strokeWidth: 2 },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
        <span>🔄</span> Dashboard Process Flow
      </h2>

      <div className="h-[250px] sm:h-[300px] md:h-[350px] bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          minZoom={0.5}
          maxZoom={2}
          defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        >
          <Background
            color={isDarkMode ? "#475569" : "#94a3b8"}
            gap={16}
            className={isDarkMode ? "opacity-20" : "opacity-100"}
          />
          <Controls
            style={{
              background: isDarkMode ? "#374151" : "#ffffff",
              border: `1px solid ${isDarkMode ? "#4b5563" : "#e5e7eb"}`,
              borderRadius: "6px",
              boxShadow: isDarkMode
                ? "0 1px 3px rgba(0, 0, 0, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
              color: isDarkMode ? "#ffffff" : "#000000",
            }}
            className={isDarkMode ? "dark-controls" : "light-controls"}
          />

          <MiniMap
            style={{
              width: window.innerWidth < 768 ? 80 : 120,
              height: window.innerWidth < 768 ? 60 : 80,
              background: isDarkMode ? "#374151" : "#ffffff",
              border: `1px solid ${isDarkMode ? "#4b5563" : "#e5e7eb"}`,
              borderRadius: "6px",
            }}
            maskColor={isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"}
            nodeColor={isDarkMode ? "#6b7280" : "#9ca3af"}
            className="hidden sm:block"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
