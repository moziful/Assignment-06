import './App.css'
import Heading from './components/heading';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Stats from './components/stats';
import Card from './components/card';


const products = [
  {
    "id": 1,
    "name": "Resume Pro Builder",
    "description": "Create ATS-friendly professional resumes with premium templates.",
    "price": 9.99,
    "period": "monthly",
    "tag": "popular",
    "tagType": "popular",
    "features": [
      "100+ templates",
      "ATS optimization",
      "Export to PDF",
      "Cover letter builder"
    ],
    "icon": "./assets/products/design-tool.png"
  },
  {
    "id": 2,
    "name": "Portfolio Website Kit",
    "description": "Launch a modern personal portfolio website in minutes.",
    "price": 29.99,
    "period": "one-time",
    "tag": "best seller",
    "tagType": "best seller",
    "features": [
      "Responsive design",
      "Dark mode",
      "SEO optimized",
      "Easy customization"
    ],
    "icon": "./assets/products/operation.png"
  },
  {
    "id": 3,
    "name": "Invoice Manager",
    "description": "Generate and track invoices for freelance clients effortlessly.",
    "price": 14.99,
    "period": "monthly",
    "tag": "new",
    "tagType": "new",
    "features": [
      "Auto invoice generator",
      "Client management",
      "Payment reminders",
      "PDF export"
    ],
    "icon": "./assets/products/portfolio.png"
  },
  {
    "id": 4,
    "name": "Expense Tracker Plus",
    "description": "Track daily expenses with reports and budget insights.",
    "price": 19.99,
    "period": "yearly",
    "tag": "popular",
    "tagType": "popular",
    "features": [
      "Budget categories",
      "Monthly reports",
      "Google Sheet sync",
      "Data export"
    ],
    "icon": "./assets/products/social-media.png"
  },
  {
    "id": 5,
    "name": "TaskFlow Pro",
    "description": "Organize tasks, deadlines, and team projects efficiently.",
    "price": 12.99,
    "period": "monthly",
    "tag": "best seller",
    "tagType": "best seller",
    "features": [
      "Kanban board",
      "Deadline reminders",
      "Priority labels",
      "Team sharing"
    ],
    "icon": "CheckSquare"
  },
  {
    "id": 6,
    "name": "Cloud Storage Box",
    "description": "Secure online storage for documents, images, and backups.",
    "price": 49.99,
    "period": "yearly",
    "tag": "new",
    "tagType": "new",
    "features": [
      "100GB storage",
      "File sharing",
      "Backup restore",
      "End-to-end encryption"
    ],
    "icon": "Cloud"
  },
  {
    "id": 7,
    "name": "Social Media Pack",
    "description": "Ready-made templates for Instagram, Facebook, and LinkedIn.",
    "price": 24.99,
    "period": "one-time",
    "tag": "popular",
    "tagType": "popular",
    "features": [
      "500+ templates",
      "Editable text",
      "Brand kit support",
      "HD export"
    ],
    "icon": "Image"
  },
  {
    "id": 8,
    "name": "Learning Dashboard",
    "description": "Track learning progress, notes, and study streaks.",
    "price": 7.99,
    "period": "monthly",
    "tag": "new",
    "tagType": "new",
    "features": [
      "Progress charts",
      "Topic notes",
      "Daily streak",
      "Exam planner"
    ],
    "icon": "BookOpen"
  },
  {
    "id": 9,
    "name": "AI Content Writer",
    "description": "Generate blogs, captions, and marketing content instantly.",
    "price": 39.99,
    "period": "monthly",
    "tag": "best seller",
    "tagType": "best seller",
    "features": [
      "Blog generation",
      "SEO keywords",
      "Multiple tones",
      "One-click copy"
    ],
    "icon": "PenTool"
  },
  {
    "id": 10,
    "name": "Premium UI Bundle",
    "description": "A collection of modern UI components for web projects.",
    "price": 59.99,
    "period": "one-time",
    "tag": "popular",
    "tagType": "popular",
    "features": [
      "200+ components",
      "Tailwind CSS",
      "Dark/light mode",
      "Lifetime updates"
    ],
    "icon": "Layout"
  }
];


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Stats />
    <div className="flex flex-col justify-center items-center border px-50 mt-20">
      <Heading heading="Premium Digital Tools" subheading="Choose from our curated collection of premium digital products designedto boost your productivity and creativity." />
      <div className="grid grid-cols-3 border gap-6 mt-10">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App
