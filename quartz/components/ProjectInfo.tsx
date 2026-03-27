import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ProjectInfo: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const { frontmatter } = fileData
  
  // Zobrazíme panel jen tehdy, když má stránka vyplněnou kategorii nebo rok
  if (!frontmatter || (!frontmatter.kategorie && !frontmatter.rok)) return null

  return (
    <div class="project-info-sidebar">
      <h3>Info o projektu</h3>
      <ul>
        {frontmatter.kategorie && <li><strong>Kategorie:</strong> {frontmatter.kategorie}</li>}
        {frontmatter.rok && <li><strong>Rok:</strong> {frontmatter.rok}</li>}
        {frontmatter.spoluprace && <li><strong>Spolupráce:</strong> {frontmatter.spoluprace}</li>}
        {frontmatter.misto && <li><strong>Místo:</strong> {frontmatter.misto}</li>}
      </ul>
    </div>
  )
}

// Tady rovnou přidáme hezký vzhled
ProjectInfo.css = `
.project-info-sidebar {
  background-color: #1e1e20; /* Lehce odlišené tmavé pozadí */
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #393639; /* Jemný rámeček */
  margin-top: 2rem;
}
.project-info-sidebar h3 {
  margin-top: 0;
  font-size: 1.2rem;
  color: #ffffff;
}
.project-info-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.project-info-sidebar li {
  margin-bottom: 0.8rem;
  color: #d4d4d4;
  font-size: 0.95rem;
}
.project-info-sidebar strong {
  color: #ffffff;
  display: block; /* Slovo Kategorie/Rok bude nad samotným textem, vypadá to moderněji */
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
}
`

export default (() => ProjectInfo) satisfies QuartzComponentConstructor