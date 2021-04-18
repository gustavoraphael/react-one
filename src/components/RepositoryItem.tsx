interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string
  }
}

// Curiosidade - ?? significa a mesma funcionalidade que o || 
// só que não considera 0 como valor inválido ex: props.repository?.name ?? "Default"

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      
      <p>{props.repository?.description}</p>

      <a href={props.repository.html_url}>Acess repository</a>
    </li>
  );
}
