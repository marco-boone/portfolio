// Components usable in any project .mdx file without an import.
// To add a new figure: make it in ./figures/, then list it here.
import Fig from "./Fig.astro";
import OooTimeline from "./figures/OooTimeline.astro";
import OooPipeline from "./figures/OooPipeline.astro";
import OooDie from "./figures/OooDie.astro";

export const mdxComponents = {
  Fig,
  OooTimeline,
  OooPipeline,
  OooDie,
};
