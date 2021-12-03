// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4a4asApkm6hESDYKtdyu2N
// Component: WB6h5LQiaaY8
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
import Navigation from "../../Navigation"; // plasmic-import: YifvoXt3BSlX/component
import Button from "../../Button"; // plasmic-import: OTuzjleeHGwD/component
import Divider from "../../Divider"; // plasmic-import: ggrG4g-sDOsL/component
import Textinput from "../../Textinput"; // plasmic-import: -7Lp1vdbVUgG/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fexfuEBwKf3q/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_boombox.module.css"; // plasmic-import: 4a4asApkm6hESDYKtdyu2N/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: WB6h5LQiaaY8/css

export type PlasmicHeader__VariantMembers = {};

export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>(
  "foreground",
  "children"
);

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  hero3?: p.Flex<"div">;
  img?: p.Flex<"img">;
  foreground?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  dataFetches?: PlasmicHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Navigation
              className={classNames("__wab_instance", sty.navigation___91XMe)}
              hideCta={"hideCta" as const}
              slot={
                <React.Fragment>
                  <Button
                    children2={
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__n05Wi
                        )}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__bgSp)}
                    navLink={"navLink" as const}
                    slot={"Services"}
                  >
                    <svg
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__mM3Cl
                      )}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__fYfNx
                        )}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__k2Rc)}
                    navLink={"navLink" as const}
                    slot={"Features"}
                  >
                    <svg
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__vg2D
                      )}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg___9Uad2
                        )}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__zsDbq)}
                    navLink={"navLink" as const}
                    slot={"Company"}
                  >
                    <svg
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__nppUs
                      )}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__hrJbr
                        )}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__pPTc)}
                    navLink={"navLink" as const}
                    slot={"Contact"}
                  >
                    <svg
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__gn0BF
                      )}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__hjCoB
                        )}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__vDuMt)}
                    navLink={"navLink" as const}
                    slot={"Log in"}
                  >
                    <svg
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__d4FRn
                      )}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__mSoi4
                        )}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__z60Ss)}
                    darkGray={"darkGray" as const}
                    slot={"Sign up"}
                  >
                    <svg
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.svg__lGxF
                      )}
                      role={"img"}
                    />
                  </Button>
                </React.Fragment>
              }
            >
              <img
                alt={""}
                className={classNames(
                  defaultcss.img,
                  projectcss.img,
                  sty.img__u2I2
                )}
                src={"/plasmic/boombox/images/boomboxPfpNewpng.png"}
              />
            </Navigation>
          ),

          value: args.children
        })}
      </div>

      <div
        data-plasmic-name={"hero3"}
        data-plasmic-override={overrides.hero3}
        className={classNames(defaultcss.all, projectcss.all, sty.hero3)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, projectcss.img, sty.img)}
          src={"/plasmic/boombox/images/boomboxBannersvg.svg"}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"foreground"}
          data-plasmic-override={overrides.foreground}
          hasGap={true}
          className={classNames(defaultcss.all, projectcss.all, sty.foreground)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__pa67R
                  )}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__kd1I3
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__afdnX
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__quc0T
                        )}
                      >
                        {"Updated!"}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__p5DVy
                      )}
                    >
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                      >
                        <React.Fragment>{"Designs that "}</React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ textDecoration: "underline" }}
                        >
                          {"adapt"}
                        </span>
                        <React.Fragment>{""}</React.Fragment>
                      </span>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__dFR6
                      )}
                    >
                      {
                        "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie."
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__hzqpT
                    )}
                  >
                    <Button
                      children2={
                        <svg
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__b8W3G
                          )}
                          role={"img"}
                        />
                      }
                      className={classNames(
                        "__wab_instance",
                        sty.button__x8GEy
                      )}
                      darkGray={"darkGray" as const}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__qyLhE
                          )}
                        >
                          {"Start now ->"}
                        </div>
                      }
                    >
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__jH4IK
                        )}
                        role={"img"}
                      />
                    </Button>

                    <Button
                      bgDifference={"bgDifference" as const}
                      children2={
                        <svg
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__tEuOp
                          )}
                          role={"img"}
                        />
                      }
                      className={classNames(
                        "__wab_instance",
                        sty.button__nz3Qh
                      )}
                      darkGray={"darkGray" as const}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__minCm
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      }
                    >
                      <svg
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.svg__jtKVr
                        )}
                        role={"img"}
                      />
                    </Button>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.freeBox__xmCk
                  )}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox___5JBhu
                    )}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__eEo1
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__w9VVo
                        )}
                      >
                        {"Sign up with"}
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox__wbTz
                        )}
                      >
                        <Button
                          children2={
                            <svg
                              className={classNames(
                                defaultcss.all,
                                projectcss.all,
                                sty.svg__jdJ0J
                              )}
                              role={"img"}
                            />
                          }
                          className={classNames(
                            "__wab_instance",
                            sty.button__u9CZk
                          )}
                          ouline={"ouline" as const}
                          slot={"Apple"}
                          startIcon={"startIcon" as const}
                        >
                          <svg
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__szf8P
                            )}
                            role={"img"}
                          />
                        </Button>

                        <Button
                          children2={
                            <svg
                              className={classNames(
                                defaultcss.all,
                                projectcss.all,
                                sty.svg__yqopV
                              )}
                              role={"img"}
                            />
                          }
                          className={classNames(
                            "__wab_instance",
                            sty.button__pZve
                          )}
                          ouline={"ouline" as const}
                          slot={"Google"}
                          startIcon={"startIcon" as const}
                        >
                          <svg
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__tEeqB
                            )}
                            role={"img"}
                          />
                        </Button>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox__y8YIi
                        )}
                      >
                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__lVsiH
                          )}
                        />

                        <div
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            defaultcss.__wab_text,
                            sty.text__qUrLh
                          )}
                        >
                          {"Or"}
                        </div>

                        <Divider
                          className={classNames(
                            "__wab_instance",
                            sty.divider__goK8E
                          )}
                        />
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          sty.freeBox__liZfg
                        )}
                      >
                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__tKYe
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__pyNrl
                          )}
                        />

                        <Textinput
                          className={classNames(
                            "__wab_instance",
                            sty.textinput__h7FPs
                          )}
                        />
                      </p.Stack>

                      <Button
                        children2={
                          <svg
                            className={classNames(
                              defaultcss.all,
                              projectcss.all,
                              sty.svg__zn3FV
                            )}
                            role={"img"}
                          />
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.button__vr9W
                        )}
                        colors={"indigo" as const}
                        slot={"Start your account"}
                      >
                        <svg
                          className={classNames(
                            defaultcss.all,
                            projectcss.all,
                            sty.svg__ghn0L
                          )}
                          role={"img"}
                        />
                      </Button>
                    </p.Stack>

                    <Divider
                      className={classNames(
                        "__wab_instance",
                        sty.divider__iQnhf
                      )}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__frUn
                      )}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          projectcss.all,
                          defaultcss.__wab_text,
                          sty.text__iYeVc
                        )}
                      >
                        {
                          "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
                        }
                      </div>
                    </div>
                  </div>
                </p.Stack>
              </React.Fragment>
            ),
            value: args.foreground
          })}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "hero3", "img", "foreground"],
  freeBox: ["freeBox"],
  hero3: ["hero3", "img", "foreground"],
  img: ["img"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  hero3: "div";
  img: "img";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeader__Fetches;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    hero3: makeNodeComponent("hero3"),
    img: makeNodeComponent("img"),
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */