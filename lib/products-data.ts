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
    slug: "nfiller",
    name: "nFiller",
    tagline: "Supercharge your form-filling productivity",
    description: "A powerful Chrome extension that lets you instantly fill form including Stripe payment fields with realistic test data using keyboard shortcuts.",
    longDescription: `
    <p><strong>nFiller</strong> is a robust and developer-friendly Chrome extension designed to save time and boost productivity by automatically filling forms with test or fake data—including complex forms like <strong>Stripe's payment inputs</strong> that other tools can't handle.</p>
    
    <h3>Why Choose nFiller?</h3>
    <p>Unlike typical fake filler extensions, nFiller is optimized to work seamlessly even with secured payment forms like Stripe. Whether you're testing a checkout flow or demoing a product, nFiller gets the job done instantly—no mouse needed.</p>
    
    <h3>Perfect For:</h3>
    <ul>
      <li>Developers testing payment flows</li>
      <li>QA engineers validating form behavior</li>
      <li>Designers creating prototypes</li>
      <li>Anyone tired of typing fake data again and again</li>
    </ul>
    
    <h3>Keyboard Shortcuts:</h3>
    <ul>
      <li><strong>Windows/Linux:</strong> Ctrl + Shift + F</li>
      <li><strong>macOS:</strong> Command + Shift + Y</li>
    </ul>
  `,
    features: [
      "Fills all standard form fields with realistic dummy data",
      "Works with secured inputs like Stripe (e.g., 4242 4242 4242 4242)",
      "Cross-platform keyboard shortcuts",
      "No configuration required—just install and use",
      "Lightweight and free",
      "Privacy-conscious—no data tracking or analytics",
    ],
    screenshots: [
      "https://i.ibb.co/C5VPNmjt/Cyberpunk-2077-Bonjourr-Profile-1024x522.png",
      "https://i.ibb.co/MD0CJh2P/cover-a1b06d54f7.png",
      "https://i.ibb.co/tpd5ZWnr/web-scraping-chrome-extensions-1.png",
      "https://i.ibb.co/xKfNVJP8/Purple-Blue-Modern-Colorful-Start-Coding-Youtube-Thumbnail-1.png",
    ],
    icon: "https://i.ibb.co/BKrsXRgQ/New-Project.png",
    category: "Developer Tools",
    version: "1.3.0",
    lastUpdated: "Jul 15, 2025",
    downloads: 10,
    rating: 4.9,
    reviews: 4,
    downloadUrl: "https://drive.google.com/file/d/12tIbmUCIteFeZ0dKW96tMlry1MzKFM4I/view?usp=sharing",
    chromeStoreUrl: "https://chrome.google.com/webstore/detail/nfiller/your-extension-id",
    githubUrl: "https://github.com/naimsiddiquibd/nfiller",
    featured: true,
    tags: ["Form Autofill", "Developer Tools", "Stripe Testing", "Productivity"],
    requirements: ["Chrome 90+", "Storage permission", "Active tab permission"],
    changelog: [
      {
        version: "1.3.0",
        date: "Jul 15, 2025",
        changes: [
          "Improved compatibility with Stripe Elements",
          "Added support for macOS shortcut (Cmd+Shift+Y)",
          "Bug fixes on multi-step forms",
          "Updated autofill dataset for more realistic data"
        ],
      },
      {
        version: "1.2.0",
        date: "May 28, 2025",
        changes: [
          "Introduced keyboard shortcut for Windows/Linux",
          "Optimized performance for large DOM structures",
          "Fixed minor styling issues on injected helper tooltip"
        ],
      }
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
