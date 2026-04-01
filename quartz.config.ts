import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ondřej teplík",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Rubik",
        body: "Rubik",
        code: "Rubik",
      },
      colors: {
        // Světlý režim přepsaný tmavými barvami, aby byl tmavý režim vynucen
        lightMode: {
          light: "#161618",      // Tmavé pozadí
          lightgray: "#393639",  // Okraje
          gray: "#646464",       // Linky grafu
          darkgray: "#ffffff",   // Běžný text těla -> BÍLÁ
          dark: "#ffffff",       // Nadpisy a ikony -> BÍLÁ
          secondary: "#ffffff",  // Odkazy a aktuální node v grafu -> BÍLÁ
          tertiary: "#84a59d",   // Hover stavy (nechal jsem původní, aby byla vidět interakce s myší)
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
        // Standardní tmavý režim s bílým textem
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#ffffff",   // Běžný text těla -> BÍLÁ
          dark: "#ffffff",       // Nadpisy a ikony -> BÍLÁ
          secondary: "#ffffff",  // Odkazy -> BÍLÁ
          tertiary: "#84a59d",   // Hover stavy
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark", // Jelikož jsme "vypli" světlý režim, můžeš tu teoreticky nechat dark i pro light
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config