import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError, useActionData, Form } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, lazy, Suspense, useMemo, Children, useSyncExternalStore } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "light",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: block;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_nm21j_3";
const styles$y = {
  icon: icon$2
};
const sprites = "/assets/icons-C0gRQ-Bp.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$y.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_w1gy9_3";
const styles$x = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$x.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$6 = "_loader_11zpc_3";
const text$4 = "_text_11zpc_33";
const span = "_span_11zpc_85";
const loaderSpan = "_loaderSpan_11zpc_1";
const styles$w = {
  loader: loader$6,
  text: text$4,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$w.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$w.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$w.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$6 = "_button_4jwwg_3";
const text$3 = "_text_4jwwg_263";
const loader$5 = "_loader_4jwwg_289";
const icon$1 = "_icon_4jwwg_315";
const styles$v = {
  button: button$6,
  text: text$3,
  loader: loader$5,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$v.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$v.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$v.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$v.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$v.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_u59mf_3";
const styles$u = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$u.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_81hf5_3";
const glyph = "_glyph_81hf5_17";
const value = "_value_81hf5_31";
const styles$t = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ー",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      let animation;
      const renderOutput = () => {
        const characterMap = output.current.map((item2) => {
          return `<span class="${styles$t[item2.type]}">${item2.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$t.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$t.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$t.content, ref: container2 })
    ] });
  }
);
const heading$2 = "_heading_8oupr_3";
const styles$s = {
  heading: heading$2
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$s.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_3rfjn_3";
const videoContainer = "_videoContainer_3rfjn_43";
const video$1 = "_video_3rfjn_43";
const credit = "_credit_3rfjn_155";
const details$3 = "_details_3rfjn_203";
const text$1 = "_text_3rfjn_229";
const title$7 = "_title_3rfjn_243";
const titleFlatline = "_titleFlatline_3rfjn_245";
const subheading = "_subheading_3rfjn_309";
const description$5 = "_description_3rfjn_369";
const button$5 = "_button_3rfjn_407";
const styles$r = {
  page,
  videoContainer,
  video: video$1,
  credit,
  details: details$3,
  text: text$1,
  title: title$7,
  titleFlatline,
  subheading,
  description: description$5,
  button: button$5
};
function useFormInput(initialValue = "") {
  const [value2, setValue] = useState(initialValue);
  const [error2, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error2 && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value: value2,
    error: error2,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options2 = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options2);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options2, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_1yz75_3";
const container$3 = "_container_1yz75_83";
const elementWrapper = "_elementWrapper_1yz75_97";
const placeholder = "_placeholder_1yz75_141";
const element = "_element_1yz75_97";
const button$4 = "_button_1yz75_207";
const styles$q = {
  image: image$3,
  container: container$3,
  elementWrapper,
  placeholder,
  element,
  button: button$4
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$q.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$q.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$q.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$q.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$q.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$q.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-BCo2ngDH.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$r.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$r.details, children: /* @__PURE__ */ jsxs("div", { className: styles$r.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$r.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$r.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$r.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$r.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$r.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$r.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$r.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$r.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$r.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$r.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}
const monogram = "_monogram_1jhi1_3";
const highlight = "_highlight_1jhi1_13";
const styles$p = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": true,
      className: classes(styles$p.monogram, className),
      width: "4  8",
      height: "39",
      viewBox: "0 0 28 29",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx("path", { d: "M5 20 L15 0 L25 20 L20 20 L17.5 15 L12.5 15 L10 20 Z" }) }) }),
        /* @__PURE__ */ jsx("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight2 && /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx("rect", { className: styles$p.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});
const toggle$1 = "_toggle_h91zx_3";
const inner = "_inner_h91zx_33";
const icon = "_icon_h91zx_49";
const styles$o = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$o.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$o.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$o.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$o.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_y3n84_3";
const circle = "_circle_y3n84_57";
const mask = "_mask_y3n84_107";
const path = "_path_y3n84_143";
const styles$n = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$n.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$n.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$n.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$n.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$n.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$n.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Abhimanyu Kumawat";
const role = "Senior Software";
const disciplines = [
  "Developer",
  "Architecture",
  "Designer",
  "Illustrator",
  "Tester"
];
const url$1 = "";
const twitter$1 = "@twitterHandle";
const figma = "@figmaHandle";
const github = "AbhiKumawat";
const linkedIn = "abhimanyu-kumawat-37358a155";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  twitter: twitter$1,
  figma,
  github,
  linkedIn
};
const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1"
  },
  {
    label: "About Me",
    pathname: "/#details"
  },
  {
    label: "Work Experience",
    pathname: "/articles"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks = [
  {
    label: "Twitter",
    url: `https://twitter.com/${config.twitter}`,
    icon: "twitter"
  },
  {
    label: "LinkedIn",
    url: `https://www.linkedin.com/in/${config.linkedIn}`,
    icon: "linkedIn"
  },
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  }
];
const navbar = "_navbar_1qbli_3";
const logo = "_logo_1qbli_53";
const nav = "_nav_1qbli_3";
const navList = "_navList_1qbli_101";
const navLink = "_navLink_1qbli_117";
const navIcons = "_navIcons_1qbli_203";
const navIconLink = "_navIconLink_1qbli_251";
const navIcon = "_navIcon_1qbli_203";
const mobileNav = "_mobileNav_1qbli_293";
const mobileNavLink = "_mobileNavLink_1qbli_353";
const styles$m = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/")
      return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$m.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$m.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, { highlight: true })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$m.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$m.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$m.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$m.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$m.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$m.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$m.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$m.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_brpaj_3";
const styles$l = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$l.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$2 = "_container_1g4r3_3";
const skip = "_skip_1g4r3_23";
const styles$k = {
  container: container$2,
  skip
};
const reset_module = {};
const global_module = {};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$4 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$k.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$k.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$3 = {
  "title": "Abhi's Resume",
  "abstract": "See my full resume by downloading it.",
  "date": "2024-02-01",
  "banner": "/static/modern-styling-in-react-banner.jpg",
  "featured": true
};
function _createMdxContent$3(props) {
  return jsx(Fragment$1, {});
}
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3();
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$3,
  frontmatter: frontmatter$3
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$2 = {
  "title": "Senior Software Engineer @ADP",
  "abstract": "I led the creation of API Central, driving seamless data exchange and generating $2 million in revenue. Additionally, I developed advanced microservices and REST APIs, leveraging cutting-edge technologies like AWS Lambdas, resulting in efficient system architecture and streamlined processes.",
  "location": "Roseland, NJ, USA",
  "date": "2023-09-01",
  "banner": "/static/modern-styling-in-react-banner.jpg"
};
function _createMdxContent$2(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(_components.ul, {
    children: ["\n", jsx(_components.li, {
      children: "Spearheaded the development of API central, a pivotal platform enabling clients to construct customized integrations facilitating seamless data exchange between systems, resulting in a $2 million revenue at launch."
    }), "\n", jsx(_components.li, {
      children: "Developed cutting-edge microservices and REST APIs utilizing state-of-the-art technologies including AWS Lambdas, CloudWatch, Serverless, and NodeJS."
    }), "\n", jsx(_components.li, {
      children: "Orchestrated a collaborative initiative with engineering teams to transition on-premise applications to AWS EC2, Lambda, and S3 infrastructure, yielding a 17% reduction in operating costs within the initial weeks of FY24."
    }), "\n", jsx(_components.li, {
      children: "Collaborated with cross-functional teams to deliver innovative and customer-centric products."
    }), "\n"]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2(props);
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$2,
  frontmatter: frontmatter$2
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "Software Engineer @ADP",
  "abstract": "Proficiently engineered Enterprise Applications integrating React, Node Express, and MongoDB, while also pioneering systems to transition MuleSoft flows to Lambdas via AWS Step-Functions. Leveraged Asyncio & Aiohttp for optimizing API Calls and data management, alongside enhancing deployment processes through CI/CD methodologies for streamlined integration and deployment.",
  "location": "Roseland, NJ, USA",
  "date": "2021-09-01",
  "banner": "/static/modern-styling-in-react-banner.jpg"
};
function _createMdxContent$1(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(_components.ul, {
    children: ["\n", jsx(_components.li, {
      children: "Developed Enterprise Applications of API Platforms using React, Node Express, and MongoDB."
    }), "\n", jsx(_components.li, {
      children: "Created systems facilitating AWS Step-Functions to translate old MuleSoft flows to Lambdas."
    }), "\n", jsx(_components.li, {
      children: "Leveraged Asyncio & Aiohttp for concurrent API Calls, decoding API responses, and uploading to S3 bucket."
    }), "\n", jsx(_components.li, {
      children: "Streamlined deployment processes using CI/CD practices, improving integration and deployment scripts."
    }), "\n"]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Associate Application Developer @ADP",
  "abstract": "In my role, I integrated a Microsoft Authentication Layer into an Angular application to enable Single-Sign On functionality and architected a Component Vocab Tool utilizing Angular and NodeJS. Additionally, I improved unit test coverage by 44% and collaborated with DevSecOps to migrate a security application while implementing a UX Framework for Angular applications, facilitating streamlined API specification creation.",
  "location": "Roseland, NJ, USA",
  "date": "2019-06-24",
  "banner": "/static/modern-styling-in-react-banner.jpg"
};
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(_components.ul, {
    children: ["\n", jsx(_components.li, {
      children: "Integrated Microsoft Authentication Layer in Angular app for Single-Sign On feature."
    }), "\n", jsx(_components.li, {
      children: "Architectured Component Vocab Tool for Schemas, API-components view/usage using Angular and NodeJS."
    }), "\n", jsx(_components.li, {
      children: "Worked in Jenkins Pipeline to streamline deployment process using CI/CD practices."
    }), "\n", jsx(_components.li, {
      children: "Enhanced unit test coverage of the application from 42% to 86% by fixing code smells using SonarQube."
    }), "\n", jsx(_components.li, {
      children: "Collaborated with DevSecOps to migrate a security application in Angular & generate E2E test reports using\r\nAllure plugin as part of Jenkins pipeline."
    }), "\n", jsx(_components.li, {
      children: "Implemented UX Framework for Angular app, enabling SORs to create canonical & template based API\r\nspecifications."
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
const __variableDynamicImportRuntimeHelper = (glob, path2) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path2)));
  });
};
function formatTimecode(time) {
  const hours = time / 1e3 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1e3 / 10);
  return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
function zeroPrefix(value2) {
  return value2 < 10 ? `0${value2}` : `${value2}`;
}
function readingTime(text2) {
  const wpm = 225;
  const words = text2.trim().split(/\s+/).length;
  const time = words / wpm;
  return time * 1e3 * 60;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "../articles.modern-styling-in-react.mdx": route1, "../articles.work-experience-1.mdx": route2, "../articles.work-experience-2.mdx": route3, "../articles.work-experience-3.mdx": route4 });
  const build = await Promise.resolve().then(() => serverBuild);
  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post2]) => {
      let id = file.replace("../", "routes/").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === void 0)
        throw new Error(`No route for ${id}`);
      const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.modern-styling-in-react.mdx": () => import("./articles.modern-styling-in-react-BzU8RAbL.js"), "../articles.work-experience-1.mdx": () => import("./articles.work-experience-1-BLo-SojY.js"), "../articles.work-experience-2.mdx": () => import("./articles.work-experience-2-DyluCsia.js"), "../articles.work-experience-3.mdx": () => import("./articles.work-experience-3-DjxAd9w5.js") }), `../articles.${slug}.mdx`);
      const readTime = readingTime(text2.default);
      const timecode2 = formatTimecode(readTime);
      return {
        slug,
        timecode: timecode2,
        frontmatter: post2.frontmatter
      };
    })
  );
  return sortBy(posts, (post2) => post2.frontmatter.date, "desc");
}
function sortBy(arr, key, dir = "asc") {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}
function compare(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}
const divider$2 = "_divider_uwer4_3";
const line$1 = "_line_uwer4_15";
const notch = "_notch_uwer4_59";
const styles$j = {
  divider: divider$2,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$j.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$j.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$j.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
const footer$1 = "_footer_if18v_3";
const link$1 = "_link_if18v_31";
const date$1 = "_date_if18v_39";
const styles$i = {
  footer: footer$1,
  link: link$1,
  date: date$1
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$i.footer, className), children: /* @__PURE__ */ jsx(Text, { size: "s", align: "center", children: /* @__PURE__ */ jsx("span", { className: styles$i.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }) }) });
const section$1 = "_section_1278e_3";
const styles$h = {
  section: section$1
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$h.section, className), ref, ...rest, children })
);
function formatDate(date2) {
  return new Date(date2).toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}
const articles = "_articles_11xm9_5";
const grid$1 = "_grid_11xm9_29";
const header$2 = "_header_11xm9_105";
const heading$1 = "_heading_11xm9_141";
const list$2 = "_list_11xm9_151";
const divider$1 = "_divider_11xm9_159";
const skeleton = "_skeleton_11xm9_169";
const skeletonBone = "_skeletonBone_11xm9_187";
const post$1 = "_post_11xm9_195";
const postLabel = "_postLabel_11xm9_295";
const postTag = "_postTag_11xm9_297";
const labelIn = "_labelIn_11xm9_1";
const tagIn = "_tagIn_11xm9_1";
const postLink = "_postLink_11xm9_445";
const postDate = "_postDate_11xm9_559";
const postImage = "_postImage_11xm9_579";
const postDetails = "_postDetails_11xm9_679";
const postFooter = "_postFooter_11xm9_711";
const timecode$1 = "_timecode_11xm9_739";
const barcode = "_barcode_11xm9_765";
const styles$g = {
  articles,
  grid: grid$1,
  header: header$2,
  heading: heading$1,
  list: list$2,
  divider: divider$1,
  skeleton,
  skeletonBone,
  post: post$1,
  postLabel,
  postTag,
  labelIn,
  tagIn,
  postLink,
  postDate,
  postImage,
  postDetails,
  postFooter,
  timecode: timecode$1,
  barcode
};
const resumePDF = "/assets/resume-BApeYEBv.pdf";
function ArticlesPost({ slug, frontmatter: frontmatter2, timecode: timecode2, index: index2 }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title: title2, abstract, date: date2, featured, banner: banner2, location } = frontmatter2;
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: styles$g.post,
      "data-featured": !!featured,
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: [
        featured && /* @__PURE__ */ jsx(Text, { className: styles$g.postLabel, size: "s", children: "Featured" }),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$g.postImage, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            noPauseButton: true,
            play: !reduceMotion ? hovered : void 0,
            src: banner2,
            placeholder: `${banner2.split(".")[0]}-placeholder.jpg`,
            alt: "",
            role: "presentation"
          }
        ) }),
        !featured && banner2 && /* @__PURE__ */ jsx(
          Link$1,
          {
            unstable_viewTransition: true,
            prefetch: "intent",
            to: `/articles/${slug}`,
            className: styles$g.postLink,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs("div", { className: styles$g.postDetails, children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$g.postDate, children: [
                /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
                date2
              ] }),
              /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: location }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
              /* @__PURE__ */ jsxs("div", { className: styles$g.postFooter, children: [
                featured && !!banner2 && /* @__PURE__ */ jsx("a", { href: resumePDF, download: "Resume", target: "blank", children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, as: "div", children: "Download CV" }) }),
                !featured && banner2 && /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read more about this Work Experience" })
              ] })
            ] })
          }
        ),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$g.postLink, children: /* @__PURE__ */ jsxs("div", { className: styles$g.postDetails, children: [
          /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$g.postDate, children: [
            /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
            dateTime
          ] }),
          /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
          /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: location }),
          /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
          /* @__PURE__ */ jsxs("div", { className: styles$g.postFooter, children: [
            featured && !!banner2 && /* @__PURE__ */ jsx("a", { href: resumePDF, download: "Resume", target: "blank", children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, as: "div", children: "Download CV" }) }),
            !featured && banner2 && /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "See more" })
          ] })
        ] }) }),
        featured && /* @__PURE__ */ jsx(Text, { "aria-hidden": true, className: styles$g.postTag, size: "s", children: "477" })
      ]
    }
  );
}
function SkeletonPost({ index: index2 }) {
  return /* @__PURE__ */ jsx(
    "article",
    {
      "aria-hidden": "true",
      className: classes(styles$g.post, styles$g.skeleton),
      "data-featured": "false",
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: /* @__PURE__ */ jsx("div", { className: styles$g.postLink, children: /* @__PURE__ */ jsxs("div", { className: styles$g.postDetails, children: [
        /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$g.postDate, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
          "Projects coming soon..."
        ] }),
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$g.skeletonBone,
            as: "h2",
            level: 4,
            style: { height: 24, width: "70%" }
          }
        ),
        /* @__PURE__ */ jsx(
          Text,
          {
            className: styles$g.skeletonBone,
            size: "s",
            as: "p",
            style: { height: 90, width: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: styles$g.postFooter, children: [
          /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read more" }),
          /* @__PURE__ */ jsx(Text, { className: styles$g.timecode, size: "s", children: "00/00/0000" })
        ] })
      ] }) })
    }
  );
}
function Articles$1() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /* @__PURE__ */ jsxs("header", { className: styles$g.header, children: [
    /* @__PURE__ */ jsx(Heading, { className: styles$g.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "Work Experience" }) }),
    /* @__PURE__ */ jsx(Barcode, { className: styles$g.barcode })
  ] });
  const postList = /* @__PURE__ */ jsxs("div", { className: styles$g.list, children: [
    !isSingleColumn && postsHeader,
    posts.map(({ slug, ...post2 }, index2) => /* @__PURE__ */ jsx(ArticlesPost, { slug, index: index2, ...post2 }, slug)),
    Array(2).fill().map((skeleton2, index2) => /* @__PURE__ */ jsx(SkeletonPost, { index: index2 }, index2))
  ] });
  const featuredPost = /* @__PURE__ */ jsx(ArticlesPost, { ...featured });
  return /* @__PURE__ */ jsxs("article", { className: styles$g.articles, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$g.content, children: [
      !isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$g.grid, children: [
        postList,
        featuredPost
      ] }),
      isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$g.grid, children: [
        postsHeader,
        featuredPost,
        postList
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Barcode({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      width: "153",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 153 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillOpacity: ".6",
          d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        }
      )
    }
  );
}
async function loader$3() {
  const allPosts = await getPosts();
  const featured = allPosts.filter((post2) => post2.frontmatter.featured)[0];
  const posts = allPosts.filter((post2) => (featured == null ? void 0 : featured.slug) !== post2.slug);
  return json({ posts, featured });
}
function meta$7() {
  return baseMeta({
    title: "Articles",
    description: "A collection of technical design and development articles. May contain incoherent ramblings."
  });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles$1,
  loader: loader$3,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const backgroundSprLarge = "/assets/spr-background-large-B-l_30YM.jpg";
const backgroundSprPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z";
const backgroundSpr = "/assets/spr-background-CHozzB-5.jpg";
const imageSprComponentsDarkLarge = "/assets/spr-components-dark-CCeqa6EU.png";
const imageSprComponentsDarkPlaceholder = "/assets/spr-components-dark-placeholder-CS7TACCT.png";
const imageSprComponentsDark = "/assets/spr-components-dark-CCeqa6EU.png";
const imageSprComponentsLightLarge = "/assets/spr-components-dark-CCeqa6EU.png";
const imageSprComponentsLightPlaceholder = "/assets/spr-components-light-placeholder-CszPt9Ak.png";
const imageSprComponentsLight = "/assets/spr-components-dark-CCeqa6EU.png";
const sprTextureLarge = "/assets/spr-lesson-builder-dark-D0KcyjeV.jpg";
const sprTexturePlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
const sprTexture = "/assets/spr-lesson-builder-dark-D0KcyjeV.jpg";
const imageSprLessonBuilderLightLarge = "/assets/spr-lesson-builder-dark-D0KcyjeV.jpg";
const imageSprLessonBuilderLightPlaceholder = "/assets/spr-lesson-builder-light-placeholder-Dq8oUDzc.jpg";
const imageSprLessonBuilderLight = "/assets/spr-lesson-builder-dark-D0KcyjeV.jpg";
const link = "_link_4ieiq_3";
const styles$f = {
  link
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$f.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const container$1 = "_container_1lkfa_3";
const options = "_options_1lkfa_11";
const button$3 = "_button_1lkfa_51";
const indicator = "_indicator_1lkfa_133";
const styles$e = {
  container: container$1,
  options,
  button: button$3,
  indicator
};
const SegmentedControlContext = createContext({});
const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label: label2,
  ...props
}) => {
  const id = useId();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = useRef([]);
  const [indicator2, setIndicator] = useState();
  const handleKeyDown = (event) => {
    const { length } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = useCallback((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = useCallback((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  useEffect(() => {
    var _a;
    const currentOption = (_a = optionRefs.current[currentIndex]) == null ? void 0 : _a.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption == null ? void 0 : currentOption.getBoundingClientRect();
      const left = currentOption == null ? void 0 : currentOption.offsetLeft;
      setIndicator({ width: rect == null ? void 0 : rect.width, left });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /* @__PURE__ */ jsx(
    SegmentedControlContext.Provider,
    {
      value: { optionRefs, currentIndex, onChange, registerOption, unRegisterOption },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$e.container,
          role: "radiogroup",
          tabIndex: "0",
          "aria-labelledby": labelId,
          onKeyDown: handleKeyDown,
          ...props,
          children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { as: "label", id: labelId, children: label2 }),
            /* @__PURE__ */ jsxs("div", { className: styles$e.options, children: [
              !!indicator2 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: styles$e.indicator,
                  "data-last": currentIndex === optionRefs.current.length - 1,
                  style: cssProps(indicator2)
                }
              ),
              children
            ] })
          ]
        }
      )
    }
  );
};
const SegmentedControlOption = ({ children, ...props }) => {
  const { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } = useContext(SegmentedControlContext);
  const optionRef = useRef();
  const index2 = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index2;
  useEffect(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$e.button,
      tabIndex: isSelected ? 0 : -1,
      role: "radio",
      "aria-checked": isSelected,
      onClick: () => onChange(index2),
      ref: optionRef,
      ...props,
      children
    }
  );
};
const project = "_project_1n18f_39";
const section = "_section_1n18f_57";
const sectionInner = "_sectionInner_1n18f_87";
const sectionBackground = "_sectionBackground_1n18f_177";
const backgroundImage = "_backgroundImage_1n18f_275";
const backgroundImageElement = "_backgroundImageElement_1n18f_313";
const backgroundScrim = "_backgroundScrim_1n18f_351";
const header$1 = "_header_1n18f_383";
const headerContent = "_headerContent_1n18f_423";
const details$2 = "_details_1n18f_499";
const title$6 = "_title_1n18f_523";
const projectFadeSlide = "_projectFadeSlide_1n18f_1";
const description$4 = "_description_1n18f_543";
const linkButton = "_linkButton_1n18f_563";
const meta$6 = "_meta_1n18f_583";
const metaItem = "_metaItem_1n18f_613";
const image$2 = "_image_1n18f_653";
const sectionContent = "_sectionContent_1n18f_669";
const sectionHeading = "_sectionHeading_1n18f_715";
const sectionText = "_sectionText_1n18f_723";
const textRow = "_textRow_1n18f_737";
const sectionColumns = "_sectionColumns_1n18f_849";
const styles$d = {
  project,
  section,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header: header$1,
  headerContent,
  details: details$2,
  title: title$6,
  projectFadeSlide,
  description: description$4,
  linkButton,
  meta: meta$6,
  metaItem,
  image: image$2,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$d.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$d.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$d.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$d.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$d.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$d.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$d.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$d.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$d.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$d.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$d.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$d.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$d.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$d.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$d.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx("div", { className: classes(styles$d.image, className), children: /* @__PURE__ */ jsx(Image$1, { reveal: true, alt, delay: 300, ...rest }) });
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$d.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$d.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$d.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$d.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx(
  ProjectSectionContent,
  {
    className: classes(styles$d.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);
const video = "_video_169iy_1";
const sidebarImages$1 = "_sidebarImages_169iy_25";
const sidebarImage$1 = "_sidebarImage_169iy_25";
const styles$c = {
  video,
  sidebarImages: sidebarImages$1,
  sidebarImage: sidebarImage$1
};
const Earth = lazy(() => import("./earth-BHR8Mfl2.js").then((module) => ({ default: module.Earth })));
const EarthSection = lazy(
  () => import("./earth-BHR8Mfl2.js").then((module) => ({ default: module.EarthSection }))
);
const title$5 = "Designing the future of Indian Clothing";
const description$3 = "I crafted an end-to-end system for Pahhal, integrating a Shopify backend to streamline operations and enhance customer experience, ensuring seamless management of their online platform.";
const roles$1 = [
  "Back-End Inventory Management",
  "UX and UI Design",
  "Front End Development",
  "Meta ChatBot Integration",
  "AI Image Processing with PhotoRoom"
];
const meta$5 = () => {
  return baseMeta({ title: title$5, description: description$3, prefix: "Projects" });
};
const Pahhal = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themes2 = ["dark", "light"];
  const handleThemeChange = (index2) => {
    toggleTheme(themes2[index2]);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$5,
          description: description$3,
          url: "https://www.pahhal.com/",
          roles: roles$1
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          raised: true,
          srcSet: isDark ? `${sprTexture} 1280w, ${sprTextureLarge} 2560w` : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: isDark ? sprTexturePlaceholder : imageSprLessonBuilderLightPlaceholder,
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`,
          alt: "The aero lesson builder app dragging an audio component into a screen about plant cells."
        },
        theme
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "One common problem faced by Indian clothing brands in the USA relates to a perceived imbalance between pricing and quality. While some brands offer lower-priced items, they may compromise on quality, leading to skepticism among consumers. Conversely, brands offering higher-quality products may struggle to compete with lower-priced alternatives, potentially limiting their market reach. Balancing affordability with quality remains a challenge for Indian clothing brands seeking success in the competitive US market." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: isDark ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w` : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`,
            width: 1024,
            hright: 800,
            placeholder: isDark ? imageSprComponentsDarkPlaceholder : imageSprComponentsLightPlaceholder,
            alt: `A set of ${theme} themed components for the aero design system`,
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The Shopify Design System" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Shopify can play a crucial role in addressing the pricing and quality challenges faced by Pahhal in the US market through its robust inventory management and order fulfillment features. By utilizing Shopify's platform, Pahhal can efficiently manage its inventory levels, ensuring that only high-quality products are stocked and readily available for customers. Additionally, Shopify's order management system can streamline the fulfillment process, allowing Pahhal to fulfill orders promptly and accurately, thereby enhancing customer satisfaction and trust. Moreover, Shopify's analytics tools can provide valuable insights into sales trends and customer preferences, enabling Pahhal to make informed decisions about pricing strategies and product offerings to maintain a competitive edge while delivering superior quality." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsxs(
        Earth,
        {
          className: styles$c.earth,
          hideMeshes: useMemo(
            () => ["Atmosphere", "EarthPartial", "Chunk", "EarthFull"],
            []
          ),
          position: useMemo(() => [0, 0, 0], []),
          labels: useMemo(
            () => [
              {
                position: [0.54, 0.19, 0.18],
                text: "Pacific ring of fire",
                hidden: true
              },
              {
                position: [0.47, -0.38, 0.04],
                text: "Ruapehu",
                hidden: true
              },
              {
                position: [0.22, 0.44, -0.35],
                text: "St. Helens",
                hidden: true
              },
              {
                position: [0.16, -0.06, 0.58],
                text: "Krakatoa",
                hidden: true
              },
              {
                position: [0.11, 0.2, -0.56],
                text: "Parícutin",
                hidden: true
              },
              {
                position: [0.52, 0.2, -0.23],
                text: "Kīlauea",
                hidden: true
              },
              {
                position: [-0.24, 0.75, 0.24],
                text: "Mantle",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.55, 0.24],
                text: "Outer core",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.35, 0.24],
                text: "Inner core",
                delay: 800,
                hidden: true
              }
            ],
            []
          ),
          scale: 0.6,
          children: [
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrim: true,
                animations: ["0:loop"],
                camera: [0, 0, 1.5],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Connecting people all across the globe with our modern touch" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Shopify offers Pahhal a powerful platform to create an immersive shopping experience for customers worldwide seeking modern Indian clothing. With customizable storefronts and seamless integration of diverse payment gateways, Pahhal can showcase its range of attire, including kurtas, lehengas, and shararas, in an engaging and user-friendly manner." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0, 0, 2.4],
                meshes: ["Atmosphere", "EarthFull"]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.14, -1.39, 0.94],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Customizable Storefronts" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Shopify provides Pahhal with the flexibility to design captivating storefronts that resonate with customers worldwide, showcasing their diverse range of modern Indian clothing in an appealing manner tailored to different cultural preferences and tastes." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.17, 0.69, -1.47],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "start", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Multilingual Capabilities" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "With Shopify's multilingual capabilities, Pahhal can easily translate their website content into multiple languages, breaking down language barriers and ensuring that customers from various regions can navigate the site and make purchases with ease." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.81, 0.51, 0.43],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["Atmosphere", "EarthFull"],
                labels: ["Mantle", "Outer core", "Inner core"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Global Marketing and Analytics" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Shopify equips Pahhal with powerful marketing tools and analytics capabilities to target and analyze customer behavior across the globe. Through targeted marketing campaigns and data-driven insights, Pahhal can effectively reach and engage with customers in different regions, optimizing their marketing efforts and driving sales growth." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrimReverse: true,
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["Atmosphere", "EarthFull"]
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
        /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
          "Ultimately the project was successful and was launched by CEO of Pahhal",
          " ",
          /* @__PURE__ */ jsx(Link, { href: "https://www.google.com/search?q=pahhal&sca_esv=fe09e3d337d2e27f&sxsrf=ACQVn0-H3J4OGxvEWVTh6vhsvIf7fCVmWw%3A1708382416086&source=hp&ei=0NjTZYzKAq-i5NoP-8uygA8&iflsig=ANes7DEAAAAAZdPm4DScvdTsLLp6k9LGfIUqVbVopI1-&ved=0ahUKEwiM8rG4vLiEAxUvEVkFHfulDPAQ4dUDCBc&uact=5&oq=pahhal&gs_lp=Egdnd3Mtd2l6IgZwYWhoYWwyChAjGIAEGIoFGCcyBBAjGCdIswpQ-wNY2whwAXgAkAEAmAFxoAGQBKoBAzMuM7gBA8gBAPgBAagCCsICBxAjGOoCGCfCAhcQLhiABBiKBRiRAhixAxiDARjHARjRA8ICCxAAGIAEGIoFGJECwgIOEAAYgAQYigUYsQMYgwHCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhjHARixAxjRAxiABMICERAuGIMBGMcBGLEDGNEDGIAEwgIIEC4YgAQYsQPCAg4QLhiABBixAxjHARjRA8ICDhAuGIAEGMcBGK8BGI4FwgILEC4YgAQYsQMYgwHCAg4QLhiABBixAxiDARjUAsICBRAAGIAEwgILEC4YgAQYxwEYrwHCAgcQABiABBgKwgIKEC4YChixAxiABMICEBAuGIAEGMcBGK8BGI4FGArCAhAQLhiABBgKGMcBGK8BGI4FwgIKEAAYgAQYChixA8ICEhAuGAMYChjHARivARiYBRieBcICExAuGAoYgwEYxwEYsQMY0QMYgATCAg0QABiABBgKGLEDGIMB&sclient=gws-wiz", children: "as shown in google" }),
          " ",
          "to become a next generation Indian Clothing platform."
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pahhal,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const sliceAnnotationLarge = "/assets/slice-annotation-large-BMgELH_L.png";
const sliceAnnotationPlaceholder = "/assets/slice-annotation-placeholder-CCGEuhhx.png";
const sliceAnnotation = "/assets/slice-annotation-BYMGWVwS.png";
const sliceAppLarge = "/assets/slice-app-large-CHKPTcWm.jpg";
const sliceAppPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=";
const sliceApp = "/assets/slice-app-PoRtkkeP.jpg";
const sliceBackgroundBarLarge = "/assets/slice-background-bar-large-CYHGpgXa.jpg";
const sliceBackgroundBarPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q==";
const sliceBackgroundBar = "/assets/slice-background-bar-DUyfyeHo.jpg";
const sliceBackgroundLarge = "/assets/slice-background-large-Dnpu52lB.jpg";
const sliceBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z";
const sliceBackground = "/assets/slice-background-5195om16.jpg";
const sliceIrlPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAZAC8DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwUGBAf/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAMAwEAAhADEAAAAImPTmugcIlNVBYmLYBaoxqLJulrSRXpRD1QZLJLrcbz7c2RoclzMNV9Qy6HLRlergJJ/8QAIRAAAQQCAQUBAAAAAAAAAAAAAQACAwQFERIGFCEzNBD/2gAIAQEAAT8Au3JXxb2u9c5/ErGQRzxK9juTzxCsUJIhvSrVnyu0QrJAr6UMQdKsW9sTAFXqG3KNNUvTTJIfITunmwP8BT2TIodmQALBYl8zQ5ypUYakPJWsu1hLQu8E35U97V098jVP85Vz2lVV/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAxAREjH/2gAIAQIBAT8AWpRQmI4JDfBvpKFO7oheiMJ45plmAn4M/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECEBEDEiAh/9oACAEDAQE/AGzeJWxz4RI6N5hFfCrO2YOUYj//2Q==";
const sliceIrl = "/assets/slice-irl-Bok-9coc.jpg";
const sliceSidebarAnnotationsLarge = "/assets/slice-sidebar-annotations-large-CrYJmPog.png";
const sliceSidebarAnnotationsPlaceholder = "/assets/slice-sidebar-annotations-placeholder-Bewc5d-7.png";
const sliceSidebarAnnotations = "/assets/slice-sidebar-annotations-CisIo7UR.png";
const sliceSidebarLayersLarge = "/assets/slice-sidebar-layers-large-CqnA6hBc.png";
const sliceSidebarLayersPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg==";
const sliceSidebarLayers = "/assets/slice-sidebar-layers-jDBpAmZU.png";
const sliceSlidesLarge = "/assets/slice-slides-large--yrOgN_x.jpg";
const sliceSlidesPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q==";
const sliceSlides = "/assets/slice-slides-me7j0Hig.jpg";
const columns = "_columns_1lqwj_1";
const grid = "_grid_1lqwj_9";
const gridImage = "_gridImage_1lqwj_31";
const gridBackground = "_gridBackground_1lqwj_55";
const gridForeground = "_gridForeground_1lqwj_81";
const gridText = "_gridText_1lqwj_113";
const sidebarImages = "_sidebarImages_1lqwj_137";
const sidebarImagesText = "_sidebarImagesText_1lqwj_169";
const sidebarImage = "_sidebarImage_1lqwj_137";
const styles$b = {
  columns,
  grid,
  gridImage,
  gridBackground,
  gridForeground,
  gridText,
  sidebarImages,
  sidebarImagesText,
  sidebarImage
};
const title$4 = "Biomedical image collaboration";
const description$2 = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.";
const roles = ["User Research", "UX Design", "Interface Design"];
const meta$4 = () => {
  return baseMeta({ title: title$4, description: description$2, prefix: "Projects" });
};
const Slice = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$b.slice, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: sliceBackground,
          srcSet: `${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: sliceBackgroundPlaceholder,
          opacity: 0.8
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$4,
          description: description$2,
          url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${sliceApp} 800w, ${sliceAppLarge} 1920w`,
          width: 800,
          height: 500,
          placeholder: sliceAppPlaceholder,
          alt: "The Slice web application showing a selected user annotation.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$b.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$b.imagesText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Bringing it together" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others’ annotations and make their own." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.sidebarImages, children: [
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$b.sidebarImage,
              srcSet: `${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarLayersPlaceholder,
              alt: "The layers sidebar design, now with user profiles.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          ),
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$b.sidebarImage,
              srcSet: `${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarAnnotationsPlaceholder,
              alt: "Multiple user annotations on a shared layer.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Improving the experience" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: `${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`,
            width: 800,
            height: 500,
            placeholder: sliceSlidesPlaceholder,
            alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
            sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs(ProjectSectionContent, { className: styles$b.grid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$b.gridImage, children: [
          /* @__PURE__ */ jsx("div", { className: styles$b.gridBackground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`,
              width: 440,
              height: 790,
              placeholder: sliceBackgroundBarPlaceholder,
              alt: "",
              role: "presentation",
              sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: styles$b.gridForeground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`,
              width: 440,
              height: 340,
              placeholder: sliceAnnotationPlaceholder,
              alt: "An annotation preview popover with statistics for shape perimeter and area.",
              sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.gridText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Meaningful details" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            src: sliceIrl,
            width: 940,
            height: 500,
            placeholder: sliceIrlPlaceholder,
            alt: "Students at the University of New South Wales using the new collaborative annotation features"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slice,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};
const post = "_post_opidu_39";
const header = "_header_opidu_87";
const headerText = "_headerText_opidu_109";
const date = "_date_opidu_157";
const dateText = "_dateText_opidu_181";
const titleWordWrapper = "_titleWordWrapper_opidu_235";
const titleWord = "_titleWord_opidu_235";
const postTitleWord = "_postTitleWord_opidu_1";
const banner = "_banner_opidu_275";
const bannerImage = "_bannerImage_opidu_379";
const bannerImageBlur = "_bannerImageBlur_opidu_381";
const details$1 = "_details_opidu_403";
const arrow = "_arrow_opidu_417";
const timecode = "_timecode_opidu_465";
const wrapper = "_wrapper_opidu_507";
const content$3 = "_content_opidu_531";
const styles$a = {
  post,
  header,
  headerText,
  date,
  dateText,
  titleWordWrapper,
  titleWord,
  postTitleWord,
  banner,
  bannerImage,
  bannerImageBlur,
  details: details$1,
  arrow,
  timecode,
  wrapper,
  content: content$3
};
const Post = ({ children, title: title2, date: date2, banner: banner2, timecode: timecode2 }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useParallax(4e-3, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--blurOpacity", clamp(value2, 0, 1));
  });
  const handleScrollIndicatorClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  const placeholder2 = `${banner2 == null ? void 0 : banner2.split(".")[0]}-placeholder.jpg`;
  return /* @__PURE__ */ jsxs("article", { className: styles$a.post, children: [
    /* @__PURE__ */ jsxs(Section, { children: [
      banner2 && /* @__PURE__ */ jsxs("div", { className: styles$a.banner, ref: imageRef, children: [
        /* @__PURE__ */ jsx("div", { className: styles$a.bannerImage, children: /* @__PURE__ */ jsx(Image$1, { role: "presentation", src: banner2, placeholder: placeholder2, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: styles$a.bannerImageBlur, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            role: "presentation",
            src: placeholder2,
            placeholder: placeholder2,
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$a.header, children: /* @__PURE__ */ jsxs("div", { className: styles$a.headerText, children: [
        /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$a.date, ref: nodeRef, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible }),
          /* @__PURE__ */ jsx(Text, { className: styles$a.dateText, "data-visible": visible, children: dateTime })
        ] }) }),
        /* @__PURE__ */ jsx(Heading, { level: 2, as: "h1", className: styles$a.title, "aria-label": title2, children: title2.split(" ").map((word2, index2) => /* @__PURE__ */ jsx("span", { className: styles$a.titleWordWrapper, children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: styles$a.titleWord,
            style: cssProps({ delay: numToMs(index2 * 100 + 100) }),
            children: [
              word2,
              index2 !== title2.split(" ").length - 1 ? " " : ""
            ]
          }
        ) }, `${word2}-${index2}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$a.details, children: [
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "#postContent",
              className: styles$a.arrow,
              "aria-label": "Scroll to post content",
              onClick: handleScrollIndicatorClick,
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$a.timecode, children: timecode2 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$a.wrapper, id: "postContent", tabIndex: -1, children: /* @__PURE__ */ jsx(Text, { as: "div", size: "l", className: styles$a.content, children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const code$1 = "_code_1t56o_3";
const actions = "_actions_1t56o_317";
const copyIcon = "_copyIcon_1t56o_351";
const lang = "_lang_1t56o_395";
const styles$9 = {
  code: code$1,
  actions,
  copyIcon,
  lang
};
const Code = (props) => {
  var _a;
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang2 = (_a = props.className) == null ? void 0 : _a.split("-")[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$9.code, "data-theme": theme, children: [
    !!lang2 && /* @__PURE__ */ jsx(Text, { secondary: true, size: "s", className: styles$9.lang, children: lang2 }),
    /* @__PURE__ */ jsx("pre", { ref: elementRef, ...props }),
    /* @__PURE__ */ jsx("div", { className: styles$9.actions, children: /* @__PURE__ */ jsx(Button, { iconOnly: true, onClick: handleCopy, "aria-label": "Copy", children: /* @__PURE__ */ jsxs("span", { className: styles$9.copyIcon, children: [
      /* @__PURE__ */ jsx(Transition, { in: !copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "copy", "data-visible": visible }) }),
      /* @__PURE__ */ jsx(Transition, { in: copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "check", "data-visible": visible }) })
    ] }) }) })
  ] });
};
const list$1 = "_list_eti0y_3";
const item = "_item_eti0y_29";
const styles$8 = {
  list: list$1,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$8.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$8.item, ...rest, children });
};
const heading = "_heading_1ckm2_3";
const paragraph = "_paragraph_1ckm2_27";
const list = "_list_1ckm2_27";
const image$1 = "_image_1ckm2_27";
const headingLink = "_headingLink_1ckm2_37";
const code = "_code_1ckm2_143";
const pre = "_pre_1ckm2_179";
const hr = "_hr_1ckm2_211";
const blockquote = "_blockquote_1ckm2_239";
const strong = "_strong_1ckm2_277";
const embed = "_embed_1ckm2_285";
const styles$7 = {
  heading,
  paragraph,
  list,
  image: image$1,
  headingLink,
  code,
  pre,
  hr,
  blockquote,
  strong,
  embed
};
const PostHeadingLink = ({ id }) => {
  return /* @__PURE__ */ jsx(Link$1, { className: styles$7.headingLink, to: `#${id}`, "aria-label": "Link to heading", children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) });
};
const PostH1 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$7.heading, id, level: 2, as: "h1", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH2 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$7.heading, id, level: 3, as: "h2", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH3 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$7.heading, id, level: 4, as: "h3", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH4 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$7.heading, id, level: 5, as: "h4", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /* @__PURE__ */ jsx(Text, { className: styles$7.paragraph, size: "l", as: "p", ...rest, children });
};
const PostLink = ({ ...props }) => /* @__PURE__ */ jsx(Link, { ...props });
const PostUl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$7.list, ...props });
};
const PostOl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$7.list, ordered: true, ...props });
};
const PostLi = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(ListItem, { ...props, children });
};
const PostCode = ({ children, ...rest }) => /* @__PURE__ */ jsx("code", { className: styles$7.code, ...rest, children });
const PostPre = (props) => {
  return /* @__PURE__ */ jsx("div", { className: styles$7.pre, children: /* @__PURE__ */ jsx(Code, { ...props }) });
};
const PostBlockquote = (props) => {
  return /* @__PURE__ */ jsx("blockquote", { className: styles$7.blockquote, ...props });
};
const PostHr = (props) => {
  return /* @__PURE__ */ jsx("hr", { className: styles$7.hr, ...props });
};
const PostStrong = (props) => {
  return /* @__PURE__ */ jsx("strong", { className: styles$7.strong, ...props });
};
const PostImage = ({ src, alt, width, height, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      className: styles$7.image,
      src,
      loading: "lazy",
      alt,
      width,
      height,
      ...rest
    }
  );
};
const Embed = ({ src }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$7.embed, children: /* @__PURE__ */ jsx("iframe", { src, loading: "lazy", title: "Embed" }) });
};
const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};
async function loader$2({ request }) {
  const slug = request.url.split("/").at(-1);
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.modern-styling-in-react.mdx": () => Promise.resolve().then(() => route1), "../articles.work-experience-1.mdx": () => Promise.resolve().then(() => route2), "../articles.work-experience-2.mdx": () => Promise.resolve().then(() => route3), "../articles.work-experience-3.mdx": () => Promise.resolve().then(() => route4) }), `../articles.${slug}.mdx`);
  const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.modern-styling-in-react.mdx": () => import("./articles.modern-styling-in-react-BzU8RAbL.js"), "../articles.work-experience-1.mdx": () => import("./articles.work-experience-1-BLo-SojY.js"), "../articles.work-experience-2.mdx": () => import("./articles.work-experience-2-DyluCsia.js"), "../articles.work-experience-3.mdx": () => import("./articles.work-experience-3-DjxAd9w5.js") }), `../articles.${slug}.mdx`);
  const readTime = readingTime(text2.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;
  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime)
  });
}
function meta$3({ data }) {
  const { title: title2, abstract } = data.frontmatter;
  return baseMeta({ title: title2, description: abstract, prefix: "", ogImage: data.ogImage });
}
function Articles() {
  const { frontmatter: frontmatter2, timecode: timecode2 } = useLoaderData();
  return /* @__PURE__ */ jsx(MDXProvider, { components: postMarkdown, children: /* @__PURE__ */ jsx(Post, { ...frontmatter2, timecode: timecode2, children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles,
  loader: loader$2,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const textarea = "_textarea_13d9g_3";
const styles$6 = {
  textarea
};
const TextArea = ({
  className,
  resize = "none",
  value: value2,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();
  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: classes(styles$6.textarea, className),
      ref: textareaRef,
      onChange: handleChange,
      style: cssProps({ resize }),
      rows,
      value: value2,
      ...rest
    }
  );
};
const container = "_container_17spy_3";
const content$2 = "_content_17spy_31";
const input$1 = "_input_17spy_41";
const root = "_root_17spy_1";
const underline = "_underline_17spy_109";
const label = "_label_17spy_145";
const error = "_error_17spy_189";
const errorMessage = "_errorMessage_17spy_221";
const styles$5 = {
  container,
  content: content$2,
  input: input$1,
  root,
  underline,
  label,
  error,
  errorMessage
};
const Input = ({
  id,
  label: label2,
  value: value2,
  multiline,
  className,
  style,
  error: error2,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name: name2,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$5.container, className),
      "data-error": !!error2,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$5.content, children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: styles$5.label,
              "data-focused": focused,
              "data-filled": !!value2,
              id: labelId,
              htmlFor: inputId,
              children: label2
            }
          ),
          /* @__PURE__ */ jsx(
            InputElement,
            {
              className: styles$5.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error2 ? errorId : void 0,
              onFocus: () => setFocused(true),
              onBlur: handleBlur,
              value: value2,
              onChange,
              autoComplete,
              required,
              maxLength,
              type,
              name: name2
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$5.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx(Transition, { unmount: true, in: error2, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => {
          var _a;
          return /* @__PURE__ */ jsx(
            "div",
            {
              ref: nodeRef,
              className: styles$5.error,
              "data-visible": visible,
              id: errorId,
              role: "alert",
              style: cssProps({
                height: visible ? (_a = errorRef.current) == null ? void 0 : _a.getBoundingClientRect().height : 0
              }),
              children: /* @__PURE__ */ jsxs("div", { className: styles$5.errorMessage, ref: errorRef, children: [
                /* @__PURE__ */ jsx(Icon, { icon: "error" }),
                error2
              ] })
            }
          );
        } })
      ]
    }
  );
};
const contact = "_contact_1p6je_1";
const form = "_form_1p6je_35";
const title$3 = "_title_1p6je_59";
const divider = "_divider_1p6je_119";
const input = "_input_1p6je_195";
const botkiller = "_botkiller_1p6je_279";
const button$2 = "_button_1p6je_287";
const complete = "_complete_1p6je_407";
const completeTitle = "_completeTitle_1p6je_429";
const completeText = "_completeText_1p6je_467";
const completeButton = "_completeButton_1p6je_505";
const formError = "_formError_1p6je_557";
const formErrorContent = "_formErrorContent_1p6je_581";
const formErrorMessage = "_formErrorMessage_1p6je_589";
const formErrorIcon = "_formErrorIcon_1p6je_605";
const footer = "_footer_1p6je_615";
const styles$4 = {
  contact,
  form,
  title: title$3,
  divider,
  input,
  botkiller,
  button: button$2,
  complete,
  completeTitle,
  completeText,
  completeButton,
  formError,
  formErrorContent,
  formErrorMessage,
  formErrorIcon,
  footer
};
const meta$2 = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you’re interested in discussing a project or if you just want to say hi"
  });
};
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
async function action({ context, request }) {
  const formData = await request.formData();
  const isBot = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));
  const errors = {};
  if (isBot)
    return json({ success: true });
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  await fetch("https://formspree.io/f/xyyrwqyg", {
    method: "POST",
    body: formData
  });
  return json({ success: true });
}
const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay2 = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === "submitting";
  return /* @__PURE__ */ jsxs(Section, { className: styles$4.contact, children: [
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: !(actionData == null ? void 0 : actionData.success), timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs(
      Form,
      {
        unstable_viewTransition: true,
        className: styles$4.form,
        method: "post",
        ref: nodeRef,
        children: [
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$4.title,
              "data-status": status,
              level: 3,
              as: "h1",
              style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
              children: /* @__PURE__ */ jsx(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
            }
          ),
          /* @__PURE__ */ jsx(
            Divider,
            {
              className: styles$4.divider,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: styles$4.botkiller,
              style: getDelay(tokens.base.durationS, initDelay2),
              label: "Name",
              name: "name",
              maxLength: MAX_EMAIL_LENGTH
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              className: styles$4.input,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2),
              autoComplete: "email",
              label: "Your email",
              type: "email",
              name: "email",
              maxLength: MAX_EMAIL_LENGTH,
              ...email
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              multiline: true,
              className: styles$4.input,
              "data-status": status,
              style: getDelay(tokens.base.durationS, initDelay2),
              autoComplete: "off",
              label: "Message (add your name before message)",
              name: "message",
              maxLength: MAX_MESSAGE_LENGTH,
              ...message
            }
          ),
          /* @__PURE__ */ jsx(
            Transition,
            {
              unmount: true,
              in: !sending && (actionData == null ? void 0 : actionData.errors),
              timeout: msToNum(tokens.base.durationM),
              children: ({ status: errorStatus, nodeRef: nodeRef2 }) => {
                var _a, _b, _c;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: styles$4.formError,
                    ref: nodeRef2,
                    "data-status": errorStatus,
                    style: cssProps({
                      height: errorStatus ? (_a = errorRef.current) == null ? void 0 : _a.offsetHeight : 0
                    }),
                    children: /* @__PURE__ */ jsx("div", { className: styles$4.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs("div", { className: styles$4.formErrorMessage, children: [
                      /* @__PURE__ */ jsx(Icon, { className: styles$4.formErrorIcon, icon: "error" }),
                      (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email,
                      (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.message
                    ] }) })
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: styles$4.button,
              "data-status": status,
              "data-sending": sending,
              style: getDelay(tokens.base.durationM, initDelay2),
              disabled: sending,
              loading: sending,
              loadingText: "Sending...",
              icon: "send",
              type: "submit",
              children: "Send message"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: actionData == null ? void 0 : actionData.success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$4.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h3",
          className: styles$4.completeTitle,
          "data-status": status,
          children: "Message Sent"
        }
      ),
      /* @__PURE__ */ jsx(
        Text,
        {
          size: "l",
          as: "p",
          className: styles$4.completeText,
          "data-status": status,
          style: getDelay(tokens.base.durationXS),
          children: "I’ll get back to you within a couple days, sit tight"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          secondary: true,
          iconHoverShift: true,
          className: styles$4.completeButton,
          "data-status": status,
          style: getDelay(tokens.base.durationM),
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { className: styles$4.footer })
  ] });
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Contact,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const gamestackTexture2Large = "/assets/gamestack-list-large-Ccz41ksi.jpg";
const gamestackTexture2Placeholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k=";
const gamestackTexture2 = "/assets/gamestack-list-DMNtFCGR.jpg";
const gamestackTextureLarge = "/assets/gamestack-login-large-DjWWWyLl.jpg";
const gamestackTexturePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k=";
const gamestackTexture = "/assets/gamestack-login-CW8PnQ26.jpg";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_vzhcp_1";
const text = "_text_vzhcp_17";
const name = "_name_vzhcp_71";
const title$2 = "_title_vzhcp_147";
const row = "_row_vzhcp_155";
const word = "_word_vzhcp_213";
const introTextReveal = "_introTextReveal_vzhcp_1";
const line = "_line_vzhcp_365";
const introLine = "_introLine_vzhcp_1";
const scrollIndicator = "_scrollIndicator_vzhcp_463";
const introScrollIndicator = "_introScrollIndicator_vzhcp_1";
const mobileScrollIndicator = "_mobileScrollIndicator_vzhcp_597";
const introMobileScrollIndicator = "_introMobileScrollIndicator_vzhcp_1";
const styles$3 = {
  intro,
  text,
  name,
  title: title$2,
  row,
  word,
  introTextReveal,
  line,
  introLine,
  scrollIndicator,
  introScrollIndicator,
  mobileScrollIndicator,
  introMobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-CV2cwSsF.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$3.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$3.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$3.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$3.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$3.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$3.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$3.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$3.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$3.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$3.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$3.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$3.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const profileImgLarge = "/assets/profile-large-XUDzLKOI.jpg";
const profileImgPlaceholder = "/assets/profile-placeholder-DOgU6wR2.jpg";
const profileImg = "/assets/profile-D9Iv9uEg.jpg";
const katakana = "/assets/katakana-CPFTGsJ1.svg";
const profile = "_profile_1pmvm_1";
const content$1 = "_content_1pmvm_73";
const column = "_column_1pmvm_99";
const title$1 = "_title_1pmvm_117";
const description$1 = "_description_1pmvm_139";
const tag = "_tag_1pmvm_159";
const tagText = "_tagText_1pmvm_185";
const image = "_image_1pmvm_227";
const svg$1 = "_svg_1pmvm_237";
const button$1 = "_button_1pmvm_269";
const styles$2 = {
  profile,
  content: content$1,
  column,
  title: title$1,
  description: description$1,
  tag,
  tagText,
  image,
  svg: svg$1,
  button: button$1
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$2.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "I’m Abhi, currently I live in USA, NJ working as a Senior Software Engineer. I build and optimize modern enterprise applications and API platforms using latest technologies to create scalable and reliable solutions." }),
  /* @__PURE__ */ jsx(Text, { className: styles$2.description, "data-visible": visible, size: "l", as: "p", children: "In my spare time I like to play video games. I’m always open for hearing about new projects, so feel free to message me." })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$2.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$2.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$2.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$2.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Send me a message"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$2.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$2.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$2.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$2.image, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                reveal: true,
                delay: 100,
                placeholder: profileImgPlaceholder,
                srcSet: `${profileImg} 480w, ${profileImgLarge} 960w`,
                width: 960,
                height: 1280,
                sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
                alt: "Me"
              }
            ),
            /* @__PURE__ */ jsx("svg", { className: styles$2.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-profile` }) })
          ] })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
const summary = "_summary_4rpvx_1";
const content = "_content_4rpvx_69";
const details = "_details_4rpvx_129";
const preview = "_preview_4rpvx_155";
const model = "_model_4rpvx_175";
const loader$1 = "_loader_4rpvx_283";
const svg = "_svg_4rpvx_301";
const index = "_index_4rpvx_383";
const indexNumber = "_indexNumber_4rpvx_401";
const title = "_title_4rpvx_443";
const description = "_description_4rpvx_481";
const button = "_button_4rpvx_519";
const styles$1 = {
  summary,
  content,
  details,
  preview,
  model,
  loader: loader$1,
  svg,
  index,
  indexNumber,
  title,
  description,
  button
};
const Model = lazy(
  () => import("./index-Duoe-Z4E.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: styles$1.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$1.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$1.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$1.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$1.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$1.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$1.button, "data-visible": visible, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$1.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$1.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$1.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model2.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$1.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$1.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model2.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model2.textures[1],
                    sizes: phoneSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$1.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$1.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_pb8qs_1";
const styles = {
  home
};
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$1 = () => {
  return baseMeta({
    title: "Senior Software Developer",
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, projectOne, projectTwo, details2];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-1",
        alternate: true,
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        title: "Work Experience",
        description: "Dive into my coding odyssey and technical prowess showcased in this section, reflecting my journey of innovation and impactful contributions",
        buttonText: "Work Experience",
        buttonLink: "/articles",
        model: {
          type: "phone",
          alt: "App Work Exp Scr",
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        title: "Designing the future of Indian Clothing",
        description: "Pahhal seamlessly blends traditional Indian attire like kurtas, lehengas, and shararas with contemporary flair, redefining elegance for the modern era",
        buttonText: "Side project",
        buttonLink: "/projects/pahhal",
        model: {
          type: "laptop",
          alt: "Pahhal",
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-xlCnhppD.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Bpw-160S.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/heading-CJXtzdWm.js", "/assets/visually-hidden-e-VX72-f.js", "/assets/use-spring-C7KgUGBW.js", "/assets/decoder-text-CnA3CfMx.js", "/assets/image-DYgGxQCd.js", "/assets/error-BeuU18Pd.js", "/assets/useScrollToHash-BQjXF31y.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/config-d3RGDddI.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/image-cNt8ozvO.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/error-Cq_yTnRj.css", "/assets/root-Ci9I8dx3.css"] }, "routes/articles.modern-styling-in-react": { "id": "routes/articles.modern-styling-in-react", "parentId": "routes/articles", "path": "modern-styling-in-react", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.modern-styling-in-react-CT3csrzx.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-L_4ix5aQ.js"], "css": [] }, "routes/articles.work-experience-1": { "id": "routes/articles.work-experience-1", "parentId": "routes/articles", "path": "work-experience-1", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.work-experience-1-C9Bq_4Wf.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-L_4ix5aQ.js"], "css": [] }, "routes/articles.work-experience-2": { "id": "routes/articles.work-experience-2", "parentId": "routes/articles", "path": "work-experience-2", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.work-experience-2-B_8gDAwx.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-L_4ix5aQ.js"], "css": [] }, "routes/articles.work-experience-3": { "id": "routes/articles.work-experience-3", "parentId": "routes/articles", "path": "work-experience-3", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.work-experience-3-CX4Ud8wQ.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-L_4ix5aQ.js"], "css": [] }, "routes/articles_._index": { "id": "routes/articles_._index", "parentId": "root", "path": "articles", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BxO53RiC.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/config-d3RGDddI.js", "/assets/heading-CJXtzdWm.js", "/assets/visually-hidden-e-VX72-f.js", "/assets/use-spring-C7KgUGBW.js", "/assets/section-BtIj0eKx.js", "/assets/decoder-text-CnA3CfMx.js", "/assets/divider-DfYM0cK6.js", "/assets/image-DYgGxQCd.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/date-DvyCAN0s.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-_6KA8l-u.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/divider-BGrE333F.css", "/assets/image-cNt8ozvO.css", "/assets/route-Cl8BF6JV.css"] }, "routes/projects.pahhal": { "id": "routes/projects.pahhal", "parentId": "root", "path": "projects/pahhal", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-w0f_hS3_.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/config-d3RGDddI.js", "/assets/heading-CJXtzdWm.js", "/assets/image-DYgGxQCd.js", "/assets/section-BtIj0eKx.js", "/assets/useParallax-ZGzXtDy9.js", "/assets/spr-lesson-builder-dark-D-tWOz5R.js", "/assets/link-CBYOz2A0.js", "/assets/visually-hidden-e-VX72-f.js", "/assets/project-DyoBiEDk.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-_6KA8l-u.css", "/assets/image-cNt8ozvO.css", "/assets/link-0uB5mRf5.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/project-CMTDR1YT.css", "/assets/route-INjNiGZW.css"] }, "routes/projects.slice": { "id": "routes/projects.slice", "parentId": "root", "path": "projects/slice", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CIMQ22hD.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/config-d3RGDddI.js", "/assets/heading-CJXtzdWm.js", "/assets/image-DYgGxQCd.js", "/assets/section-BtIj0eKx.js", "/assets/useParallax-ZGzXtDy9.js", "/assets/project-DyoBiEDk.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-_6KA8l-u.css", "/assets/image-cNt8ozvO.css", "/assets/project-CMTDR1YT.css", "/assets/route-Cvnrim9f.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js?client-route=1", "imports": [], "css": [] }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CdzAAOxI.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/heading-CJXtzdWm.js", "/assets/config-d3RGDddI.js", "/assets/divider-DfYM0cK6.js", "/assets/section-BtIj0eKx.js", "/assets/image-DYgGxQCd.js", "/assets/useParallax-ZGzXtDy9.js", "/assets/useScrollToHash-BQjXF31y.js", "/assets/clamp-e7DugykH.js", "/assets/date-DvyCAN0s.js", "/assets/link-CBYOz2A0.js", "/assets/index-L_4ix5aQ.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/divider-BGrE333F.css", "/assets/section-_6KA8l-u.css", "/assets/image-cNt8ozvO.css", "/assets/link-0uB5mRf5.css", "/assets/route-DUnsntCv.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BtUQfkoK.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/heading-CJXtzdWm.js", "/assets/visually-hidden-e-VX72-f.js", "/assets/use-spring-C7KgUGBW.js", "/assets/config-d3RGDddI.js", "/assets/decoder-text-CnA3CfMx.js", "/assets/divider-DfYM0cK6.js", "/assets/section-BtIj0eKx.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/divider-BGrE333F.css", "/assets/section-_6KA8l-u.css", "/assets/route-CKif1uL8.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BkEKh7KW.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/config-d3RGDddI.js", "/assets/heading-CJXtzdWm.js", "/assets/visually-hidden-e-VX72-f.js", "/assets/use-spring-C7KgUGBW.js", "/assets/spr-lesson-builder-dark-D-tWOz5R.js", "/assets/section-BtIj0eKx.js", "/assets/decoder-text-CnA3CfMx.js", "/assets/image-DYgGxQCd.js", "/assets/useScrollToHash-BQjXF31y.js", "/assets/divider-DfYM0cK6.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/route-ufJJ4GyU.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-_6KA8l-u.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/divider-BGrE333F.css", "/assets/route-D3R5eEKe.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-BmnJgZZP.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/heading-CJXtzdWm.js", "/assets/visually-hidden-e-VX72-f.js", "/assets/use-spring-C7KgUGBW.js", "/assets/decoder-text-CnA3CfMx.js", "/assets/image-DYgGxQCd.js", "/assets/error-BeuU18Pd.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/error-Cq_yTnRj.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BkEKh7KW.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/components-C0b2Aiyh.js", "/assets/config-d3RGDddI.js", "/assets/heading-CJXtzdWm.js", "/assets/visually-hidden-e-VX72-f.js", "/assets/use-spring-C7KgUGBW.js", "/assets/spr-lesson-builder-dark-D-tWOz5R.js", "/assets/section-BtIj0eKx.js", "/assets/decoder-text-CnA3CfMx.js", "/assets/image-DYgGxQCd.js", "/assets/useScrollToHash-BQjXF31y.js", "/assets/divider-DfYM0cK6.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/route-ufJJ4GyU.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-_6KA8l-u.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/divider-BGrE333F.css", "/assets/route-D3R5eEKe.css"] } }, "url": "/assets/manifest-68df1f94.js", "version": "68df1f94" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/articles.modern-styling-in-react": {
    id: "routes/articles.modern-styling-in-react",
    parentId: "routes/articles",
    path: "modern-styling-in-react",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/articles.work-experience-1": {
    id: "routes/articles.work-experience-1",
    parentId: "routes/articles",
    path: "work-experience-1",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/articles.work-experience-2": {
    id: "routes/articles.work-experience-2",
    parentId: "routes/articles",
    path: "work-experience-2",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/articles.work-experience-3": {
    id: "routes/articles.work-experience-3",
    parentId: "routes/articles",
    path: "work-experience-3",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/articles_._index": {
    id: "routes/articles_._index",
    parentId: "root",
    path: "articles",
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/projects.pahhal": {
    id: "routes/projects.pahhal",
    parentId: "root",
    path: "projects/pahhal",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/projects.slice": {
    id: "routes/projects.slice",
    parentId: "root",
    path: "projects/slice",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route13
  }
};
const serverBuild = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  Loader as L,
  ModelAnimationType as M,
  Section as S,
  Transition as T,
  useWindowSize as a,
  msToNum as b,
  classes as c,
  clamp as d,
  useTheme as e,
  cssProps as f,
  numToMs as g,
  mode as h,
  assetsBuildDirectory as i,
  basename as j,
  future as k,
  isSpaMode as l,
  media as m,
  numToPx as n,
  entry as o,
  publicPath as p,
  routes as q,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  tokens as t,
  useInViewport as u
};
