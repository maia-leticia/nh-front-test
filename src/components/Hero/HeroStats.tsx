const HeroStats = () => {
  return (
    <section className="flex gap-8 items-center mt-4 ">
      <article className="flex gap-1 items-center px-1 py-3 bg-white border border-[#e5e7eb] rounded-lg shadow-sm shadow-[#0000001a]">
        <span className="text-3xl">
          📧
        </span>
          <p className="text-sm leading-[1.3] font-semibold">Fique <br />Informado</p>
      </article>
      <article className="py-4 px-6 border border-[#e5e7eb] rounded-lg shadow-sm shadow-[#0000001a]">
        <p className="text-3xl font-bold text-[#1f2937]">25.000+</p>
        <p className="text-xs font-semibold text-[#1f2937] mt-1">LEITORES</p>
        <p className="text-xs text-[#6b7280] mt-1" >Que começam o dia com Tecnologia Emergente</p>
      </article>
    </section>
  )
};

export default HeroStats;