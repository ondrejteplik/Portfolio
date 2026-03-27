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
  /* TADY JE TA ZMĚNA: Zvětšili jsme horní odsazení z 2rem na 110px. */
  /* Hodnota 110px obvykle v Quartzu odpovídá výšce od drobečkové navigace */
  /* přes nadpis až k začátku obrázku. Možná si ji budeš muset jemně doladit. */
  margin-top: 300px; 
  
  display: flex;
  flex-direction: column;
  gap: 0.6rem; /* Mezera mezi jednotlivými řádky */
}
.info-item {
  color: #ffffff; /* Čistě bílý text */
  font-size: 1rem;
}
`

export default (() => ProjectInfo) satisfies QuartzComponentConstructor