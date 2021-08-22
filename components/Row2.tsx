// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicRow2, DefaultRow2Props } from "./plasmic/boombox/PlasmicRow2";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface Row2Props extends Omit<DefaultRow2Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultRow2Props altogether and have
// total control over the props for your component.
interface Row2Props extends DefaultRow2Props {}

function Row2_(props: Row2Props, ref: HTMLElementRefOf<"div">) {
  // Use PlasmicRow2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicRow2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Row2Props here, but feel free
  // to do whatever works for you.

  return <PlasmicRow2 root={{ ref }} {...props} />;
}

const Row2 = React.forwardRef(Row2_);
export default Row2;
