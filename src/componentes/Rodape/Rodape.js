import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='social'>
                <img src='imagens/fb.png' alt='Facebook' />
                <img src='imagens/tw.png' alt='Twitter' />
                <img src='imagens/ig.png' alt='Instagram' />
            </div>
            <img src='imagens/logo.png' alt='Organo' />
            <div className='dev'>
                <h5>Desenvolvido por Alura</h5>
                <h6>Customizado por Jhonattan Silva</h6>
            </div>
        </footer>
    )
}

export default Rodape;