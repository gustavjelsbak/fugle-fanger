import React from "react";
import { createRoot } from "react-dom/client";
import BirdApp from "../app/bird-app";
import "../app/bird.css";

createRoot(document.getElementById("root")!).render(<BirdApp staticPreview assetBase="/fugle-fanger" />);
