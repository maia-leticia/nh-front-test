import TeamCard from "./TeamCard";

type Member = {
  name: string;
  role: string;
  description: string;
  emoji: string;
};

type TeamListProps = {
  members: Member[];
};

const TeamList = ({ members }: TeamListProps) => {
  return (
    <section className="bg-[#3b82f6] p-5 rounded-2xl">
      <h3 className="text-xl font-semibold text-white text-center mb-6">
        Equipe de Revisão
      </h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none mb-12">
        {members.map((member) => (
          <li key={member.name}>
            <TeamCard {...member} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeamList;