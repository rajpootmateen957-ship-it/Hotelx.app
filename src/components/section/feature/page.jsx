import React, { useState } from "react";
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
  ArrowRight,
  CheckCircle2,
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
} from "lucide-react";
import "./feature.css";

// ---- Section content model -------------------------------------------------
// Each nav item drives both the preview mock and the copy beneath it.

const SECTIONS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutGrid,
    heading: "Unified Dashboard",
    copy: "No more isolated restaurant data. Post room charges directly from your cafe or bar point-of-sale straight to the guest's master invoice instantly.",
    mockType: "dashboard",
    stats: [
      { icon: Bookmark, label: "Total Room", value: "3", tone: "uds-tone-red" },
      { icon: LogIn, label: "Check In", value: "1", tone: "uds-tone-emerald" },
      { icon: CheckCircle2, label: "Available Rooms", value: "1", tone: "uds-tone-indigo" },
      { icon: FileBarChart, label: "Total Reservations", value: "1", tone: "uds-tone-slate" },
      { icon: LogOut, label: "Today's Check Out", value: "0", tone: "uds-tone-amber" },
      { icon: Users, label: "Total Staff", value: "1", tone: "uds-tone-red" },
      { icon: Car, label: "Total Vehicle", value: "5", tone: "uds-tone-emerald" },
      { icon: Car, label: "Available Vehicle", value: "5", tone: "uds-tone-emerald" },
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
    copy: "Handle guest arrivals, room assignments, keys, and sudden split-billing upgrades in seconds through an intuitive, visual drag-and-drop room matrix.",
    mockType: "list",
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
    copy: "Empower your cleaning and maintenance crews with mobile alerts. The moment a room is marked clean, the front desk is instantly cleared to check in the next arrival.",
    mockType: "list",
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
    copy: "Upsell high-margin add-ons natively. Track vehicle availability, driver dispatches, fuel logs, and client billing directly inside your master calendar.",
    mockType: "roles",
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
    rows: [
      { name: "Ahmed R. — Electrical", status: "On duty", tone: "uds-tone-emerald" },
      { name: "Sara K. — Plumbing", status: "On duty", tone: "uds-tone-emerald" },
      { name: "Bilal M. — HVAC", status: "Off today", tone: "uds-tone-slate" },
      { name: "Zara N. — General", status: "On call", tone: "uds-tone-indigo" },
    ],
  },
];

// ---- Preview mock renderers -------------------------------------------------

function DashboardMock({ section }) {
  return (
    <div className="uds-stat-grid">
      {section.stats.map((s, i) => (
        <div key={i} className="uds-stat-card">
          <div className={`uds-stat-icon ${s.tone}`}>
            <s.icon size={16} strokeWidth={2.25} />
          </div>
          <div className="uds-stat-value">{s.value}</div>
          <div className="uds-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function ListMock({ rows }) {
  return (
    <div className="uds-mock-list">
      {rows.map((r, i) => (
        <div key={i} className="uds-mock-row">
          <span className="uds-row-name">{r.name}</span>
          <span className={`uds-row-status ${r.tone}`}>{r.status}</span>
        </div>
      ))}
    </div>
  );
}

function TogglesMock({ rows }) {
  return (
    <div className="uds-mock-list">
      {rows.map((r, i) => (
        <div key={i} className="uds-mock-row">
          <span className="uds-row-name">{r.name}</span>
          <div className={`uds-toggle ${r.on ? "is-on" : ""}`}>
            <div className="uds-toggle-knob" />
          </div>
        </div>
      ))}
    </div>
  );
}

function RolesMock({ rows }) {
  return (
    <div className="uds-mock-list">
      {rows.map((r, i) => (
        <div key={i} className="uds-mock-row">
          <div className="uds-role-icon">
            <r.icon size={17} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="uds-role-name">{r.name}</div>
            <div className="uds-role-perms">{r.perms}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BarsMock({ rows }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <div className="uds-bars">
      {rows.map((r, i) => (
        <div key={i} className="uds-bar-col">
          <div className="uds-bar-track">
            <div className="uds-bar-fill" style={{ height: `${(r.value / max) * 100}%` }} />
          </div>
          <span className="uds-bar-label">{r.name}</span>
        </div>
      ))}
    </div>
  );
}

function PreviewMock({ section }) {
  switch (section.mockType) {
    case "dashboard":
      return <DashboardMock section={section} />;
    case "list":
      return <ListMock rows={section.rows} />;
    case "toggles":
      return <TogglesMock rows={section.rows} />;
    case "roles":
      return <RolesMock rows={section.rows} />;
    case "bars":
      return <BarsMock rows={section.rows} />;
    default:
      return null;
  }
}

// ---- Main component ----------------------------------------------------

export default function UnifiedDashboardSection() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const active = SECTIONS.find((s) => s.id === activeId);

  return (
    <div className="uds-page">
      <div className="uds-card">
        {/* Sidebar */}
        <nav className="uds-nav">
          <ul className="uds-nav-list">
            {SECTIONS.map((s) => {
              const isActive = s.id === activeId;
              return (
                <li key={s.id} className="uds-nav-item">
                  <button
                    onClick={() => setActiveId(s.id)}
                    className={`uds-nav-button ${isActive ? "is-active" : ""}`}
                  >
                    <span className="uds-nav-icon-wrap">
                      <s.icon size={15} strokeWidth={2.25} />
                    </span>
                    <span className="uds-nav-label">{s.label}</span>
                    <ArrowRight size={14} className="uds-nav-arrow" />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Content */}
        <div className="uds-content">
          {/* Preview panel */}
          <div className="uds-preview">
            <h3 className="uds-preview-title">{active.label.toUpperCase()}</h3>
            <div className="uds-preview-inner">
              <PreviewMock section={active} />
            </div>
          </div>

          {/* Copy */}
          <div>
            <h2 className="uds-heading">{active.heading}</h2>
            <div className="uds-divider" />
            <p className="uds-copy">{active.copy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}