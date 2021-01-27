import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/Seta.svg';
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import './styles.scss';


type ParamsType = {

    productId: string;
}


export const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    console.log(productId);
    return (

        <div className="product-details-container">
            <div className="card-base border-radius-20 product-details">
                <Link to="/products" className="product-details-goback">

                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">VOLTAR</h1>

                </Link>

                <div className="row ">
                    <div className="col-6 pr-5">
                        <div className="product-details-card text-center">
                            <ProductImage className="products-details-image" />
                        </div>
                        <h1 className="product-details-name">
                            Computador Desktop - Intel Core i7
                        </h1>
                            <ProductPrice price='2.700,00'/>
                    </div>
                
                <div className="col-6 product-details-card">

                    <h1 className="product-description-title">Descrição do produto</h1>
                    <p className="product-description-text">
                        Decrição do Produto

                        Projetado para garantir a produtividade no seu dia a dia
                        O desempenho que você precisa para uma jornada eficiente é garantido pelos processadores Intel da família Core

                        Conectividade ao seu alcance
                        Saídas de áudio com qualidade HD e conexões USB estão dipooníveis na frontal do seu CorPc

                        Baixo consumo
                        Mesmo trabalhando todos os dias, você não tera sustos na conta de energia. Fizemos tudo bem feito, para o seu CorPC seja eficiente, silencioso e econômico no consumo de energia elétrica

                        Multitarefas
                        Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.

                        Sistema operacional completo com super pacote de programas. Alguns exemplos:
                        - WhatsApp
                        - Netflix
                        - Globo Play
                        - Google Chrome
                        - Spotify
                        - Skype
                        - Youtube
                        - Google maps
                        - Criador e editor de textos e documentos
                        - Criador e editor de planilhas
                        - Criador e editor de apresentações
                        - Criador e editor de desenho técnico
                        - Team Viewer
                        E muito mais!

                        MONITOR HQ WIDESCREEN 19.5" HD
                        Brilho: 200 cd
                        Tempo de resposta: 5 ms
                        Resolução máxima / recomendada: 1366 x 768 60 Hz (HD)
                        Suporte de cores: Maior que 16 milhões
                        Conexão: HDMI e VGA

                    </p>

                </div>
            </div>
        </div>
    </div>
    );

};





