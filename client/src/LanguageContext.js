import { createContext , useState, useEffect} from "react";

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

const aboutUsObject = {
    en: {
      title: "About Us",
      p1: "Founded by Mr. Sinnathamby, Remorquage U.B.A has proudly served the Montreal and Laval communities since 2014, offering reliable and professional towing services. With a focus on customer safety and satisfaction, we've earned the trust of thousands of drivers over the years.",
      p2: "Our fleet of modern flatbed and wheel lift tow trucks is equipped with state-of-the-art technology, allowing us to handle a wide range of situations, from routine breakdowns to more complex towing needs. Whether you're stranded with a flat tire, need a battery boost, or require long-distance towing, our fast and efficient service is designed to minimize your stress and get you back on the road as quickly as possible.",
      p3: "What sets us apart is our commitment to professionalism and our personalized approach to each job. We understand that being stranded on the road can be a daunting experience, so we strive to provide not just a service, but also peace of mind. Our team is multilingual, speaking French, English, and Tamil, ensuring that we can assist a diverse clientele with clear communication and understanding.",
      p4: "At Remorquage U.B.A, we are more than just a towing company—we are your roadside partner, dedicated to keeping you safe and secure, wherever the road takes you."
    },
    fr: {
      title: "À Propos de Nous",
      p1: "Fondé par M. Sinnathamby, Remorquage U.B.A dessert fièrement les communautés de Montréal et de Laval depuis 2014, offrant des services de remorquage fiables et professionnels. En mettant l'accent sur la sécurité et la satisfaction des clients, nous avons gagné la confiance de milliers de conducteurs au fil des ans.",
      p2: "Notre flotte de dépanneuses modernes à plateau et à relevage de roues est équipée de technologies de pointe, nous permettant de gérer une large gamme de situations, des pannes de routine aux besoins de remorquage plus complexes. Que vous soyez en panne avec un pneu crevé, que vous ayez besoin d'un boost de batterie ou que vous nécessitiez un remorquage longue distance, notre service rapide et efficace est conçu pour minimiser votre stress et vous remettre sur la route le plus rapidement possible.",
      p3: "Ce qui nous distingue, c'est notre engagement envers le professionnalisme et notre approche personnalisée pour chaque intervention. Nous comprenons que se retrouver en panne sur la route peut être une expérience intimidante, c'est pourquoi nous nous efforçons de fournir non seulement un service, mais aussi une tranquillité d'esprit. Notre équipe est multilingue, parlant français, anglais et tamoul, ce qui nous permet d'assister une clientèle diversifiée avec une communication claire et une bonne compréhension.",
      p4: "Chez Remorquage U.B.A, nous sommes plus qu'une simple entreprise de remorquage - nous sommes votre partenaire routier, dévoué à assurer votre sécurité, où que la route vous mène."
    }
  };
  
  const contactObject = {
    en: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Enter your message",
    },
    fr: {
      title: "Contactez-nous",
      name: "Nom",
      email: "Courriel",
      message: "Message",
      send: "Envoyer",
      namePlaceholder: "Entrez votre nom",
      emailPlaceholder: "Entrez votre courriel",
      messagePlaceholder: "Entrez votre message",
    }
  };

  const footerObject = {
    en: {
      services: "Services",
      aboutUs: "About Us",
      ourStory: "Our Story",
      contact: "Contact",
      getInTouch: "Get in Touch",
      support: "Support",
      faqs: "FAQs",
      followUs: "Follow Us",
      phone: "Phone",
      allRightsReserved: "All rights reserved."
    },
    fr: {
      services: "Services",
      aboutUs: "À propos de nous",
      ourStory: "Notre histoire",
      contact: "Contact",
      getInTouch: "Contactez-nous",
      support: "Support",
      followUs: "Suivez-nous",
      phone: "Téléphone",
      allRightsReserved: "Tous droits réservés."
    }
  };

// step 2 : creat a provider component
export const LanguageProvider = ({children}) =>{
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || "en";
      });


      useEffect(() => {
        localStorage.setItem('language', language);
      }, [language]);
    
      const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
      };

    return (
    
   <LanguageContext.Provider
value={{
    language,
    setLanguage,
navbarObject: navbarObject[language],  // test 
homePageObject: homePageObject[language],
ourServicesObject: ourServicesObject[language],
aboutUsObject: aboutUsObject[language],  // Add this line,
contactObject: contactObject[language],
footerObject: footerObject[language],
changeLanguage,
}}
>
    {children}
   </LanguageContext.Provider>
    
    );
};