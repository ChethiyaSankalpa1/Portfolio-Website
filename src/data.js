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
    description: 'Responsive React.js & Tailwind CSS e-commerce platform featuring dynamic product catalog, interactive shopping cart, detail pages, and checkout flow.',
    highlights: ['Product search & category filter', 'Cart state management', 'Responsive mobile-first layout', 'Clean component architecture'],
    tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/ChethiyaSankalpa1/Ecommerce-app',
  },
  {
    id: 2,
    title: 'Heart Attack Risk Prediction',
    category: 'Machine Learning',
    description: 'Machine learning project in Python & Jupyter Notebook for processing clinical healthcare datasets, feature engineering, and predictive model training.',
    highlights: ['Healthcare data cleaning & EDA', 'Feature engineering & selection', 'Model training & cross-validation', 'Confusion matrix performance metrics'],
    tags: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/ChethiyaSankalpa1/Hart-Attack-Risk-Prediction',
  },
  {
    id: 3,
    title: 'CoffeeClick Android App',
    category: 'Mobile',
    description: 'Native Android coffee shop application with cart management, size selection (Small/Medium/Large), live price calculation, and order confirmation.',
    highlights: ['Dynamic live price calculation', 'Item size selection & customization', 'Cart item addition & removal', 'Modern Material mobile UI'],
    tags: ['Android Studio', 'Kotlin', 'Mobile App', 'Java'],
    github: 'https://github.com/ChethiyaSankalpa1/CoffeeClick',
  },
  {
    id: 4,
    title: 'News Reporter Mobile App',
    category: 'Mobile',
    description: 'Mobile news-reporting application built with Android Studio delivering real-time article browsing, headlines, and category filtering via REST API.',
    highlights: ['REST API integration & JSON parsing', 'Category filtering & live feed', 'Article detail reader view', 'Clean mobile navigation flow'],
    tags: ['Android Studio', 'Java', 'REST API', 'Mobile App'],
    github: 'https://github.com/ChethiyaSankalpa1/news',
  },
  {
    id: 5,
    title: 'Hardware Management System',
    category: 'Desktop',
    description: 'Desktop management system engineered in C# and .NET for hardware store inventory tracking, stock alerts, sales processing, and supplier records.',
    highlights: ['Inventory & stock level tracking', 'Sales transaction & invoice logging', 'Supplier records & orders', 'Desktop administrative UI'],
    tags: ['C#', '.NET', 'MySQL', 'Desktop App'],
    github: 'https://github.com/ChethiyaSankalpa1/Hardware-Management-System',
  },
  {
    id: 6,
    title: 'Gym Management System',
    category: 'Desktop',
    description: 'Comprehensive fitness center administration application built with Java and database integration to manage member registrations, subscription plans, and payments.',
    highlights: ['Member enrollment & profile management', 'Subscription plans & renewal tracking', 'Database persistence with JDBC', 'Administrative record reporting'],
    tags: ['Java', 'MySQL', 'JDBC', 'Desktop App'],
    github: 'https://github.com/ChethiyaSankalpa1/GYM-_MANAGEMENT-_SYSTEM',
  },
  {
    id: 7,
    title: 'Student Management System',
    category: 'Desktop',
    description: 'Academic data management desktop system developed using Java and NetBeans to manage student enrollment, academic records, and performance tracking.',
    highlights: ['CRUD operations for student records', 'MySQL relational database integration', 'Grade and performance management', 'Administrative data reports'],
    tags: ['Java', 'NetBeans', 'MySQL', 'Desktop App'],
    github: 'https://github.com/ChethiyaSankalpa1/Student-Management-System',
  },
  {
    id: 8,
    title: 'Library Management System',
    category: 'Desktop',
    description: 'Book tracking and library management application developed with database connectivity for book issuance, returns, cataloging, and member administration.',
    highlights: ['Book issuance & returns tracking', 'Member records & membership status', 'Catalog search and book availability', 'Administrative control dashboard'],
    tags: ['Java', 'NetBeans', 'MySQL', 'JDBC'],
    github: 'https://github.com/ChethiyaSankalpa1/Library-Management-System2',
  },
  {
    id: 9,
    title: 'Cafe Management System',
    category: 'Desktop',
    description: 'Point-of-sale and cafe operations management application developed in Java featuring order billing, inventory tracking, and daily sales reporting.',
    highlights: ['Order processing & bill generation', 'Inventory & item availability control', 'Daily sales log & revenue tracking', 'Intuitive Java desktop GUI'],
    tags: ['Java', 'GUI', 'MySQL', 'Desktop App'],
    github: 'https://github.com/ChethiyaSankalpa1/Cafe-Management-System',
  },
  {
    id: 10,
    title: 'School Management System',
    category: 'Desktop',
    description: 'School administration desktop software developed using C# to manage student registrations, teacher records, course allocations, and administrative reports.',
    highlights: ['Student & staff record management', 'Course allocation & grade logging', 'Structured SQL database design', 'Administrative reporting modules'],
    tags: ['C#', '.NET', 'Database', 'Desktop App'],
    github: 'https://github.com/ChethiyaSankalpa1/School-management-System',
  },
  {
    id: 11,
    title: 'Rent-My-Car Platform',
    category: 'Web',
    description: 'Vehicle rental web application featuring vehicle browsing, booking workflow, availability check, and customer reservation management.',
    highlights: ['Vehicle fleet catalog & details', 'Booking & reservation workflow', 'Date-based availability checking', 'Responsive web layout'],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Web App'],
    github: 'https://github.com/ChethiyaSankalpa1/Rent-My-car',
  },
  {
    id: 12,
    title: 'Online Matrimonial Platform',
    category: 'Web',
    description: 'Matchmaking and user profile management web application developed in PHP and MySQL with user authentication, search filters, and member profiles.',
    highlights: ['User registration & secure auth', 'Detailed profile filtering & search', 'Relational database schema', 'Backend CRUD operations'],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Full-Stack'],
    github: 'https://github.com/ChethiyaSankalpa1/online-matrimonial-project-in-php',
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
