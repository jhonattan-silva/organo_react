import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {
    const estiloPrimario = { borderColor: props.corPrimaria }; //css especifico da cor primaria
    const estiloSecundario = { backgroundColor: props.corSecundaria };

    return (
        props.colaboradores.length >0 && <section className='time' style={estiloSecundario}> {/* && seria o IF pode ser substituido por ? tbm */}
            <h3 style={estiloPrimario}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time;