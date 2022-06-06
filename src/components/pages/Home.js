import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem vindo ao <span>CNPj hunter!</span>
            </h1>
            <p>Começe agora a procurar dados das Empresas!</p>
            <a href="/cnpj">Pesquise aqui</a>
        </section>
    )
}

export default Home;