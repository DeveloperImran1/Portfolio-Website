import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import './Style.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';

import { ToastContainer } from 'react-toastify';

import { Toaster } from 'react-hot-toast';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import ChatBot from 'react-simple-chatbot';

// for aos animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const steps = [
  {
    id: '1',
    message: 'Hi! I am Imran, your front-end developer. How can I assist you today?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'Scope', label: 'What is the scope of your services?', trigger: '3' },
      { value: 'Experience', label: 'How many years of experience do you have?', trigger: '4' },
    ],
  },
  {
    id: '3',
    message: 'I offer a full range of front-end development services, including HTML, CSS, and React.',
    trigger: '5',
  },
  {
    id: '4',
    message: 'I have over 5 years of experience in front-end development.',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 'Technologies', label: 'What technologies do you use?', trigger: '6' },
      { value: 'Projects', label: 'Can you share some of your past projects?', trigger: '7' },
    ],
  },
  {
    id: '6',
    message: 'I specialize in HTML, CSS, JavaScript, and frameworks like React.',
    trigger: '8',
  },
  {
    id: '7',
    message: 'Sure, I have worked on projects like TouristBook, a comprehensive travel management app.',
    trigger: '8',
  },
  {
    id: '8',
    options: [
      { value: 'Design', label: 'Do you also handle design aspects?', trigger: '9' },
      { value: 'Timeline', label: 'What is your usual project timeline?', trigger: '10' },
    ],
  },
  {
    id: '9',
    message: 'Yes, I collaborate with designers to ensure the best user experience and design integration.',
    trigger: '11',
  },
  {
    id: '10',
    message: 'Project timelines vary, but typically, a small project takes 2-4 weeks.',
    trigger: '11',
  },
  {
    id: '11',
    options: [
      { value: 'Methodology', label: 'What is your development methodology?', trigger: '12' },
      { value: 'Testing', label: 'Do you conduct testing?', trigger: '13' },
    ],
  },
  {
    id: '12',
    message: 'I follow Agile methodology to ensure iterative development and client feedback integration.',
    trigger: '14',
  },
  {
    id: '13',
    message: 'Yes, I conduct thorough testing to ensure high-quality and bug-free delivery.',
    trigger: '14',
  },
  {
    id: '14',
    options: [
      { value: 'Support', label: 'Do you provide post-launch support?', trigger: '15' },
      { value: 'Customization', label: 'Can you handle custom feature requests?', trigger: '16' },
    ],
  },
  {
    id: '15',
    message: 'Absolutely, I provide ongoing support and maintenance post-launch.',
    trigger: '17',
  },
  {
    id: '16',
    message: 'Yes, I can develop custom features tailored to your needs.',
    trigger: '17',
  },
  {
    id: '17',
    options: [
      { value: 'SEO', label: 'Do you optimize for SEO?', trigger: '18' },
      { value: 'Security', label: 'How do you handle security?', trigger: '19' },
    ],
  },
  {
    id: '18',
    message: 'Yes, I follow best practices for SEO to ensure better visibility.',
    trigger: '20',
  },
  {
    id: '19',
    message: 'I implement robust security measures to protect against vulnerabilities.',
    trigger: '20',
  },
  {
    id: '20',
    options: [
      { value: 'Communication', label: 'How do you handle communication?', trigger: '21' },
      { value: 'Updates', label: 'How often do you provide updates?', trigger: '22' },
    ],
  },
  {
    id: '21',
    message: 'I prefer regular communication via email or messaging platforms like Slack.',
    trigger: '23',
  },
  {
    id: '22',
    message: 'I provide updates at least once a week, or more frequently if needed.',
    trigger: '23',
  },
  {
    id: '23',
    options: [
      { value: 'Rates', label: 'What are your rates?', trigger: '24' },
      { value: 'Contract', label: 'Do you work with contracts?', trigger: '25' },
    ],
  },
  {
    id: '24',
    message: 'My rates depend on the project scope and requirements. I can provide a detailed quote.',
    trigger: '26',
  },
  {
    id: '25',
    message: 'Yes, I prefer working with a clear contract to outline project terms and expectations.',
    trigger: '26',
  },
  {
    id: '26',
    options: [
      { value: 'Revisions', label: 'Do you offer revisions?', trigger: '27' },
      { value: 'Feedback', label: 'How do you handle client feedback?', trigger: '28' },
    ],
  },
  {
    id: '27',
    message: 'Yes, I offer revisions to ensure the final product meets your expectations.',
    trigger: '29',
  },
  {
    id: '28',
    message: 'I value client feedback and integrate it to improve the project outcome.',
    trigger: '29',
  },
  {
    id: '29',
    options: [
      { value: 'Tools', label: 'What tools do you use?', trigger: '30' },
      { value: 'Learning', label: 'How do you stay updated with new technologies?', trigger: '31' },
    ],
  },
  {
    id: '30',
    message: 'I use tools like VSCode, Git, and design software like Figma and Adobe XD.',
    trigger: '32',
  },
  {
    id: '31',
    message: 'I regularly participate in online courses, workshops, and follow industry blogs.',
    trigger: '32',
  },
  {
    id: '32',
    options: [
      { value: 'Challenges', label: 'What challenges have you faced?', trigger: '33' },
      { value: 'Strengths', label: 'What are your strengths?', trigger: '34' },
    ],
  },
  {
    id: '33',
    message: 'I’ve faced challenges with tight deadlines but managed to deliver by staying organized and focused.',
    trigger: '35',
  },
  {
    id: '34',
    message: 'My strengths are problem-solving, attention to detail, and strong communication skills.',
    trigger: '35',
  },
  {
    id: '35',
    options: [
      { value: 'Availability', label: 'What is your availability?', trigger: '36' },
      { value: 'Documentation', label: 'Do you provide project documentation?', trigger: '37' },
    ],
  },
  {
    id: '36',
    message: 'I am available to start new projects immediately. Let’s discuss your timeline.',
    trigger: '38',
  },
  {
    id: '37',
    message: 'Yes, I provide detailed documentation for all projects.',
    trigger: '38',
  },
  {
    id: '38',
    options: [
      { value: 'End', label: 'Thank you for the information.', trigger: '39' },
      { value: 'More', label: 'I have more questions.', trigger: '40' },
    ],
  },
  {
    id: '39',
    message: 'You’re welcome! Feel free to reach out if you have any more questions.',
    end: true,
  },
  {
    id: '40',
    message: 'Sure, what else would you like to know?',
    trigger: '2',
  },
];


 

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <RouterProvider router={router} />
      {/* </AuthProvider> */}
      <ToastContainer />
      <Toaster />

      <div>
    <ChatBot steps={steps} floating={true}  
  speechSynthesis={{ enable: false, lang: 'en' }} />
  </div>,
  {/* document.getElementById('root') */}
      {/* <div className="App">
      <AnimatedCursor />
    </div> */}
    </QueryClientProvider>


  </React.StrictMode>,
)
