import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", needs: "" });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 600, margin: "auto", padding: 20 }}>

      <h1 style={{ textAlign: "center" }}>Tech Theory Advisors</h1>
      <p style={{ textAlign: "center" }}>Fast IT Support for Small Businesses</p>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <a href="tel:+18016283323">📞 801-628-3323</a> | 
        <a href="mailto:wes@techtheoryadvisors.com"> ✉️ Email</a>
      </div>

      <div style={{ marginBottom: 20, textAlign: "center" }}>
        Step {step} of 3
      </div>

      {step === 1 && (
        <div>
          <h2>What kind of IT help do you need?</h2>
          <button style={{ padding: 15, width: "100%", marginBottom: 10 }} onClick={() => { setForm({ ...form, needs: "IT Support" }); next(); }}>IT Support</button>
          <button style={{ padding: 15, width: "100%", marginBottom: 10 }} onClick={() => { setForm({ ...form, needs: "Consulting" }); next(); }}>Consulting</button>
          <button style={{ padding: 15, width: "100%" }} onClick={() => { setForm({ ...form, needs: "Project Work" }); next(); }}>Project Work</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Tell us about your business</h2>
          <input style={{ width: "100%", padding: 10 }} placeholder="Your Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/><br/><br/>
          <input style={{ width: "100%", padding: 10 }} placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/><br/><br/>
          <input style={{ width: "100%", padding: 10 }} placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/><br/><br/>
          <button onClick={back}>Back</button>
          <button onClick={next} style={{ marginLeft: 10 }}>Continue</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Schedule Your Consultation</h2>
          <p>Pick a time that works best for you below.</p>
          <iframe src="https://calendly.com/wes-techtheoryadvisors/30min" width="100%" height="650" style={{ border: "none" }}></iframe>
          <br/>
          <button onClick={back}>Back</button>
        </div>
      )}

      <div style={{ marginTop: 40, fontSize: 12, color: "gray", textAlign: "center" }}>
        Local IT Support | Farmington, UT
      </div>

    </div>
  );
}
