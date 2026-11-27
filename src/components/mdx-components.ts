// Components usable in any project .mdx file without an import.
// To add a new figure: make it in ./figures/, then list it here.
import Fig from "./Fig.astro";
import GloveSystemDiagram from "./figures/GloveSystemDiagram.astro";
import NetworkLayers from "./figures/NetworkLayers.astro";
import GaLoop from "./figures/GaLoop.astro";
import OooTimeline from "./figures/OooTimeline.astro";
import OooPipeline from "./figures/OooPipeline.astro";
import OooDie from "./figures/OooDie.astro";

export const mdxComponents = {
  Fig,
  GloveSystemDiagram,
  NetworkLayers,
  GaLoop,
  OooTimeline,
  OooPipeline,
  OooDie,
};
