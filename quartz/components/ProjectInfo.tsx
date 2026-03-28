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
  /* TADY JE TO KOUZLO: */
  position: sticky;          /* Řekne prvku, že se má přilepit */
  top: 80px;                /* Určí, jak daleko od horní hrany okna má zůstat viset */
  
  /* Odstranili jsme margin-top a info-spacer, protože 'top' teď řeší obojí: 
     pozici u obrázku i to, kde to zůstane viset při scrollu. */

  align-self: flex-start;    /* Důležité: zabrání roztažení prvku na celou výšku sloupce */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;               /* Aby to zůstalo nad ostatními věcmi při scrollu */
}

.info-item {
  color: #ffffff !important;
  font-size: 1rem;
}
`

export default (() => ProjectInfo) satisfies QuartzComponentConstructor