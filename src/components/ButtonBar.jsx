// Add button links to download resume or visit linkedIn profile
// Updated for Vercel deployment

export function ButtonBar() {

    return(
        <div className="flex gap-8 rounded-xl bg-gradient-to-br from-black via-zinc-900 to-neutral-800 w-max p-4 mx-auto mt-16">
            <a className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm md:text-xl source-code-pro-regular p-2 md:px-6 md:py-3 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg"
                href={`${import.meta.env.BASE_URL}Eric_Morrison_CV.pdf`}
                download="Eric_Morrison_CV.pdf">
                Download my CV</a>
            <a className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm md:text-xl source-code-pro-regular p-2 md:px-6 md:py-3 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg"
                href="https://www.linkedin.com/in/eric-morrison-5ab7a338a/">
                View my LinkedIn</a>
        </div>
    )
}