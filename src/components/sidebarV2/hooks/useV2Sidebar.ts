import React from "react";
import L from "leaflet";
import "leaflet-sidebar-v2";
import "leaflet-sidebar-v2/css/leaflet-sidebar.css";
import { V2SidebarConfigs, V2SidebarPanels } from "../types";

export default function useV2Sidebar(
  map: L.Map,
  panels: V2SidebarPanels = [],
  configs: V2SidebarConfigs = {
    autopan: true,
    closeButton: true,
    container: "",
    position: "left",
  }
) {
  if (map) {
    const sidebar = L.control.sidebar(configs).addTo(map);
    panels.map((panel) => sidebar.addPanel(panel));
  }
}
