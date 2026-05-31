import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", needs: "" });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <div style={{ fontFamily:"Arial", backgroundColor:"#37b3a8", backgroundImage:"url('/pattern.png')", backgroundSize:"400px", backgroundRepeat:"repeat", backgroundBlendMode:"overlay", minHeight:"100vh", padding:"40px 20px" }}>

      <div style={{ maxWidth:"900px", margin:"0 auto", background:"white", padding:40, borderRadius:12, boxShadow:"0 8px 30px rgba(0,0,0,0.2)" }}>

        <h1 style={{ textAlign:"center" }}>Tech Theory Advisors</h1>
        <p style={{ textAlign:"center" }}>Fast IT Support for Small Businesses</p>

        <div style={{ textAlign:"center", marginBottom:20 }}>
          <a href="tel:+18016283323">📞 801-628-3323</a> | 
          <a href="mailto:wes@techtheoryadvisors.com"> ✉️ Email</a>
        </div>

        <div style={{ height:6, background:"#eee", borderRadius:4, marginBottom:20 }}>
          <div style={{ width:`${(step/3)*100}%`, height:"100%", background:"#1f7f76", borderRadius:4 }}></div>
        </div>

        {step===1 && (
          <div>
            <h2>What kind of IT help do you need?</h2>
            <button style={btn} onClick={()=>{setForm({...form,needs:"IT Support"});next();}}>IT Support</button>
            <button style={btn} onClick={()=>{setForm({...form,needs:"IT Security"});next();}}>IT Security</button>
            <button style={btn} onClick={()=>{setForm({...form,needs:"Special Projects"});next();}}>Special Projects</button>
          </div>
        )}

        {step===2 && (
          <div>
            <h2>Tell us about your business</h2>
            <input style={input} placeholder="Your Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/><br/><br/>
            <input style={input} placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/><br/><br/>
            <input style={input} placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/><br/><br/>
            <button onClick={back}>Back</button>
            <button onClick={next} style={{ marginLeft:10 }}>Continue</button>
          </div>
        )}

        {step===3 && (
          <div>
            <h2>Schedule Your Consultation</h2>
            <p>Pick a time that works best for you below.</p>
            <iframe src="https://calendly.com/wes-techtheoryadvisors/30min" width="100%" height="650" style={{ border:"none" }}></iframe>
            <br/>
            <button onClick={back}>Back</button>
          </div>
        )}

      </div>

    </div>
  );
}

const btn={padding:16,width:"100%",marginBottom:12,borderRadius:10,border:"none",background:"#1f7f76",color:"white",fontSize:17,cursor:"pointer"};
const input={width:"100%",padding:12,fontSize:16};
