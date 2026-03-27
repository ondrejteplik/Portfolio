import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ProjectInfo: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const { frontmatter } = fileData
  
  // Zobrazíme panel jen tehdy, když je v hlavičce aspoň něco vyplněno
  if (!frontmatter || (!frontmatter.kategorie && !frontmatter.rok && !frontmatter.spoluprace && !frontmatter.misto)) return null

  // Tady jsme smazali nadpis i ta slova "Kategorie:", "Rok:" atd. Zůstaly jen samotné hodnoty.
  return (
    <div class="project-info-sidebar">
      {frontmatter.kategorie && <div class="info-item">{frontmatter.kategorie}</div>}
      {frontmatter.rok && <div class="info-item">{frontmatter.rok}</div>}
      {frontmatter.spoluprace && <div class="info-item">{frontmatter.spoluprace}</div>}
      {frontmatter.misto && <div class="info-item">{frontmatter.misto}</div>}
    </div>
  )
}

// Zjednodušený styl bez rámečků, čistý bílý text
ProjectInfo.css = `
.project-info-sidebar {
  /* Zkusíme padding místo marginu, ten bývá v bočních panelech silnější */
  padding-top: 150px !important; 
  
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.info-item {
  color: #ffffff !important;
  font-size: 1rem;
  line-height: 1.4;
}
`

export default (() => ProjectInfo) satisfies QuartzComponentConstructor