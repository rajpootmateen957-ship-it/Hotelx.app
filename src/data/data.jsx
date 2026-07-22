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
  CheckCircle2,
  MessageSquareText,
  TrendingUp,
  Building2,
  Mail,
  Phone,
  MapPin,
  BadgeCheck,
  ChefHat,
} from "lucide-react";
import { heroImage, officialLogos } from "../assets/images/images.js";

const Facebook = (props) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = (props) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

/* ===========================
   NAVBAR
=========================== */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

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
   PRICING
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

/* ===========================
   FAQ
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

/* ===========================
   FOOTER LINKS
=========================== */

export const socialLinks = [
  { label: "Facebook", href: "#home", icon: Facebook },
  { label: "Instagram", href: "#features", icon: Instagram },
  { label: "X", href: "#testimonials", icon: Twitter },
  { label: "LinkedIn", href: "#pricing", icon: Linkedin },
  { label: "YouTube", href: "#contact", icon: Youtube },
];

export const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const companyLinks = [
  { label: "Clients", href: "#contact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
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
    "Modern hotel management platform for reservations, housekeeping, billing, inventory, and multi-branch operations.",

  productTitle: "Product",
  companyTitle: "Company",

  pakistan: {
    badge: "Pakistan Office",
    title: "Lahore Headquarters",
    address: "Johar Town, Lahore, Pakistan",
    phone: "+92 300 1234567",
    email: "pakistan@hotelx.com",
  },

  saudi: {
    badge: "Saudi Office",
    title: "Riyadh Branch",
    address: "King Fahd Road, Riyadh, Saudi Arabia",
    phone: "+966 50 1234567",
    email: "saudi@hotelx.com",
  },

  copyright: "HotelX. All rights reserved.",
};

/* ===========================
   FEATURES (SECTIONS)
=========================== */

export const SECTIONS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutGrid,

    heading: "Unified Dashboard",

    copy:
      "No more isolated restaurant data. Post room charges directly from your cafe or bar point-of-sale straight to the guest's master account.",

    mockType: "dashboard",

    stats: [
      {
        icon: Bookmark,
        label: "Total Rooms",
        value: "3",
        tone: "uds-tone-red",
      },
      {
        icon: LogIn,
        label: "Today's Check In",
        value: "1",
        tone: "uds-tone-emerald",
      },
      {
        icon: CheckCircle2,
        label: "Available Rooms",
        value: "1",
        tone: "uds-tone-indigo",
      },
      {
        icon: FileBarChart,
        label: "Total Reservations",
        value: "1",
        tone: "uds-tone-slate",
      },
      {
        icon: LogOut,
        label: "Today's Check Out",
        value: "0",
        tone: "uds-tone-amber",
      },
      {
        icon: Users,
        label: "Total Staff",
        value: "1",
        tone: "uds-tone-red",
      },
      {
        icon: Car,
        label: "Total Vehicles",
        value: "5",
        tone: "uds-tone-emerald",
      },
      {
        icon: Car,
        label: "Available Vehicles",
        value: "5",
        tone: "uds-tone-emerald",
      },
      {
        icon: Tag,
        label: "Total Events",
        value: "8",
        tone: "uds-tone-indigo",
      },
      {
        icon: CalendarDays,
        label: "Today's Events",
        value: "0",
        tone: "uds-tone-amber",
      },
      {
        icon: AlertTriangle,
        label: "Pending Events",
        value: "7",
        tone: "uds-tone-red",
      },
      {
        icon: Utensils,
        label: "Food Items",
        value: "26",
        tone: "uds-tone-amber",
      },
      {
        icon: Utensils,
        label: "—",
        value: "0",
        tone: "uds-tone-slate",
      },
      {
        icon: DollarSign,
        label: "—",
        value: "$0",
        tone: "uds-tone-emerald",
      },
      {
        icon: Coins,
        label: "—",
        value: "$0",
        tone: "uds-tone-amber",
      },
      {
        icon: CreditCard,
        label: "—",
        value: "$0",
        tone: "uds-tone-indigo",
      },
    ],
  },

  {
    id: "booking",
    label: "Room Booking",
    icon: CalendarCheck,

    heading: "Room Booking, Start to Finish",

    copy:
      "Manage arrivals, room assignments, keys, and billing with drag-and-drop.",

    mockType: "list",

    rows: [
      {
        name: "Room 204 · Deluxe King",
        status: "Confirmed",
        tone: "uds-tone-emerald",
      },
      {
        name: "Room 118 · Twin",
        status: "Pending",
        tone: "uds-tone-amber",
      },
      {
        name: "Room 302 · Suite",
        status: "Checked In",
        tone: "uds-tone-indigo",
      },
      {
        name: "Room 110 · Standard",
        status: "Available",
        tone: "uds-tone-slate",
      },
    ],
  },

  {
    id: "maintenance",
    label: "Room Maintenance",
    icon: Wrench,

    heading: "Room Maintenance, Tracked",

    copy:
      "Empower your cleaning and maintenance crews with mobile alerts. The moment a room is marked clean.",

    mockType: "list",

    rows: [
      {
        name: "Room 214 · AC Unit",
        status: "In Progress",
        tone: "uds-tone-amber",
      },
      {
        name: "Room 401 · Faucet",
        status: "Assigned",
        tone: "uds-tone-indigo",
      },
      {
        name: "Room 118 · Repainting",
        status: "Scheduled",
        tone: "uds-tone-slate",
      },
      {
        name: "Room 305 · Lock Repair",
        status: "Resolved",
        tone: "uds-tone-emerald",
      },
    ],
  },

  {
    id: "configmenu",
    label: "Configuration Menu",
    icon: SlidersHorizontal,

    heading: "One Menu, Every Setting",

    copy:
      "Configure hotel rooms, floors, amenities, taxes, services, and system settings from one place.",

    mockType: "toggles",

    rows: [
      {
        name: "Seasonal Pricing",
        on: true,
      },
      {
        name: "Auto Tax Calculation",
        on: true,
      },
      {
        name: "Guest Self Check-In",
        on: false,
      },
      {
        name: "Multi Property Sync",
        on: true,
      },
    ],
  },

  {
    id: "access",
    label: "User Access",
    icon: ShieldCheck,

    heading: "Access, Scoped by Role",

    copy:
      "Control employee permissions and secure sensitive hotel operations using role-based access.",

    mockType: "roles",

    rows: [
      {
        name: "Front Desk",
        perms: "Bookings · Check-in/out",
        icon: UserCog,
      },
      {
        name: "Housekeeping",
        perms: "Room Status Only",
        icon: UserCog,
      },
      {
        name: "Manager",
        perms: "Full Access",
        icon: ShieldCheck,
      },
    ],
  },

  {
    id: "configuration",
    label: "Configuration",
    icon: Settings2,
    heading: "Configured Around Your Property",
    copy: "Control employee permissions and secure sensitive hotel operations using role-based access.",
    mockType: "toggles",
    rows: [
      { name: "Default Currency: USD", on: true },
      { name: "Nightly Rate Rounding", on: false },
      { name: "Third-Party OTA Sync", on: true },
      { name: "Automated Invoicing", on: true },
    ],
  },

  {
    id: "reports",
    label: "Reports",
    icon: FileBarChart,
    heading: "Reports That Answer Questions",
    copy: "Generate occupancy, booking, financial, and operational reports to make smarter business decisions.",
    mockType: "bars",
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
    rows: [
      { name: "Minibar — Sparkling Water", status: "In Stock", tone: "uds-tone-emerald" },
      { name: "Spa — Aromatherapy Oil", status: "Low Stock", tone: "uds-tone-amber" },
      { name: "Restaurant — House Wine", status: "In Stock", tone: "uds-tone-emerald" },
      { name: "Gift Shop — Tote Bag", status: "Out of Stock", tone: "uds-tone-red" },
    ],
  },

  {
    id: "vendor",
    label: "Vendor",
    icon: Truck,
    heading: "Vendors, Kept in One Place",
    copy: "Control add-ons, fleet operations, and billing from one dashboard.",
    mockType: "roles",
    rows: [
      { name: "Fresh Farm Co.", perms: "Produce · Weekly Delivery", icon: Truck },
      { name: "Linen Masters", perms: "Linens · Bi-Weekly", icon: Truck },
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
    rows: [
      { name: "Carrier HVAC", perms: "12 Units · Under Warranty", icon: Factory },
      { name: "Whirlpool", perms: "8 Units · Service Due", icon: Factory },
      { name: "Philips Lighting", perms: "Property-Wide", icon: Factory },
    ],
  },

  {
    id: "maintenanceteam",
    label: "Maintenance Team",
    icon: ClipboardList,
    heading: "The Team Behind Every Fix",
    copy: "Organize maintenance staff, assign work orders, and monitor task completion across the property.",
    mockType: "list",
    rows: [
      { name: "Ahmed R. — Electrical", status: "On Duty", tone: "uds-tone-emerald" },
      { name: "Sara K. — Plumbing", status: "On Duty", tone: "uds-tone-emerald" },
      { name: "Bilal M. — HVAC", status: "Off Today", tone: "uds-tone-slate" },
      { name: "Zara N. — General", status: "On Call", tone: "uds-tone-indigo" },
    ],
  },
];

/* ===========================
   COMPETITOR COMPARISON
=========================== */

export const competitorColumns = [
  "HotelX",
  "Cloudbeds",
  "Mews",
  "Hotelogix",
  "eZee",
];

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

/* ===========================
   PRICING DATA
=========================== */

export const pricingData = {
  title: "Choose the",
  titleAccent: "Perfect",
  titleEnd: "Plan",

  subtitle:
    "Simple pricing for hotels of every size. Upgrade whenever your business grows.",

  plans,
};

/* ===========================
   FAQ DATA
=========================== */

export const faqData = {
  title: "Frequently Asked",
  titleAccent: "Questions",

  subtitle:
    "Everything you need to know about HotelX and how it helps modern hotels manage operations.",

  items: FAQS,
};

/* ===========================
   DASHBOARD SECTIONS
=========================== */

export const dashboardSections = SECTIONS;

/* ===========================
   COMPLIANCE LOGOS
=========================== */

export const compliantLogos = officialLogos;

/* ===========================
   TESTIMONIAL DATA
=========================== */

export const testimonialData = {
  title: "Trusted by",
  titleAccent: "Hotels",
  titleEnd: "Worldwide",

  subtitle:
    "Hotel owners and managers rely on HotelX to simplify daily operations.",

  items: testimonials,
};

/* ===========================
   HERO FEATURES
=========================== */

export const heroFeatures = [
  "Cloud Based",
  "Multi-Branch",
  "AI Powered",
  "24/7 Support",
];

/* ===========================
   STATS
=========================== */

export const stats = [
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
   AI SECTION CARDS
=========================== */

export const ctaFeatures = [
  "No Setup Fees",
  "Free Onboarding",
  "Cancel Anytime",
  "24/7 Support",
];

export const aiCards = [
  {
    icon: MessageSquareText,
    title: "Ask in Plain English",
    description:
      "Type a simple question about bookings, revenue, or occupancy and get an instant, accurate answer — no reports to dig through.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Insights",
    description:
      "AI analyzes booking trends and pricing patterns across branches to surface opportunities to boost revenue in real time.",
  },
  {
    icon: Users,
    title: "Guest Intelligence",
    description:
      "Understand guest preferences, repeat visits, and satisfaction trends automatically, without manually cross-referencing profiles.",
  },
  {
    icon: ClipboardList,
    title: "Operations Summary",
    description:
      "Get a daily digest of housekeeping, maintenance, and front-desk activity so managers stay on top of every branch effortlessly.",
  },
];

/* ===========================
   NAVBAR DATA
=========================== */
export const navbarData = {
  logo: "Hotel",
  logoAccent: "X",
  loginText: "Login",
  demoText: "Start a Demo",
};

/* ===========================
   OFFICIAL DATA
=========================== */
export const officialData = {
  title: "Enterprise-Grade",
  titleAccentDark: "Hospitality",
  titleAccentGradient: "Compliance and Security",
  description:
    "Our platform integrates perfectly with global travel networks, local tourism boards, and strict data security protocols to protect guest profiles and transaction integrity across every hotel branch. From booking to checkout, every layer of your operation stays compliant, encrypted, and audit-ready — trusted by chains and boutique properties alike.",
};

/* ===========================
   COMPETITOR HEADER DATA
=========================== */
export const competitorHeaderData = {
  titleGradient: "One software",
  titleDark: "For All Needs",
  description:
    "A cleaner, smarter hotel management system built for modern hotel operations.",
};

/* ===========================
   AI SECTION DATA
=========================== */
export const aiSectionData = {
  titleDark: "A Smart Hospitality: AI-Driven",
  titleGradient: "Hotel Operations",
  description:
    "HotelX AI helps managers understand bookings, guests, revenue, commissions, and daily operations through simple commands — turning scattered front-desk data into clear, actionable answers your whole team can act on in seconds, from any device, at any hotel branch.",
};

/* ===========================
   CONTACT DATA
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
   CTA DATA
=========================== */
export const ctaSectionData = {
  badge: "HOTELX MANAGEMENT PLATFORM",
  titleDark: "Ready to replace",
  titleGradient: "your fragmented hotel tools with a high-performance system?",
  description:
    "Manage reservations, rooms, guests, billing, housekeeping, and reports from one elegant hotel management system.",
  buttonText: "Schedule demo",
};