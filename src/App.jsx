import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState("");
  const [form, setForm] = useState({ name:"", email:"", phone:"", needs:"", description:"" });

  const next = async () => {
    if (step === 2) {
      await fetch("https://formspree.io/f/mnjryrka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }
    setStep(step + 1);
  };

  const back = () => setStep(step - 1);

  return (
    <div style={{fontFamily:"Arial", backgroundColor:"#37b3a8", backgroundImage:"url('/pattern.png')", backgroundSize:"700px", backgroundRepeat:"repeat", backgroundBlendMode:"soft-light", minHeight:"100vh", padding:"40px 20px"}}>

      <div style={{maxWidth:"900px", margin:"0 auto", background:"white", padding:40, borderRadius:12, boxShadow:"0 8px 30px rgba(0,0,0,0.2)"}}>

        {/* NEW HIGH-CONVERSION HEADER */}
        <h1 style={{ textAlign: "center" }}>
          IT Problems or Security Risks Slowing Down Your Business?
        </h1>

        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Get fast, expert IT support, security, and project help tailored to your business.
        </p>

        <p style={{ textAlign: "center" }}>
          10+ years experience supporting secure environments in banking and DoD systems.
        </p>

        <p style={{ textAlign: "center", color: "green" }}>
          ✅ Custom solutions tailored to your business · ✅ Local & remote support
        </p>

        <p style={{ textAlign: "center" }}>
          Prefer email? <a href="mailto:info@techtheoryadvisors.com">info@techtheoryadvisors.com</a>
        </p>

        <div style={{ height:6, background:"#eee", marginBottom:20 }}>
          <div style={{ width:`${(step/3)*100}%`, height:"100%", background:"#1f7f76" }}></div>
        </div>

        {step === 1 && (
          <div>
            <h2>What kind of IT help do you need?</h2>

            <h3 style={{ textAlign: "center" }}>
              Start by selecting the service you need below
            </h3>

            <button style={btn} onClick={()=>{setForm({...form,needs:"IT Security"});setSelection("security");next();}}>IT Security</button>
            <button style={btn} onClick={()=>{setForm({...form,needs:"IT Project Management"});setSelection("projects");next();}}>IT Project Management</button>
            <button style={btn} onClick={()=>{setForm({...form,needs:"IT Support"});setSelection("support");next();}}>IT Support</button>
          </div>
        )}

        {step===2 && (
          <div>

            {selection === "security" && (
              <div>
                <h2>IT Security Services</h2>

                <p>
                  We specialize in helping businesses identify and improve their cybersecurity posture. With over 10 years of experience in banking and Department of Defense environments, Tech Theory brings enterprise-level security practices to small businesses.
                </p>

                <ul>
                  <li>Security audits and risk assessments</li>
                  <li>Identity & access management review</li>
                  <li>Backup and disaster recovery validation</li>
                </ul>
              </div>
            )}

            {selection === "projects" && (
              <div>
                <h2>IT Project Management</h2>

                <p>
                  Tech Theory helps businesses successfully plan and execute IT initiatives, staying on schedule while avoiding costly mistakes.
                </p>

                <ul>
                  <li>Cloud migrations</li>
                  <li>Office setup</li>
                  <li>Disaster recovery exercises</li>
                </ul>
              </div>
            )}

            {selection === "support" && (
              <div>
                <h2>IT Support Services</h2>

                <p>
                  Hiring a full-time IT employee is expensive. Tech Theory provides flexible IT support without the overhead.
                </p>

                <ul>
                  <li>Remote troubleshooting</li>
                  <li>Onsite support</li>
                  <li>System maintenance</li>
                </ul>
              </div>
            )}

            {/* CONVERSION BOOSTER */}
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              No obligation — just a quick discussion to understand your needs
            </p>

            <h3>Tell us about your business</h3>

            <input style={input} placeholder="Your Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/><br/><br/>
            <input style={input} placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/><br/><br/>
            <input style={input} placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/><br/><br/>

            <textarea style={{ width:"100%", padding:12, minHeight:120 }} placeholder="Describe what you need help with" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}></textarea>

            <br/><br/>
            <button onClick={back}>Back</button>
            <button onClick={next} style={{ marginLeft:10 }}>Continue</button>
          </div>
        )}

        {step===3 && (
          <div>
            <h2>Schedule Your Consultation</h2>
            <iframe src="https://calendly.com/wes-techtheoryadvisors/30min" width="100%" height="650"></iframe>
          </div>
        )}

      </div>
    </div>
  );
}

const btn={ padding:16, width:"100%", marginBottom:12, borderRadius:10, border:"none", background:"#1f7f76", color:"white", fontSize:17 };
const input={ width:"100%", padding:12 };
