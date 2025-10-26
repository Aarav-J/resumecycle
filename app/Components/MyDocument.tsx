import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link} from '@react-pdf/renderer';


Font.register({
  family: 'Garamond',
  fonts: [
    { src: '/fonts/EBGaramond-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/EBGaramond-Italic.ttf', fontStyle: 'italic', fontWeight: 400 },
    { src: '/fonts/EBGaramond-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/EBGaramond-Bold.ttf', fontWeight: 700 }
  ]
});

// Helpers: convert inches to points (1in = 72pt)
const inToPt = (inches: number) => inches * 72;

// Map the Word spacing units to points. The user said units 2/4/5 —
// we'll treat each 'word_spacing_unit' as 3pt (small), which is close visually.
const ws = (units: number) => units * 3;

// Page paddings from provided JSON: margins in inches
const pageMargins = {
  top: inToPt(0.5),
  right: inToPt(0.5),
  bottom: inToPt(0.56),
  left: inToPt(0.5),
};

const styles = StyleSheet.create({
  page: {
    paddingTop: pageMargins.top,
    paddingRight: pageMargins.right,
    paddingBottom: pageMargins.bottom,
    paddingLeft: pageMargins.left,
    fontSize: 10.5,
    lineHeight: 1.25,
    color: '#000',
    fontFamily: 'Garamond'
  },
  header: { marginBottom: ws(2), fontFamily: 'Garamond' },
  name: { fontSize: 16, fontWeight: 700, fontFamily: 'Times-Roman', textAlign: 'center', color: '#000', marginBottom: ws(2) },
  contact: { fontSize: 10.5, marginTop: 0, color: '#000', textAlign: 'center', marginBottom: ws(2), fontFamily: 'Garamond' },
  section: { marginTop: ws(4) },
  h2: { fontSize: 11, fontWeight: 700, fontFamily: 'Times-Roman', textTransform: 'uppercase', color: '#000', borderBottomWidth: 1, borderBottomColor: '#000', paddingBottom: 2, marginBottom: ws(4) },
  rowBetween: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'flex-end'  },
  role: { fontStyle: 'italic', fontFamily: 'Times-Roman', fontSize: 10 },
  org: { fontWeight: 700, fontFamily: 'Garamond', fontSize: 10.5 },
  location: { color: '#000', fontFamily: 'Garamond', fontSize: 10.5, fontWeight: 700 },
  dates: { color: '#000', fontStyle: 'italic', fontFamily: 'Garamond', fontSize: 10.5 },
  // container for list
  bullets: { marginTop: 0, paddingLeft: 8},
  // each bullet row: symbol + text
  bulletRow: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' },
  // bullet symbol (can style independently)
  bulletSymbol: { width: 10, fontFamily: 'Garamond', fontSize: 11, color: '#000', marginRight: 6 },
  // bullet text (flexes, wraps)
  bulletText: { flex: 1, fontFamily: 'Garamond', fontSize: 10.9, color: '#000', lineHeight: 1.2 },
  mono: { fontFamily: "Times-Roman" },
  link: { color: '#000', textDecoration: 'underline' },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }, 
  rowNameLink: { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
    }
});

const Contact = () => (
  <Text style={styles.contact}>
    jain925@purdue.edu  |  848-313-5500  |{" "}
    <Link src="https://aaravj.xyz" style={styles.link}>aaravj.xyz</Link>  |{" "}
    <Link src="https://github.com/Aarav-J" style={styles.link}>github.com/Aarav-J</Link>  |{" "}
    <Link src="https://www.linkedin.com/in/aaravjain10" style={styles.link}>linkedin.com/in/aaravjain10</Link>
  </Text>
);

const Bullets = ({ items }: { items: string[] }) => (
  <View style={styles.bullets}>
    {items.map((t, i) => (
      <View key={i} style={styles.bulletRow}>
        <Text style={styles.bulletSymbol}>•</Text>
        <Text style={styles.bulletText}>{t}</Text>
      </View>
    ))}
  </View>
);

export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Aarav Jain</Text>
          <Contact />
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.h2}>EDUCATION</Text>
          <View style={styles.rowBetween}>
            <Text>
              <Text style={styles.org}>Purdue University</Text> | Purdue Engineering
            </Text>
            <Text style={styles.location}>West Lafayette, IN</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text>Candidate for B.S. in Computer Engineering</Text>
            <Text style={styles.dates}>Expected May 2028</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.h2}>SKILLS</Text>
          <Text>
            <Text style={styles.role}>Languages: </Text>
            Python, HTML/CSS/JavaScript, C/C++, Java, SQL
          </Text>
          <Text>
            <Text style={styles.role}>Technologies: </Text>
            React, TypeScript, React Native, Docker, AWS, Git, NextJS, Langchain, NumPy, FastAPI, IsaacSim
          </Text>
        </View>

        {/* Work & Leadership */}
        <View style={styles.section}>
          <Text style={styles.h2}>WORK & LEADERSHIP EXPERIENCE</Text>

          {/* Algoverse */}
          <View>
            <View style={styles.rowBetween}>
              <Text style={styles.org}>Algoverse</Text>
              
            </View>

            <View style={styles.row}>
                <Text style={styles.role}>Machine Learning Researcher</Text>
                <Text style={styles.dates}>Aug. 2024 – May 2025</Text>
            </View>
            <Bullets
              items={[
                "Developed and deployed a novel evaluation framework using Python and statistical analysis to quantify sycophantic behavior in multi-turn LLM conversations, identifying a 47% accuracy decline over extended interactions",
                "Engineered an end-to-end testing pipeline leveraging OpenAI, Llama, and Claude APIs; integrated TruthfulQA and MMLU datasets from Huggingface to test 5k+ conversation samples, measuring accuracy and sycophancy",
                "Co-authored a research paper documenting the “Truth Decay” methodology, experimental pipeline, findings, and best-practice recommendations; Published at the NAACL 2025 Student Research Workshop (SRW)",
              ]}
            />
          </View>

          {/* CodeConnect */}
          <View style={{ marginTop: 2 }}>
            <View style={styles.rowBetween}>
              <Text style={styles.org}>CodeConnect</Text>
              
            </View>
            <View style={styles.row}>
                <Text style={styles.role}>Co-Founder, Event and Leadership Manager</Text>
                <Text style={styles.dates}>Aug. 2023 – Dec. 2024</Text>
            </View>
            <Bullets
              items={[
                "Co-founded a coding tutoring nonprofit; authored beginner-to-intermediate curricula in Python, HTML/CSS, and JavaScript through 15+ hands-on projects and solution sets aligned to core CS concepts and real-world web development",
                "Organized and led 10+ public library events (workshops and clubs) serving 70+ students; delivered weekly 1-on-1 mentorship, pair programming, and project-based learning to reinforce fundamentals and teach new coding skills.",
                "Built the website in React and Typescript with a mobile-first, accessible UI; included mentorship and program pages, event schedules, and self-serve registration flows with node-mailer to streamline outreach, sign-ups, and student onboarding",
              ]}
            />
          </View>

          {/* Purdue IDEAS Research Lab */}
          <View style={{ marginTop: 2 }}>
            <View style={styles.rowBetween}>
              <Text style={styles.org}>Purdue IDEAS Research Lab</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.role}>Undergraduate Researcher</Text>
              <Text style={styles.dates}>Oct. 2025 – Present</Text>
            </View>
            <Bullets
              items={[
                "Developing an autonomous UAV-UGV natural language collaboration system using LLMs, VLMS, and computer vision to enable navigation and goal-oriented behavior in unstructured environments, leveraging terrain for strategic movement. ",
                "Implementing intelligent control algorithms using reinforcement learning to improve UAV-UGV communication for cooperative path planning to determine the optimal UGV navigation under hostile or uncertain terrain condition.",
              ]}
            />
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.h2}>PROJECTS</Text>

          <View>
            <View style={styles.rowNameLink}>
                <Text style={styles.role}>
                Marvel Oracle | Python, TypeScript, NextJS, Pinecone, Langchain  
                </Text>
                <Link src="https://github.com/Aarav-J/marvel_rag" style={styles.link}>github.com/Aarav-J/marvel_rag</Link>
            </View>
            <Bullets
              items={[
                "Implemented a chatbot with accurate information, context-aware responses, persistent chat history, and multi-chat sessions",
                "Embedded 9k Marvel Wiki articles into a Pinecone vector index via a BeautifulSoup4 pipeline using automated parsing",
                "Architected a Retrieval Augmented Generation (RAG) platform using Langchain and Pinecone with dense search, metadata filtering, and top-k tuning for real-time chat with 30% increased answer relevance compared to regular LLMs",
                "Developed and deployed a NextJS application with a FastAPI backend to deliver an interactive Marvel chatbot experience.",
              ]}
            />
          </View>

          <View style={{ marginTop: 2 }}>
            <View style={styles.rowNameLink}>
              <Text style={styles.role}>
                Bridge | Next.js, React, TypeScript, Socket.IO, Express, WebRTC, Supabase
                
              </Text>
              <Link src="https://github.com/Aarav-J/bridge" style={styles.link}>github.com/Aarav-J/bridge</Link>
            </View>
            <Bullets
              items={[
                "Designed and implemented a structured turn-based video debate system, matching users across opposite ends of the political spectrum using a quiz-based profiling algorithm and real-time topic selection, to enforce civility in debate.",
                "Built the backend using Socket.IO/WebRTC for real-time communication and cross-spectrum matchmaking.",
                "Developed the front-end architecture using Next.JS, React, and Typescript to create a platform for onboarding and debates",
              ]}
            />
          </View>

          <View style={{ marginTop: 2 }}>
            <View style={styles.rowNameLink}>   
              <Text style={styles.role}>
                RouteNote | Python, YOLO, NextJS, TypeScript, OpenCV, FastAPI —{" "}
              </Text>
                <Link src="https://github.com/Aarav-J/routenote" style={styles.link}>github.com/Aarav-J/routenote</Link>
            </View>
            <Bullets
              items={[
                "Trained a YOLOV11 model in Python to detect climbing holds on wall images, outputting precise bounding boxes.",
                "Annotated 100+ climbing wall images for hold detection, creating a labeled dataset that improved route classifier accuracy.",
                "Built a YOLO-based color classifier that filters holds by HSV color and confidence scores enabling precise route detection",
                "Developed a Next.JS + Firebase frontend integrated with the route detection API for user notetaking on routes and holds.",
              ]}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}