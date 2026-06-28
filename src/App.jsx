import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.hero}>
          <h1 style={styles.h1}>Is Your Business at Risk?</h1>
          <p style={styles.p}>
            Get a <strong>Free IT Security Check</strong> and uncover hidden risks that could
            lead to downtime, ransomware, or data loss.
          </p>

          <a href="#form" style={styles.button}>
            Get My Free Assessment
          </a>

          <div style={styles.trust}>
            Local IT Security • No obligation • Takes 10–15 minutes
          </div>
        </div>

        <section style={styles.section}>
          <h2>What You'll Get</h2>
          <ul style={styles.list}>
            <li>✅ Identify security gaps across your systems</li>
            <li>✅ Clear, non-technical explanation of risks</li>
            <li>✅ Simple action plan to secure your business</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Common Risks We Find</h2>
          <ul style={styles.list}>
            <li>⚠️ No MFA on email or admin accounts</li>
            <li>⚠️ Backups that fail or aren’t tested</li>
            <li>⚠️ Exposed remote access or outdated systems</li>
          </ul>
        </section>

        <div id="form" style={styles.formBox}>
          <h2>Request Your Free Security Check</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input style={styles.input} type="text" placeholder="Full Name" required />
            <input style={styles.input} type="text" placeholder="Business Name" required />
            <input style={styles.input} type="email" placeholder="Email Address" required />

            <button style={styles.button}>
              Get My Free Assessment
            </button>
          </form>

          <p style={styles.smallText}>
            We’ll reach out to schedule your assessment. No spam.
          </p>
        </div>

        <section style={styles.section}>
          <h2>Why Tech Theory Advisors</h2>
          <p>
            We help small businesses identify and fix hidden IT security risks before they
            turn into expensive problems. Clear insights. Practical solutions. Real
            protection.
          </p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f9fafb",
    minHeight: "100vh",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "40px 20px",
  },

  hero: {
    textAlign: "center",
    padding: "60px 20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },

  h1: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  p: {
    fontSize: "18px",
    lineHeight: 1.6,
  },

  button: {
    display: "inline-block",
    background: "#0f766e",
    color: "white",
    padding: "15px 25px",
    fontSize: "18px",
    textDecoration: "none",
    borderRadius: "6px",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
  },

  trust: {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "10px",
  },

  section: {
    marginTop: "50px",
  },

  list: {
    paddingLeft: "20px",
    fontSize: "18px",
  },

  formBox: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    marginTop: "40px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    fontSize: "16px",
  },

  smallText: {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "10px",
  },
};
