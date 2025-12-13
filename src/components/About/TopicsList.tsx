type TopicsListProps = {
  topics: string[];
};

const TopicsList = ({ topics }: TopicsListProps) => {
  return (
    <>
      <h3 className="text-xl font-semibold text-center mb-6">
        Conteúdos Mais Discutidos
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 ">
        {topics.map((topic) => (
          <li
            key={topic}
            className="flex items-center justify-center gap-2 px-4 py-3  rounded-lg border bg-[#0a1a41]"
          >
            <span className="text-white" aria-hidden="true">✓</span>
            <span className="text-white text-sm">{topic}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopicsList;