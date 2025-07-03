export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  screenshots: string[]
  icon: string
  category: string
  version: string
  lastUpdated: string
  downloads: number
  rating: number
  reviews: number
  downloadUrl: string
  chromeStoreUrl?: string
  githubUrl?: string
  featured: boolean
  tags: string[]
  requirements: string[]
  changelog?: {
    version: string
    date: string
    changes: string[]
  }[]
}

export const products: Product[] = [
  {
    id: "1",
    slug: "productivity-booster",
    name: "Productivity Booster",
    tagline: "Supercharge your browsing productivity",
    description: "A powerful Chrome extension that helps you stay focused and productive while browsing the web.",
    longDescription: `
      <p>Productivity Booster is the ultimate Chrome extension for anyone looking to maximize their productivity while browsing the web. With advanced features like website blocking, time tracking, and focus modes, you'll never lose track of your goals again.</p>
      
      <h3>Why Choose Productivity Booster?</h3>
      <p>In today's digital world, distractions are everywhere. Social media, news sites, and entertainment platforms can easily derail your focus. Productivity Booster gives you the tools to take control of your browsing habits and stay on track.</p>
      
      <h3>Perfect For:</h3>
      <ul>
        <li>Students preparing for exams</li>
        <li>Remote workers staying focused</li>
        <li>Freelancers managing their time</li>
        <li>Anyone looking to reduce digital distractions</li>
      </ul>
    `,
    features: [
      "Block distracting websites during work hours",
      "Track time spent on different websites",
      "Set daily productivity goals",
      "Focus mode with Pomodoro timer",
      "Detailed analytics and reports",
      "Custom website categories",
      "Break reminders",
      "Dark mode support",
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Dashboard",
      "/placeholder.svg?height=400&width=600&text=Settings",
      "/placeholder.svg?height=400&width=600&text=Analytics",
      "/placeholder.svg?height=400&width=600&text=Focus+Mode",
    ],
    icon: "/placeholder.svg?height=128&width=128&text=PB",
    category: "Productivity",
    version: "2.1.0",
    lastUpdated: "Dec 15, 2023",
    downloads: 15420,
    rating: 4.8,
    reviews: 342,
    downloadUrl: "https://chrome.google.com/webstore/detail/productivity-booster/example",
    chromeStoreUrl: "https://chrome.google.com/webstore/detail/productivity-booster/example",
    githubUrl: "https://github.com/yourusername/productivity-booster",
    featured: true,
    tags: ["Productivity", "Focus", "Time Management", "Website Blocker"],
    requirements: ["Chrome 88+", "Storage permission", "Active tab permission"],
    changelog: [
      {
        version: "2.1.0",
        date: "Dec 15, 2023",
        changes: [
          "Added dark mode support",
          "Improved analytics dashboard",
          "Fixed timer synchronization issues",
          "Added new focus sound options",
        ],
      },
      {
        version: "2.0.0",
        date: "Nov 20, 2023",
        changes: ["Complete UI redesign", "Added Pomodoro timer", "New analytics features", "Performance improvements"],
      },
    ],
  },
  {
    id: "2",
    slug: "tab-organizer",
    name: "Smart Tab Organizer",
    tagline: "Never lose a tab again",
    description:
      "Automatically organize and manage your browser tabs with AI-powered categorization and smart grouping.",
    longDescription: `
      <p>Smart Tab Organizer revolutionizes how you manage browser tabs. Using advanced AI algorithms, it automatically categorizes your tabs, creates smart groups, and helps you find what you need instantly.</p>
      
      <h3>The Tab Management Solution You've Been Waiting For</h3>
      <p>If you're like most people, you probably have dozens of tabs open at any given time. Smart Tab Organizer brings order to the chaos with intelligent automation and intuitive organization features.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li>Reduce browser memory usage by up to 60%</li>
        <li>Find any tab in seconds with smart search</li>
        <li>Automatically save and restore tab sessions</li>
        <li>Never lose important tabs again</li>
      </ul>
    `,
    features: [
      "AI-powered tab categorization",
      "Smart tab grouping and colors",
      "Tab search and filtering",
      "Session save and restore",
      "Duplicate tab detection",
      "Tab memory optimization",
      "Custom tab rules",
      "Keyboard shortcuts",
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Tab+Groups",
      "/placeholder.svg?height=400&width=600&text=Search",
      "/placeholder.svg?height=400&width=600&text=Sessions",
      "/placeholder.svg?height=400&width=600&text=Settings",
    ],
    icon: "/placeholder.svg?height=128&width=128&text=STO",
    category: "Productivity",
    version: "1.5.2",
    lastUpdated: "Dec 10, 2023",
    downloads: 8930,
    rating: 4.6,
    reviews: 156,
    downloadUrl: "https://chrome.google.com/webstore/detail/smart-tab-organizer/example",
    chromeStoreUrl: "https://chrome.google.com/webstore/detail/smart-tab-organizer/example",
    githubUrl: "https://github.com/yourusername/smart-tab-organizer",
    featured: false,
    tags: ["Tabs", "Organization", "AI", "Memory Saver"],
    requirements: ["Chrome 90+", "Tabs permission", "Storage permission"],
    changelog: [
      {
        version: "1.5.2",
        date: "Dec 10, 2023",
        changes: [
          "Fixed tab grouping issues",
          "Improved search performance",
          "Added new keyboard shortcuts",
          "Bug fixes and stability improvements",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "password-guardian",
    name: "Password Guardian",
    tagline: "Secure password management made simple",
    description: "A lightweight, secure password manager that generates, stores, and autofills your passwords safely.",
    longDescription: `
      <p>Password Guardian is a privacy-focused password manager built specifically for Chrome users who value security and simplicity. All your passwords are encrypted locally and never leave your device.</p>
      
      <h3>Security You Can Trust</h3>
      <p>Unlike cloud-based password managers, Password Guardian keeps everything local. Your master password never leaves your device, and all data is encrypted using military-grade AES-256 encryption.</p>
      
      <h3>Features That Matter:</h3>
      <ul>
        <li>Zero-knowledge architecture</li>
        <li>Local encryption only</li>
        <li>No subscription fees</li>
        <li>Open source and auditable</li>
      </ul>
    `,
    features: [
      "AES-256 local encryption",
      "Password generation with custom rules",
      "Auto-fill for login forms",
      "Secure password sharing",
      "Biometric authentication",
      "Password strength analysis",
      "Breach monitoring",
      "Export/import functionality",
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600&text=Vault",
      "/placeholder.svg?height=400&width=600&text=Generator",
      "/placeholder.svg?height=400&width=600&text=Autofill",
      "/placeholder.svg?height=400&width=600&text=Security",
    ],
    icon: "/placeholder.svg?height=128&width=128&text=PG",
    category: "Security",
    version: "3.0.1",
    lastUpdated: "Dec 18, 2023",
    downloads: 12750,
    rating: 4.9,
    reviews: 289,
    downloadUrl: "https://chrome.google.com/webstore/detail/password-guardian/example",
    chromeStoreUrl: "https://chrome.google.com/webstore/detail/password-guardian/example",
    githubUrl: "https://github.com/yourusername/password-guardian",
    featured: true,
    tags: ["Security", "Password Manager", "Privacy", "Encryption"],
    requirements: ["Chrome 92+", "Storage permission", "Active tab permission"],
    changelog: [
      {
        version: "3.0.1",
        date: "Dec 18, 2023",
        changes: [
          "Added biometric authentication",
          "Improved autofill accuracy",
          "New password strength meter",
          "Enhanced security features",
        ],
      },
    ],
  },
]

export const productCategories = [
  "All",
  "Productivity",
  "Security",
  "Developer Tools",
  "Social Media",
  "Shopping",
  "Entertainment",
]
