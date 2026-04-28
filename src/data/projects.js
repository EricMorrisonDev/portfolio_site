
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
        stack: ["html", "js", "tailwind", "node", "react", "typescript"],
        link: "https://policyboi.vercel.app/",
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
        title: "The Hummingbird Pub",
        description: "Website for a local business built with Tailwind CSS. Integrated a custom Google Apps Script that syncs the site with a Google Sheet, allowing the client to update menu prices and business hours without touching the code.",
        imgs: [`${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot.jpg`, 
            `${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot_2_small.jpg`, 
            `${BASE_URL}img/Hummingbird_Screenshots/Hummingbird_pub_screenshot_3_small.jpg`],
        mobileImgs: [`${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_1.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_2.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_3.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screenshot_4.jpeg`,
            `${BASE_URL}img/Hummingbird_Screenshots/hummingbird_mobile_screenshots/hummingbird_mobile_screensot_5.jpeg`,
        ],
        stack:["html", "js", "tailwind"],
        link: "https://hummingbirdpub.com",
        app: false
    },
    {
        title: "Classroom CEO",
        description: "A custom website promoting the release of the new book Classroom CEO from Fangzhou Jiang, co-founder of the edtech company Crimson Education.",
        imgs: [ 
            `${BASE_URL}img/Fangzhou_site_screenshots/FZ_site_screenshot_1.png`, 
            `${BASE_URL}img/Fangzhou_site_screenshots/FZ_site_screenshot_2.png`,
            `${BASE_URL}img/Fangzhou_site_screenshots/FZ_site_screeenshot_3.png`],
        mobileImgs: [`${BASE_URL}img/Fangzhou_site_mobile_screenshots/FZ_site_mobile_screenshot_1.jpg`,
            `${BASE_URL}img/Fangzhou_site_mobile_screenshots/FZ_site_mobile_screenshot_2.jpg`,
            `${BASE_URL}img/Fangzhou_site_mobile_screenshots/FZ_site_mobile_screenshot_3.jpg`,
        ],
        stack:[],
        link: "https://www.fangzhoujiang.com/",
        app: false
    },
    {
        title: "Do Date",
        description: "A reminder app using aws services such as Cognito, Dynamo, EventBridge, and Lambda. SMS messaging is handled by Twilio. This project allowed me to flex my full stack development skills while also learning Typescript on the fly.",
        imgs: [`${BASE_URL}img/do_date_screenshots/do_date_screenshot_1.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_2.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_3.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_4.jpeg`, `${BASE_URL}img/do_date_screenshots/do_date_screenshot_5.jpeg`],
        stack: ["html", "js", "typescript", "tailwind", "node", "react"],
        link: "https://do-date.vercel.app/",
        app: true
    },
    {
        title: "Max & Moritz",
        description: "Website for a food truck near the ferry terminal on Galiano Island, BC. Built with HTML, JavaScript, and Tailwind CSS, using a minimal design and image assets sourced from the client's Facebook page and my own photography.",
        imgs: [`${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Moritz_screenshot_1.jpg`, 
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_moritz_screenshot_2.jpg`, 
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_moritz_screenshot_3.jpg`],
        mobileImgs: [`${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_1.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_2.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_3.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_4.jpeg`,
            `${BASE_URL}img/Max_and_Moritz_Screenshots/Max_and_Mo_mobile_screenshots/M_and_M_mobile_screenshot_5.jpeg`,
        ],
        stack:["html", "js", "tailwind"],
        link: "https://maxandmoritz.netlify.app",
        app: false
    },
    {
        title: "Ixchel",
        description: "A static website for a local artisan shop. Built entirely with images sourced from the client's Facebook page so they could have a professional online presence with no extra setup. This was my first live project for a real client.",
        imgs: [`${BASE_URL}img/Ixchel_Screenshots/Ixchel_screenshot_1.jpg`, 
            `${BASE_URL}img/Ixchel_Screenshots/ixchel_screenshot_2.jpg`, 
            `${BASE_URL}img/Ixchel_Screenshots/ixchel_screenshot_3.jpg`],
        mobileImgs: [`${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_1.jpeg`,
            `${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_2.jpeg`,
            `${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_3.jpeg`,
            `${BASE_URL}img/Ixchel_Screenshots/Ixchel_Mobile_screenshots/Ixchel_mobile_screenshot_4.jpeg`,
        ],
        stack: ["html", "js", "css"],
        link: "https://ixchel-galiano.netlify.app",
        app: false
    },
]

export const techLogos = {
    html: `${BASE_URL}img/logos/html_5_logo.png`,
    js: `${BASE_URL}img/logos/JavaScript-logo.png`,
    tailwind: `${BASE_URL}img/logos/tailwind_css_logo.png`,
    css: `${BASE_URL}img/logos/CSS3_logo.svg.png`,
    react: `${BASE_URL}img/logos/react-1-logo-png-transparent.png`,
    typescript: `${BASE_URL}img/logos/Typescript.logo.png`,
    node: `${BASE_URL}img/logos/nodejs_logo.png`
}
    
