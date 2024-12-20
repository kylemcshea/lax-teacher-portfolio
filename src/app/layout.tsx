import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from "@/app/resources";

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { Background, Flex } from "@/once-ui/components";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return {
    metadataBase: new URL(`https://${baseURL}/${locale}`),
    title: "Daniel Crotty | LaxTeacher",
    description:
      "Daniel Crotty, 3x All-American and 2021 MAC Defensive Player of the Year, offers personalized lacrosse lessons for all positions, ages, and skill levels in Charlotte, NC.",
    openGraph: {
      title: "Daniel Crotty | LaxTeacher",
      description:
        "Learn lacrosse from Daniel Crotty, a former college coach, 3x All-American, and 2021 MAC Defensive Player of the Year. Private and group lessons for all skill levels in Charlotte, NC.",
      url: `https://${baseURL}/${locale}`,
      siteName: "Daniel Crotty | LaxTeacher",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://${baseURL}/images/crotty_babson_coaching.png`,
          width: 800,
          height: 1142,
          alt: "Daniel Crotty teaching lacrosse players on the field",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Daniel Crotty | LaxTeacher",
      description:
        "Daniel Crotty, 3x All-American and 2021 MAC Defensive Player of the Year, offers personalized lacrosse lessons for all positions, ages, and skill levels in Charlotte, NC.",
      images: [`https://${baseURL}/images/college_lacrosse/babson_crotty.png`],
    },
  };
}

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable
      )}
    >
      <Flex
        style={{ minHeight: "100vh" }}
        as="body"
        fillWidth
        margin="0"
        padding="0"
        direction="column"
      >
        <Background
          mask={effects.mask as any}
          gradient={effects.gradient as any}
          dots={effects.dots as any}
          lines={effects.lines as any}
        />
        <Flex fillWidth minHeight="16"></Flex>
        <Header />
        <Flex
          zIndex={0}
          fillWidth
          paddingY="l"
          paddingX="l"
          justifyContent="center"
          flex={1}
        >
          <Flex justifyContent="center" fillWidth minHeight="0">
            <RouteGuard>{children}</RouteGuard>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}
