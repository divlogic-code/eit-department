import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";

import { InstitutionalPage } from "./site/pages";
import AboutEchelon from "./AboutUs/AboutEchelon";
import Chairman from "./AboutUs/Chairman";
import Director from "./AboutUs/Director";
import BoardOfGovernors from "./AboutUs/BoardOfGovernors";
import Affiliations from "./AboutUs/Affiliations";
import Philosophy from "./AboutUs/Philosophy";

import ProgramOffered from "./Academics/ProgramOffered";
import AcademicCalendar from "./Academics/AcademicCalendar";
import SchemeCalendar from "./Academics/SchemeCalendar";
import NBANAAC from "./Academics/NBANAAC";

import WhyEchelon from "./Admissions/WhyEchelon";
import AdmissionBrochure from "./Admissions/AdmissionBrochure";
import DocumentChecklist from "./Admissions/DocumentChecklist";
import EligibilityCriteria from "./Admissions/EligibilityCriteria";
import RefundPolicy from "./Admissions/RefundPolicy";
import AntiRagging from "./Admissions/AntiRagging";
import FeeReimbursement from "./Admissions/FeeReimbursement";
import FeeStructure from "./Admissions/FeeStructure";
import Scholarship from "./Admissions/Scholarship";
import IPUCET from "./Admissions/IPUCET";

import CSE from "./departments/CSE/CSE";
import ECE from "./departments/ECE/ECE";
import Mechanical from "./departments/Mechanical/Mechanical";
import Civil from "./departments/Civil/Civil";
import Humanities from "./departments/Humanities/Humanities";
import Management from "./departments/Management/Management";
import ComputerApplications from "./departments/ComputerApplications/ComputerApplications";

import CSEFaculty from "./departments/CSE/CSEFaculty";
import ECEFaculty from "./departments/ECE/ECEFaculty";
import MechanicalFaculty from "./departments/Mechanical/MechanicalFaculty";
import CivilFaculty from "./departments/Civil/CivilFaculty";
import HumanitiesFaculty from "./departments/Humanities/HumanitiesFaculty";
import ManagementFaculty from "./departments/Management/ManagementFaculty";
import ComputerApplicationsFaculty from "./departments/ComputerApplications/ComputerApplicationsFaculty";

import Overview from "./Placement/Overview";
import MessageFromHeadTP from "./Placement/MessageFromHeadTP";
import PolicyOfPlacement from "./Placement/PolicyOfPlacement";
import ProcessOfPlacement from "./Placement/ProcessOfPlacement";
import StudentsSpeak from "./Placement/StudentsSpeak";
import HighestPerformers from "./Placement/HighestPerformers";
import PlacementGallery from "./Placement/PlacementGallery";
import Recruiters from "./Placement/Recruiters";
import MOUs from "./Placement/MOUs";
import IndustrialVisits from "./Placement/IndustrialVisits";
import IndustryExpertLectures from "./Placement/IndustryExpertLectures";
import HRConclave from "./Placement/HRConclave";
import MegaJobFair from "./Placement/MegaJobFair";
import RecruitersSpeak from "./Placement/RecruitersSpeak";
import UpcomingEvents from "./Placement/UpcomingEvents";
import SkillDevelopment from "./Placement/SkillDevelopment";
import PlacementBrochure from "./Placement/PlacementBrochure";

import RDCommittee from "./Research/RDCommittee";
import JournalPapers from "./Research/JournalPapers";
import BookChapters from "./Research/BookChapters";
import Patents from "./Research/Patents";
import ResearchMOUs from "./Research/MOUs";
import FDPs from "./Research/FDPs";
import IIC from "./Research/IIC";
import EDC from "./Research/EDC";
import IPR from "./Research/IPR";
import Conferences from "./Research/Conferences";

import "./styles/CSS.css";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Contact from "./Contact/Contact";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <Routes>

        {/* =====================================================
            HOME
        ===================================================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =====================================================
            ABOUT US
        ===================================================== */}

        {/* Main About EIT page */}
        <Route
          path="/about-eit"
          element={<AboutEchelon />}
        />

        {/* About Us sub-pages */}
        <Route 
          path="/affiliations" 
          element={<Affiliations />} 
        />

        <Route
          path="/board-of-governors"
          element={<BoardOfGovernors />}
        />

        <Route
          path="/chairman"
          element={<Chairman />}
        />

        <Route
          path="/director"
          element={<Director />}
        />

        <Route
          path="/iso"
          element={<InstitutionalPage page="iso" />}
        />

        <Route
          path="/organisational-structure"
          element={
            <InstitutionalPage page="organisationalStructure" />
          }
        />

        <Route
          path="/philosophy"
          element={<Philosophy />}
        />

        <Route
          path="/vision-mission"
          element={
            <InstitutionalPage page="visionMission" />
          }
        />


        {/* =====================================================
            ACADEMICS
        ===================================================== */}

        <Route
          path="/program-offered"
          element={<ProgramOffered />}
        />

        <Route
          path="/academic-calendar"
          element={<AcademicCalendar />}
        />

        <Route
          path="/scheme-calendar"
          element={<SchemeCalendar />}
        />

        <Route
          path="/nba-naac"
          element={<NBANAAC />}
        />


        {/* =====================================================
            ADMISSIONS
        ===================================================== */}

        <Route
          path="/admission-brochure"
          element={<AdmissionBrochure />}
        />


        <Route
          path="/anti-ragging"
          element={<AntiRagging />}
        />

        <Route
          path="/document-checklist"
          element={<DocumentChecklist />}
        />

        <Route
          path="/eligibility-criteria"
          element={<EligibilityCriteria />}
        />

        <Route
          path="/fee-reimbursement"
          element={<FeeReimbursement />}
        />

        <Route
          path="/fee-structure"
          element={<FeeStructure />}
        />

        <Route
          path="/ipu-cet"
          element={<IPUCET />}
        />

        

        <Route
          path="/refund-policy"
          element={<RefundPolicy />}
        />

        <Route
          path="/scholarship"
          element={<Scholarship />}
        />

        <Route
          path="/why-echelon"
          element={<WhyEchelon />}
        />


        {/* =====================================================
            DEPARTMENTS
        ===================================================== */}

        <Route
          path="/cse"
          element={<CSE />}
        />

        <Route
          path="/cse/faculty"
          element={<CSEFaculty />}
        />

        <Route
          path="/ece"
          element={<ECE />}
        />

        <Route
          path="/ece/faculty"
          element={<ECEFaculty />}
        />

        <Route
          path="/mechanical"
          element={<Mechanical />}
        />

        <Route
          path="/mechanical/faculty"
          element={<MechanicalFaculty />}
        />

        <Route
          path="/civil"
          element={<Civil />}
        />

        <Route
          path="/civil/faculty"
          element={<CivilFaculty />}
        />

        <Route
          path="/humanities"
          element={<Humanities />}
        />

        <Route
          path="/humanities/faculty"
          element={<HumanitiesFaculty />}
        />

        <Route
          path="/management"
          element={<Management />}
        />

        <Route
          path="/management/faculty"
          element={<ManagementFaculty />}
        />

        <Route
          path="/computer-applications"
          element={<ComputerApplications />}
        />

        <Route
          path="/computer-applications/faculty"
          element={<ComputerApplicationsFaculty />}
        />


        {/* =====================================================
            PLACEMENT
        ===================================================== */}

        <Route path="/placement" element={<Overview />} />
        <Route path="/message-from-head-tp" element={<MessageFromHeadTP />} />
        <Route path="/policy-of-placement" element={<PolicyOfPlacement />} />
        <Route path="/placement-process" element={<ProcessOfPlacement />} />
        <Route path="/students-speak" element={<StudentsSpeak />} />
        <Route path="/highest-performers" element={<HighestPerformers />} />
        <Route path="/placement-gallery" element={<PlacementGallery />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/placement-mous" element={<MOUs />} />
        <Route path="/industrial-visits" element={<IndustrialVisits />} />
        <Route path="/industry-expert-lectures" element={<IndustryExpertLectures />} />
        <Route path="/hr-conclave" element={<HRConclave />} />
        <Route path="/mega-job-fair" element={<MegaJobFair />} />
        <Route path="/recruiters-speak" element={<RecruitersSpeak />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/skill-development" element={<SkillDevelopment />} />
        <Route path="/placement-brochure" element={<PlacementBrochure />} />



        {/* =====================================================
            RESEARCH
        ===================================================== */}

        <Route path="/research" element={<RDCommittee />} />
        <Route path="/research/journal-papers" element={<JournalPapers />} />
        <Route path="/research/book-chapters" element={<BookChapters />} />
        <Route path="/research/patents" element={<Patents />} />
        <Route path="/research/mous" element={<ResearchMOUs />} />
        <Route path="/research/fdps" element={<FDPs />} />
        <Route path="/research/iic" element={<IIC />} />
        <Route path="/research/edc" element={<EDC />} />
        <Route path="/research/ipr" element={<IPR />} />
        <Route path="/research/conferences" element={<Conferences />} />


        {/* =====================================================
            OTHER PAGES
        ===================================================== */}

        <Route path="/contact" element={<Contact />} />


        {/* =====================================================
            ICSCCI 2027
        ===================================================== */}

        <Route
          path="/icscci-2027"
          element={
            <InstitutionalPage page="icscci" />
          }
        />

        <Route
          path="/icscci-2027/about"
          element={
            <InstitutionalPage page="icscci" />
          }
        />

        <Route
          path="/icscci-2027/call-for-papers"
          element={
            <InstitutionalPage page="callForPapers" />
          }
        />

        <Route
          path="/icscci-2027/committee"
          element={
            <InstitutionalPage page="committee" />
          }
        />

        <Route
          path="/icscci-2027/important-dates"
          element={
            <InstitutionalPage page="importantDates" />
          }
        />

        <Route
          path="/icscci-2027/paper-submission"
          element={
            <InstitutionalPage page="paperSubmission" />
          }
        />

        <Route
          path="/icscci-2027/registration"
          element={
            <InstitutionalPage page="registration" />
          }
        />

        <Route
          path="/icscci-2027/speakers"
          element={
            <InstitutionalPage page="speakers" />
          }
        />


        {/* =====================================================
            FALLBACK
        ===================================================== */}

        <Route
          path="*"
          element={<Home />}
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;