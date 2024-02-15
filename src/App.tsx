import './App.css'

function App() {

  return (
    <>
      <h1>Primeiro componente</h1>
      <Aluno nome='Samuel' idade={34} /> {/* inovando componente aluno e passando propriedades */}
      <Aluno nome='Lucia' idade={34} />  {/* reaproveitando componente */}
      <Aluno nome='Karine' idade={34} /> {/* reaproveitando componente */}
    </>
  )
}

// tipando componente aluno atraves da interface
interface AlunoProps {
  nome: string;
  idade: number;
}

// criando componente aluno, que espera receber duas propriedades
function Aluno({ nome, idade }: AlunoProps) {
  return (
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}

export default App
