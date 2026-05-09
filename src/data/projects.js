
const BASE_URL = import.meta.env.BASE_URL;

export const projects = [
    {
        title: "Policy Boi",
        description: "A RAG-powered automated assistant for navigating pet insurance policies. Users can upload their policies and get instant, accurate advice, generate structured policy summaries, compare policies, and generate claim checklists.",
        imgs: [`${BASE_URL}img/Policy_Boi_screenshots/Policy_Boi_pic_1.jpg`, 
            `${BASE_URL}img/Policy_Boi_screenshots/Policy_Boi_pic_2.jpg`,
            `${BASE_URL}img/Policy_Boi_screenshots/Policy_boi_pic_3.jpg`,
            `${BASE_URL}img/Policy_Boi_screenshots/Policy_Boi_pic_4.jpg`,
            `${BASE_URL}img/Policy_Boi_screenshots/Policy_Boi_pic_5.jpg`,
            `${BASE_URL}img/Policy_Boi_screenshots/Policy_Boi_pic_6.jpg`
            ],
        mobileImgs: [ `${BASE_URL}img/Policy_Boi_mobile_screenshots/Policy_boi_mobile_screenshot_1.jpeg`,
            `${BASE_URL}img/Policy_Boi_mobile_screenshots/Policy_Boi_mobile_screenshot_2.jpeg`, 
            `${BASE_URL}img/Policy_Boi_mobile_screenshots/Policy_Boi_mobile_screenshot_3.jpeg`,
            `${BASE_URL}img/Policy_Boi_mobile_screenshots/Policy_Boi_mobile_screenshot_4.jpeg`,
            `${BASE_URL}img/Policy_Boi_mobile_screenshots/Policy_Boi_mobile_screenshot_5.jpeg`
        ],
        stack: ["tailwind", "node", "react", "typescript", "postgres"],
        link: "https://policyboi.vercel.app/",
        app: false
        
    },
    {
        title: "Evernote Replacement",
        description: "After being an Evernote user for years I was dismayed to see that they had dramatically increased their prices. I set out to build my own Evernote and save myself a lot of money. This project hugely improved my full stack capabilities, allowing me to better understand API contracts, Typescript conventions, and Next.js principles.",
        imgs: [
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_1.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_2.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_3.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_4.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_5.png`, 
            ],
        mobileImgs: [ 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_1.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_2.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_3.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_4.png`, 
            `${BASE_URL}img/Notes_app_screenshots/Note_screenshot_5.png`,
        ],
        stack: ["next", "tailwind", "node", "react", "typescript", "postgres"],
        link: "https://github.com/EricMorrisonDev/nevernote",
        app: false
        
    },
    {
        title: "Full Snack",
        description: "An AI-powered meal inspiration app that helps users generate meal ideas based on their pantry ingredients, preferences, or even a simple text prompt. The project grew into a full-stack solution that also lets users save meals and manage grocery lists directly within the app.",
        imgs: [`${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_1.jpeg`, 
            `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_2.jpeg`, 
            `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_3.jpeg`, 
            `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_4.jpeg`, 
            `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_5.jpeg`, 
            `${BASE_URL}img/Fullsnack_screenshots/fullsnack_screenshot_6.jpeg`],
        stack: ["html", "js", "tailwind", "node", "react"],
        link: "https://full-snack-client.onrender.com",
        app: true
        
    },
    
    {
        title: "Do Date",
        description: "A reminder app using aws services such as Cognito, Dynamo, EventBridge, and Lambda. SMS messaging is handled by Twilio. This project allowed me to flex my full stack development skills while also learning Typescript on the fly.",
        imgs: [`${BASE_URL}img/do_date_screenshots/do_date_screenshot_1.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_2.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_3.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_4.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_5.jpeg`],
        stack: ["html", "js", "typescript", "tailwind", "node", "react"],
        link: "https://do-date.vercel.app/",
        app: true
    },
    
]

export const websites = [
    {
        title: "The Hummingbird Pub",
        description: "I completely rebuilt this site from the ground up, making key business information easy to read and navigate while also emphasizing the visual appeal of the location. In order to allow the client to update their own menu prices and business hours without touching any code, I integrated a feature that loads data from a Google sheet, which the owner can update at any time.",
        imgs: [`${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot.jpg`, 
            `${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot_2_small.jpg`, 
            `${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot_3_small.jpg`],
        mobileImgs: [`${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_1.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_2.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_3.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_4.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screensot_5.jpeg`,
        ],
        link: "https://hummingbirdpub.com",
        app: false
    },
    {
        title: "Classroom CEO",
        description: "This is a custom website promoting the release of the new book Classroom CEO from Fangzhou Jiang, co-founder of the edtech company Crimson Education. My goal was to make this site efficient and concise, fitting all of its content into one page without feeling overcrowded. The client and I were both pleased with the results.",
        imgs: [ 
            `${BASE_URL}img/Fangzhou_site_screenshots/FZ_site_screenshot_1.png`, 
            `${BASE_URL}img/Fangzhou_site_screenshots/FZ_site_screenshot_2.png`,
            `${BASE_URL}img/Fangzhou_site_screenshots/FZ_site_screeenshot_3.png`],
        mobileImgs: [`${BASE_URL}img/Fangzhou_site_mobile_screenshots/FZ_site_mobile_screenshot_1.jpg`,
            `${BASE_URL}img/Fangzhou_site_mobile_screenshots/FZ_site_mobile_screenshot_2.jpg`,
            `${BASE_URL}img/Fangzhou_site_mobile_screenshots/FZ_site_mobile_screenshot_3.jpg`,
        ],
        link: "https://www.fangzhoujiang.com/",
        app: false
    },
    {
        title: "Galiano Island Contracting",
        description: "The client had an existing site that was in need of an update. I overhauled the styles, removed unneeded page components, and totally reorganized the spatial layout of the content in only a couple of days' work. The result was a bold, clear, professional style making the project look brand new.",
        imgs: [ 
            `${BASE_URL}img/GIC_desktop_screenshots/GIC_desktop_1.png`, 
            `${BASE_URL}img/GIC_desktop_screenshots/GIC_desktop_2.png`,
            `${BASE_URL}img/GIC_desktop_screenshots/GIC_desktop_3.png`,
            `${BASE_URL}img/GIC_desktop_screenshots/GIC_desktop_4.png`,
            `${BASE_URL}img/GIC_desktop_screenshots/GIC_desktop_5.png`,
        ],
        mobileImgs: [
            `${BASE_URL}img/GIC_Mobile_screenshots/GIC_mobile_1.PNG`,
            `${BASE_URL}img/GIC_Mobile_screenshots/GIC_mobile_2.PNG`,
            `${BASE_URL}img/GIC_Mobile_screenshots/GIC_mobile_3.PNG`,
            `${BASE_URL}img/GIC_Mobile_screenshots/GIC_mobile_4.PNG`,
            `${BASE_URL}img/GIC_Mobile_screenshots/GIC_mobile_5.PNG`,
        ],
        link: "https://www.galianoislandcontracting.ca/",
        app: false
    },
    {
        title: "Max & Moritz",
        description: "Being fully occupied with the day to day operations of the business, the owner did not have time to take pictures for the site. So I went there myself, took a few pictures on my phone, and sourced the best images from all of their social media posts. I took special care to match the subtle vibe and aesthetic of their menu as well.",
        imgs: [`${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Moritz_screenshot_1.jpg`, 
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_moritz_screenshot_2.jpg`, 
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_moritz_screenshot_3.jpg`],
        mobileImgs: [`${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_1.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_2.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_3.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_4.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_5.jpeg`,
        ],
        link: "https://maxandmoritz.netlify.app",
        app: false
    },
    {
        title: "Ixchel",
        description: "This website was also created entirely from media sourced from the client's social platforms. I wanted this site to make use of Ixchel's greatest strengths; the visual appeal of its storefront, decor, and product selection. I felt that the results captured the exuberant energy of Ixchel well.",
        imgs: [`${BASE_URL}img/Ixchel_Screenshots/Ixchel_screenshot_1.jpg`, 
            `${BASE_URL}img/Ixchel_Screenshots/ixchel_screenshot_2.jpg`, 
            `${BASE_URL}img/Ixchel_Screenshots/ixchel_screenshot_3.jpg`],
        mobileImgs: [`${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_1.jpeg`,
            `${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_2.jpeg`,
            `${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_3.jpeg`,
            `${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_4.jpeg`,
        ],
        link: "https://ixchel-galiano.netlify.app",
        app: false
    }

]


export const techLogos = {
    html: `${BASE_URL}img/logos/html_5_logo.png`,
    js: `${BASE_URL}img/logos/JavaScript-logo.png`,
    tailwind: `${BASE_URL}img/logos/tailwind_css_logo.png`,
    css: `${BASE_URL}img/logos/CSS3_logo.svg.png`,
    react: `${BASE_URL}img/logos/react-1-logo-png-transparent.png`,
    typescript: `${BASE_URL}img/logos/Typescript.logo.png`,
    node: `${BASE_URL}img/logos/nodejs_logo.png`,
    next: `${BASE_URL}img/logos/nextjs-icon-dark-background.png`,
    postgres: `${BASE_URL}img/logos/Logo_PostgreSQL.png`
}
    
