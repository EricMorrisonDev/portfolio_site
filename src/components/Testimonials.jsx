import { testimonialsData } from "../data/testimonials"

export function Testimonials() {

    return(
        <>
            <h2 className="cabin-bold text-4xl md:text-5xl mt-18 md:mt-24 mb-12 text-accent text-center tracking-tight">Testimonials</h2>
            <div className="w-4/5 mx-auto mt-12 md:mt-24 content-panel p-4 md:p-12 rounded-[2rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((item, index) => (
                        <div key={index} className="testimonial-card">
                        <p className="source-code-pro-regular text-primary leading-relaxed mb-4 italic">"{item.quote}"</p>
                        <p className="source-code-pro-regular text-accent font-bold my-2">- {item.owner}</p>
                        <p className="source-code-pro-regular text-muted text-sm">{item.title}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}