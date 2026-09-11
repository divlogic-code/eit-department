import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import './SitePage.css';

const defaultTabs=['Overview','Highlights','Resources','Related Links'];

export default function SitePage({title,eyebrow='ECHELON INSTITUTE OF TECHNOLOGY',intro,children,links=[],tabs=defaultTabs}){
 const [showSidebar,setShowSidebar]=useState(false);
 useEffect(()=>{const onScroll=()=>setShowSidebar(window.scrollY>window.innerHeight*.55);window.addEventListener('scroll',onScroll);onScroll();return()=>window.removeEventListener('scroll',onScroll)},[]);
 return <div className={`site-page ${showSidebar?'site-sidebar-visible':''}`}>
   <Navbar/>
   <Sidebar tabs={tabs} visible={showSidebar}/>
   <main className="site-main">
    <section className="site-hero"><div className="site-kicker">{eyebrow}</div><h1>{title}</h1>{intro&&<p>{intro}</p>}</section>
    <div className="site-body">{children}{links.length>0&&<div className="site-links">{links.map(([label,to])=><a key={to} href={to} target="_blank" rel="noreferrer">{label}<span>↗</span></a>)}</div>}</div>
   </main>
 </div>
}
export function Cards({items=[]}){return <div className="site-grid">{items.map((x,i)=><article className="site-card" key={i}><span>0{String(i+1).slice(-1)}</span><h3>{x.title||x}</h3>{x.text&&<p>{x.text}</p>}{x.to&&<Link to={x.to}>Explore ↗</Link>}</article>)}</div>}
export function Section({title,children,id}){return <section id={id} className="site-section"><div className="site-section-label">{title}</div>{children}</section>}
