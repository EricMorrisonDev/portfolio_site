import { scrollToSection } from "../lib/utils"

export function ButtonBar({ navHeight }) {

    return(
        <div className="flex gap-8 rounded-xl bg-gradient-to-br from-black via-zinc-900 to-neutral-800 w-max p-4 mx-auto mt-16">
            <a className="rounded-lg bg-gradient-to-r from-zinc-600 to-zinc-700 text-zinc-100 text-sm md:text-base source-code-pro-regular p-2 md:px-6 md:py-3 border border-zinc-500/30 hover:from-zinc-500 hover:to-zinc-600 hover:shadow-lg transition-all duration-300 shadow-md"
                href={`${import.meta.env.BASE_URL}Eric_Morrison_CV.pdf`}
                download="Eric_Morrison_CV.pdf">
                Download my CV</a>
            <a className="rounded-lg bg-gradient-to-r from-zinc-600 to-zinc-700 text-zinc-100 text-sm md:text-base source-code-pro-regular p-2 md:px-6 md:py-3 border border-zinc-500/30 hover:from-zinc-500 hover:to-zinc-600 hover:shadow-lg transition-all duration-300 shadow-md"
                href="https://www.linkedin.com/in/eric-morrison-5ab7a338a/">
                View my LinkedIn</a>
            <button className="rounded-lg bg-gradient-to-r from-zinc-600 to-zinc-700 text-zinc-100 text-sm md:text-base source-code-pro-regular p-2 md:px-6 md:py-3 border border-zinc-500/30 hover:from-zinc-500 hover:to-zinc-600 hover:shadow-lg transition-all duration-300 shadow-md"
                    onClick={() => {
                        scrollToSection('contact', navHeight)
                    }}
                >
                Contact Me</button>
        </div>
    )
}