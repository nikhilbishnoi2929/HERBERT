
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

// export const PLANS_CARD = [
//     {
//         heading: "$5/mo",
//         validation: "Basic",
//         paragraph: "Ideal for newcomers! Get quick and reliable answers to your basic questions about German immigration policies. Perfect for a brief introduction without long-term commitment.",
//         includeText: "What’s included?",
//         rightTick: <PlansSvg />,
//         buttonText: "Upgrade to Basic",
//     },
//     {
//         heading: "$10/mo",
//         validation: "Standard",
//         paragraph: "Your go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers to confidently navigate the German visa process.",
//         includeText: "What’s included?",
//         rightTick: <PlansSvg />,
//         buttonText: "Upgrade to Standard",
//     },
//     {
//         heading: "$20/mo",
//         validation: "Premium",
//         paragraph: "Have Herbert accompany you throughout your entire visa application journey. With extensive message credits, you can ask questions whenever you need, ensuring a smooth and informed experience.",
//         includeText: "What’s included?",
//         rightTick: <PlansSvg />,
//         buttonText: "Upgrade to Premium",
//     },
// ] 
export const Step = ({ number, text }) => (

    <div className="flex items-start space-x-4">
      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
        {number}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );


  

