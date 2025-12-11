interface HeroItemProps {
    items: string[];
}

const HeroList = ({ items }: HeroItemProps) => {
    return (
        <section className="bg-[#0a1a41] p-5 rounded-lg text-center">
            <h3 className="text-xs text-[#9ca3af] uppercase tracking-tighter">Confiado por profissionais em</h3>
            <ul className="flex justify-center items-center gap-8 flex-wrap mt-4">

                {items.map((item) => (
                    <li key={item}>
                        <span className="text-sm text-[#d1d5db] font-medium">{item}</span>
                    </li>

                ))}

            </ul>
        </section>
    )
};

export default HeroList;