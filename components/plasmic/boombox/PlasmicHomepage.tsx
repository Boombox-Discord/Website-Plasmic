// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4a4asApkm6hESDYKtdyu2N
// Component: dwwYm9-1Net
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
import Header from "../../Header"; // plasmic-import: WB6h5LQiaaY8/component
import Button from "../../Button"; // plasmic-import: OTuzjleeHGwD/component
import Navigation from "../../Navigation"; // plasmic-import: YifvoXt3BSlX/component
import ValuesSection3 from "../../ValuesSection3"; // plasmic-import: RA0kcS6NzhvF/component
import Valueprop from "../../Valueprop"; // plasmic-import: hJcqnmW0bQuh/component
import TableCommands from "../../TableCommands"; // plasmic-import: GrIe7_lVtx/component
import BoomboxBottomInvite from "../../BoomboxBottomInvite"; // plasmic-import: aBt1NRUsayI0/component
import Footer from "../../Footer"; // plasmic-import: qHry5XO3se/component

import { useScreenVariants as useScreenVariantsfexfuEBwKf3Q } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fexfuEBwKf3q/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_boombox.module.css"; // plasmic-import: 4a4asApkm6hESDYKtdyu2N/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: dwwYm9-1Net/css

import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: u0-NGqUIGUnB/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  navigation?: p.Flex<typeof Navigation>;
  valuesSection3?: p.Flex<typeof ValuesSection3>;
  h2?: p.Flex<"h2">;
  tableCommands?: p.Flex<typeof TableCommands>;
  boomboxBottomInvite?: p.Flex<typeof BoomboxBottomInvite>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepageProps {
  dataFetches: PlasmicHomepage__Fetches;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  dataFetches?: PlasmicHomepage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfexfuEBwKf3Q()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Boombox - Free Discord Music Bot"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"Boombox - Free Discord Music Bot"}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
            foreground={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qmWfb)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lPxLd)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mveo
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ textDecoration: "underline" }}
                      >
                        {"Boombox"}
                      </span>
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__obXrB
                    )}
                  >
                    {"A Simpler Way to Listen to Music"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__h4MyD
                    )}
                  >
                    {
                      "Boombox is the easiest way to listen to music in your Discord server.\nSimply invite it to your server and start listening!"
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__gtrar)}
                >
                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__py9Oy)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button___3VkpS)}
                    darkGray={"darkGray" as const}
                    link={"/invite" as const}
                    round={"round" as const}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__rkGd3
                        )}
                      >
                        {"Add The Bot To Your Server ->"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg___05Imd)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    bgDifference={"bgDifference" as const}
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__womkt)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__iD4Qh)}
                    darkGray={"darkGray" as const}
                    link={"#learn-more" as const}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fl2Cm
                        )}
                      >
                        {"Learn more…"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__r3DuU)}
                      role={"img"}
                    />
                  </Button>
                </p.Stack>
              </p.Stack>
            }
          >
            <Navigation
              data-plasmic-name={"navigation"}
              data-plasmic-override={overrides.navigation}
              className={classNames("__wab_instance", sty.navigation)}
              slot={
                <React.Fragment>
                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__wZKtY)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__bRE)}
                    link={"https://www.patreon.com/boomboxdev" as const}
                    navLink={"navLink" as const}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lqUf3
                        )}
                      >
                        {"Patreon"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg___4X8Ba)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__bi5F7)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__dfVV)}
                    link={"https://status.boomboxdiscord.dev/" as const}
                    navLink={"navLink" as const}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kwcpo
                        )}
                      >
                        {"Status"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__scUzc)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg___5BsU)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__dN5Vc)}
                    link={"https://discord.gg/HKnyEB9" as const}
                    navLink={"navLink" as const}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___059VL
                        )}
                      >
                        {"Support Server"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__dZype)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg___5Grd)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__qkLeh)}
                    darkGray={"darkGray" as const}
                    link={"/invite" as const}
                    slot={"Invite To Discord"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg___3PPh)}
                      role={"img"}
                    />
                  </Button>
                </React.Fragment>
              }
            >
              <img
                alt={""}
                className={classNames(projectcss.img, sty.img__yAqDz)}
                src={"/plasmic/boombox/images/boomboxPfpNewpng.png"}
              />
            </Navigation>
          </Header>

          <div
            className={classNames(projectcss.all, sty.freeBox__t72Kq)}
            id={"services" as const}
          >
            <ValuesSection3
              data-plasmic-name={"valuesSection3"}
              data-plasmic-override={overrides.valuesSection3}
              foreground={
                <React.Fragment>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__tz9K9)}
                    id={"learn-more" as const}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__o6M6M)}
                    >
                      <h2
                        data-plasmic-name={"h2"}
                        data-plasmic-override={overrides.h2}
                        className={classNames(
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2
                        )}
                      >
                        {"Boombox Discord Bot"}
                      </h2>
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pdq14
                      )}
                    >
                      {
                        "The Boombox Discord Bot is a completely free and open source Discord Bot that can play music from YouTube and Spotify."
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__c7Sdb)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__tMcJq)}
                    >
                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop___0Mu23
                        )}
                        flat={"flat" as const}
                        slot={
                          "Boombox is Open Source meaning you can help us make the bot better."
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__bjiu7
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              projectcss.all,
                              sty.svg__x0H1A
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Open Source"}
                      </Valueprop>

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__kdVu
                        )}
                        flat={"flat" as const}
                        slot={
                          "Simply invite Boombox to your server and you can immediately starting listening with your friends."
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg___7YbBo
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              projectcss.all,
                              sty.svg__fHgdt
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Easy Set Up"}
                      </Valueprop>

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__fPXmZ
                        )}
                        flat={"flat" as const}
                        slot={
                          "Boombox let's you play from Soundcloud, Vimeo, Spotify, YouTube or any MP3 link."
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__whoaH
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              projectcss.all,
                              sty.svg__liIJz
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Play from multiple sources"}
                      </Valueprop>

                      <Valueprop
                        className={classNames(
                          "__wab_instance",
                          sty.valueprop__az6Tr
                        )}
                        flat={"flat" as const}
                        slot={
                          "Boombox runs on the latest tech ensuring great uptime and no interruptions to your music."
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hkQmM
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              projectcss.all,
                              sty.svg__ozpJn
                            )}
                            role={"img"}
                          />
                        }
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ooYvO
                          )}
                        >
                          {"Super Fast"}
                        </div>
                      </Valueprop>
                    </p.Stack>
                  </p.Stack>
                </React.Fragment>
              }
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___39ReI
              )}
            >
              {"Commands"}
            </div>
          </div>

          <TableCommands
            data-plasmic-name={"tableCommands"}
            data-plasmic-override={overrides.tableCommands}
            className={classNames("__wab_instance", sty.tableCommands)}
          />

          <BoomboxBottomInvite
            data-plasmic-name={"boomboxBottomInvite"}
            data-plasmic-override={overrides.boomboxBottomInvite}
            art={
              <img
                alt={""}
                className={classNames(projectcss.img, sty.img__mVcIh)}
                src={"/plasmic/boombox/images/boomboxBottomBannersvg2.svg"}
              />
            }
            className={classNames("__wab_instance", sty.boomboxBottomInvite)}
            copy={
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__luMkU)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rQbE
                    )}
                  >
                    {"Need a second bot?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__scnVr
                    )}
                  >
                    {
                      "Become a Patron for only $3 per month and get access to a patron only Boombox, which runs on separate servers to the main bot so that it performs better. When you become a patron you will also get other cool perks."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jsnUb)}
                >
                  <Button
                    children2={
                      <svg
                        className={classNames(projectcss.all, sty.svg__negcK)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__s28Xb)}
                    darkGray={"darkGray" as const}
                    link={"https://www.patreon.com/boomboxdev" as const}
                    slot={"Become a Patron->"}
                  >
                    <svg
                      className={classNames(projectcss.all, sty.svg__sYgzE)}
                      role={"img"}
                    />
                  </Button>
                </p.Stack>
              </React.Fragment>
            }
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "navigation",
    "valuesSection3",
    "h2",
    "tableCommands",
    "boomboxBottomInvite",
    "footer"
  ],
  header: ["header", "navigation"],
  navigation: ["navigation"],
  valuesSection3: ["valuesSection3", "h2"],
  h2: ["h2"],
  tableCommands: ["tableCommands"],
  boomboxBottomInvite: ["boomboxBottomInvite"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  navigation: typeof Navigation;
  valuesSection3: typeof ValuesSection3;
  h2: "h2";
  tableCommands: typeof TableCommands;
  boomboxBottomInvite: typeof BoomboxBottomInvite;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomepage__Fetches;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    navigation: makeNodeComponent("navigation"),
    valuesSection3: makeNodeComponent("valuesSection3"),
    h2: makeNodeComponent("h2"),
    tableCommands: makeNodeComponent("tableCommands"),
    boomboxBottomInvite: makeNodeComponent("boomboxBottomInvite"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
