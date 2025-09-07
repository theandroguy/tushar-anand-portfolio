import { 
  FaReact, 
  FaPhp, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaJava, 
  FaAndroid, 
  FaDatabase, 
  FaFireAlt,
  FaServer, // Using this instead of SiRestapi
  FaGoogle,
  FaStripe
} from 'react-icons/fa';
import { SiTailwindcss, SiPython, SiTensorflow, SiGooglecloud } from 'react-icons/si';

// Define all skills with their properties
const skills = [
  // Programming
  { 
    name: 'Java', 
    icon: FaJava, 
    iconColor: "#007396", 
    level: 'Advanced', 
    category: 'programming',
    color: 'from-blue-600 to-blue-800' 
  },
  { 
    name: 'JavaScript', 
    icon: FaServer, 
    iconColor: "#F7DF1E", 
    level: 'Advanced', 
    category: 'programming',
    color: 'from-yellow-400 to-yellow-600' 
  },
  { 
    name: 'PHP', 
    icon: FaPhp, 
    iconColor: "#777BB4", 
    level: 'Intermediate', 
    category: 'programming',
    color: 'from-purple-400 to-purple-600' 
  },
  { 
    name: 'Python', 
    icon: SiPython, 
    iconColor: "#3776AB", 
    level: 'Intermediate', 
    category: 'programming',
    color: 'from-blue-500 to-blue-700' 
  },
  
  // Frontend & Mobile
  { 
    name: 'ReactJS', 
    icon: FaReact, 
    iconColor: "#61DAFB", 
    level: 'Advanced', 
    category: 'frontend',
    color: 'from-blue-400 to-blue-600' 
  },
  { 
    name: 'HTML5', 
    icon: FaHtml5, 
    iconColor: "#E34F26", 
    level: 'Advanced', 
    category: 'frontend',
    color: 'from-orange-400 to-orange-600' 
  },
  { 
    name: 'CSS3', 
    icon: FaCss3Alt, 
    iconColor: "#1572B6", 
    level: 'Advanced', 
    category: 'frontend',
    color: 'from-blue-400 to-blue-600' 
  },
  { 
    name: 'Tailwind CSS', 
    icon: SiTailwindcss, 
    iconColor: "#06B6D4", 
    level: 'Advanced', 
    category: 'frontend',
    color: 'from-teal-400 to-teal-600' 
  },
  { 
    name: 'Android Development', 
    icon: FaAndroid, 
    iconColor: "#3DDC84", 
    level: 'Advanced', 
    category: 'mobile',
    color: 'from-green-400 to-green-600' 
  },
  
  // Database & Cloud
  { 
    name: 'Firebase', 
    icon: FaFireAlt, 
    iconColor: "#FFCA28", 
    level: 'Advanced', 
    category: 'database',
    color: 'from-yellow-400 to-yellow-600' 
  },
  { 
    name: 'Supabase', 
    icon: FaDatabase, 
    iconColor: "#3ECF8E", 
    level: 'Advanced', 
    category: 'database',
    color: 'from-green-400 to-green-600' 
  },
  { 
    name: 'Google Cloud Console', 
    icon: SiGooglecloud, 
    iconColor: "#4285F4", 
    level: 'Intermediate', 
    category: 'database',
    color: 'from-blue-400 to-blue-600' 
  },
  
  // APIs & Integration
  { 
    name: 'Bunny.net', 
    icon: FaServer, 
    iconColor: "#000000", 
    level: 'Intermediate', 
    category: 'api',
    color: 'from-gray-800 to-gray-600' 
  },
  { 
    name: 'PhonePe', 
    icon: FaGoogle, 
    iconColor: "#56C17F", 
    level: 'Intermediate', 
    category: 'api',
    color: 'from-green-400 to-green-600' 
  },
  { 
    name: 'Stripe', 
    icon: FaStripe, 
    iconColor: "#635BFF", 
    level: 'Intermediate', 
    category: 'api',
    color: 'from-indigo-400 to-indigo-600' 
  },
  { 
    name: 'Zoho Mail API', 
    icon: FaServer, 
    iconColor: "#E4403D", 
    level: 'Intermediate', 
    category: 'api',
    color: 'from-red-400 to-red-600' 
  },
  { 
    name: 'Gemini API', 
    icon: SiTensorflow, 
    iconColor: "#FF6D00", 
    level: 'Intermediate', 
    category: 'api',
    color: 'from-orange-400 to-orange-600' 
  },
  { 
    name: 'Google Maps API', 
    icon: FaGoogle, 
    iconColor: "#4285F4", 
    level: 'Intermediate', 
    category: 'api',
    color: 'from-blue-400 to-blue-600' 
  },
  
  // Tools & Technology
  { 
    name: 'Git', 
    icon: FaGitAlt, 
    iconColor: "#F05032", 
    level: 'Advanced', 
    category: 'tools',
    color: 'from-red-400 to-red-600' 
  },
  { 
    name: 'Android Studio', 
    icon: FaAndroid, 
    iconColor: "#3DDC84", 
    level: 'Advanced', 
    category: 'tools',
    color: 'from-green-400 to-green-600' 
  },
  { 
    name: 'TensorFlow', 
    icon: SiTensorflow, 
    iconColor: "#FF6F00", 
    level: 'Intermediate', 
    category: 'tools',
    color: 'from-orange-400 to-orange-600' 
  }
];

export default skills;