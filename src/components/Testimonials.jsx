import { testimonialsData } from "../data/testimonials"

export function Testimonials() {

    return(
        <>
            <h2 className="nunito-sans-bold text-4xl md:text-5xl mt-18 md:mt-24 mb-12 text-cyan-300 text-center">Testimonials</h2>
            <div className="w-4/5 mx-auto mt-12 md:mt-24 bg-gradient-to-br from-black via-zinc-900 to-neutral-800 p-4 md:p-12 rounded-[2rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((item, index) => (
                        <div key={index} className="bg-slate-800/50 p-6 rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                        <p className="source-code-pro-regular text-gray-300 leading-relaxed mb-4 italic">"{item.quote}"</p>
                        <p className="source-code-pro-regular text-cyan-400 font-bold my-2">- {item.owner}</p>
                        <p className="source-code-pro-regular text-gray-400 text-sm">{item.title}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}