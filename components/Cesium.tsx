import React, { useRef, useEffect } from "react";
import {
  Viewer,
  createWorldTerrain,
  UrlTemplateImageryProvider,
  buildModuleUrl,
} from "cesium";

const MyCesiumViewer = () => {
  const cesiumContainer = useRef<HTMLDivElement>(null);
  let viewer: Viewer | null = null;

  useEffect(() => {
    if (cesiumContainer.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      viewer = new Viewer(cesiumContainer.current, {
        terrainProvider: createWorldTerrain(),
        imageryProvider: new UrlTemplateImageryProvider({
          url: buildModuleUrl("Assets/Textures/NaturalEarthII/{z}/{x}/{y}.jpg"),
        }),
      });
    }
    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, []);

  return <div ref={cesiumContainer} style={{ height: "500px" }} />;
};

export default MyCesiumViewer;
