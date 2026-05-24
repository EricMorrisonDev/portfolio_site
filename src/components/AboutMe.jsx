
export function AboutMe() {
    return(
        <>
            <h2 className="section-heading">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-18 w-9/10 md:w-4/5 mx-auto content-panel p-4 md:p-12 rounded-[2rem]">
                <div className="md:col-span-1">
                    <img src={`${import.meta.env.BASE_URL}img/Eric_headshot_portrait.png`}
                    className="rounded-lg md:max-h-[500px] shadow-md"/>
                </div>
                <div className="md:col-span-2">
                    <p className="cabin-regular text-sm md:text-lg mb-4 leading-relaxed text-primary">I’ve always been a communicator first. Writing, research, and reasoning have been my strongest skills throughout my academic and professional life. On the way to earning my BA in Literature and History, I explored many subjects from Psychology and Law to Philosophy and Film Studies — disciplines that all rely on one core skillset: the ability to learn, interpret, and articulate clearly.</p>
                    <p className="cabin-regular text-sm md:text-lg my-4 leading-relaxed text-primary">Programming entered my life later, almost by accident. I had assumed it wouldn't suit me, until I discovered how naturally it aligned with what I already loved: learning, problem-solving, and assembling ideas elegantly.</p>
                    <p className="cabin-regular text-sm md:text-lg my-4 leading-relaxed text-primary">From 2013 to 2023, I lived in Shanghai, teaching English, History, and Literature to students of all ages. That experience taught me that people thrive when given ownership of their learning process. I’ve applied that same principle to my programming journey — by building real projects, exploring new tools, and teaching myself through practice.</p>
                </div>
            </div>
        </>
    )
}