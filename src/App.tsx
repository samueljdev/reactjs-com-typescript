import './App.css'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer'
import { Header } from './components/header'

function App() {

  return (
    <>
      <Header />
      <Aluno nome='Samuel' idade={34} />
      <Aluno nome='Lucia' idade={34} />
      <Aluno nome='Karine' idade={34} />
      <Footer />
    </>
  )
}

export default App
