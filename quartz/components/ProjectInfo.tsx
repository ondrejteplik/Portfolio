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

// Tady už není žádné ProjectInfo.css

export default (() => ProjectInfo) satisfies QuartzComponentConstructor