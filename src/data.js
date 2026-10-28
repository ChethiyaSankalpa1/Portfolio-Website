export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

export const SKILLS = {
  'Programming Languages': [
    'JavaScript', 'Python', 'Java', 'PHP', 'C', 'C++',
  ],
  'Web Development': [
    'React.js', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Express.js',
  ],
  'Mobile & App Dev': [
    'Android Studio', 'Flutter', 'React Native', 'Kotlin',
  ],
  'Databases': [
    'MySQL', 'MongoDB', 'PostgreSQL',
  ],
  'Tools & Platforms': [
    'Git', 'GitHub', 'Figma', 'NetBeans', 'VS Code', 'Postman',
  ],
};

export const SKILL_COLORS = {
  'Programming Languages': 'from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 text-indigo-300',
  'Web Development':        'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 text-cyan-300',
  'Mobile & App Dev':       'from-violet-500/20 to-violet-600/5 border-violet-500/30 text-violet-300',
  'Databases':              'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-300',
  'Tools & Platforms':      'from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-300',
};

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Web App',
    category: 'Web',
    description: 'Responsive React.js & Tailwind CSS e-commerce site with dynamic product listings, a shopping cart, and product detail pages.',
    highlights: ['Product search & filter', 'Cart state management', 'Responsive layout', 'Clean component architecture'],
    tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/ChethiyaSankalpa1',
    image: './assets/project-4.svg',
  },
  {
    id: 2,
    title: 'Heart Attack Risk Prediction',
    category: 'Machine Learning',
    description: 'Python & Jupyter Notebook ML project — healthcare dataset preprocessing, feature engineering, and binary classification model training.',
    highlights: ['Data cleaning & EDA', 'Feature engineering', 'Model training & evaluation', 'Confusion matrix analysis'],
    tags: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/ChethiyaSankalpa1',
    image: './assets/project-5.svg',
  },
  {
    id: 3,
    title: 'Student Management System',
    category: 'Desktop',
    description: 'Academic data management desktop system in Java & NetBeans for managing student enrollment, records, and performance tracking.',
    highlights: ['CRUD operations', 'MySQL integration', 'Grade management', 'Academic records'],
    tags: ['Java', 'NetBeans', 'MySQL'],
    github: 'https://github.com/ChethiyaSankalpa1',
    image: './assets/project-7.svg',
  },
  {
    id: 4,
    title: 'News Reporter Mobile App',
    category: 'Mobile',
    description: 'Android news-reporting app built with Android Studio delivering real-time article browsing, headlines, and category filtering via API.',
    highlights: ['REST API integration', 'Category filtering', 'Article detail view', 'Responsive mobile UI'],
    tags: ['Android Studio', 'Java', 'REST API'],
    github: 'https://github.com/ChethiyaSankalpa1/News-Reporter-Api',
    image: './assets/project-2.png',
  },
  {
    id: 5,
    title: 'Library Management System',
    category: 'Desktop',
    description: 'Book tracking and library management application with database connectivity for issuance, returns, and full catalog administration.',
    highlights: ['Book issuance & returns', 'Member management', 'Search & filter', 'Admin dashboard'],
    tags: ['Java', 'MySQL', 'JDBC'],
    github: 'https://github.com/ChethiyaSankalpa1/Library-Management-System',
    image: './assets/project-1.png',
  },
  {
    id: 6,
    title: 'Cafe Management System',
    category: 'Desktop',
    description: 'Point-of-sale and cafe operations system developed in Java featuring order billing, inventory tracking, and sales reporting.',
    highlights: ['Order management', 'Inventory control', 'Sales reporting', 'Billing system'],
    tags: ['Java', 'GUI', 'MySQL'],
    github: 'https://github.com/ChethiyaSankalpa1/Cafe-Management-System',
    image: './assets/project-3.png',
  },
  {
    id: 7,
    title: 'School Management System',
    category: 'Desktop',
    description: 'School administration app in C# to manage student registration, teacher records, course allocations, and administrative reports.',
    highlights: ['Student registration', 'Teacher records', 'Course allocation', 'Admin reports'],
    tags: ['C#', '.NET', 'Database'],
    github: 'https://github.com/ChethiyaSankalpa1',
    image: './assets/project-6.svg',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Web', 'Mobile', 'Desktop', 'Machine Learning'];

export const EDUCATION = [
  {
    degree: 'Higher National Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    year: '2024 – 2025',
    icon: '🎓',
    color: 'from-indigo-500 to-cyan-500',
  },
  {
    degree: 'Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    year: '2024',
    icon: '📜',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    degree: 'Diploma in Spoken English',
    institution: 'ICBT Campus',
    year: '2024',
    icon: '🗣️',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    degree: 'Certificate in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    year: '2023',
    icon: '🏅',
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: "St. Sylvester's College, Kandy",
    year: '2020 – 2021',
    icon: '📚',
    color: 'from-amber-500 to-orange-500',
  },
  {
    degree: 'G.C.E. Ordinary Level',
    institution: 'Wattegama Central College',
    year: '2018',
    icon: '🏫',
    color: 'from-rose-500 to-pink-500',
  },
];

export const EXPERIENCE = [
  {
    title: 'IT Support',
    company: 'Hostel First Mirissa',
    duration: '6 Months',
    desc: 'Provided IT support: hardware/software troubleshooting, network support, and day-to-day technical issue resolution.',
    color: 'from-cyan-500/25 to-cyan-600/10 border-cyan-500/30',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  },
  {
    title: 'Mobile & Web Developer Intern',
    company: 'Nova Script',
    duration: '6 Months',
    desc: 'Supported software development, testing, deployment, and maintenance across web and mobile projects.',
    color: 'from-indigo-500/25 to-indigo-600/10 border-indigo-500/30',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
  },
  {
    title: 'Sales Member',
    company: 'HNB Assurance PLC, Kandy',
    duration: 'Part-time',
    desc: 'Supported sales activities, client communication, and developed interpersonal and consultative service skills.',
    color: 'from-violet-500/25 to-violet-600/10 border-violet-500/30',
    badge: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
  },
];

export const SOFT_SKILLS = [
  { label: 'Problem Solving', icon: '🧩' },
  { label: 'Teamwork', icon: '🤝' },
  { label: 'Communication', icon: '💬' },
  { label: 'Time Management', icon: '⏰' },
  { label: 'Adaptability', icon: '🔄' },
  { label: 'Attention to Detail', icon: '🔍' },
];

export const LANGUAGES = [
  { lang: 'Sinhala', level: 'Native', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
  { lang: 'English', level: 'Professional Working', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
];
