import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraDePesquisa from '../../containers/BarraPesquisa'
import ListaContato from '../../containers/ListaContatos'

const Home = () => {
  return (
    <>
      <BarraDePesquisa />
      <ListaContato />
      <BotaoAdicionar />
    </>
  )
}

export default Home
