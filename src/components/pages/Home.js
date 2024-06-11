import styles from './Home.module.css';
import savings from'../../img/savings.svg';
import LinkButton from '../layout/LinkButton';


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Custos</span>
            </h1>
            <p>Começe a gerenciar seus projetos agora!</p>
            <LinkButton to="/newproject" text="Crie Projetos" />
            <img src={savings} alt="Custos"/>
        </section>
    )
}

export default Home