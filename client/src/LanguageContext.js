import { createContext , useState} from "react";

// Step 1 : Creating the Navbar Context
export const LanguageContext = createContext()
// all of the children of the provider will by passing down the props

const navbarObject = {
    en : {
        home :"Home",
        about :"About Us",
        services: "Services",
        contact : "Contact"

    },
    fr:{
        home :"Accueil",
        about :"À propos",
        services: "Services",
        contact : "Contact"
    }
}

// HOME PAGE 

const homePageObject = {
    en :{
  
h1: "Providing 24/7 towing",
h2: "service with prompt response",
h3: "We are available around the clock to assist you",
h4:"with our fast and reliable towing service.",
box1: "Easy Process",
box2:"Fast Response",
box3: "Safe and Secure",
box4: "Transparent Pricing",
reliable:"Reliable",
requestTitle:"Request a Tow and Know What to Expect"
    },
    fr:{

        h1:"Assurer un remorquage 24h/24",
        h2:"service avec réponse rapide",
        h3:"Nous sommes disponibles 24 heures sur 24 pour vous aider",
        h4:"avec notre service de remorquage rapide et fiable.",
        box1:"Processus Facile",
        box2:"Réponse Rapide",
        box3:"Sûr et Sécurisé",
        box4:"Tarification Transparente",
        reliable:"Fiable",
        requestTitle:"Demandez un remorquage et sachez",
        requestTitle1:"à quoi vous attendre",
    }
}


const ourServicesObject = {
    en: {
        flatTire : {
            service: "Flat-Tire Replacement",
            description: "Get back on your way in no time with a properly installed tire",
        
        },
        battery:{
            service:"Battery test/or boost",
            description:"Have your battery checked or replaced on the spot, wherever you may be",
        },
        motorcycle:{
            service:"Motorcycle Towing",
            description:"we'll come to help even if you're riding a motorcycle",
        
        },
        car:{
            service:"Car Towing",
            description:"Let us give you a lift to your place at the same time of the request",
        }
    },
    fr: {
        flatTire : {
        service: "Remplacement de pneu crevé",
        description: "Reprenez la route rapidement avec un pneu correctement installé",
        },
        battery:{
        service: "Test de batterie ou démarrage",
        description: "Faites vérifier ou remplacer votre batterie sur place, où que vous soyez",
        },
        motorcycle:{
        service: "Remorquage de moto",
        description: "Nous viendrons vous aider même si vous êtes à moto",
        },
        car:{
        service: "Remorquage de voiture",
        description: "Laissez-nous vous ramener chez vous en même temps que la demande",
        }
        }

}



// step 2 : creat a provider component
export const LanguageProvider = ({children}) =>{
    const [language, setLanguage] = useState("en");



    return (
    
   <LanguageContext.Provider
value={{
    language,
    setLanguage,
navbarObject: navbarObject[language],  // test 
homePageObject: homePageObject[language],
ourServicesObject: ourServicesObject[language]}
}
>
    {children}
   </LanguageContext.Provider>
    
    );
};