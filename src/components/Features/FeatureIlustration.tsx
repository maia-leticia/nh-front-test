const FeatureIlustration = () => {
    return (
        <figure className="flex items-center justify-center -order-1">
            <div className="w-full max-w-[400px] relative">
                <div className="bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_50%,#60a5fa_100%)] rounded-4xl py-16 px-8 flex items-center justify-center shadow-2xl shadow-[#00000017] relative 
            before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 mb-5 ">
                    <span className="md:text-9xl drop-shadow-xl text-8xl">🏢</span>
                </div>
                <figcaption className="absolute left-90 top-45 bg-white rounded-full w-[60px] h-[60px] text-3xl md:w-20 md:h-20 flex justify-center items-center md:text-4xl shadow-lg">⚛️</figcaption>
            </div>
        </figure>
    );
};

export default FeatureIlustration;