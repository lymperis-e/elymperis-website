import{j as t,F as c,a as e,N as p,O as k,r as s,H as w,R as y,b as v,W as _,u as N,B as S,c as G,d as h,e as I,f as x}from"./vendor-56f38e7d.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function d(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=d(o);fetch(o.href,n)}})();function A(){return t(c,{children:[t("nav",{id:"navbar",children:[e(p,{to:"/",className:"nav-link nav-dark",children:"> Home "}),e(p,{to:"/bio",className:"nav-link nav-dark",children:"> Bio"}),e(p,{to:"/projects",className:"nav-link nav-dark",children:"> Projects"}),e(p,{to:"/maps",className:"nav-link nav-dark",children:"> Maps"})]}),e(k,{})]})}const P="/img/linkedin_white.webp",M="/img/github_white.webp",E="/img/researchgate_white.webp",T="/img/email.webp";function j(){return t("div",{id:"social",children:[e("div",{className:"social-btn",children:e("a",{href:"https://www.linkedin.com/in/efstathios-lymperis-975702188/",target:"_blank",role:"button",children:e("img",{className:"social-btn-img rounded-circle ",src:P,alt:"Connect on LinkedIn!",width:"50",height:"50"})})}),e("div",{className:"social-btn",children:e("a",{href:"https://github.com/lymperis-e",target:"_blank",role:"button",children:e("img",{className:"social-btn-img rounded-circle ",src:M,alt:"Let's connect on GitHub!",width:"50",height:"50"})})}),e("div",{className:"social-btn",children:e("a",{href:"https://www.researchgate.net/profile/Efstathios-Lymperis",target:"_blank",role:"button",children:e("img",{className:"social-btn-img rounded-circle ",src:E,alt:"Let's connect on ResearchGate!",width:"50",height:"50"})})}),e("div",{className:"social-btn",children:e("a",{href:"mailto:geo.elymperis@gmail.com",role:"button",children:e("img",{className:"social-btn-img rounded-circle ",src:T,alt:"Send an email!",width:"50",height:"50"})})})]})}const L="/img/profile.webp";function C(){return s.useEffect(()=>{document.querySelector("#profile-card").style.opacity=1}),t("div",{id:"profile-card",children:[t("div",{className:"pane-head",id:"head",children:[e("img",{id:"profileImg",className:"rounded-circle ",src:L,alt:"profile picture"}),e("h1",{className:"funky",style:{marginLeft:"auto",zIndex:1},children:"Efstathios Lymperis"})]}),t("div",{id:"title-pane",children:[t("h3",{children:["Software Engineer ",e("a",{href:"https://www.getmap.eu",target:"_blank",children:"@Geospatial Enabling Technologies"})]}),e("h3",{style:{fontFamily:"'Poiret One', cursive",color:"#004786 !important",maxWidth:"95vw"},children:"MSc Geoinformatics "}),t("div",{className:"pill-container",children:[e("h4",{className:"pill",style:{fontFamily:"'Poiret One', cursive",color:"black"},children:"Web Development"}),e("h4",{className:"pill",style:{fontFamily:"'Poiret One', cursive",color:"black"},children:"Digital Map Design "}),e("h4",{className:"pill",style:{fontFamily:"'Poiret One', cursive",color:"black"},children:"Data Analysis"})]})]}),t("div",{className:"pane-head",children:[e("h5",{className:"typewriter",style:{color:"rgb(0, 0, 0)",fontFamily:"'Poiret One', cursive",marginTop:"1rem"},children:"📍 Thessaloniki & Athens, GR"}),e(j,{})]})]})}function O(i){const[a,d]=s.useState(""),[r,o]=s.useState("");return s.useEffect(()=>{async function n(){const m=await fetch(`/posts/${i.post_md}.md`);m.ok||d("This page does not exist :(");const b=await m.text();d(b)}n()},[]),t(c,{children:[t(w,{children:[e("title",{children:r.title}),e("meta",{name:"description",content:r.description}),e("meta",{name:"keywords",content:r.keywords}),e("meta",{property:"og:title",content:r.title}),e("meta",{property:"og:description",content:r.description}),e("meta",{property:"og:image",content:r.image_url})]}),e("div",{className:"prose prose-md",children:a?e(y,{remarkPlugins:[v],children:a}):e("p",{children:"Loading..."})})]})}function R(){return e(c,{children:e(C,{})})}const B="/img/tunnel.webp",F="/CV.pdf";function q(){return t("div",{id:"bio-container",children:[t("div",{id:"bio-card",children:[e("img",{id:"bio-img",className:"rounded-circle",src:B,alt:"Field trip, undeground works in Pindos, near Metsovo, GR",height:"200",width:"200"}),t("p",{className:"lead",children:["Born in Thessaloniki, in 1997. Always keen on the study of the natural world, as well as informatics & computer programming. Studied ",e("span",{className:"text-warning",children:"Geology and Earth Sciences"})," at the Aristotle University of Thessaloniki, graduating with honours (GPA 8.63/10.00). Actively involved in research on ",e("a",{href:"https://www.researchgate.net/publication/340116525_A_Novel_Semi-Automated_Approach_for_Rockfall_Hazard_Assessment_from_3D_Point_Clouds_A_Post-Failure_Case_on_the_Island_of_Lesvos_Greece",target:"_blank",children:e("span",{className:"text-success",children:"remote sensing and automation"})})," for rockfall modeling, monitoring and hazard assessment. ",e("br",{})," Programming enthusiast, FOSS advocate and active developer, currently working as a GIS engineer and software developer for a surveying engineering firm in Thessaloniki."]})]}),t("a",{id:"download-cv-btn",href:F,target:"_blank",children:[e("i",{className:"fa-solid fa-file-arrow-down"}),"Curriculum Vitae"]})]})}function D(){return e(c,{children:e(q,{})})}const H="/img/github_dark.webp";function f(i){return e("div",{className:"row",children:e("a",{href:i.source_code,target:"_blank",role:"button",style:{margin:"auto"},children:e("img",{className:"opacity-60 hover:opacity-100 transition duration-500 ease-in-out",src:H,width:"50",height:"50"})})})}function u(i){return e(c,{children:e("div",{className:"hero min-h-screen ",children:t("div",{className:"hero-content flex-col lg:flex-row",children:[i.mockup?e(_,{className:"mockup-window border shadow-2xl    ",children:e("img",{src:i.img,className:"p-2 max-w-viewport md:max-w-2xl"})}):e("img",{src:i.img,className:"max-w-viewport rounded-lg shadow-2xl md:max-w-2xl"}),t("div",{children:[e("h1",{className:"text-5xl font-bold",children:i.title}),e("p",{className:"py-6 max-w-sm",children:i.descr}),t("div",{className:"flex items-center",children:[e("a",{className:"btn btn-primary",href:i.link,target:"_blank",children:"More"}),i.source_code&&e(f,{source_code:i.source_code})]})]})]})})})}const Q="/img/projects/opengreekdata.webp",$="/img/projects/greek_data.webp",W="/img/projects/gee_mock.webp",z="/img/projects/frost.webp",g="/img/projects/watershed.webp";function U(){return s.useEffect(()=>{document.querySelector("#project-container").style.backgroundColor="#fffef5"}),e(c,{children:t("div",{id:"project-container",children:[e("h1",{className:"section-title funky",children:"</> FEATURED PROJECTS"}),e(u,{title:"Open Greek Geodata",img:Q,mockup:!0,descr:"A one-stop-shop for greek geodata sources. This project unifies a multitude of government & research-funded sources of geodata related to Greece, and serving them through a lightly customized version of the amazing TerriaJS SDI Portal.",link:"http://data.elymperis.com",source_code:"https://github.com/lymperis-e/greek-open-data-portal"}),e(u,{title:"GreekData QGIS Plugin",img:$,descr:"Integrate open geodata fmro public authorities of Greece into QGIS",link:"https://plugins.qgis.org/plugins/grdata/",source_code:"https://github.com/lymperis-e/Greek-Data-QGIS-Plugin"}),e(u,{title:"Frost Alerts",img:z,mockup:!0,descr:"Alpha version of my current professional project. A frost alerting system for the Ministry of Agriculture of Greece. All rights belong to Geospatial Enabling Technologies and the Ministry of Agriculture",link:"http://frost.minagric.gr",source_code:!1}),e(u,{title:"QGIS Remote DB Plugin",img:g,descr:"A simple plugin to manage SSH connections to remote database servers from QGIS.",link:"/blog/remote_db",source_code:"https://github.com/lymperis-e/qgis_remote_db_plugin"}),e(u,{title:"Earth Engine App",mockup:!1,img:W,descr:"A Proof-Of-Concept application. It enables the calculation of some simple indices from Landsat-8 imagery, by calling Google Earth Engine in the backend. It was developed as a curricular project for a course at the National Technical University of Athens. ",link:"http://earth.elymperis.com",source_code:!1}),e(u,{title:"Watershed Analysis Toolbox",img:g,descr:"A QGIS plugin to automate a great deal of processes required for hydrological analysis, as they are required by Greek law. It includes 4 main modules which perform several tasks, from watershed and drainage delineation to Curve Number estimation and ICN curve parameters generation.",link:"https://plugins.qgis.org/plugins/geomelwatershed-master/",source_code:"https://github.com/lymperis-e/Geomeletitiki-Watershed-Analysis-Toolbox---QGIS-Plugin-"})]})})}function l(i){function a(r){document.querySelector("#project-container").style.backgroundColor="rgb(123, 123, 121)"}function d(r){document.querySelector("#project-container").style.backgroundColor="#fffef5"}return e(c,{children:e("div",{className:"hero min-h-screen ",children:t("div",{className:"hero-content flex-col lg:flex-row",children:[e("a",{href:i.link,target:"_blank",children:e("img",{src:i.mockup,className:"bw-img max-w-m rounded-lg shadow-2xl",height:"400",onMouseEnter:a,onMouseLeave:d})}),t("div",{children:[e("h1",{className:"text-5xl font-bold",children:i.title}),e("p",{className:"py-6 max-w-sm",children:i.descr}),t("div",{className:"flex items-center",children:[e("a",{className:"btn btn-primary",href:i.link,target:"_blank",children:"More"}),i.source_code&&e(f,{source_code:i.source_code})]})]})]})})})}const V="/maps/athens_downtown.webp",J="/maps/mesolongi.webp",K="/maps/trikala.webp",Y="/maps/athens_topo.webp",X="/maps/patraic.webp",Z="/maps/ioannina.webp",ee="/maps/olympus.webp";function te(){return s.useEffect(()=>{document.querySelector("#project-container").style.backgroundColor="#fffef5"}),e(c,{children:t("div",{id:"project-container",children:[e("h1",{className:"section-title funky",children:"CARTOGRAPHIC GALLERY"}),t("p",{children:["I make a ",e("h3",{className:"funky",style:{display:"inline"},children:"lot"})," of maps. If you 'd like to see a full resolution version don't hesitate to contact me (",e("a",{href:"mailto:geo.elymperis@gmail.com",role:"button",children:"geo.elymperis@gmail.com"}),"). ",e("br",{}),"P.S.: I currently do not have them online, as most of them are at the 300Mb  league"]}),e(l,{title:"Athens Historic Downtown",mockup:V,descr:"",link:"/maps/athens_downtown.webp"}),e(l,{title:"Mesolongi, Negative Map",mockup:J,descr:"",link:"/maps/mesolongi.webp"}),e(l,{title:"Patraic Gulf, Sentinel2 + SRTM",mockup:X,descr:"",link:"/maps/patraic.webp"}),e(l,{title:"Topographic Map of Olympus/Ossa",mockup:ee,descr:"",link:"/maps/olympus.webp"}),e(l,{title:"Street Lights of Trikala",mockup:K,descr:"",link:"/maps/trikala.webp"}),e(l,{title:"Topographic & Street Map of Athens",mockup:Y,descr:"",link:"/maps/athens_topo.webp"}),e(l,{title:"Ioannina Topographic Map, rendered in Blender",mockup:Z,descr:"",link:"/maps/ioannina.webp"})]})})}function ie(){s.useEffect(()=>{document.querySelector("#blog-container").style.backgroundColor="#fffef5"});const{slug:i}=N();return e("div",{id:"blog-container",children:e(O,{post_md:i})})}function oe(){return s.useState(0),e("div",{id:"wrapper",children:e(S,{children:e(G,{children:t(h,{path:"/",element:e(A,{}),children:[e(h,{index:!0,element:e(R,{})}),e(h,{path:"/bio",element:e(D,{})}),e(h,{path:"/projects",element:e(U,{})}),e(h,{path:"/maps",element:e(te,{})}),e(h,{path:"/blog/:slug",element:e(ie,{})})]})})})})}I.createRoot(document.getElementById("root")).render(e(x.StrictMode,{children:e(oe,{})}));
