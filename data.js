/* ============================================================
   Chapter 22 — Enlightenment & Scientific Revolution (1550–1789)
   Teaching data: schedule, lessons, people, timeline, glossary, exams
   Source: HMH Social Studies World History (2018), Chapter 22
   + 2nd Term 2026 List of Contents (NORDIC, 9th grade World History)
   ============================================================ */

const STUDENT = "José Manuel";
const COURSE  = { grade: "9th", subject: "World History", term: "2nd Term 2026",
                  teachers: "Edgar Villegas, César Bonilla",
                  dates: "June 1st – September 11th, 2026", weeklyHours: "4 hours" };

/* ---------- SCHEDULE (cronograma oficial) ---------- */
const SCHEDULE = [
  { week:1,  range:"Jun 1 – Jun 5",   start:"2026-06-01", end:"2026-06-05",
    unit:"Scientific Revolution",
    contents:["The roots of modern science","A revolutionary model of the universe"],
    note:"Change of paradigms in Modern Europe. Why do revolutions occur and how?",
    lesson:"s1" },
  { week:2,  range:"Jun 8 – Jun 12",  start:"2026-06-08", end:"2026-06-12",
    unit:"Scientific Revolution",
    contents:["The Scientific Method","Newton explains the Law of Gravity"],
    lesson:"s1" },
  { week:3,  range:"Jun 15 – Jun 19", start:"2026-06-15", end:"2026-06-19",
    unit:"Scientific Revolution",
    contents:["The Scientific Revolution spreads"],
    lesson:"s1" },
  { week:4,  range:"Jun 22 – Jun 26", start:"2026-06-22", end:"2026-06-26",
    unit:"The Enlightenment in Europe",
    contents:["Two views on government","The philosophers advocate reason"],
    lesson:"s2" },
  { week:5,  range:"Jun 29 – Jul 3",  start:"2026-06-29", end:"2026-07-03",
    unit:"The Enlightenment in Europe",
    contents:["Women and the Enlightenment","Legacy of the Enlightenment"],
    exam:"PROCESS EVALUATION #3", lesson:"s2" },
  { week:6,  range:"Jul 6 – Jul 10",  start:"2026-07-06", end:"2026-07-10",
    unit:"The Enlightenment Spreads",
    contents:["Enlightenment and the challenges to the government","Research Project — solution of the question"],
    lesson:"s3" },
  { week:7,  range:"Jul 13 – Jul 17", start:"2026-07-13", end:"2026-07-17",
    unit:"The Enlightenment Spreads",
    contents:["Enlightenment and arts"],
    lesson:"s3" },
  { week:null, range:"Jul 20 – Aug 2", start:"2026-07-20", end:"2026-08-02",
    unit:"VACATIONS", contents:["Vacaciones"], vacation:true },
  { week:8,  range:"Aug 3 – Aug 7",   start:"2026-08-03", end:"2026-08-07",
    unit:"The American Revolution",
    contents:["American Independence process","Britain and its American colonies"],
    lesson:"s4" },
  { week:9,  range:"Aug 10 – Aug 14", start:"2026-08-10", end:"2026-08-14",
    unit:"The American Revolution",
    contents:["Americans win Independence","Americans create a republic"],
    lesson:"s4" },
  { week:10, range:"Aug 17 – Aug 21", start:"2026-08-17", end:"2026-08-21",
    unit:"Review & Assessment",
    contents:["REVIEW"],
    exam:"PROCESS EVALUATION #4", lesson:"s4" },
  { week:11, range:"Aug 24 – Aug 28", start:"2026-08-24", end:"2026-08-28",
    unit:"The American Revolution",
    contents:["Source Analysis exercise"],
    lesson:"s4" },
  { week:12, range:"Aug 31 – Sep 4",  start:"2026-08-31", end:"2026-09-04",
    unit:"The American Revolution",
    contents:["Was the American revolution a real one?","What is an American — ESSAY PRACTICE"],
    lesson:"s4" },
  { week:13, range:"Sep 7 – Sep 11",  start:"2026-09-07", end:"2026-09-11",
    unit:"The French Revolution (next chapter)",
    contents:["French Revolution: origin, phases and changes, 1789–1799"],
    note:"How did the French Revolution modify modern world structures?",
    lesson:"s5" }
];

const ASSESSMENT_INFO = {
  competence:"CONSTRUCT HISTORICAL INTERPRETATIONS",
  standard:"Constructs historical interpretations about world events and processes, in relation to great changes and/or permanence through history, using political, social, economic and cultural complex concepts. Prioritizes multiple causes and consequences. Determines connections between historical processes and current events.",
  graded:[
    "Process Evaluation N°3 — Week 5 (Jun 29 – Jul 3)",
    "Process Evaluation N°4 — Week 10 (Aug 17 – Aug 21)",
    "Class activities: individual & group worksheets",
    "Research interdisciplinary Project",
    "Process Observation (participation, attitude, responsibility, time management)"
  ]
};

/* ---------- LESSONS ---------- */
const LESSONS = [
{
  id:"s1", num:1, title:"The Scientific Revolution",
  subtitle:"In the mid-1500s, scientists began to question accepted beliefs and make new theories based on experimentation.",
  big:"SCIENCE AND TECHNOLOGY",
  why:"Such questioning led to the development of the scientific method still in use today.",
  terms:["geocentric theory","Scientific Revolution","heliocentric theory","Galileo Galilei","scientific method","Isaac Newton"],
  blocks:[
    { h:"Setting the Stage", p:[
      "The Renaissance (1300–1600) inspired a spirit of curiosity, and the Reformation pushed people to challenge accepted ways of thinking about God and salvation.",
      "While the Reformation was happening, another revolution in European thought began — one that would permanently change how people viewed the physical world."
    ]},
    { h:"The Roots of Modern Science", p:[
      "Before 1500, scholars decided what was true or false by referring to an ancient Greek/Roman author or to the Bible — not by observing nature themselves.",
      "<b>The Medieval View:</b> most scholars believed Earth was an immovable object at the center of the universe, with the moon, sun and planets moving in perfect circles around it. This earth-centered view is the <b>geocentric theory</b>, from Aristotle (4th c. B.C.) and expanded by Ptolemy (2nd c. A.D.). Christianity taught that God placed Earth at the center.",
      "<b>A New Way of Thinking:</b> beginning in the mid-1500s, a few scholars replaced old assumptions with new theories — launching what historians call the <b>Scientific Revolution</b>: a new way of thinking about the natural world, based on careful observation and a willingness to question accepted beliefs.",
      "<b>Causes:</b> European exploration revealed new peoples, animals and truths; the printing press spread ideas; and navigation drove research in astronomy and mathematics."
    ]},
    { h:"A Revolutionary Model of the Universe", p:[
      "<b>Copernicus</b> (Polish astronomer) revived the old Greek idea that the sun is the center. After 25+ years studying planetary movement he proposed the <b>heliocentric</b> (sun-centered) theory. Fearing ridicule, he published <i>On the Revolutions of the Heavenly Bodies</i> only in 1543, the year he died.",
      "<b>Tycho Brahe</b> (Danish) recorded precise data on planetary movements. His assistant <b>Johannes Kepler</b> used that data to prove planets move around the sun in <b>elliptical orbits</b> — mathematically confirming Copernicus."
    ]},
    { h:"Galileo's Discoveries", p:[
      "<b>Galileo Galilei</b> built a telescope (1609) and in <i>Starry Messenger</i> (1610) reported Jupiter's four moons, sunspots, and a rough, cratered moon — shattering Aristotle's idea of perfect heavenly bodies and supporting Copernicus.",
      "<b>Conflict with the Church:</b> in 1616 the Catholic Church warned him not to defend Copernicus. After publishing <i>Dialogue Concerning the Two Chief World Systems</i> (1632), he was tried by the Inquisition (1633) and, under threat of torture, forced to recant. He lived under house arrest until his death in 1642. (In 1992 the Church admitted he had been right.)"
    ]},
    { h:"The Scientific Method", p:[
      "The work of Copernicus, Kepler and Galileo developed into the <b>scientific method</b> — a logical procedure for gathering and testing ideas.",
      "<b>Steps:</b> 1) a problem/question from an observation → 2) form a <b>hypothesis</b> → 3) test it with an experiment or data → 4) analyze and interpret to reach a conclusion that confirms or disproves the hypothesis.",
      "<b>Francis Bacon</b> (English) urged experiment first, then conclusions — the experimental method, or <b>empiricism</b>. <b>René Descartes</b> (French) relied on mathematics and logic, doubting everything until proven by reason: \"I think, therefore I am.\""
    ]},
    { h:"Newton Explains the Law of Gravity", p:[
      "<b>Isaac Newton</b> united the breakthroughs under a single theory of motion. The <b>law of universal gravitation</b>: every object attracts every other object; the attraction depends on their mass and the distance between them.",
      "In <i>The Mathematical Principles of Natural Philosophy</i> (1687) he described a universe like a giant clock whose parts work together in ways that can be expressed mathematically — with God as the clockmaker."
    ]},
    { h:"The Scientific Revolution Spreads", p:[
      "<b>New instruments:</b> microscope (Janssen, 1590; Leeuwenhoek observed bacteria, 1670s), mercury barometer (Torricelli, 1643), mercury thermometer (Fahrenheit, 1714; Celsius scale, 1742).",
      "<b>Medicine:</b> Vesalius dissected human corpses and corrected Galen; Harvey explained the heart; Jenner created the first smallpox <b>vaccine</b> using cowpox.",
      "<b>Chemistry:</b> Robert Boyle, founder of modern chemistry — matter is made of smaller particles (<i>The Sceptical Chymist</i>, 1661) and <b>Boyle's Law</b> relates volume, temperature and pressure of gases."
    ]}
  ],
  check:[
    "Before the 1500s, who and what were the final authorities on most knowledge?",
    "How did the heliocentric theory differ from the geocentric theory?",
    "What are the main steps of the scientific method?",
    "Why did Galileo's findings frighten both Catholic and Protestant leaders?"
  ]
},
{
  id:"s2", num:2, title:"The Enlightenment in Europe",
  subtitle:"A revolution in intellectual activity changed Europeans' view of government and society.",
  big:"POWER AND AUTHORITY",
  why:"The various freedoms enjoyed in many countries today are a result of Enlightenment thinking.",
  terms:["Enlightenment","social contract","John Locke","philosophe","Voltaire","Montesquieu","Rousseau","Mary Wollstonecraft"],
  blocks:[
    { h:"Setting the Stage", p:[
      "After the Scientific Revolution, scholars applied reason to society — government, religion, economics, education. This movement is the <b>Enlightenment</b> (the Age of Reason), peaking in the mid-1700s."
    ]},
    { h:"Two Views on Government", p:[
      "<b>Thomas Hobbes</b> — <i>Leviathan</i> (1651): humans are naturally selfish; without government life is \"solitary, poor, nasty, brutish, and short.\" People surrender rights to a strong ruler (an absolute monarchy) for law and order. This agreement is the <b>social contract</b>.",
      "<b>John Locke</b>: people are reasonable and can govern themselves. All are born free and equal with three <b>natural rights — life, liberty, and property</b>. Government exists to protect these rights; if it fails, the people may overthrow it. Power comes from the consent of the governed — the foundation of modern democracy."
    ]},
    { h:"The Philosophes Advocate Reason", p:[
      "<b>Philosophes</b> (French for 'philosophers') were social critics who believed reason applies to all of life. Five core beliefs: <b>Reason, Nature, Happiness (on earth), Progress, Liberty.</b>",
      "<b>Voltaire</b> — fought for tolerance, reason, freedom of religion and freedom of speech, using <b>satire</b> against the clergy, aristocracy and government. Jailed twice and exiled. Famous idea: \"I do not agree with a word you say but will defend to the death your right to say it.\"",
      "<b>Montesquieu</b> — <i>On the Spirit of Laws</i> (1748): admired Britain; proposed <b>separation of powers</b> among legislative, executive and judicial branches. \"Power should be a check to power\" → later called <b>checks and balances</b>; basis for the U.S. Constitution.",
      "<b>Rousseau</b> — <i>The Social Contract</i> (1762): \"Man is born free, and everywhere he is in chains.\" Civilization corrupts natural goodness; good government follows the <b>general will</b> of the people (direct democracy). For Rousseau the social contract is among free individuals; for Hobbes it was between a society and its ruler.",
      "<b>Cesare Beccaria</b> — justice should preserve order, not avenge; opposed torture and arbitrary/cruel punishment; favored speedy trials and the greatest good for the greatest number."
    ]},
    { h:"Women and the Enlightenment", p:[
      "Most philosophes took a traditional view of women (Rousseau thought a girl's education should make her a good wife and mother).",
      "<b>Mary Astell</b> — <i>A Serious Proposal to the Ladies</i> (1694): \"If all men are born free, how is it that all women are born slaves?\"",
      "<b>Mary Wollstonecraft</b> — <i>A Vindication of the Rights of Woman</i> (1792): women, like men, need education to be virtuous and useful, and should enter medicine and politics.",
      "<b>Émilie du Châtelet</b> — mathematician/physicist who translated Newton into French. Women also spread ideas through <b>salons</b>."
    ]},
    { h:"Legacy of the Enlightenment", p:[
      "Three long-term effects: (1) <b>Belief in progress</b> — reason can solve social problems; (2) a more <b>secular outlook</b> — people question religious belief; (3) <b>importance of the individual</b> — people look to themselves; Adam Smith extends this to economics.",
      "The philosophes lived in the world of ideas, but their theories inspired the American and French revolutions."
    ]}
  ],
  check:[
    "What are the three natural rights, according to John Locke?",
    "How does Locke's view of human nature differ from Hobbes's?",
    "What did Montesquieu mean by 'separation of powers'?",
    "How did Rousseau's idea of the social contract differ from Hobbes's?",
    "Name the three long-term legacies of the Enlightenment."
  ]
},
{
  id:"s3", num:3, title:"The Enlightenment Spreads",
  subtitle:"Enlightenment ideas spread through the Western world and profoundly influenced the arts and government.",
  big:"POWER AND AUTHORITY",
  why:"An 'enlightened' problem-solving approach to government and society prevails in modern civilization today.",
  terms:["salon","baroque","neoclassical","enlightened despot","Catherine the Great"],
  blocks:[
    { h:"A World of Ideas", p:[
      "In the 1700s Paris was the cultural capital of Europe. Wealthy women hosted <b>salons</b> — social gatherings where philosophers, writers, artists and scientists discussed ideas.",
      "<b>Diderot's Encyclopedia</b> (from 1751) collected the era's knowledge; the government and Church banned it for undermining authority, but it kept spreading Enlightenment ideas to a growing literate middle class."
    ]},
    { h:"New Artistic Styles", p:[
      "<b>Baroque</b> — grand, ornate (e.g., Versailles) — gave way to <b>neoclassical</b> ('new classical'), a simple, elegant style borrowing from Greece and Rome.",
      "Music shifted from Bach and Handel's dramatic style to the lighter <b>classical</b> style of Haydn, Mozart and Beethoven (Vienna).",
      "The <b>novel</b> emerged (e.g., Richardson's <i>Pamela</i>, Fielding's <i>Tom Jones</i>), popular with the middle class."
    ]},
    { h:"Enlightenment and Monarchy", p:[
      "Some rulers embraced reform while keeping power — <b>enlightened despots</b>. They reformed to strengthen their countries and their own rule.",
      "<b>Frederick II (the Great) of Prussia</b> — religious freedom, less censorship, better education, abolished torture; called himself \"the first servant of the state\" — but did not end serfdom.",
      "<b>Joseph II of Austria</b> — the most radical: legal reform, freedom of press and worship, abolished serfdom (undone after his death).",
      "<b>Catherine the Great of Russia</b> — exchanged letters with Voltaire and proposed reforms (religious toleration, abolishing torture), but after a 1773 serf revolt she gave nobles absolute power over serfs. She greatly expanded Russia (Black Sea; partitions of Poland)."
    ]}
  ],
  check:[
    "What were salons and why were they important?",
    "Contrast the baroque and neoclassical styles.",
    "Why were rulers like Frederick II and Catherine II called 'enlightened despots'?",
    "In what way were the enlightened despots less than true reformers?"
  ]
},
{
  id:"s4", num:4, title:"The American Revolution",
  subtitle:"Enlightenment ideas helped spur the American colonies to shed British rule and create a new nation.",
  big:"REVOLUTION",
  why:"The revolution created a republic — the United States — that became a model for many nations.",
  terms:["Declaration of Independence","Thomas Jefferson","checks and balances","federal system","Bill of Rights"],
  blocks:[
    { h:"Britain and Its American Colonies", p:[
      "By the mid-1700s the 13 colonies were thriving and increasingly self-governing; colonists felt more like Virginians or Pennsylvanians than British.",
      "Trade laws like the <b>Navigation Act</b> (1651) forced colonists to sell their best products only to Britain, yet for a time the relationship benefited both sides."
    ]},
    { h:"Americans Win Independence", p:[
      "The <b>French and Indian War</b> (1754–1763) left Britain victorious but deeply in debt. To raise money, Parliament passed the <b>Stamp Act</b> (1765).",
      "Colonists protested <b>\"taxation without representation\"</b> — they had no representatives in Parliament. Protests grew: the <b>Boston Tea Party</b> (1773), the closing of Boston's port, and the First & Second Continental Congresses.",
      "Fighting began at <b>Lexington and Concord</b> (April 19, 1775). Congress raised an army under <b>George Washington</b>."
    ]},
    { h:"The Declaration of Independence", p:[
      "In July 1776, Congress issued the <b>Declaration of Independence</b>, written by <b>Thomas Jefferson</b> and based on Locke's ideas: \"all men are created equal... endowed by their Creator with certain unalienable rights... life, liberty, and the pursuit of happiness.\"",
      "<b>Why the colonists won:</b> stronger motivation (defending home), British generals' mistakes, the cost of fighting 3,000 miles away, and decisive <b>French help</b> (from 1778). Cornwallis surrendered at <b>Yorktown</b> (1781)."
    ]},
    { h:"Americans Create a Republic", p:[
      "The first plan, the <b>Articles of Confederation</b> (1781), created a deliberately weak national government — no power to tax or regulate trade — which caused many problems.",
      "The <b>Constitutional Convention</b> (1787) created a new system using Enlightenment ideas: a <b>federal system</b> dividing power between national and state governments, three branches with <b>checks and balances</b> (Montesquieu).",
      "To win approval, Federalists promised a <b>Bill of Rights</b> — the first ten amendments protecting freedom of speech, press, assembly and religion (Voltaire, Rousseau, Locke)."
    ]}
  ],
  check:[
    "Why did colonists call the Stamp Act 'taxation without representation'?",
    "How did Locke's social contract influence the colonists?",
    "List three reasons the colonists won the Revolution.",
    "How did the Constitution put 'separation of powers' and 'checks and balances' into practice?",
    "Why did the Articles of Confederation create such a weak government?"
  ]
},
{
  id:"s5", num:5, title:"Looking Ahead: The French Revolution",
  subtitle:"The American Revolution inspired the French to seek reform — leading to revolution in 1789.",
  big:"REVOLUTION",
  why:"This is the bridge into the next chapter (Week 13, Sep 7–11).",
  terms:["general will","Declaration of the Rights of Man"],
  blocks:[
    { h:"From America to France", p:[
      "The French saw the new United States as the fulfillment of Enlightenment ideals. The Declaration of Independence was widely admired; officers like <b>Lafayette</b> returned from America inspired. \"We talked of nothing but America.\"",
      "Less than a decade after the American Revolution, an armed struggle to topple the government began in France (1789) — the subject of the next chapter."
    ]},
    { h:"Driving Question (Week 13)", p:[
      "How did the French Revolution modify modern world structures? To what extent did it generate long-term impacts? (Origins, phases and changes, 1789–1799.)"
    ]}
  ],
  check:[
    "Why did the French admire the new United States?",
    "Which philosophe's 'general will' most influenced French revolutionaries?"
  ]
}
];

/* ---------- PEOPLE ---------- */
const PEOPLE = [
  { name:"Nicolaus Copernicus", years:"1473–1543", role:"Astronomer", tag:"Science",
    fact:"Proposed the heliocentric (sun-centered) theory; published On the Revolutions of the Heavenly Bodies in 1543." },
  { name:"Johannes Kepler", years:"1571–1630", role:"Mathematician", tag:"Science",
    fact:"Used Tycho Brahe's data to prove planets orbit the sun in ellipses." },
  { name:"Galileo Galilei", years:"1564–1642", role:"Scientist", tag:"Science",
    fact:"Telescope observations supported Copernicus; tried by the Inquisition in 1633." },
  { name:"Francis Bacon", years:"1561–1626", role:"Philosopher", tag:"Science",
    fact:"Championed empiricism — the experimental method." },
  { name:"René Descartes", years:"1596–1650", role:"Philosopher / Mathematician", tag:"Science",
    fact:"Reasoned from doubt and logic: 'I think, therefore I am.'" },
  { name:"Isaac Newton", years:"1643–1727", role:"Scientist", tag:"Science",
    fact:"Law of universal gravitation; the universe as a giant clock (1687)." },
  { name:"Thomas Hobbes", years:"1588–1679", role:"Political thinker", tag:"Government",
    fact:"Leviathan (1651): people surrender rights to an absolute ruler for order." },
  { name:"John Locke", years:"1632–1704", role:"Philosopher", tag:"Government",
    fact:"Natural rights — life, liberty, property; consent of the governed." },
  { name:"Voltaire", years:"1694–1778", role:"Philosophe", tag:"Government",
    fact:"Fought for tolerance and free speech using satire." },
  { name:"Baron de Montesquieu", years:"1689–1755", role:"Philosophe", tag:"Government",
    fact:"Separation of powers; 'Power should be a check to power.'" },
  { name:"Jean-Jacques Rousseau", years:"1712–1778", role:"Philosophe", tag:"Government",
    fact:"The general will; 'Man is born free, and everywhere he is in chains.'" },
  { name:"Cesare Beccaria", years:"1738–1794", role:"Philosophe", tag:"Government",
    fact:"Criminal-justice reform; against torture and cruel punishment." },
  { name:"Mary Wollstonecraft", years:"1759–1797", role:"Writer", tag:"Society",
    fact:"A Vindication of the Rights of Woman (1792): equal education for women." },
  { name:"Frederick II (the Great)", years:"1712–1786", role:"King of Prussia", tag:"Monarchy",
    fact:"Enlightened despot; 'the first servant of the state.'" },
  { name:"Catherine the Great", years:"1729–1796", role:"Empress of Russia", tag:"Monarchy",
    fact:"Corresponded with Voltaire; expanded Russia but tightened serfdom." },
  { name:"Thomas Jefferson", years:"1743–1826", role:"Statesman", tag:"Revolution",
    fact:"Wrote the Declaration of Independence, based on Locke." },
  { name:"George Washington", years:"1732–1799", role:"General", tag:"Revolution",
    fact:"Commanded the Continental Army to victory." }
];

/* ---------- TIMELINE ---------- */
const TIMELINE = [
  { y:"1543", t:"Copernicus publishes the heliocentric theory; Vesalius publishes human anatomy." },
  { y:"1590", t:"Janssen invents the microscope." },
  { y:"1609", t:"Kepler publishes his first two laws of planetary motion." },
  { y:"1610", t:"Galileo publishes Starry Messenger." },
  { y:"1620", t:"Bacon's Novum Organum promotes the experimental method." },
  { y:"1633", t:"Galileo faces the Inquisition." },
  { y:"1637", t:"Descartes' Discourse on Method." },
  { y:"1643", t:"Torricelli invents the barometer." },
  { y:"1651", t:"Hobbes publishes Leviathan." },
  { y:"1661", t:"Boyle's The Sceptical Chymist (founder of modern chemistry)." },
  { y:"1687", t:"Newton publishes the law of gravity." },
  { y:"1690", t:"Locke's Two Treatises — natural rights." },
  { y:"1748", t:"Montesquieu's On the Spirit of Laws — separation of powers." },
  { y:"1751", t:"Diderot begins publishing the Encyclopedia." },
  { y:"1762", t:"Rousseau's The Social Contract." },
  { y:"1763", t:"French and Indian War ends; Britain in debt." },
  { y:"1765", t:"Stamp Act — 'taxation without representation.'" },
  { y:"1773", t:"Boston Tea Party." },
  { y:"1775", t:"Fighting begins at Lexington and Concord." },
  { y:"1776", t:"Declaration of Independence (Jefferson)." },
  { y:"1781", t:"Cornwallis surrenders at Yorktown; Articles of Confederation ratified." },
  { y:"1787", t:"U.S. Constitutional Convention." },
  { y:"1789", t:"U.S. Constitution in force; French Revolution begins." },
  { y:"1792", t:"Wollstonecraft's A Vindication of the Rights of Woman." }
];

/* ---------- GLOSSARY ---------- */
const GLOSSARY = [
  ["geocentric theory","The earth-centered model of the universe (Aristotle, Ptolemy)."],
  ["heliocentric theory","The sun-centered model of the universe (Copernicus)."],
  ["Scientific Revolution","A new way of thinking about the natural world based on observation and questioning."],
  ["scientific method","A logical procedure for gathering and testing ideas (question → hypothesis → experiment → conclusion)."],
  ["hypothesis","An unproved assumption to be tested by experiment or data."],
  ["empiricism","The experimental method — drawing conclusions from observation (Bacon)."],
  ["law of universal gravitation","Every object attracts every other; depends on mass and distance (Newton)."],
  ["Enlightenment","An intellectual movement (Age of Reason) stressing reason to solve problems."],
  ["social contract","An agreement by which people create a government (Hobbes, Locke, Rousseau)."],
  ["natural rights","Rights people are born with — life, liberty, property (Locke)."],
  ["philosophe","A French Enlightenment social critic who applied reason to society."],
  ["separation of powers","Dividing government among legislative, executive and judicial branches (Montesquieu)."],
  ["checks and balances","Each branch of government limits the others' power."],
  ["general will","Rousseau's idea that government should follow the common will of the people."],
  ["salon","A social gathering where intellectuals discussed Enlightenment ideas."],
  ["baroque","A grand, ornate artistic style of the 1600s–early 1700s."],
  ["neoclassical","A simple, elegant style borrowing from Greece and Rome."],
  ["enlightened despot","An absolute ruler who adopted Enlightenment reforms while keeping power."],
  ["Declaration of Independence","1776 document (Jefferson) declaring the colonies free, based on Locke."],
  ["federal system","Power divided between national and state governments."],
  ["Bill of Rights","The first ten amendments to the U.S. Constitution protecting basic freedoms."],
  ["taxation without representation","The colonists' protest that Britain taxed them without their consent."]
];

/* ---------- QUIZZES / EXAMS ----------
   q: question, a: options, c: index of correct, why: explanation, s: section id  */
const QUIZZES = {
  s1:{ title:"Section 1 Quiz — The Scientific Revolution", q:[
    { q:"What was the geocentric theory?", a:["The sun is the center of the universe","The earth is the center of the universe","The earth is flat","Planets move in ellipses"], c:1, why:"Geo = earth. Aristotle and Ptolemy placed Earth at the center." },
    { q:"Who proposed the heliocentric theory?", a:["Galileo","Newton","Copernicus","Kepler"], c:2, why:"Copernicus published the sun-centered theory in 1543." },
    { q:"Kepler showed that planets orbit the sun in…", a:["perfect circles","ellipses","straight lines","spirals"], c:1, why:"Kepler's laws proved elliptical orbits, confirming Copernicus." },
    { q:"What did Galileo's telescope observations do to Aristotle's ideas?", a:["Confirmed them","Shattered them","Ignored them","Had no effect"], c:1, why:"Sunspots and a cratered moon disproved 'perfect' heavenly bodies." },
    { q:"The scientific method begins with…", a:["a conclusion","a hypothesis","a problem or question from an observation","an experiment"], c:2, why:"It starts with a problem/question, then a hypothesis is formed and tested." },
    { q:"'I think, therefore I am' was said by…", a:["Bacon","Descartes","Newton","Boyle"], c:1, why:"Descartes reasoned from doubt using logic and mathematics." },
    { q:"Newton's great discovery was the law of…", a:["motion only","universal gravitation","planetary ellipses","gases"], c:1, why:"Universal gravitation linked motion in the heavens and on earth." },
    { q:"Who is considered the founder of modern chemistry?", a:["Robert Boyle","Vesalius","Torricelli","Fahrenheit"], c:0, why:"Boyle proposed matter is made of small particles and stated Boyle's Law." }
  ]},
  s2:{ title:"Section 2 Quiz — The Enlightenment in Europe", q:[
    { q:"According to Locke, the three natural rights are…", a:["life, liberty, property","reason, nature, progress","freedom, equality, fraternity","faith, hope, charity"], c:0, why:"Locke: all are born with life, liberty and property." },
    { q:"Hobbes believed people should give power to…", a:["a direct democracy","a strong absolute ruler","the church","no one"], c:1, why:"In Leviathan, order requires surrendering rights to a strong ruler." },
    { q:"Who argued for separation of powers?", a:["Voltaire","Rousseau","Montesquieu","Beccaria"], c:2, why:"Montesquieu: 'Power should be a check to power.'" },
    { q:"Voltaire is best known for fighting for…", a:["absolute monarchy","tolerance and free speech","serfdom","the geocentric theory"], c:1, why:"He used satire to defend tolerance, reason and freedom of speech." },
    { q:"'Man is born free, and everywhere he is in chains' was written by…", a:["Locke","Rousseau","Hobbes","Jefferson"], c:1, why:"Rousseau, in The Social Contract (1762)." },
    { q:"Mary Wollstonecraft argued that women…", a:["should not be educated","need education like men","should rule nations","should avoid politics"], c:1, why:"A Vindication of the Rights of Woman (1792) demanded equal education." },
    { q:"Beccaria focused his reforms on…", a:["astronomy","the justice system","the arts","economics"], c:1, why:"He opposed torture and cruel punishment; favored speedy trials." },
    { q:"Which is NOT one of the three legacies of the Enlightenment?", a:["belief in progress","a more secular outlook","importance of the individual","return to divine right"], c:3, why:"The Enlightenment challenged divine right, not promoted it." }
  ]},
  s3:{ title:"Section 3 Quiz — The Enlightenment Spreads", q:[
    { q:"Salons were…", a:["royal palaces","gatherings to discuss ideas","printing presses","churches"], c:1, why:"Wealthy women hosted salons where intellectuals discussed ideas." },
    { q:"Who created the Encyclopedia?", a:["Voltaire","Diderot","Montesquieu","Rousseau"], c:1, why:"Diderot began publishing it in 1751." },
    { q:"The simple, elegant style borrowing from Greece and Rome is…", a:["baroque","neoclassical","classical","gothic"], c:1, why:"Neoclassical replaced the ornate baroque style." },
    { q:"An 'enlightened despot' was a ruler who…", a:["gave up all power","made reforms while keeping power","rejected all reform","ruled a republic"], c:1, why:"They reformed to strengthen their state and their own rule." },
    { q:"Which ruler called himself 'the first servant of the state'?", a:["Joseph II","Catherine the Great","Frederick the Great","Louis XIV"], c:2, why:"Frederick II of Prussia." },
    { q:"After the 1773 serf revolt, Catherine the Great…", a:["freed the serfs","gave nobles absolute power over serfs","left Russia","abolished the monarchy"], c:1, why:"The revolt convinced her she needed the nobles' support." }
  ]},
  s4:{ title:"Section 4 Quiz — The American Revolution", q:[
    { q:"'Taxation without representation' protested that…", a:["taxes were too low","colonists had no voice in Parliament","Britain refused to trade","the king was elected"], c:1, why:"Colonists had no representatives in Parliament to consent to taxes." },
    { q:"The Declaration of Independence was written mainly by…", a:["Washington","Franklin","Jefferson","Locke"], c:2, why:"Thomas Jefferson, based on Locke's natural rights." },
    { q:"Which decisively helped the colonists win?", a:["Spanish navy","French entry in 1778","Russian troops","Dutch loans only"], c:1, why:"French help (and Yorktown, 1781) was decisive." },
    { q:"The Articles of Confederation created a government that was…", a:["too strong","deliberately weak","a monarchy","a dictatorship"], c:1, why:"It had no power to tax or regulate trade." },
    { q:"Dividing power between national and state governments is a…", a:["federal system","direct democracy","absolute monarchy","confederation only"], c:0, why:"The Constitution set up a federal system." },
    { q:"The Bill of Rights protects freedoms such as…", a:["speech, press, religion","trade and tariffs","the monarchy","the army"], c:0, why:"The first ten amendments protect basic individual freedoms." },
    { q:"Whose idea of checks and balances shaped the Constitution?", a:["Hobbes","Rousseau","Montesquieu","Voltaire"], c:2, why:"Montesquieu's separation of powers and checks and balances." }
  ]}
};

/* Build the two graded Process Evaluations by combining section banks */
function buildExam(ids){ let out=[]; ids.forEach(id=>{ QUIZZES[id].q.forEach(q=>out.push(Object.assign({s:id},q))); }); return out; }
const EXAMS = {
  pe3:{ title:"Process Evaluation #3 — Practice", week:"Week 5 · Jun 29 – Jul 3",
        scope:"Sections 1–2: Scientific Revolution & Enlightenment in Europe",
        q:buildExam(["s1","s2"]) },
  pe4:{ title:"Process Evaluation #4 — Practice", week:"Week 10 · Aug 17 – Aug 21",
        scope:"Sections 1–4: full Chapter 22 (Review)",
        q:buildExam(["s1","s2","s3","s4"]) }
};
