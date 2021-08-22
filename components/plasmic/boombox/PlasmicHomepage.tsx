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
import HeroSection2 from "../../HeroSection2"; // plasmic-import: WB6h5LQiaaY8/component
import Button from "../../Button"; // plasmic-import: OTuzjleeHGwD/component
import Navigation from "../../Navigation"; // plasmic-import: YifvoXt3BSlX/component
import ValuesSection3 from "../../ValuesSection3"; // plasmic-import: RA0kcS6NzhvF/component
import Valueprop from "../../Valueprop"; // plasmic-import: hJcqnmW0bQuh/component
import CallToActionSection1 from "../../CallToActionSection1"; // plasmic-import: aBt1NRUsayI0/component
import Footer from "../../Footer"; // plasmic-import: qHry5XO3se/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fexfuEBwKf3q/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
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
  heroSection2?: p.Flex<typeof HeroSection2>;
  navigation?: p.Flex<typeof Navigation>;
  valuesSection3?: p.Flex<typeof ValuesSection3>;
  h2?: p.Flex<"h2">;
  callToActionSection1?: p.Flex<typeof CallToActionSection1>;
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
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <HeroSection2
            data-plasmic-name={"heroSection2"}
            data-plasmic-override={overrides.heroSection2}
            className={classNames("__wab_instance", sty.heroSection2)}
            foreground={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__qmWfb)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__lPxLd)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__mveo
                    )}
                  >
                    <span>
                      <span style={{ textDecoration: "underline" }}>
                        {"Boombox Dev"}
                      </span>
                    </span>
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__h4MyD
                    )}
                  >
                    {
                      "Hey! We are Boombox-Dev, a group of developers working on an awesome free Discord music bot.\nYou can find an invite link for the bot below as well as find out more information about it."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__gtrar)}
                >
                  <Button
                    children2={
                      <svg
                        className={classNames(defaultcss.all, sty.svg__py9Oy)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button___3VkpS)}
                    darkGray={"darkGray" as const}
                    link={
                      "https://discord.com/oauth2/authorize?client_id=678819994250772480&permissions=36785152&scope=bot%20applications.commands" as const
                    }
                    round={"round" as const}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__rkGd3
                        )}
                      >
                        {"Add The Bot To Your Server ->"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(defaultcss.all, sty.svg___05Imd)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    bgDifference={"bgDifference" as const}
                    children2={
                      <svg
                        className={classNames(defaultcss.all, sty.svg__womkt)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__iD4Qh)}
                    darkGray={"darkGray" as const}
                    link={"#learn-more" as const}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__fl2Cm
                        )}
                      >
                        {"Learn more…"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(defaultcss.all, sty.svg__r3DuU)}
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
                        className={classNames(defaultcss.all, sty.svg___2TKh)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__w6WEp)}
                    link={"#services" as const}
                    navLink={"navLink" as const}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__d427
                        )}
                      >
                        {"About Us"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(defaultcss.all, sty.svg__duukR)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(defaultcss.all, sty.svg__wZKtY)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__bRE)}
                    link={"https://www.patreon.com/boomboxdev" as const}
                    navLink={"navLink" as const}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__lqUf3
                        )}
                      >
                        {"Patreon"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(defaultcss.all, sty.svg___4X8Ba)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(defaultcss.all, sty.svg__bi5F7)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__dfVV)}
                    link={"#pricing" as const}
                    navLink={"navLink" as const}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.freeBox__kwcpo
                        )}
                      >
                        {"Status"}
                      </div>
                    }
                  >
                    <svg
                      className={classNames(defaultcss.all, sty.svg__scUzc)}
                      role={"img"}
                    />
                  </Button>

                  <Button
                    children2={
                      <svg
                        className={classNames(defaultcss.all, sty.svg___5Grd)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__qkLeh)}
                    darkGray={"darkGray" as const}
                    link={
                      "https://discord.com/oauth2/authorize?client_id=678819994250772480&permissions=36785152&scope=bot%20applications.commands" as const
                    }
                    slot={"Invite To Discord"}
                  >
                    <svg
                      className={classNames(defaultcss.all, sty.svg___3PPh)}
                      role={"img"}
                    />
                  </Button>
                </React.Fragment>
              }
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__yAqDz)}
                role={"img"}
                src={"/plasmic/boombox/images/boomboxPfpNewpng.png"}
              />
            </Navigation>
          </HeroSection2>

          <div
            className={classNames(defaultcss.all, sty.freeBox__t72Kq)}
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
                    className={classNames(defaultcss.all, sty.freeBox__tz9K9)}
                    id={"learn-more" as const}
                  >
                    <div
                      className={classNames(defaultcss.all, sty.freeBox__o6M6M)}
                    >
                      <h2
                        data-plasmic-name={"h2"}
                        data-plasmic-override={overrides.h2}
                        className={classNames(
                          defaultcss.h2,
                          defaultcss.__wab_text,
                          sty.h2
                        )}
                      >
                        {"Boombox Discord Bot"}
                      </h2>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__pdq14
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
                    className={classNames(defaultcss.all, sty.freeBox__c7Sdb)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__tMcJq)}
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
                              defaultcss.all,
                              sty.svg__bjiu7
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              defaultcss.all,
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
                              defaultcss.all,
                              sty.svg___7YbBo
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              defaultcss.all,
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
                          "Boombox lets you play from Spotify albums, songs or playlists as well as from YouTube."
                        }
                        slot2={
                          <Icon14Icon
                            className={classNames(
                              defaultcss.all,
                              sty.svg__whoaH
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              defaultcss.all,
                              sty.svg__liIJz
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Play from Spotify"}
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
                              defaultcss.all,
                              sty.svg__hkQmM
                            )}
                            role={"img"}
                          />
                        }
                        slot22={
                          <svg
                            className={classNames(
                              defaultcss.all,
                              sty.svg__ozpJn
                            )}
                            role={"img"}
                          />
                        }
                      >
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.freeBox__ooYvO
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
          </div>

          <CallToActionSection1
            data-plasmic-name={"callToActionSection1"}
            data-plasmic-override={overrides.callToActionSection1}
            art={
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__mVcIh)}
                role={"img"}
                src={"/plasmic/boombox/images/boomboxBottomBannersvg2.svg"}
              />
            }
            className={classNames("__wab_instance", sty.callToActionSection1)}
            copy={
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__luMkU)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__rQbE
                    )}
                  >
                    {"Ready To Add Boombox?"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__jsnUb)}
                >
                  <Button
                    children2={
                      <svg
                        className={classNames(defaultcss.all, sty.svg__negcK)}
                        role={"img"}
                      />
                    }
                    className={classNames("__wab_instance", sty.button__s28Xb)}
                    darkGray={"darkGray" as const}
                    slot={"Invite To Your Server Now ->"}
                  >
                    <svg
                      className={classNames(defaultcss.all, sty.svg__sYgzE)}
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
    "heroSection2",
    "navigation",
    "valuesSection3",
    "h2",
    "callToActionSection1",
    "footer"
  ],
  heroSection2: ["heroSection2", "navigation"],
  navigation: ["navigation"],
  valuesSection3: ["valuesSection3", "h2"],
  h2: ["h2"],
  callToActionSection1: ["callToActionSection1"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  heroSection2: typeof HeroSection2;
  navigation: typeof Navigation;
  valuesSection3: typeof ValuesSection3;
  h2: "h2";
  callToActionSection1: typeof CallToActionSection1;
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
    heroSection2: makeNodeComponent("heroSection2"),
    navigation: makeNodeComponent("navigation"),
    valuesSection3: makeNodeComponent("valuesSection3"),
    h2: makeNodeComponent("h2"),
    callToActionSection1: makeNodeComponent("callToActionSection1"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
