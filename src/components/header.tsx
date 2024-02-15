import './header.css';

// tipando componente
interface HeaderProps {
  title?: string; // propriedade opcional
}

// inicializando valores nos parametros
export function Header({ title = "Curso React + TypeScript" }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>

      <hr />
    </header>
  )
}