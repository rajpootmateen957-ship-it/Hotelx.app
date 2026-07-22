import {
  LayoutGrid,
  CalendarCheck,
  Wrench,
  SlidersHorizontal,
  ShieldCheck,
  Settings2,
  FileBarChart,
  Package,
  Truck,
  Factory,
  ClipboardList,
  UserCog,
  Car,
  Bookmark,
  LogIn,
  LogOut,
  Users,
  Tag,
  CalendarDays,
  AlertTriangle,
  Utensils,
  DollarSign,
  Coins,
  CreditCard,
  Zap,
  Sparkles,
  Crown,
  Building2,
  BadgeCheck,
  ChefHat,
  FileText,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { heroImage, featureImages } from "../assets/images/images";

/* ===========================
   NAVBAR
=========================== */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
  { label: "AI Section", href: "#ai-section" },
];

export const navbarData = {
  logo: "Hotel",
  logoAccent: "X",
  loginText: "Login",
  demoText: "Start a Demo",
};

/* ===========================
   HERO
=========================== */
export const heroData = {
  badge: "Built For Modern Hotels",
  title: {
    line1: "The Enterprise Hotel OS:",
    line2: "Connect Reception, Inventory,",
    line3: "and Multi-Branch Hospitality Networks",
  },
  description:
    "Stop losing margins to disconnected hotel software. A single, unified cloud platform built to seamlessly synchronize automated check-ins, staff workflows, food inventory, cafe POS, and car rentals across all your hotel branches. From a solo boutique property to a nationwide chain, every front-desk action, every stock update, and every guest interaction stays perfectly in sync — in real time, on one dashboard.",
  image: heroImage,
  email: "saudi@hotelx.com",
  buttons: {
    primary: "Schedule a Live Hotel Demo",
    secondary: "View System",
  },
};

/* ===========================
   OFFICIAL CERTIFICATIONS
=========================== */
export const officialData = {
  title: "Enterprise-Grade",
  titleAccentDark: "Hospitality",
  titleAccentGradient: "Compliance and Security",
  description:
    "Our platform integrates perfectly with global travel networks, local tourism boards, and strict data security protocols to protect guest profiles and transaction integrity across every hotel branch. From booking to checkout, every layer of your operation stays compliant, encrypted, and audit-ready — trusted by chains and boutique properties alike.",
};

export const officialLogos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmF0mUsuOdwiB6ylsa5NkwUk6VEzDlvxerLgjMKD9kw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQtwOfnMtQaFFadcvYj1SRJbvP6By9_ATYw25KvYKSQ&s=10",
  "https://hotel-x-tau.vercel.app/static/media/owasp.ea51fb06f4cf1c8b0f4f.png",
  "https://hotel-x-tau.vercel.app/static/media/iso.6b28618eba1af6140c56.png",
];

/* ===========================
   COUNTER
=========================== */
export const counterStats = [
  {
    icon: Building2,
    value: 85,
    suffix: "%",
    label: "Front Desk Efficiency",
  },
  {
    icon: BadgeCheck,
    value: 18,
    suffix: "%",
    label: "Revenue Growth",
  },
  {
    icon: ChefHat,
    value: 20,
    suffix: "%",
    label: "Kitchen Waste Reduction",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Centralized Hotel Operations",
  },
];

/* ===========================
   AI SECTION
=========================== */
export const aiSectionData = {
  titleDark: "A Smart Hospitality: AI-Driven",
  titleGradient: "Hotel Operations",
  description:
    "HotelX AI helps managers understand bookings, guests, revenue, commissions, and daily operations through simple commands — turning scattered front-desk data into clear, actionable answers your whole team can act on in seconds, from any device, at any hotel branch.",
};

export const aiCards = [
  {
    icon: FileText,
    title: "Instant RevPAR Optimization",
    description:
      "Maximize room occupancy and RevPAR instantly. Our intelligent engine adjusts room rates in real time based on local market demand, seasonal shifts, and competitor data across every hotel location.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Stock Forecasting",
    description:
      "Let AI analyze active room occupancy levels and past dining habits to forecast exactly how much stock your cafe and restaurant kitchens need to order, cutting food waste up to 20%.",
  },
  {
    icon: Users,
    title: "AI Insights to lower climate",
    description:
      "The platform interfaces with smart utility grids. The moment a guest checks out via their mobile portal, the system automatically triggers Eco-Mode to lower climate control and lighting costs.",
  },
  {
    icon: CalendarCheck,
    title: "AI Booking Analysis",
    description:
      "Handle up to 75% of routine guest requests — like room service orders, Wi-Fi passwords, and late checkout inquiries — instantly in multiple languages without bothering your front desk.",
  },
];

/* ===========================
   UNIFIED DASHBOARD / FEATURES
=========================== */
export const featureSections = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutGrid,
    heading: "Unified Dashboard",
    copy: "No more isolated restaurant data. Post room charges directly from your cafe or bar point-of-sale straight to the guest's master.",
    mockType: "dashboard",
    image: featureImages[0],
    stats: [
      { icon: Bookmark, label: "Total Rooms", value: "3", tone: "uds-tone-red" },
      { icon: LogIn, label: "Today's Check In", value: "1", tone: "uds-tone-emerald" },
      { icon: CheckCircle2, label: "Available Rooms", value: "1", tone: "uds-tone-indigo" },
      { icon: FileBarChart, label: "Total Reservations", value: "1", tone: "uds-tone-slate" },
      { icon: LogOut, label: "Today's Check Out", value: "0", tone: "uds-tone-amber" },
      { icon: Users, label: "Total Staff", value: "1", tone: "uds-tone-red" },
      { icon: Car, label: "Total Vehicles", value: "5", tone: "uds-tone-emerald" },
      { icon: Car, label: "Available Vehicles", value: "5", tone: "uds-tone-emerald" },
      { icon: Tag, label: "Total Events", value: "8", tone: "uds-tone-indigo" },
      { icon: CalendarDays, label: "Today's Events", value: "0", tone: "uds-tone-amber" },
      { icon: AlertTriangle, label: "Pending Events", value: "7", tone: "uds-tone-red" },
      { icon: Utensils, label: "Food Items", value: "26", tone: "uds-tone-amber" },
      { icon: Utensils, label: "—", value: "0", tone: "uds-tone-slate" },
      { icon: DollarSign, label: "—", value: "$0", tone: "uds-tone-emerald" },
      { icon: Coins, label: "—", value: "$0", tone: "uds-tone-amber" },
      { icon: CreditCard, label: "—", value: "$0", tone: "uds-tone-indigo" },
    ],
  },
  {
    id: "booking",
    label: "Room Booking",
    icon: CalendarCheck,
    heading: "Room Booking, Start to Finish",
    copy: "Manage arrivals, room assignments, keys, and billing with drag-and-drop.",
    mockType: "list",
    image: featureImages[1],
    rows: [
      { name: "Room 204 · Deluxe King", status: "Confirmed", tone: "uds-tone-emerald" },
      { name: "Room 118 · Twin", status: "Pending", tone: "uds-tone-amber" },
      { name: "Room 302 · Suite", status: "Checked In", tone: "uds-tone-indigo" },
      { name: "Room 110 · Standard", status: "Available", tone: "uds-tone-slate" },
    ],
  },
  {
    id: "maintenance",
    label: "Room Maintenance",
    icon: Wrench,
    heading: "Room Maintenance, Tracked",
    copy: "Empower your cleaning and maintenance crews with mobile alerts. The moment a room is marked clean.",
    mockType: "list",
    image: featureImages[2],
    rows: [
      { name: "Room 214 · AC unit noise", status: "In Progress", tone: "uds-tone-amber" },
      { name: "Room 401 · Leaky faucet", status: "Assigned", tone: "uds-tone-indigo" },
      { name: "Room 118 · Repainting", status: "Scheduled", tone: "uds-tone-slate" },
      { name: "Room 305 · Lock repair", status: "Resolved", tone: "uds-tone-emerald" },
    ],
  },
  {
    id: "configmenu",
    label: "Configuration Menu",
    icon: SlidersHorizontal,
    heading: "One Menu, Every Setting",
    copy: "Configure hotel rooms, floors, amenities, taxes, services, and system settings from one place.",
    mockType: "toggles",
    image: featureImages[3],
    rows: [
      { name: "Seasonal pricing", on: true },
      { name: "Auto tax calculation", on: true },
      { name: "Guest self check-in", on: false },
      { name: "Multi-property sync", on: true },
    ],
  },
  {
    id: "access",
    label: "User Access",
    icon: ShieldCheck,
    heading: "Access, Scoped by Role",
    copy: "Control employee permissions and secure sensitive hotel operations using role-based access.",
    mockType: "roles",
    image: featureImages[4],
    rows: [
      { name: "Front Desk", perms: "Bookings · Check-in/out", icon: UserCog },
      { name: "Housekeeping", perms: "Room status only", icon: UserCog },
      { name: "Manager", perms: "Full access", icon: ShieldCheck },
    ],
  },
  {
    id: "configuration",
    label: "Configuration",
    icon: Settings2,
    heading: "Configured Around Your Property",
    copy: "Control employee permissions and secure sensitive hotel operations using role-based access.",
    mockType: "toggles",
    image: featureImages[5],
    rows: [
      { name: "Default currency: USD", on: true },
      { name: "Nightly rate rounding", on: false },
      { name: "Third-party OTA sync", on: true },
      { name: "Automated invoicing", on: true },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileBarChart,
    heading: "Reports That Answer Questions",
    copy: "Generate occupancy, booking, financial, and operational reports to make smarter business decisions.",
    mockType: "bars",
    image: featureImages[6],
    rows: [
      { name: "Mon", value: 40 },
      { name: "Tue", value: 65 },
      { name: "Wed", value: 50 },
      { name: "Thu", value: 80 },
      { name: "Fri", value: 95 },
      { name: "Sat", value: 70 },
    ],
  },
  {
    id: "product",
    label: "Product",
    icon: Package,
    heading: "Every Product, One Catalog",
    copy: "Manage restaurant items, minibar products, hotel amenities, pricing, and stock from one inventory system.",
    mockType: "list",
    image: featureImages[7],
    rows: [
      { name: "Minibar — Sparkling water", status: "In stock", tone: "uds-tone-emerald" },
      { name: "Spa — Aromatherapy oil", status: "Low stock", tone: "uds-tone-amber" },
      { name: "Restaurant — House wine", status: "In stock", tone: "uds-tone-emerald" },
      { name: "Gift shop — Tote bag", status: "Out of stock", tone: "uds-tone-red" },
    ],
  },
  {
    id: "vendor",
    label: "Vendor",
    icon: Truck,
    heading: "Vendors, Kept in One Place",
    copy: "Control add-ons, fleet operations, and billing from one dashboard.",
    mockType: "roles",
    image: featureImages[8],
    rows: [
      { name: "Fresh Farm Co.", perms: "Produce · Weekly delivery", icon: Truck },
      { name: "Linen Masters", perms: "Linens · Bi-weekly", icon: Truck },
      { name: "CleanPro Supplies", perms: "Cleaning · Monthly", icon: Truck },
    ],
  },
  {
    id: "manufacturers",
    label: "Manufacturers",
    icon: Factory,
    heading: "Manufacturer Details on File",
    copy: "Store manufacturer details for hotel assets, equipment, furniture, appliances, and vehicles.",
    mockType: "roles",
    image: featureImages[9],
    rows: [
      { name: "Carrier HVAC", perms: "12 units · Under warranty", icon: Factory },
      { name: "Whirlpool", perms: "8 units · Service due", icon: Factory },
      { name: "Philips Lighting", perms: "Property-wide", icon: Factory },
    ],
  },
  {
    id: "maintenanceteam",
    label: "Maintenance Team",
    icon: ClipboardList,
    heading: "The Team Behind Every Fix",
    copy: "Organize maintenance staff, assign work orders, and monitor task completion across the property.",
    mockType: "list",
    image: featureImages[10],
    rows: [
      { name: "Ahmed R. — Electrical", status: "On duty", tone: "uds-tone-emerald" },
      { name: "Sara K. — Plumbing", status: "On duty", tone: "uds-tone-emerald" },
      { name: "Bilal M. — HVAC", status: "Off today", tone: "uds-tone-slate" },
      { name: "Zara N. — General", status: "On call", tone: "uds-tone-indigo" },
    ],
  },
];

/* ===========================
   COMPETITOR COMPARISON
=========================== */
export const competitorColumns = ["HotelX", "Cloudbeds", "Mews", "Hotelogix", "eZee"];

export const competitorRows = [
  {
    capability: "Native Multi-Branch Control",
    values: [true, false, false, false, false],
  },
  {
    capability: "Integrated Cafe & POS Billing",
    values: [true, true, false, true, false],
  },
  {
    capability: "Car Rental & Amenity Sync",
    values: [true, true, true, false, false],
  },
  {
    capability: "Live Housekeeping Mobile App",
    values: [true, false, false, false, true],
  },
  {
    capability: "Room Booking",
    values: [true, true, true, true, true],
  },
];

export const competitorHeaderData = {
  titleGradient: "One software",
  titleDark: "For All Needs",
  description:
    "A cleaner, smarter hotel management system built for modern hotel operations.",
};

/* ===========================
   PRICING DATA
=========================== */
export const plans = [
  {
    icon: Zap,
    badge: "For Small Hotels",
    price: "$49",
    period: "/month",
    name: "Essential Hotel",
    description:
      "Focus: Perfect for independent bed & breakfasts, smaller guesthouses, and boutique hotels looking to digitize their main desk.",
    cta: "Start Essentials",
    features: [
      "Core Room Reservation Matrix",
      "Fast Check-In/Out",
      "Basic Guest Profiles",
      "Housekeeping Tasks",
      "Single Location",
    ],
    popular: false,
  },
  {
    icon: Sparkles,
    badge: "Most Popular",
    price: "$99",
    period: "/month",
    name: "Enterprise Premium",
    description:
      "Engineered for high-occupancy hotels, luxury resorts, and growing multi-branch hospitality groups.",
    cta: "Choose Premium",
    features: [
      "Everything in Essential + Multi-Branch Management (Up to 3 Locations)",
      "Integrated Cafe POS",
      "Car Rental Fleet Module",
      "AI Dynamic Pricing",
      "Native Guest Self-Service Portal",
      "Priority support",
    ],
    popular: true,
  },
  {
    icon: Crown,
    badge: "For Hotel Groups",
    price: "Custom",
    period: "",
    name: "Global Chain Ecosystem",
    description:
      "Tailored for large hotel groups, franchises, and multi-branch networks requiring deep administrative oversight.",
    cta: "Contact Sales",
    features: [
      "Unlimited Hotel Branches",
      "Consolidated Corporate Dashboard",
      "Master Inventory & Shared Procurement",
      "Custom Local Bank API Integrations",
      "Full AI Automation Suite",
      "24/7 Priority SLA Support",
    ],
    popular: false,
  },
];

export const pricingData = {
  title: "Simple",
  titleAccent: "Pricing",
  titleEnd: "For Every Hotel",
  subtitle:
    "Choose the plan that fits your property, from a single boutique hotel to a global chain.",
  plans,
};

/* ===========================
   FAQ DATA
=========================== */
export const FAQS = [
  {
    id: "billing",
    question:
      "Can cafe purchases and car rental charges be added automatically to a guest's final hotel bill?",
    answer:
      "Yes. Our unified architecture automatically routes dining tabs, and car rental expenditures directly to the guest's active digital hotel folio, simplifying checkout down to a single card swipe.",
  },
  {
    id: "multibranch",
    question: "How does the system sync operations and profiles across multiple hotel branches?",
    answer:
      "The platform houses a centralized database matrix. This lets hotel groups share guest histories and loyalty data across branches while keeping individual branch inventories, accounting files, and tax reporting structures completely distinct.",
  },
  {
    id: "mobile",
    question: "Can my housekeeping and maintenance crews update room statuses from their mobile phones?",
    answer:
      "Absolutely. The platform features a responsive, mobile-optimized interface for floor staff. Cleaners can mark a room as \"Cleaned\" or report a maintenance issue, which triggers a live notification at the reception desk instantly.",
  },
  {
    id: "training",
    question: "How long does it take to train front office personnel on this hospitality software?",
    answer:
      "Because the user interface was designed with modern user experience principles, new staff members can master core front-desk workflows—such as reservation adjustments, guest search, and invoice splitting—in less than two hours.",
  },
  {
    id: "inventory",
    question: "Does the food inventory module alert our kitchen manager when stock runs low?",
    answer:
      "Yes. You can define custom minimum stock alert thresholds for critical kitchen and cafe ingredients. When stock dips below these parameters, the system triggers automated reorder notifications to prevent service delays.",
  },
];

export const faqData = {
  title: "Everything you need to",
  titleAccent: "know about HotelX",
  subtitle:
    "Find answers to the most common questions about our hotel management software.",
  items: FAQS,
};

/* ===========================
   TESTIMONIALS
=========================== */
export const testimonials = [
  {
    quote: "The room booking flow is simple, clear, and professional. Our front desk team now handles guest check-ins with ",
    highlight: "much less confusion",
    quoteEnd: ".",
    name: "Sarah Ahmed",
    role: "Operations Manager",
    company: "Four Seasons Hotel",
    initials: "SA",
  },
  {
    quote: "HotelX helped us reduce manual reporting work and gave management ",
    highlight: "better visibility",
    quoteEnd: " into revenue, occupancy, and room status.",
    name: "Bilal Sheikh",
    role: "Resort Manager",
    company: "Marriott",
    initials: "BS",
  },
  {
    quote:
      "Before HotelX, our front desk, cafe, and housekeeping teams were on completely separate applications. Unifying everything into one dashboard completely eliminated walk-in room assignment errors. ",
    highlight: "Daily operations became faster",
    quoteEnd: "",
    name: "Ammar Khan",
    role: "Hotel Owner",
    company: "Sirgis Hotel",
    initials: "AK",
  },
];

export const testimonialData = {
  items: testimonials,
};

/* ===========================
   CONTACT
=========================== */
export const contactData = {
  badge: "Contact Sales",
  title: "Request a Personalized Hotel",
  titleAccent: "Audit & System Architecture Setup",
  description:
    "Tell us about your hotel, and we'll help you find the right HotelX setup for bookings, rooms, billing, staff, and reporting.",
  info: [
    { icon: Mail, text: "pakistan@hotelx.com" },
    { icon: Phone, text: "+92 300 2324443\n+966 50 1234567" },
    { icon: MapPin, text: "Lahore, Pakistan · Makkah, Saudi Arabia" },
  ],
  form: {
    nameLabel: "Your Name",
    namePlaceholder: "Full Name",
    hotelLabel: "Hotel Name",
    hotelPlaceholder: "Hotel Name",
    emailLabel: "Email Address",
    emailPlaceholder: "Professional Email Address",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your hotel requirements...",
    submitText: "Send message",
  },
};

/* ===========================
   CTA
=========================== */
export const ctaFeatures = ["Free demo", "Quick setup", "Live support"];

export const ctaSectionData = {
  badge: "HOTELX MANAGEMENT PLATFORM",
  titleDark: "Ready to replace",
  titleGradient: "your fragmented hotel tools with a high-performance system?",
  description:
    "Manage reservations, rooms, guests, billing, housekeeping, and reports from one elegant hotel management system.",
  buttonText: "Schedule demo",
};

/* ===========================
   FOOTER
=========================== */
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4L15.82 12z" />
  </svg>
);

export const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#home" },
  { icon: InstagramIcon, label: "Instagram", href: "#features" },
  { icon: XIcon, label: "X", href: "#testimonials" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#ai-section" },
  { icon: YoutubeIcon, label: "YouTube", href: "#contact" },
];

export const productLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Section", href: "#ai-section" },
  { label: "Home", href: "#home" },
  { label: "Contact", href: "#contact" },
  { label: "Pricing", href: "#pricing" },
];

export const companyLinks = [
  { label: "Clients", href: "#contact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#contact" },
];

export const bottomLinks = [
  { label: "Privacy", href: "#contact" },
  { label: "Terms", href: "#contact" },
  { label: "Cookies", href: "#contact" },
];

export const footerData = {
  logo: "Hotel",
  logoAccent: "X",
  tagline:
    "A premium hotel management platform built to simplify bookings, billing, housekeeping, reporting, AI automation, and guest care.",
  pakistanOffice: {
    badge: "Pakistan",
    title: "Pakistan Office",
    address: "Johar Town, Lahore, Pakistan",
    phone: "+92 300 1234567",
    email: "pakistan@hotelx.com",
  },
  saudiOffice: {
    badge: "Saudi Arabia",
    title: "Saudi Office",
    address: "Riyadh, Saudi Arabia",
    phone: "+966 50 1234567",
    email: "saudi@hotelx.com",
  },
  copyright: "HotelX. All rights reserved.",
};