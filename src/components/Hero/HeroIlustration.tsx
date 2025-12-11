const HeroIlustration = () => {
  return (
    <section className="flex justify-center items-center order-1 lg:order-2">

      <figure className="w-full max-w-[500px]">

        <div className="relative bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_50%,#60a5fa_100%)] rounded-4xl p-12 shadow-2xl shadow-[#00000026]">
          <div className="bg-[#ffffff1a] rounded-2xl py-25 px-8 flex justify-center items-center backdrop-blur-[10px]">
            <span className="text-9xl">🤖</span>
          </div>

          <div className=" absolute -bottom-6 -right-5">
            <div className="w-20 h-20 bg-white rounded-full shadow-sm shadow-[#0000001a] "></div>
            <div className="absolute bottom-2 right-2 bg-white rounded-full w-15 h-15 flex justify-center items-center text-3xl shadow-sm shadow-[#0000001a] ">⚛️</div>
          </div>

        </div>
        <figcaption id="hero-ilustration-title" className="sr-only">
          Ilustração estilizada representando tecnologia.
        </figcaption>
      </figure>

    </section>
  )
};

export default HeroIlustration;