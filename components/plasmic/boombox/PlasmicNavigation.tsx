// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4a4asApkm6hESDYKtdyu2N
// Component: YifvoXt3BSlX
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

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
import Logo from "../../Logo"; // plasmic-import: vwbA6W7e_64X/component
import Button from "../../Button"; // plasmic-import: OTuzjleeHGwD/component

import { useScreenVariants as useScreenVariantsfexfuEBwKf3Q } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fexfuEBwKf3q/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_boombox.module.css"; // plasmic-import: 4a4asApkm6hESDYKtdyu2N/projectcss
import * as sty from "./PlasmicNavigation.module.css"; // plasmic-import: YifvoXt3BSlX/css

export type PlasmicNavigation__VariantMembers = {
  dark: "dark";
  centered: "centered";
  hideCta: "hideCta";
  lightBg: "lightBg";
  boomboxBg: "boomboxBg";
};

export type PlasmicNavigation__VariantsArgs = {
  dark?: SingleBooleanChoiceArg<"dark">;
  centered?: SingleBooleanChoiceArg<"centered">;
  hideCta?: SingleBooleanChoiceArg<"hideCta">;
  lightBg?: SingleBooleanChoiceArg<"lightBg">;
  boomboxBg?: SingleBooleanChoiceArg<"boomboxBg">;
};

type VariantPropType = keyof PlasmicNavigation__VariantsArgs;
export const PlasmicNavigation__VariantProps = new Array<VariantPropType>(
  "dark",
  "centered",
  "hideCta",
  "lightBg",
  "boomboxBg"
);

export type PlasmicNavigation__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNavigation__ArgsType;
export const PlasmicNavigation__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicNavigation__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultNavigationProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  dark?: SingleBooleanChoiceArg<"dark">;
  centered?: SingleBooleanChoiceArg<"centered">;
  hideCta?: SingleBooleanChoiceArg<"hideCta">;
  lightBg?: SingleBooleanChoiceArg<"lightBg">;
  boomboxBg?: SingleBooleanChoiceArg<"boomboxBg">;
  className?: string;
}

function PlasmicNavigation__RenderFunc(props: {
  variants: PlasmicNavigation__VariantsArgs;
  args: PlasmicNavigation__ArgsType;
  overrides: PlasmicNavigation__OverridesType;
  dataFetches?: PlasmicNavigation__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__boomboxBg]: hasVariant(variants, "boomboxBg", "boomboxBg"),
        [sty.root__centered]: hasVariant(variants, "centered", "centered"),
        [sty.root__dark]: hasVariant(variants, "dark", "dark"),
        [sty.root__hideCta]: hasVariant(variants, "hideCta", "hideCta"),
        [sty.root__lightBg]: hasVariant(variants, "lightBg", "lightBg")
      })}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__l3WLd, {
          [sty.freeBox__boomboxBg__l3WLda7IJ0]: hasVariant(
            variants,
            "boomboxBg",
            "boomboxBg"
          ),
          [sty.freeBox__centered__l3WLdJ5RfS]: hasVariant(
            variants,
            "centered",
            "centered"
          ),
          [sty.freeBox__dark__l3WLdh0Ybq]: hasVariant(variants, "dark", "dark")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Logo className={classNames("__wab_instance", sty.logo___7Af9I)} />
          ),

          value: args.children
        })}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pcUao, {
            [sty.freeBox__centered__pcUaoJ5RfS]: hasVariant(
              variants,
              "centered",
              "centered"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__l8SzK)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__vw54N)}
                  navLink={"navLink" as const}
                  slot={"Services"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__afQK)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__nkc6G)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__cRnwO)}
                  navLink={"navLink" as const}
                  slot={"Features"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__ywWVs)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__aVzh5)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__v8Goc)}
                  navLink={"navLink" as const}
                  slot={"Company"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__atU7K)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__bbQaD)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button___2Vzx7)}
                  navLink={"navLink" as const}
                  slot={"Contact"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__pacPo)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__i5C1W)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__egz0D)}
                  navLink={"navLink" as const}
                  slot={"Log in"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__n3EwK)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__tIoCb)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__yvAj)}
                  darkGray={"darkGray" as const}
                  slot={"Sign up"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg___1A6A1)}
                    role={"img"}
                  />
                </Button>
              </React.Fragment>
            ),
            value: args.slot
          })}
        </p.Stack>

        {(hasVariant(variants, "centered", "centered") ? true : false) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__lfHbt, {
              [sty.freeBox__centered__lfHbtJ5RfS]: hasVariant(
                variants,
                "centered",
                "centered"
              )
            })}
          >
            {(hasVariant(variants, "centered", "centered") ? false : true) ? (
              <button
                className={classNames(
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button__effm1,
                  {
                    [sty.button__centered__effm1J5RfS]: hasVariant(
                      variants,
                      "centered",
                      "centered"
                    ),
                    [sty.button__dark__effm1H0Ybq]: hasVariant(
                      variants,
                      "dark",
                      "dark"
                    )
                  }
                )}
              >
                {"Sign up"}
              </button>
            ) : null}

            <Button
              children2={
                <svg
                  className={classNames(projectcss.all, sty.svg__oo2F0)}
                  role={"img"}
                />
              }
              className={classNames("__wab_instance", sty.button__hhGhw, {
                [sty.button__dark__hhGhWh0Ybq]: hasVariant(
                  variants,
                  "dark",
                  "dark"
                )
              })}
              dark={
                hasVariant(variants, "dark", "dark")
                  ? ("dark" as const)
                  : undefined
              }
              navLink={"navLink" as const}
              slot={"Log in"}
            >
              <svg
                className={classNames(projectcss.all, sty.svg__xb0Dx)}
                role={"img"}
              />
            </Button>
          </div>
        ) : null}
      </p.Stack>
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
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavigation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavigation__VariantsArgs;
    args?: PlasmicNavigation__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavigation__Fetches;
  } & Omit<PlasmicNavigation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavigation__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavigation__ArgProps,
      internalVariantPropNames: PlasmicNavigation__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavigation__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigation";
  } else {
    func.displayName = `PlasmicNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigation = Object.assign(
  // Top-level PlasmicNavigation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNavigation
    internalVariantProps: PlasmicNavigation__VariantProps,
    internalArgProps: PlasmicNavigation__ArgProps
  }
);

export default PlasmicNavigation;
/* prettier-ignore-end */
