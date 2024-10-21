import { useState } from 'react';
import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';
import Rodape from './componentes/Rodape/Rodape';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#B2VFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A60157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]); //adiciona ao vetor o novo colaborador
    console.log(colaborador);
  }


  return (
    <div className='app'>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        times={times.map(time => time.nome)}
      />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)} {/* loop dos times (key para diferenciar) */}

      <Rodape />
    </div>
  );
}

export default App;
