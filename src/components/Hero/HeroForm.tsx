const HeroForm = () => {
  return (
    <form className="flex gap-2 mt-1">
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        type="email"
        className=" flex-1 py-3.5 px-5 border border-[#d1d5db] rounded-sm text-sm outline-none focus:border-[#3b82f6] focus:shadow-sm focus:shadow-[#3b82f61a]"
      />
      <button className="py-3.5 px-8 bg-[#3b82f6] text-white rounded-lg text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#7dacf8]">ASSINAR</button>
    </form>
  )
};

export default HeroForm;