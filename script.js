let state=JSON.parse(localStorage.getItem("verbMasterState")||'{"learned":[],"favorites":[],"score":0,"questions":0,"correct":0,"wrong":0,"theme":"dark"}');
// This release replaces the previous verb set with entries numbered 101–200.
if(state.datasetVersion !== "verbs-101-200") { state.learned=[]; state.favorites=[]; state.datasetVersion="verbs-101-200"; localStorage.setItem("verbMasterState",JSON.stringify(state)); }
let currentPage="home", letterFilter="", meaningShown={}, formShown={};
document.body.classList.toggle("light",state.theme==="light");

function save(){localStorage.setItem("verbMasterState",JSON.stringify(state));updateStats();}
function updateStats(){
 const total=VERBS.length, learned=state.learned.length, fav=state.favorites.length, pct=Math.round(learned/total*100);
 ["totalStat","heroTotal"].forEach(id=>document.getElementById(id).textContent=total);
 document.getElementById("learnedStat").textContent=learned;
 document.getElementById("favStat").textContent=fav;
 document.getElementById("favStat2").textContent=fav;
 document.getElementById("scoreStat").textContent=state.score;
 document.getElementById("heroProgress").textContent=pct+"%";
 document.getElementById("progressPercent").textContent=pct+"%";
 document.getElementById("learnedTitle").textContent=`${learned} of ${total}`;
 document.getElementById("learnedPct").textContent=pct+"%";
 document.getElementById("learnedBar").style.width=pct+"%";
 const acc=state.questions?Math.round(state.correct/state.questions*100):0;
 document.getElementById("accuracyPct").textContent=acc+"%"; document.getElementById("accuracyBar").style.width=acc+"%";
 document.getElementById("questionsStat").textContent=state.questions;
 document.getElementById("correctStat").textContent=state.correct;
 document.getElementById("wrongStat").textContent=state.wrong;
 setRing("heroRing",pct); setRing("progressRing",pct);
}
function setRing(id,p){const el=document.getElementById(id); if(el) el.style.background=`radial-gradient(circle at center,var(--bg) 60%,transparent 61%),conic-gradient(var(--accent) ${p}%,rgba(255,255,255,.08) 0)`;}
function showPage(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));
 document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
 currentPage=id; if(id==="verbs")renderVerbs(); if(id==="forms")renderForms(); if(id==="progress")updateStats(); window.scrollTo({top:0,behavior:"smooth"});
}
function clearSearch(id){document.getElementById(id).value=""; if(id==="verbSearch")renderVerbs(); else renderForms();}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.style.opacity=1;t.style.transform="translateY(0)";setTimeout(()=>{t.style.opacity=0;t.style.transform="translateY(10px)"},1600)}
function renderLetters(){document.getElementById("letters").innerHTML='<button class="'+(!letterFilter?'active':'')+'" onclick="setLetter(\'\')">ALL</button>'+Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map(l=>`<button class="${letterFilter===l?'active':''}" onclick="setLetter('${l}')">${l}</button>`).join("")}
function setLetter(l){letterFilter=l;renderLetters();renderVerbs()}
function matches(v,q){q=q.toLowerCase();return !q||[v.base,v.vpt,v.vpp,v.sinhala].some(x=>x.toLowerCase().includes(q))}
let studyFilter="all";
function setStudyFilter(filter){studyFilter=filter;document.querySelectorAll('.study-filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));renderVerbs()}
function renderVerbs(){
 renderLetters(); const q=document.getElementById("verbSearch").value; let arr=VERBS.filter(v=>matches(v,q)&&(!letterFilter||v.base[0].toUpperCase()===letterFilter));
 if(studyFilter==='learned')arr=arr.filter(v=>state.learned.includes(v.id));
 if(studyFilter==='unlearned')arr=arr.filter(v=>!state.learned.includes(v.id));
 const counter=document.getElementById('studyCount');if(counter)counter.textContent=`${arr.length} verb${arr.length===1?'':'s'}`;
 const grid=document.getElementById("verbGrid");
 if(!arr.length){grid.innerHTML='<div class="no-results">No verbs found.</div>';return}
 grid.innerHTML=arr.map(v=>{let shown=!!meaningShown[v.id], fav=state.favorites.includes(v.id), learned=state.learned.includes(v.id);
 return `<article class="verb-card"><span class="num">#${String(v.id).padStart(3,"0")}</span><button class="star ${fav?'on':''}" onclick="toggleFav(${v.id})">${fav?'★':'☆'}</button><div class="word">${v.base}</div><div class="meaning" id="meaning-${v.id}">${shown?v.sinhala:'••••••••••'}</div><button class="reveal" onclick="toggleMeaning(${v.id})">${shown?'Hide Meaning':'👁 Show Meaning'}</button><button class="learned ${learned?'on':''}" onclick="toggleLearned(${v.id})">${learned?'✓ Learned':'Mark learned'}</button></article>`}).join("");
}
function toggleMeaning(id){meaningShown[id]=!meaningShown[id];renderVerbs()}
function showAllMeaning(show){VERBS.forEach(v=>meaningShown[v.id]=show);renderVerbs()}
function toggleFav(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save();renderVerbs();toast(state.favorites.includes(id)?"Added to favorites":"Removed from favorites")}
function toggleLearned(id){state.learned=state.learned.includes(id)?state.learned.filter(x=>x!==id):[...state.learned,id];save();renderVerbs();if(currentPage==="practice")startQuestion()}
function renderForms(){
 const q=document.getElementById("formSearch").value; const arr=VERBS.filter(v=>matches(v,q));const grid=document.getElementById("formGrid");
 if(!arr.length){grid.innerHTML='<div class="no-results">No verbs found.</div>';return}
 grid.innerHTML=`<div class="forms-table"><div class="forms-header"><span>Verb (V1)</span><span>VPT (V2)</span><span>VPP (V3)</span></div>${arr.map(v=>{let a=formShown[v.id]||{};return `<div class="form-row"><div class="form-word"><span class="num">#${String(v.id).padStart(3,"0")}</span><b>${v.base}</b></div><div class="form-cell"><b class="${a.v2?'':'hidden-val'}">${v.vpt}</b><button class="mini-btn" onclick="toggleForm(${v.id},'v2')">${a.v2?'Hide':'Show'}</button></div><div class="form-cell"><b class="${a.v3?'':'hidden-val'}">${v.vpp}</b><button class="mini-btn" onclick="toggleForm(${v.id},'v3')">${a.v3?'Hide':'Show'}</button></div></div>`}).join("")}</div>`;
}
function toggleForm(id,k){formShown[id]=formShown[id]||{};formShown[id][k]=!formShown[id][k];renderForms()}
function showAllForms(k,show){VERBS.forEach(v=>{formShown[v.id]=formShown[v.id]||{};formShown[v.id][k]=show});renderForms()}
function randomVerb(){const v=VERBS[Math.floor(Math.random()*VERBS.length)];showPage("verbs");setTimeout(()=>{document.getElementById("verbSearch").value=v.base;letterFilter="";renderVerbs()},50)}
let qIndex=0,currentQ=null,answered=false,practiceMode="v2",practiceScope="all",sessionSeen=[];
function setPracticeMode(mode){
 practiceMode=mode;qIndex=0;sessionSeen=[];
 document.querySelectorAll('.practice-mode').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
 startQuestion();
}
function setPracticeScope(scope){practiceScope=scope;qIndex=0;sessionSeen=[];startQuestion();}
function practicePool(){
 let pool=VERBS;
 if(practiceScope==='learned')pool=VERBS.filter(v=>state.learned.includes(v.id));
 if(practiceScope==='unlearned')pool=VERBS.filter(v=>!state.learned.includes(v.id));
 return pool;
}
function getPracticeAnswer(v){return practiceMode==='v3'?v.vpp:practiceMode==='meaning'?v.base:v.vpt}
function startQuestion(){
 const pool=practicePool();
 const count=document.getElementById('practicePoolCount');
 if(count)count.textContent=`${pool.length} verb${pool.length===1?'':'s'} in this set`;
 const answers=document.getElementById('answers');
 const next=document.getElementById('nextBtn');
 if(!pool.length){
  currentQ=null;answered=true;
  document.getElementById('qType').textContent='No verbs in this set yet';
  document.getElementById('qWord').textContent=practiceScope==='learned'?'Mark verbs as learned first':'All available verbs are learned!';
  document.getElementById('qMeaning').textContent='Change the practice set above or update learning status in Verb List.';
  answers.innerHTML='';document.getElementById('feedback').textContent='';next.disabled=true;
  document.getElementById('qNum').textContent='Question — / 10';document.getElementById('qProgress').style.width='0%';
  return;
 }
 const unseen=pool.filter(v=>!sessionSeen.includes(v.id));
 const pickFrom=unseen.length?unseen:pool;
 currentQ=pickFrom[Math.floor(Math.random()*pickFrom.length)];
 if(!sessionSeen.includes(currentQ.id))sessionSeen.push(currentQ.id);
 answered=false;next.disabled=true;
 const answerValue=getPracticeAnswer(currentQ);
 document.getElementById('qType').textContent=practiceMode==='v3'?'Choose the correct Past Participle (V3)':practiceMode==='meaning'?'Choose the Base Verb (V1)':'Choose the correct Past Tense (V2)';
 document.getElementById('qWord').textContent=practiceMode==='meaning'?currentQ.sinhala:currentQ.base;
 document.getElementById('qMeaning').textContent=practiceMode==='meaning'?'Sinhala meaning → English Base Verb':`Sinhala meaning: ${currentQ.sinhala}`;
 const unique=[];for(const v of pool){const val=getPracticeAnswer(v);if(!unique.includes(val))unique.push(val)}
 const opts=[answerValue];
 const other=unique.filter(x=>x!==answerValue).sort(()=>Math.random()-.5);
 while(opts.length<Math.min(4,unique.length)&&other.length)opts.push(other.pop());
 opts.sort(()=>Math.random()-.5);
 answers.innerHTML='';
 opts.forEach(value=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=value;b.addEventListener('click',()=>checkAnswer(b,value===answerValue));answers.appendChild(b)});
 document.getElementById('qNum').textContent=`Question ${(qIndex%10)+1} / 10`;
 document.getElementById('qScore').textContent=`Score: ${state.score}`;
 document.getElementById('qProgress').style.width=((qIndex%10)+1)*10+'%';
 document.getElementById('feedback').textContent='';
}
function checkAnswer(btn,correct){
 if(answered||!currentQ)return;answered=true;state.questions++;
 if(correct){state.correct++;state.score+=10;btn.classList.add('correct');document.getElementById('feedback').textContent='✓ Correct! +10 points';}
 else{state.wrong++;btn.classList.add('wrong');document.getElementById('feedback').textContent=`✕ Correct answer: ${getPracticeAnswer(currentQ)}`;}
 document.querySelectorAll('#answers .answer').forEach(b=>{b.disabled=true;if(b.textContent===getPracticeAnswer(currentQ))b.classList.add('correct')});
 document.getElementById('nextBtn').disabled=false;save();document.getElementById('qScore').textContent=`Score: ${state.score}`;
}
function nextQuestion(){if(!currentQ)return;qIndex++;if(qIndex%10===0)toast('10 questions complete! Keep going 🔥');startQuestion()}
function restartPractice(){qIndex=0;sessionSeen=[];startQuestion();toast('Practice restarted')}
function resetProgress(){if(confirm("Reset all learning and practice progress?")){state={learned:[],favorites:[],score:0,questions:0,correct:0,wrong:0,theme:state.theme};save();renderVerbs();renderForms();toast("Progress reset")}}
document.getElementById("themeBtn").onclick=()=>{state.theme=state.theme==="light"?"dark":"light";document.body.classList.toggle("light",state.theme==="light");document.getElementById("themeBtn").textContent=state.theme==="light"?"🌙":"☀️";save()}
document.getElementById("themeBtn").textContent=state.theme==="light"?"🌙":"☀️";
updateStats();renderLetters();renderVerbs();renderForms();startQuestion();showPage("home");
