import "font-awesome/css/font-awesome.min.css";
import { Fragment } from "react";
import { useMap } from "react-leaflet";
import { useV2Sidebar, V2SidebarPanels } from "./sidebarV2";

function Map() {
  const map = useMap();
  const panels: V2SidebarPanels = [
    {
      id: "userInfo",
      tab: '<i style="font-size: large" class="fa fa-user"></i>',
      pane: "User Info Content",
      title: "Your Profile",
      position: "top",
    },
  ];

  useV2Sidebar(map, panels);

  return <Fragment></Fragment>;
}

export default Map;
