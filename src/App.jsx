import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import IntroLoader from "./components/IntroLoader/IntroLoader";

import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";

import AboutEchelon from "./AboutUs/AboutEchelon";
import Chairman from "./AboutUs/Chairman";
import Director from "./AboutUs/Director";
import BoardOfGovernors from "./AboutUs/BoardOfGovernors";
import Affiliations from "./AboutUs/Affiliations";
import Philosophy from "./AboutUs/Philosophy";
import ISO from "./AboutUs/ISO";

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

import Contact from "./Contact/Contact";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

import "./styles/CSS.css";


/* =========================================================
   FIXED PAGE BACKGROUND VIDEO
   ========================================================= */

function PageBackgroundVideo() {
  const location = useLocation();

  const videoRef = useRef(null);
  const lastProgressRef = useRef(-1);
  const frameRef = useRef(null);

  /*
   * Select the background video based on the current route.
   *
   * HOME
   * /
   * /videos/background.mp4
   *
   * ABOUT EIT
   * /about-eit
   * /videos/1.mp4
   */

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about-eit";

  const videoSource = isHome
    ? "/videos/background.mp4"
    : isAbout
    ? "/videos/1.mp4"
    : null;


  /* =========================================================
     SCROLL VIDEO CONTROL
     ========================================================= */

  useEffect(() => {
    if (!videoSource) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    const updateVideo = () => {
      if (
        !video.duration ||
        !Number.isFinite(video.duration)
      ) {
        return;
      }

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight;

      const viewportHeight =
        window.innerHeight;

      const maxScroll =
        documentHeight - viewportHeight;

      const progress =
        maxScroll > 0
          ? Math.min(
              Math.max(
                scrollTop / maxScroll,
                0
              ),
              1
            )
          : 0;

      /*
       * Avoid unnecessary currentTime updates.
       */

      if (
        Math.abs(
          progress -
            lastProgressRef.current
        ) < 0.0005
      ) {
        return;
      }

      lastProgressRef.current =
        progress;

      /*
       * Scroll position controls
       * the video timeline.
       */

      video.currentTime =
        progress *
        video.duration;
    };

    const handleScroll = () => {
      /*
       * Only one animation frame at a time.
       */

      if (
        frameRef.current !== null
      ) {
        return;
      }

      frameRef.current =
        requestAnimationFrame(() => {
          updateVideo();

          frameRef.current =
            null;
        });
    };

    const handleResize = () => {
      lastProgressRef.current = -1;

      updateVideo();
    };

    const handleLoadedMetadata = () => {
      /*
       * The video NEVER autoplay.
       */

      video.pause();

      video.currentTime = 0;

      lastProgressRef.current = -1;

      updateVideo();
    };

    /*
     * Force the video to remain paused.
     */

    video.pause();

    video.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    /*
     * If metadata is already loaded,
     * initialize immediately.
     */

    if (
      video.readyState >= 1
    ) {
      handleLoadedMetadata();
    }

    return () => {
      video.pause();

      video.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      if (
        frameRef.current !== null
      ) {
        cancelAnimationFrame(
          frameRef.current
        );

        frameRef.current = null;
      }
    };
  }, [videoSource]);


  /*
   * Routes other than Home and About
   * do not get a background video.
   */

  if (!videoSource) {
    return null;
  }

  return (
    <div
      className="site-background-video"
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source
          src={videoSource}
          type="video/mp4"
        />
      </video>

      <div className="site-background-overlay" />
    </div>
  );
}


/* =========================================================
   APP CONTENT
   ========================================================= */

function AppContent() {
  return (
    <>
      {/* =====================================================
          GLOBAL FIXED BACKGROUND VIDEO

          IMPORTANT:
          This MUST remain outside .eit-route-page.
      ===================================================== */}

      <PageBackgroundVideo />


      {/* =====================================================
          SITE CONTENT
      ===================================================== */}

      <div className="eit-site-content">

        <ScrollToTop />

        <Navbar />


        {/* =================================================
            ROUTES
        ================================================= */}

        <div className="eit-route-page">

          <Routes>

            {/* =================================================
                HOME
            ================================================= */}

            <Route
              path="/"
              element={<Home />}
            />


            {/* =================================================
                ABOUT EIT
            ================================================= */}

            <Route
              path="/about-eit"
              element={<AboutEchelon />}
            />

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
              element={<ISO />}
            />

            <Route
              path="/philosophy"
              element={<Philosophy />}
            />


            {/* =================================================
                ACADEMICS
            ================================================= */}

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


            {/* =================================================
                ADMISSIONS
            ================================================= */}

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


            {/* =================================================
                DEPARTMENTS
            ================================================= */}

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


            {/* =================================================
                PLACEMENT
            ================================================= */}

            <Route
              path="/placement"
              element={<Overview />}
            />

            <Route
              path="/message-from-head-tp"
              element={<MessageFromHeadTP />}
            />

            <Route
              path="/policy-of-placement"
              element={<PolicyOfPlacement />}
            />

            <Route
              path="/placement-process"
              element={<ProcessOfPlacement />}
            />

            <Route
              path="/students-speak"
              element={<StudentsSpeak />}
            />

            <Route
              path="/highest-performers"
              element={<HighestPerformers />}
            />

            <Route
              path="/placement-gallery"
              element={<PlacementGallery />}
            />

            <Route
              path="/recruiters"
              element={<Recruiters />}
            />

            <Route
              path="/placement-mous"
              element={<MOUs />}
            />

            <Route
              path="/industrial-visits"
              element={<IndustrialVisits />}
            />

            <Route
              path="/industry-expert-lectures"
              element={<IndustryExpertLectures />}
            />

            <Route
              path="/hr-conclave"
              element={<HRConclave />}
            />

            <Route
              path="/mega-job-fair"
              element={<MegaJobFair />}
            />

            <Route
              path="/recruiters-speak"
              element={<RecruitersSpeak />}
            />

            <Route
              path="/upcoming-events"
              element={<UpcomingEvents />}
            />

            <Route
              path="/skill-development"
              element={<SkillDevelopment />}
            />

            <Route
              path="/placement-brochure"
              element={<PlacementBrochure />}
            />


            {/* =================================================
                RESEARCH
            ================================================= */}

            <Route
              path="/research"
              element={<RDCommittee />}
            />

            <Route
              path="/research/journal-papers"
              element={<JournalPapers />}
            />

            <Route
              path="/research/book-chapters"
              element={<BookChapters />}
            />

            <Route
              path="/research/patents"
              element={<Patents />}
            />

            <Route
              path="/research/mous"
              element={<ResearchMOUs />}
            />

            <Route
              path="/research/fdps"
              element={<FDPs />}
            />

            <Route
              path="/research/iic"
              element={<IIC />}
            />

            <Route
              path="/research/edc"
              element={<EDC />}
            />

            <Route
              path="/research/ipr"
              element={<IPR />}
            />

            <Route
              path="/research/conferences"
              element={<Conferences />}
            />


            {/* =================================================
                CONTACT
            ================================================= */}

            <Route
              path="/contact"
              element={<Contact />}
            />


            {/* =================================================
                FALLBACK
            ================================================= */}

            <Route
              path="*"
              element={<Home />}
            />

          </Routes>

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Footer />

      </div>
    </>
  );
}


/* =========================================================
   APP SCREEN
   ========================================================= */

function AppScreen() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/", {
      replace: true,
    });

    setEntered(true);
  };

  if (!entered) {
    return (
      <IntroLoader
        onEnter={handleEnter}
      />
    );
  }

  return <AppContent />;
}


/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <BrowserRouter>
      <AppScreen />
    </BrowserRouter>
  );
}

export default App;