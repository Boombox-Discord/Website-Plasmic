// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4a4asApkm6hESDYKtdyu2N
// Component: GrIe7_lVtx
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
import sty from "./PlasmicTableCommands.module.css"; // plasmic-import: GrIe7_lVtx/css

export type PlasmicTableCommands__VariantMembers = {};

export type PlasmicTableCommands__VariantsArgs = {};
type VariantPropType = keyof PlasmicTableCommands__VariantsArgs;
export const PlasmicTableCommands__VariantProps = new Array<VariantPropType>();

export type PlasmicTableCommands__ArgsType = {};
type ArgPropType = keyof PlasmicTableCommands__ArgsType;
export const PlasmicTableCommands__ArgProps = new Array<ArgPropType>();

export type PlasmicTableCommands__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTableCommandsProps {
  className?: string;
}

function PlasmicTableCommands__RenderFunc(props: {
  variants: PlasmicTableCommands__VariantsArgs;
  args: PlasmicTableCommands__ArgsType;
  overrides: PlasmicTableCommands__OverridesType;

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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTableCommands__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTableCommands__VariantsArgs;
    args?: PlasmicTableCommands__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTableCommands__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTableCommands__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTableCommands__ArgProps,
          internalVariantPropNames: PlasmicTableCommands__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTableCommands__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTableCommands";
  } else {
    func.displayName = `PlasmicTableCommands.${nodeName}`;
  }
  return func;
}

export const PlasmicTableCommands = Object.assign(
  // Top-level PlasmicTableCommands renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTableCommands
    internalVariantProps: PlasmicTableCommands__VariantProps,
    internalArgProps: PlasmicTableCommands__ArgProps
  }
);

export default PlasmicTableCommands;
/* prettier-ignore-end */
