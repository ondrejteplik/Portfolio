import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ProjectInfo: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const { frontmatter } = fileData
  
  if (!frontmatter || (!frontmatter.kategorie && !frontmatter.rok && !frontmatter.spoluprace && !frontmatter.misto)) return null

  return (
    <div class="project-info-sidebar">
      {frontmatter.kategorie && <div class="info-item">{frontmatter.kategorie}</div>}
      {frontmatter.rok && <div class="info-item">{frontmatter.rok}</div>}
      {frontmatter.spoluprace && <div class="info-item">{frontmatter.spoluprace}</div>}
      {frontmatter.misto && <div class="info-item">{frontmatter.misto}</div>}
    </div>
  )
}

ProjectInfo.css = `
.project-info-sidebar {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Malá mezera mezi řádky */
}

.info-item {
  color: #ffffff; /* Čistě bílá barva */
  font-size: 1rem;
}
`

export default (() => ProjectInfo) satisfies QuartzComponentConstructor