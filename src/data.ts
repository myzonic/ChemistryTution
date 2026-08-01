import { FeatureItem, ServiceItem, HowItWorksStep, StatItem, Testimonial, FaqItem, CourseLevelDetail } from './types';

export const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: 'exp-tutor',
    title: 'Experienced Chemistry Tutor',
    description: 'Qualified, experienced, and passionate about helping students achieve their goals.',
    iconName: 'FlaskConical',
    accentColor: 'text-emerald-500 bg-emerald-50 border-emerald-100',
  },
  {
    id: 'one-on-one',
    title: 'Personalised One-To-One Lessons',
    description: 'Tailored lessons to suit each student\'s learning style and academic needs.',
    iconName: 'Target',
    accentColor: 'text-teal-600 bg-teal-50 border-teal-100',
  },
  {
    id: 'online-tuition',
    title: 'Online Tuition',
    description: 'Flexible online sessions from the comfort of your own home.',
    iconName: 'Laptop',
    accentColor: 'text-cyan-600 bg-cyan-50 border-cyan-100',
  },
  {
    id: 'curriculum',
    title: 'Curriculum Focused',
    description: 'Lessons aligned with the senior phase Chemistry curriculum.',
    iconName: 'BookOpen',
    accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    id: 'exam-prep',
    title: 'Exam Preparation',
    description: 'Focused preparation for exams with proven strategies and past papers.',
    iconName: 'Star',
    accentColor: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    id: 'supportive-env',
    title: 'Supportive Environment',
    description: 'A friendly, encouraging space where students feel confident to ask and learn.',
    iconName: 'Heart',
    accentColor: 'text-purple-600 bg-purple-50 border-purple-100',
  },
];

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    id: 'senior-chemistry',
    title: 'Senior Phase Chemistry',
    description: 'Complete support for senior phase Chemistry courses.',
    iconName: 'Atom',
    levelBadge: 'N5 / Higher / Adv Higher',
    detailedTopics: ['Chemical Changes & Structure', 'Nature\'s Chemistry', 'Chemistry in Society', 'Research Skills']
  },
  {
    id: 'exam-prep-service',
    title: 'Exam Preparation',
    description: 'Help with SQA exams, unit tests and final examinations.',
    iconName: 'GraduationCap',
    levelBadge: 'SQA / GCSE / A-Level',
    detailedTopics: ['Past Paper Breakdown', 'Calculation Masterclasses', 'Marking Scheme Insights', 'Timing & Exam Strategy']
  },
  {
    id: 'homework-support',
    title: 'Homework Support',
    description: 'Get help with tricky topics and homework assignments.',
    iconName: 'BookText',
    levelBadge: 'Continuous Support',
    detailedTopics: ['Step-by-step problem solving', 'Mole & Stoichiometry guidance', 'Lab report guidance', 'Concept clarity']
  },
  {
    id: 'revision-sessions',
    title: 'Revision Sessions',
    description: 'Structured revision to strengthen understanding and retention.',
    iconName: 'ClipboardCheck',
    levelBadge: 'Structured Modules',
    detailedTopics: ['Formula summaries', 'Flashcard review', 'Active recall quizzes', 'Common pitfall alerts']
  },
  {
    id: 'one-to-one-tuition',
    title: 'One-to-One Tuition',
    description: 'Individual attention to accelerate progress.',
    iconName: 'UserCheck',
    levelBadge: 'Tailored 1:1 Pace',
    detailedTopics: ['Custom difficulty progression', 'Targeted weak-point remediation', 'Confidence boosting', 'Direct Q&A']
  },
  {
    id: 'online-lessons',
    title: 'Online Lessons',
    description: 'High quality virtual lessons with interactive tools.',
    iconName: 'Monitor',
    levelBadge: 'Interactive Whiteboard',
    detailedTopics: ['Real-time equation drawing', 'PDF session notes emailed after class', 'Screen sharing past papers', 'Flexible scheduling']
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'Initial Consultation',
    description: 'We discuss your goals and current challenges.',
    iconName: 'UserPlus',
  },
  {
    stepNumber: 2,
    title: 'Personal Learning Plan',
    description: 'A tailored plan designed around your needs.',
    iconName: 'FileSpreadsheet',
  },
  {
    stepNumber: 3,
    title: 'Weekly Tuition',
    description: 'Engaging one-to-one lessons focused on understanding and progress.',
    iconName: 'CalendarCheck',
  },
  {
    stepNumber: 4,
    title: 'Exam Success',
    description: 'Build confidence, improve grades and achieve your goals.',
    iconName: 'Trophy',
  },
];

export const STATS_ITEMS: StatItem[] = [
  {
    id: 'stat-1',
    value: '100%',
    label: 'Personalised Lessons',
    iconName: 'Users',
    iconColor: 'text-blue-500 bg-blue-50 border-blue-200',
  },
  {
    id: 'stat-2',
    value: 'Flexible',
    label: 'Online Learning',
    iconName: 'Clock',
    iconColor: 'text-cyan-500 bg-cyan-50 border-cyan-200',
  },
  {
    id: 'stat-3',
    value: 'Exam',
    label: 'Confidence',
    iconName: 'ShieldCheck',
    iconColor: 'text-emerald-500 bg-emerald-50 border-emerald-200',
  },
  {
    id: 'stat-4',
    value: 'Support',
    label: 'Every Step',
    iconName: 'Heart',
    iconColor: 'text-rose-500 bg-rose-50 border-rose-200',
  },
  {
    id: 'stat-5',
    value: 'Results',
    label: 'That Matter',
    iconName: 'Award',
    iconColor: 'text-amber-500 bg-amber-50 border-amber-200',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'emma-s',
    name: 'Emma S.',
    role: 'SQA Higher Student',
    quote: '"Lynsey explains Chemistry in a way that\'s easy to understand. Her lessons really helped me improve my grades and confidence."',
    rating: 5,
    avatarUrl: '/src/assets/images/avatar_emma_1785616654722.jpg',
  },
  {
    id: 'james-m',
    name: 'James M.',
    role: 'National 5 Chemistry Student',
    quote: '"My confidence improved dramatically after just a few lessons. Lynsey is patient, supportive and truly invested in my success."',
    rating: 5,
    avatarUrl: '/src/assets/images/avatar_james_1785616675314.jpg',
  },
  {
    id: 'sophie-r',
    name: 'Sophie R.',
    role: 'Advanced Higher Student',
    quote: '"Excellent tutor! The personalised approach and clear explanations make even the hardest topics much easier."',
    rating: 5,
    avatarUrl: '/src/assets/images/avatar_sophie_1785616691233.jpg',
  },
  {
    id: 'callum-t',
    name: 'Callum T.',
    role: 'Higher Chemistry A Grade',
    quote: '"Passed my Higher Chemistry with an A grade thanks to Lynsey\'s targeted past paper sessions and clear breakdown of calculations."',
    rating: 5,
    avatarUrl: '/src/assets/images/avatar_james_1785616675314.jpg',
  },
  {
    id: 'hannah-b',
    name: 'Hannah B.',
    role: 'Parent of S5 Pupil',
    quote: '"The online whiteboard and digital notes made revision so much simpler. I couldn\'t recommend Lynsey enough to any parent looking for results!"',
    rating: 5,
    avatarUrl: '/src/assets/images/avatar_emma_1785616654722.jpg',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Who is tuition suitable for?',
    answer: 'Tuition is specifically designed for Senior Phase pupils (S4 to S6) studying SQA National 5, SQA Higher, and Advanced Higher Chemistry. We also support students preparing for GCSE and A-Level Chemistry exams.',
  },
  {
    id: 'faq-2',
    question: 'Do you teach online?',
    answer: 'Yes! All lessons are conducted live online using high-definition video conferencing, interactive digital whiteboards, and real-time document sharing. Students receive complete PDF notes of everything written during the lesson.',
  },
  {
    id: 'faq-3',
    question: 'How long are lessons?',
    answer: 'Standard 1-on-1 tuition sessions are 60 minutes long. Intensive past paper workshops and calculation masterclasses can be booked for 90 minutes upon request.',
  },
  {
    id: 'faq-4',
    question: 'How do I book a lesson?',
    answer: 'You can click the "Book a Lesson" button at any time to open our online booking form. Select your Chemistry course level and preferred day/time. Lynsey will review your request and contact you within 24 hours to schedule your free consultation.',
  },
  {
    id: 'faq-5',
    question: 'What subjects do you cover?',
    answer: 'We cover the entire SQA Chemistry specification: Unit 1 Chemical Changes & Structure (periodicity, structure, bonding, moles, enthalpy), Unit 2 Nature\'s Chemistry (esters, fats/oils, proteins, oxidation of food), Unit 3 Chemistry in Society (equilibria, industrial processes, analytical chemistry, stoichiometry), and practical exam technique.',
  },
];

export const COURSE_LEVEL_DETAILS: CourseLevelDetail[] = [
  {
    id: 'national-5',
    title: 'SQA National 5 Chemistry',
    subtitle: 'Building core foundation & exam confidence for S4/S5 pupils',
    targetAudience: 'S4 - S5 Students',
    modules: [
      {
        name: 'Unit 1: Chemical Changes & Structure',
        topics: ['Sub-atomic Particles & Isotopes', 'Covalent & Ionic Bonding', 'Formulae & Mole Calculations', 'Acids, Bases & Neutralisation', 'Rates of Reaction']
      },
      {
        name: 'Unit 2: Nature\'s Chemistry',
        topics: ['Homologous Series (Alkanes, Alkenes, Cycloalkanes)', 'Everyday Consumer Products', 'Energy from Fuels & Alcohols', 'Combustion & Exothermic Reactions']
      },
      {
        name: 'Unit 3: Chemistry in Society',
        topics: ['Metals & Electrochemical Cells', 'Plastics & Polymers', 'Fertilisers & Haber Process', 'Chemical Analysis & Salt Preparation']
      }
    ]
  },
  {
    id: 'higher-chem',
    title: 'SQA Higher Chemistry',
    subtitle: 'Comprehensive mastery of advanced calculations & organic mechanisms',
    targetAudience: 'S5 - S6 Students',
    modules: [
      {
        name: 'Unit 1: Chemical Changes & Structure',
        topics: ['Periodicity & Atomic Radius', 'Covalent Molecular vs Network', 'Intermolecular Forces & Hydrogen Bonding', 'Collision Theory & Reaction Rates', 'Enthalpy & Hess\'s Law']
      },
      {
        name: 'Unit 2: Nature\'s Chemistry',
        topics: ['Systematic Naming & Functional Groups', 'Esters, Fats & Oils', 'Proteins & Enzymes', 'Oxidation of Alcohols & Aldehydes/Ketones', 'Flavor Molecules & Essential Oils', 'Skin Care & Free Radicals']
      },
      {
        name: 'Unit 3: Chemistry in Society',
        topics: ['Getting the Most from Reactants (Stoichiometry)', 'Equilibria & Le Chatelier\'s Principle', 'Chemical Energy & Redox Titrations', 'Chromatography & Volumetric Analysis']
      }
    ]
  },
  {
    id: 'adv-higher',
    title: 'SQA Advanced Higher Chemistry',
    subtitle: 'University-level chemical theory, quantum mechanical models & research',
    targetAudience: 'S6 Students',
    modules: [
      {
        name: 'Unit 1: Inorganic & Physical Chemistry',
        topics: ['Quantum Numbers & Orbital Hybridisation', 'Transition Metals & Crystal Field Theory', 'Chemical Kinetics & Rate Laws', 'Thermodynamics & Entropy ($\Delta G$)', 'Acid-Base Equilibria & pH Calculations']
      },
      {
        name: 'Unit 2: Organic Chemistry & Chemical Analysis',
        topics: ['Reaction Mechanisms (SN1/SN2, Electrophilic Addition)', 'Stereoisomerism (Enantiomers & Diastereomers)', 'Synthesis Pathways', 'Infrared, NMR & Mass Spectrometry', 'Elemental Analysis & Gravimetric Techniques']
      },
      {
        name: 'Unit 3: Researching Chemistry',
        topics: ['Practical Experimental Design', 'Gravimetric & Volumetric Analysis', 'Stoichiometric Calculation Verification', 'Report Writing & Scientific Citation']
      }
    ]
  }
];

export const CONTACT_INFO = {
  name: 'Lynsey Robinson',
  phone: '+44 7708 907247',
  phoneRaw: '+447708907247',
  email: 'larobinson21@hotmail.com',
  location: 'Scotland, UK (Serving all UK & International Online)',
};
