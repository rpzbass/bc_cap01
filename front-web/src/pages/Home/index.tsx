import React from 'react';
import './styles.scss';
import { ReactComponent as Mainimage } from '../../core/assets/images/Desenho.svg';
import { ButtonIcon } from '../../core/components/ButtonIcon';


const Home = () => (

    <div className="home-container">   
        <div className="row home-content">
            <div className="col-6 home-text">
                <h1 className="text-title">Conheça o melhor<br/> catálago de produtos</h1>
                <p className="text-subtitle">
                
                    Ajudaremos você a encontrar os melhores <br/> produtos disponiveis no mercado.
                
                </p>
                <ButtonIcon buttonText={"INICIE AGORA A SUA BUSCA"}/>
                
            </div>
            <div className="col-6">
                
                <Mainimage className="main-image"/>
            
            </div>       
        </div>
    </div>
    

    
);

export default Home;


