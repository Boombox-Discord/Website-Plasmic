// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4a4asApkm6hESDYKtdyu2N
// Component: aBt1NRUsayI0
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
import Button from "../../Button"; // plasmic-import: OTuzjleeHGwD/component

import { useScreenVariants as useScreenVariantsfexfuEBwKf3Q } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fexfuEBwKf3q/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_boombox.module.css"; // plasmic-import: 4a4asApkm6hESDYKtdyu2N/projectcss
import sty from "./PlasmicBoomboxBottomInvite.module.css"; // plasmic-import: aBt1NRUsayI0/css

export type PlasmicBoomboxBottomInvite__VariantMembers = {};

export type PlasmicBoomboxBottomInvite__VariantsArgs = {};
type VariantPropType = keyof PlasmicBoomboxBottomInvite__VariantsArgs;
export const PlasmicBoomboxBottomInvite__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBoomboxBottomInvite__ArgsType = {
  art?: React.ReactNode;
  copy?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBoomboxBottomInvite__ArgsType;
export const PlasmicBoomboxBottomInvite__ArgProps = new Array<ArgPropType>(
  "art",
  "copy"
);

export type PlasmicBoomboxBottomInvite__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  art?: p.Flex<"div">;
  copy?: p.Flex<"div">;
};

export interface DefaultBoomboxBottomInviteProps {
  art?: React.ReactNode;
  copy?: React.ReactNode;
  className?: string;
}

function PlasmicBoomboxBottomInvite__RenderFunc(props: {
  variants: PlasmicBoomboxBottomInvite__VariantsArgs;
  args: PlasmicBoomboxBottomInvite__ArgsType;
  overrides: PlasmicBoomboxBottomInvite__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfexfuEBwKf3Q()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(projectcss.all, sty.art)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <img
                  alt={""}
                  className={classNames(
                    projectcss.all,
                    projectcss.img,
                    sty.img__fbian
                  )}
                  src={
                    "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2916&q=80" as const
                  }
                />

                <div
                  className={classNames(projectcss.all, sty.freeBox__o3Zc)}
                />
              </React.Fragment>
            ),
            value: args.art
          })}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"copy"}
          data-plasmic-override={overrides.copy}
          hasGap={true}
          className={classNames(projectcss.all, sty.copy)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___8Cij0)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2YBm9
                    )}
                  >
                    {"Welcome"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3Ydnw
                    )}
                  >
                    {"Let's get going"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0PfrI
                    )}
                  >
                    {
                      "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__fiQzT)}
                >
                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__bkDUt)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__bhUfU)}
                    colors={"blue" as const}
                    slot={"Start now ->"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__pmV5W)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    bgDifference={true}
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__fnKiN)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button___1T69H)}
                    darkGray={true}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gY6VG
                        )}
                      >
                        {"Learn more…"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__dbQVt)}
                      role={"img"}
                    />
                  </Button>
                </p.Stack>
              </React.Fragment>
            ),
            value: args.copy
          })}
        </p.Stack>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "art", "copy"],
  freeBox: ["freeBox", "art", "copy"],
  art: ["art"],
  copy: ["copy"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  art: "div";
  copy: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBoomboxBottomInvite__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBoomboxBottomInvite__VariantsArgs;
    args?: PlasmicBoomboxBottomInvite__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBoomboxBottomInvite__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBoomboxBottomInvite__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBoomboxBottomInvite__ArgProps,
          internalVariantPropNames: PlasmicBoomboxBottomInvite__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBoomboxBottomInvite__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBoomboxBottomInvite";
  } else {
    func.displayName = `PlasmicBoomboxBottomInvite.${nodeName}`;
  }
  return func;
}

export const PlasmicBoomboxBottomInvite = Object.assign(
  // Top-level PlasmicBoomboxBottomInvite renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    art: makeNodeComponent("art"),
    copy: makeNodeComponent("copy"),

    // Metadata about props expected for PlasmicBoomboxBottomInvite
    internalVariantProps: PlasmicBoomboxBottomInvite__VariantProps,
    internalArgProps: PlasmicBoomboxBottomInvite__ArgProps
  }
);

export default PlasmicBoomboxBottomInvite;
/* prettier-ignore-end */
