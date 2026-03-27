import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ProjectInfo: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const { frontmatter } = fileData
  
  if (!frontmatter || (!frontmatter.kategorie && !frontmatter.rok && !frontmatter.spoluprace && !frontmatter.misto)) return null

  return (
    <div class="project-info-sidebar">
      {/* Toto vytvoří neviditelný prostor nad textem */}
      <div class="info-spacer"></div>
      
      {frontmatter.kategorie && <div class="info-item">{frontmatter.kategorie}</div>}
      {frontmatter.rok && <div class="info-item">{frontmatter.rok}</div>}
      {frontmatter.spoluprace && <div class="info-item">{frontmatter.spoluprace}</div>}
      {frontmatter.misto && <div class="info-item">{frontmatter.misto}</div>}
    </div>
  )
}

ProjectInfo.css = `
.project-info-sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Tímto natvrdo určíme výšku prázdného místa nad textem */
.info-spacer {
  height: 120px; /* Tuto hodnotu měň (např. 140px, 160px...), dokud to nebude lícovat s fotkou */
  display: block;
}

.info-item {
  color: #ffffff !important;
  font-size: 1rem;
}
`

export default (() => ProjectInfo) satisfies QuartzComponentConstructor