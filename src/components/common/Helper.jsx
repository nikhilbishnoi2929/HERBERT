import Inter_Active from '../../assets/images/svg/InteractiveSvg.svg';
import document_Svg from '../../assets/images/svg/DocumentSvg.svg';
import language_Svg from '../../assets/images/svg/LanguageSvg.svg';
import {PlansSvg } from './Icon'

export const pricingPlans = [
  {
    price: '$5/mo',
    buttonText: 'Basic',
    buttonBgColor: 'bg-black',
    textColor: 'text-white',
    textContent: 'Ideal for newcomers! Get quick and reliable answers to your basic questions about German immigration policies. Perfect for a brief introduction without long-term commitment.',
    messageCount: '10 messages',
    buttonUpgradeText: 'Upgrade to Basic',
  },
  {
    price: '$10/mo',
    buttonText: 'Standard',
    buttonBgColor: 'bg-[#FFE36C]',
    textColor: 'text-black',
    textContent: 'Your go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers to confidently navigate the German visa process.',
    messageCount: '25 messages',
    buttonUpgradeText: 'Upgrade to Standard',
  },
  {
    price: '$20/mo',
    buttonText: 'Premium',
    buttonBgColor: 'bg-orange',
    textColor: 'text-white',
    textContent: 'Have Herbert accompany you throughout your entire visa application journey. With extensive message credits, you can ask questions whenever you need, ensuring a smooth and informed experience.',
    messageCount: '50 messages',
    buttonUpgradeText: 'Upgrade to Premium',
  }
];
export const Step = ({ number, text }) => (

    <div className="flex items-start space-x-4">
      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
        {number}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
export const HERO_TEXT = [
    {
        path: "/",
        label: "Herbert",
    },
    {
        path: "/Sources",
        label: "Sources",
    },
    {
        label: "Our Vision",
    }
];
export const INTER_ACTIVE = [
    {
        img: Inter_Active,
        heading: "Interactive Forms",
        para: "Simplify visa application forms"
    },
    {
        img: document_Svg,
        heading: "Document Checklist",
        para: "Personalized document preparation"
    },
    {
        img: language_Svg,
        heading: "Language Assistance",
        para: "German language skills assessment"
    },

]
export const FAQS = [
    {
        question: "What is Herbert?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "How accurate is the information provided by Herbert?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "How can I access Herbert?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "How can Herbert help me with my visa application?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "Is Herbert available in multiple languages?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
        question: "Can Herbert help me fill out my visa application forms?",
        answer:
            "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    }
];
