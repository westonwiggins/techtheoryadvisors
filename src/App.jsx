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

<h1 style={{ textAlign: "center" }}>  
  Is Your Business Vulnerable to Cyber Threats?
</h1>
        <p style={{ textAlign: "center", fontSize: "18px" }}>  
          Tech Theory helps small businesses identify risks, strengthen security, and 
          prevent costly IT issues before they happen.
        </p>
        <p style={{ textAlign: "center", color: "green" }}>  
          ✅ Custom solutions tailored to your business• ✅ Local & remote support
        </p>

        <div style={{ height:6, background:"#eee", marginBottom:20 }}>
          <div style={{ width:`${(step/3)*100}%`, height:"100%", background:"#1f7f76" }}></div>
        </div>

        {step === 1 && (
          <div>
            <h2>What kind of IT help do you need?</h2>
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
                  We specialize in helping businesses identify and improve their cybersecurity posture. Armed with over 10 years of experience assessing security controls in high profile industries like
                  the Department of Defense (DoD) and the banking industry, we provide a Defense in Depth and Zero Trust framework that can help you secure your most valuable business assets.
                </p>

                <p>
                  We provide comprehensive security assessments that evaluate your current infrastructure, identify vulnerabilities,
                  and deliver actionable recommendations to strengthen your organization’s defenses.
                </p>

                <ul>
                  <li>Full security audits and risk assessments</li>
                  <li>Identity and access management evaluation</li>
                  <li>Backup and disaster recovery validation</li>
                  <li>Compliance readiness (where applicable)</li>
                </ul>

                <h3>Technologies & Platforms</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginTop:"10px" }}>
                  {["Microsoft 365 (O365)","Azure","AWS","Intune","Google Workspace","Active Directory","Entra ID","Endpoint Security","Identity & Access Management"].map((tech)=>(
                    <span key={tech} style={{ background:"#eef2f3", padding:"6px 10px", borderRadius:"6px", fontSize:"14px" }}>{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {selection === "projects" && (
              <div>
                <h2>IT Project Management Services</h2>

                <p>
                  Tech Theory helps businesses successfully plan and execute IT initiatives with a focus on efficiency, clarity, and results.
                  We understand that poorly managed IT projects can lead to downtime, missed deadlines, and unnecessary costs.
                </p>

                <p>
                  We have experience leading projects such as cloud migrations, office IT setup, and disaster recovery exercises.
                </p>

                <ul>
                  <li>Cloud migrations (Microsoft 365, Azure, AWS)</li>
                  <li>Office setup and infrastructure planning</li>
                  <li>Disaster recovery planning</li>
                  <li>Technology rollouts</li>
                </ul>

                <h3>Technologies & Platforms</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginTop:"10px" }}>
                  {["Microsoft 365","Azure","AWS","Google Workspace","Networking","Backup & Recovery"].map((tech)=>(
                    <span key={tech} style={{ background:"#eef2f3", padding:"6px 10px", borderRadius:"6px", fontSize:"14px" }}>{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {selection === "support" && (
              <div>
                <h2>IT Support Services</h2>

                <p>
                  Hiring a full-time, in-house IT specialist can be expensive and often unnecessary for many small businesses.
                  Tech Theory provides flexible IT support solutions without the overhead of a full-time employee.
                </p>

                <p>
                  We support local businesses with both remote and in-person support depending on the need.
                </p>

                <ul>
                  <li>Remote troubleshooting</li>
                  <li>Onsite support</li>
                  <li>System maintenance</li>
                </ul>

                <h3>Technologies & Platforms</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginTop:"10px" }}>
                  {["Windows","Microsoft 365","Networking","Remote Access"].map((tech)=>(
                    <span key={tech} style={{ background:"#eef2f3", padding:"6px 10px", borderRadius:"6px", fontSize:"14px" }}>{tech}</span>
                  ))}
                </div>
              </div>
            )}

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
