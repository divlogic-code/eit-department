import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    CreditCard,
    FileText,
    BadgeCheck,
    ShieldAlert,
    BookOpen,
    Users,
    HeartHandshake,
    GraduationCap,
    Newspaper,
    Library,
    BriefcaseBusiness,
} from "lucide-react";

import "./Contact.css";


const quickLinksOne = [
    {
        label: "Pay College Fee",
        url: "https://echeloninstitute.schoolpay.co.in/",
        icon: CreditCard,
    },
    {
        label: "Mandatory Disclosure",
        url: "https://eitfaridabad.com/mandatory-disclosure.php",
        icon: FileText,
    },
    {
        label: "Affiliations & Approvals",
        url: "https://eitfaridabad.com/aicte-approvals.php",
        icon: BadgeCheck,
    },
    {
        label: "Grievance Portal",
        url: "https://eitfaridabad.com/grievance-portal/",
        icon: ShieldAlert,
    },
    {
        label: "Service Rule Book",
        url: "https://eitfaridabad.com/pdf/Service-Rule-Book.pdf",
        icon: BookOpen,
    },
];


const quickLinksTwo = [
    {
        label: "Grievance Redressal Committee",
        url: "https://eitfaridabad.com/grievance-redressal-committee.php",
        icon: ShieldAlert,
    },
    {
        label: "Internal Committee / Women Cell",
        url: "https://eitfaridabad.com/internal-committee-and-women-cell.php",
        icon: HeartHandshake,
    },
    {
        label: "SC/ST Cell",
        url: "https://eitfaridabad.com/sc-st-cell.php",
        icon: Users,
    },
    {
        label: "IQAC",
        url: "https://eitfaridabad.com/iqac-department.php",
        icon: GraduationCap,
    },
    {
        label: "IIC",
        url: "https://eitfaridabad.com/iic-about.php",
        icon: BriefcaseBusiness,
    },
];


const quickLinksThree = [
    {
        label: "Professional Society",
        url: "https://eitfaridabad.com/professional-society.php",
        icon: Users,
    },
    {
        label: "Blog",
        url: "https://eitfaridabad.com/blog/",
        icon: Newspaper,
    },
    {
        label: "EIT Magazine",
        url: "https://eitfaridabad.com/pdf/Eit-Magazine-2025-26.pdf",
        icon: BookOpen,
    },
    {
        label: "Library",
        url: "https://eitfaridabad.com/eit-library.php",
        icon: Library,
    },
    {
        label: "Career @Echelon",
        url: "https://eitfaridabad.com/career.php",
        icon: BriefcaseBusiness,
    },
];


function QuickLinkColumn({ title, links }) {
    return (
        <div className="contact-links-column">

            <div className="contact-links-heading">
                <span></span>
                <h3>{title}</h3>
            </div>

            <div className="contact-links-list">

                {links.map((link) => {

                    const Icon = link.icon;

                    return (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <span className="contact-link-icon">
                                <Icon size={16} strokeWidth={1.8} />
                            </span>

                            <span className="contact-link-text">
                                {link.label}
                            </span>

                            <ExternalLink
                                className="contact-link-arrow"
                                size={14}
                                strokeWidth={1.8}
                            />
                        </a>
                    );
                })}

            </div>
        </div>
    );
}


function Contact() {
    return (
        <main className="contact-page">

            {/* =================================================
                HERO
            ================================================= */}

            <section className="contact-hero">

                <div className="contact-hero-glow"></div>

                <div className="contact-hero-content">

                    <span className="contact-eyebrow">
                        ECHELON INSTITUTE OF TECHNOLOGY
                    </span>

                    <h1>
                        Contact <span>Us</span>
                    </h1>

                    <p>
                        Connect with Echelon Institute of Technology,
                        Faridabad.
                    </p>

                </div>

            </section>


            {/* =================================================
                MAIN CONTACT AREA
            ================================================= */}

            <section className="contact-main">

                <div className="contact-top-grid">

                    {/* BRAND CARD */}

                    <div className="contact-brand-card">

                        <div className="contact-brand-glow"></div>

                        <div className="contact-logo-wrap">
                            <img
                                src="https://eitfaridabad.com/images/White-Logo.webp"
                                alt="Echelon Institute of Technology"
                                className="contact-logo"
                            />
                        </div>

                        <div className="contact-brand-line"></div>

                        <p>
                            Echelon Institute of Technology
                        </p>

                        <span>
                            Faridabad, Haryana
                        </span>

                    </div>


                    {/* CONTACT INFORMATION */}

                    <div className="contact-information">

                        <div className="contact-section-heading">

                            <span className="contact-section-number">
                                01
                            </span>

                            <div>
                                <span>GET IN TOUCH</span>
                                <h2>Contact Information</h2>
                            </div>

                        </div>


                        <div className="contact-info-grid">

                            {/* LOCATION */}

                            <div className="contact-info-card">

                                <div className="contact-info-icon">
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <span className="contact-info-label">
                                        LOCATION
                                    </span>

                                    <p>
                                        Faridabad-121101
                                        <br />
                                        (Delhi NCR), Haryana.
                                    </p>
                                </div>

                            </div>


                            {/* PHONE */}

                            <a
                                href="tel:+919999753763"
                                className="contact-info-card contact-info-card-link"
                            >

                                <div className="contact-info-icon">
                                    <Phone size={21} />
                                </div>

                                <div>
                                    <span className="contact-info-label">
                                        PHONE NUMBER
                                    </span>

                                    <p>
                                        +91-9999753763
                                    </p>
                                </div>

                                <ExternalLink
                                    className="contact-info-arrow"
                                    size={15}
                                />

                            </a>


                            {/* EMAIL */}

                            <a
                                href="mailto:admissions@eitfaridabad.co.in"
                                className="contact-info-card contact-info-card-link"
                            >

                                <div className="contact-info-icon">
                                    <Mail size={21} />
                                </div>

                                <div>
                                    <span className="contact-info-label">
                                        EMAIL ID
                                    </span>

                                    <p>
                                        admissions@eitfaridabad.co.in
                                    </p>
                                </div>

                                <ExternalLink
                                    className="contact-info-arrow"
                                    size={15}
                                />

                            </a>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    QUICK LINKS
                ================================================= */}

                <div className="contact-quick-links">

                    <div className="contact-quick-header">

                        <span className="contact-section-number">
                            02
                        </span>

                        <div>
                            <span>EXPLORE</span>
                            <h2>Quick Links</h2>
                        </div>

                    </div>


                    <div className="contact-links-grid">

                        <QuickLinkColumn
                            title="Quick Links"
                            links={quickLinksOne}
                        />

                        <QuickLinkColumn
                            title="Quick Links"
                            links={quickLinksTwo}
                        />

                        <QuickLinkColumn
                            title="Quick Links"
                            links={quickLinksThree}
                        />

                    </div>

                </div>

            </section>

        </main>
    );
}


export default Contact;