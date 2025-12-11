
interface SubscriptionFormProps {
  variant?: 'blue' | 'map';
}

const SubscriptionForm = ({ variant = 'blue' }: SubscriptionFormProps) => {

  return (
    <section className={` overflow-hidden md:py-4 py-12 relative ${variant === 'map'
        ? ` bg-[#f3f4f6] bg-radial-[circle_at_20%_50%,rgba(59,130,246,0.1)_0%,transparent_50%,circle_at_80%_50%,rgba(59,130,246,0.1)_0%,transparent_50%] before:content-['🗺️'] before:absolute before:left-[5%] before:top-1/2 before:-translate-y-1/2 before:text-[15rem] before:opacity-10 before:pointer-events-none hover:before:text-[8rem] hover:after:text-[8rem] after:content-['🗺️'] after:absolute after:right-[5%] after:top-1/2 after:-translate-y-1/2 after:scale-x-[-1] after:text-[15rem] after:opacity-10 after:pointer-events-none`
        : "bg-blue-600 "
      }`}>
      <section className="max-w-[600px] mx-auto md:px-8 px-4 text-center relative z-1">
        <h2 className={`md:text-[30px] text-2xl  font-bold mb-2 leading-[1.3] ${variant === 'map'
          ? "text-[#1f2937]"
          : "text-[white]"
          }`}>
          FIQUE POR DENTRO DO SEU MUNDO<br />
          DE DENTRO DA SUA CAIXA DE ENTRADA
        </h2>
        <p className={`text-[16px] mb-2 ${variant === 'map'
          ? "text-[#6b7280]"
          : "text-[#ffffffe6]"
          }`}>Assine gratuitamente hoje</p>

        <form className="flex gap-2 mb-4 flex-col md:flex-row">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="flex-1 py-3.5 px-5 border border-[#d1d5db] rounded-lg text-sm outline-none bg-white ${variant === 'map' ? '' : 'border-[#ffffff4d]'} focus:border-[#2563eb] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
          />
          <button className={`py-3.5 px-4 border-none rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 ${variant === 'map' ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb]' : 'bg-[#fbbf24] text-[#1f2937] hover:bg-[#f59e0b]'}`}>ASSINAR</button>
        </form>
        <p className={`text-[12px] tracking-tighter ${variant === 'map' ? 'text-[#6b7280]' : 'text-[#ffffffcc]'}`}>
          SEM SPAM, SEM RUÍDO, CANCELE A QUALQUER MOMENTO
        </p>
      </section>
    </section>
  );
};

export default SubscriptionForm;
