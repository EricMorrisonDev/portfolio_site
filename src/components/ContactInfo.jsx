import { contactData } from "../data/contact"
import { ContactForm } from "./ContactForm"

function contactHref(item) {
    if (item.title === "Email") return `mailto:${item.value}`
    if (item.title === "WhatsApp") return `https://wa.me/${item.value.replace(/\D/g, "")}`
    return item.value
}

export function ContactInfo() {

    return(
        <>
            <h2 className="cabin-bold text-4xl md:text-5xl my-24 text-gray-300 text-center tracking-tight">Let's Connect</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 w-4/5 mx-auto">
                {contactData.map((item, index) => (
                    <div key={index}
                    className="flex gap-4">
                        <img src={item.imgPath}
                        alt=""
                        className="h-[50px] w-[50px] shrink-0" />
                        <div>
                            <p className="cabin-semibold text-sm md:text-base text-gray-300">{item.title}</p>
                            <p className="mt-1">
                                <a
                                    href={contactHref(item)}
                                    target={item.title === "Email" ? undefined : "_blank"}
                                    rel={item.title === "Email" ? undefined : "noopener noreferrer"}
                                    className="source-code-pro-regular text-sm md:text-base text-cyan-400 break-all hover:underline"
                                >
                                    {item.value}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full mx-auto pb-24">
                <ContactForm />
            </div>
        </>
    )
}