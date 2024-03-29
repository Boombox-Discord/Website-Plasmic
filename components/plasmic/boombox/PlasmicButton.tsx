// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4a4asApkm6hESDYKtdyu2N
// Component: OTuzjleeHGwD
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_boombox.module.css"; // plasmic-import: 4a4asApkm6hESDYKtdyu2N/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: OTuzjleeHGwD/css

export type PlasmicButton__VariantMembers = {
  startIcon: "startIcon";
  endIcon: "endIcon";
  noLabel: "noLabel";
  ouline: "ouline";
  linkLabel: "linkLabel";
  navLink: "navLink";
  darkGray: "darkGray";
  dark: "dark";
  bgDifference: "bgDifference";
  colors: "green" | "indigo" | "blue" | "red" | "white" | "oxfordBlue";
  round: "round";
  large: "large";
  flat: "flat";
  noGap: "noGap";
  extraSmallShadow: "extraSmallShadow";
};

export type PlasmicButton__VariantsArgs = {
  startIcon?: SingleBooleanChoiceArg<"startIcon">;
  endIcon?: SingleBooleanChoiceArg<"endIcon">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  ouline?: SingleBooleanChoiceArg<"ouline">;
  linkLabel?: SingleBooleanChoiceArg<"linkLabel">;
  navLink?: SingleBooleanChoiceArg<"navLink">;
  darkGray?: SingleBooleanChoiceArg<"darkGray">;
  dark?: SingleBooleanChoiceArg<"dark">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  colors?: SingleChoiceArg<
    "green" | "indigo" | "blue" | "red" | "white" | "oxfordBlue"
  >;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  noGap?: SingleBooleanChoiceArg<"noGap">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "startIcon",
  "endIcon",
  "noLabel",
  "ouline",
  "linkLabel",
  "navLink",
  "darkGray",
  "dark",
  "bgDifference",
  "colors",
  "round",
  "large",
  "flat",
  "noGap",
  "extraSmallShadow"
);

export type PlasmicButton__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  link?: string;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "children2",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultButtonProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  children2?: React.ReactNode;
  link?: string;
  startIcon?: SingleBooleanChoiceArg<"startIcon">;
  endIcon?: SingleBooleanChoiceArg<"endIcon">;
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  ouline?: SingleBooleanChoiceArg<"ouline">;
  linkLabel?: SingleBooleanChoiceArg<"linkLabel">;
  navLink?: SingleBooleanChoiceArg<"navLink">;
  darkGray?: SingleBooleanChoiceArg<"darkGray">;
  dark?: SingleBooleanChoiceArg<"dark">;
  bgDifference?: SingleBooleanChoiceArg<"bgDifference">;
  colors?: SingleChoiceArg<
    "green" | "indigo" | "blue" | "red" | "white" | "oxfordBlue"
  >;
  round?: SingleBooleanChoiceArg<"round">;
  large?: SingleBooleanChoiceArg<"large">;
  flat?: SingleBooleanChoiceArg<"flat">;
  noGap?: SingleBooleanChoiceArg<"noGap">;
  extraSmallShadow?: SingleBooleanChoiceArg<"extraSmallShadow">;
  className?: string;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbgDifference]: hasVariant(
            variants,
            "bgDifference",
            "bgDifference"
          ),
          [sty.rootcolors_blue]: hasVariant(variants, "colors", "blue"),
          [sty.rootcolors_green]: hasVariant(variants, "colors", "green"),
          [sty.rootcolors_indigo]: hasVariant(variants, "colors", "indigo"),
          [sty.rootcolors_oxfordBlue]: hasVariant(
            variants,
            "colors",
            "oxfordBlue"
          ),
          [sty.rootcolors_red]: hasVariant(variants, "colors", "red"),
          [sty.rootcolors_white]: hasVariant(variants, "colors", "white"),
          [sty.rootdarkGray]: hasVariant(variants, "darkGray", "darkGray"),
          [sty.rootendIcon]: hasVariant(variants, "endIcon", "endIcon"),
          [sty.rootextraSmallShadow]: hasVariant(
            variants,
            "extraSmallShadow",
            "extraSmallShadow"
          ),
          [sty.rootflat]: hasVariant(variants, "flat", "flat"),
          [sty.rootlarge]: hasVariant(variants, "large", "large"),
          [sty.rootlinkLabel]: hasVariant(variants, "linkLabel", "linkLabel"),
          [sty.rootnavLink]: hasVariant(variants, "navLink", "navLink"),
          [sty.rootnoGap]: hasVariant(variants, "noGap", "noGap"),
          [sty.rootnoLabel]: hasVariant(variants, "noLabel", "noLabel"),
          [sty.rootouline]: hasVariant(variants, "ouline", "ouline"),
          [sty.rootround]: hasVariant(variants, "round", "round"),
          [sty.rootstartIcon]: hasVariant(variants, "startIcon", "startIcon")
        }
      )}
      component={Link}
      href={args.link}
      platform={"nextjs"}
    >
      {(
        hasVariant(variants, "noLabel", "noLabel")
          ? true
          : hasVariant(variants, "startIcon", "startIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg___2QSwx)}
                role={"img"}
              />
            ),

            value: args.children
          })
        : null}
      {(hasVariant(variants, "noLabel", "noLabel") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.slot,
            className: classNames(sty.slotTargetSlot, {
              [sty.slotTargetSlotbgDifference]: hasVariant(
                variants,
                "bgDifference",
                "bgDifference"
              ),
              [sty.slotTargetSlotcolors_blue]: hasVariant(
                variants,
                "colors",
                "blue"
              ),
              [sty.slotTargetSlotcolors_green]: hasVariant(
                variants,
                "colors",
                "green"
              ),
              [sty.slotTargetSlotcolors_indigo]: hasVariant(
                variants,
                "colors",
                "indigo"
              ),
              [sty.slotTargetSlotcolors_oxfordBlue]: hasVariant(
                variants,
                "colors",
                "oxfordBlue"
              ),
              [sty.slotTargetSlotcolors_red]: hasVariant(
                variants,
                "colors",
                "red"
              ),
              [sty.slotTargetSlotdarkGray]: hasVariant(
                variants,
                "darkGray",
                "darkGray"
              ),
              [sty.slotTargetSlotdark]: hasVariant(variants, "dark", "dark"),
              [sty.slotTargetSlotendIcon]: hasVariant(
                variants,
                "endIcon",
                "endIcon"
              ),
              [sty.slotTargetSlotextraSmallShadow]: hasVariant(
                variants,
                "extraSmallShadow",
                "extraSmallShadow"
              ),
              [sty.slotTargetSlotlarge]: hasVariant(variants, "large", "large"),
              [sty.slotTargetSlotlinkLabel]: hasVariant(
                variants,
                "linkLabel",
                "linkLabel"
              ),
              [sty.slotTargetSlotnavLink]: hasVariant(
                variants,
                "navLink",
                "navLink"
              ),
              [sty.slotTargetSlotnoLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              ),
              [sty.slotTargetSlotstartIcon]: hasVariant(
                variants,
                "startIcon",
                "startIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "noLabel", "noLabel")
          ? false
          : hasVariant(variants, "endIcon", "endIcon")
          ? true
          : hasVariant(variants, "startIcon", "startIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__cJHqH)}
                role={"img"}
              />
            ),

            value: args.children2
          })
        : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
