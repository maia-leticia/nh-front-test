import TeamList from "./TeamList"
import CareerExperience from "./CareerExperience"
import TopicsList from "./TopicsList"
import Mission from "./Mission"

const About = () => {

    const teamMembers = [
        {
            name: "Ana Souza",
            role: "Especialista em Inteligência Artificial",
            description: "12 anos de experiência em pesquisa e desenvolvimento de soluções inovadoras.",
            emoji: "👩‍💻",
        },
        {
            name: "Carlos Lima",
            role: "Engenheiro de Software",
            description: "10 anos atuando em projetos de tecnologia e mentor de comunidades tech.",
            emoji: "👨‍💻",
        },
        {
            name: "Marina Duarte",
            role: "Jornalista de Tecnologia",
            description: "8 anos cobrindo tendências e novidades do setor.",
            emoji: "📝",
        },
    ];

    const topics = [
        "Inteligência Artificial e Machine Learning",
        "Desenvolvimento Web Moderno",
        "Segurança Digital",
        "Novidades em Cloud Computing",
        "Tendências em UX/UI",
        "Startups e Inovação",
    ];

    return (
        <section id="about" className="py-8  bg-white overflow-hidden">
            <section className="max-w-7xl mx-auto md:px-8 px-4">
                <h2 className="md:text-[32px] text-2xl font-bold text-brand-highlight text-center mb-8 md:mb-12">
                    SOBRE NÓS
                </h2>
                <TeamList members={teamMembers} />
                <CareerExperience />
                <TopicsList topics={topics} />
                <Mission />
            </section>
        </section>
    );
};

export default About;
