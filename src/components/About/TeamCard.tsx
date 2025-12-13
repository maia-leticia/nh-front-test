type TeamCardProps = {
  name: string;
  role: string;
  description: string;
  emoji: string;
};

const TeamCard = ({ name, role, description, emoji }: TeamCardProps) => {
  return (
    <article className="bg-white rounded-xl p-6 shadow-sm border h-full">
      <figure className="flex flex-col items-center text-center">
        <div
          role="img"
          aria-label={`Avatar de ${name}`}
          className="w-16 h-16 rounded-full  flex items-center justify-center text-3xl mb-4"
        >
          {emoji}
        </div>
        <figcaption>
          <h4 className="text-lg font-semibold mb-1">{name}</h4>
          <p className="text-sm font-medium mb-2">{role}</p>
          <p className="text-sm leading-relaxed">{description}</p>
        </figcaption>
      </figure>
    </article>
  );
};

export default TeamCard;