import {useState, useRef} from 'react';
import api from '../../Services/api';
import {Container, CardInfo, TituloDois, Input, Button, TituloUm, Paragrafro, Span, Footer} from './styles';

interface Props {
    logradouro: string,
    localidade: string,
    uf: string,
    bairro: string,
    cep: string,
    erro?: any
}

export default function Form() {
    const [data, setData] = useState<Props>();
    const [loading, setLoading] = useState(false);
    const buscaInput = useRef<HTMLInputElement>(null);

    const [error, setError] = useState(false);

    const handleSubmit = (evento) => {
        evento.preventDefault();

        async function axiosCEP() {
            setLoading(true);
            const response = await api.get(`/${buscaInput.current?.value}`)
            console.log(response.data);
            if(response.data.error){
                setError(true);
            }else {
                setError(false);
            }

            const json = await response.data;
            setData(json);
            setLoading(false);
        }

        axiosCEP();
    }

    return (
        <>
            <Container>
                <TituloDois>Pesquisar o CEP</TituloDois>
                    <form onSubmit={handleSubmit}>
                        <Input 
                            placeholder="Informe o CEP"
                            required
                            ref = {buscaInput}
                            maxLength = {9}
                        />
                        <Button type="submit">
                            Consultar
                        </Button>
                    </form>
              
                {error && <p>Erro! Digite Novamente!</p>}

                {loading && !error && <p>Procurando...</p>}
                    
                {!loading && !error && data && (
                    <>
                        <CardInfo>
                            <TituloUm>Informações: </TituloUm>
                            <Paragrafro>
                                <Span>Logradouro: </Span>
                                <Span>{data.logradouro}</Span>
                            </Paragrafro>
                            <Paragrafro>
                                <Span>Bairro: </Span>
                                <Span>{data.bairro}</Span>
                            </Paragrafro>
                            <Paragrafro>
                                <Span>Localidade:</Span>
                                <Span> {data.localidade}</Span>
                            </Paragrafro>
                            <Paragrafro>
                                <Span> UF: </Span>
                               <Span>
                                    {data.uf}
                                </Span>
                            </Paragrafro>
                        </CardInfo>
                    </>
                )}
            </Container>
            <Footer>
                Desenvolvido por Jenniffer Rufino
            </Footer>
        </>
    )

}


