import {useState, useRef} from 'react';
import api from '../../Services/api';
import {Container, CardInfo, TituloDois, Input, Button, ErrorPage, TituloUm, Paragrafro, Span, Footer} from './styles';

interface Props {
    logradouro: string,
    localidade: string,
    uf: string,
    complemento: string,
    bairro: string,
    ibge: string,
    cep: string,
    gia: string,
    ddd: string,
    siafi: string,
    erro?: any
}

export default function Form() {
    const [data, setData] = useState<Props>();
    const [loading, setLoading] = useState(false);
    const buscaInput = useRef<HTMLInputElement>(null);

    const [error, setError] = useState(false);

    const handleSubmit = (evento) => {
        evento.preventDefault();

        if(buscaInput.current?.value === '') {
            alert('Insira o CEP!');
        }
        console.log(buscaInput);
        async function axiosCEP() {
            setLoading(true);
            const response = await api.get(`/${buscaInput.current?.value}`)
            if(response.status === 400 || response.statusText === 'Not Found'){
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
                            maxLength = {8}
                        />
                        <Button type="submit">
                            Consultar
                        </Button>
                    </form>

                {loading && error && <ErrorPage>Insira um CPF válido!</ErrorPage>} 
                
                {/* Exibe se estiver carregando */}
                {loading && !error && <p>Procurando....</p>}
                    
                {!loading && !data?.erro && data && (
                    <>
                        <CardInfo>
                            <TituloUm>Informações: </TituloUm>
                            <Paragrafro>
                                <Span>Cep: </Span>
                                <Span>{data.cep}</Span>
                            </Paragrafro>
                            <Paragrafro>
                                <Span>Logradouro: </Span>
                                <Span>{data.logradouro}</Span>
                            </Paragrafro>
                            <Paragrafro>
                                <Span>Complemento: </Span>
                                <Span>{data.complemento}</Span>
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
                            <Paragrafro>
                               <Span> IBGE: </Span>
                               <Span>
                                    {data.ibge}
                                </Span>
                            </Paragrafro>
                            <Paragrafro>
                               <Span> GIA: </Span>
                               <Span>
                                    {data.gia}
                                </Span>
                            </Paragrafro>
                            <Paragrafro>
                               <Span> DDD: </Span>
                               <Span>
                                    {data.ddd}
                                </Span>
                            </Paragrafro>
                            <Paragrafro>
                               <Span> Siafi: </Span>
                                <Span>
                                    {data.siafi}
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


