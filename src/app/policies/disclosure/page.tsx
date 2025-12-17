'use client';

import React from 'react';

export default function DisclosurePage() {
  return (
    <>
      <h1 className="text-5xl mb-4">Responsible Disclosure</h1>
      <p className="text-xl text-gray-400 font-light mb-12">
        Guidelines for security researchers and ethical hackers.
      </p>

      <p>
        At Metanthropic, we consider the security of our systems a top priority. But no matter how much effort we put into system security, there can still be vulnerabilities present. If you discover a vulnerability, we would like to know about it so we can take steps to address it as quickly as possible.
      </p>

      <h3>1. Our Philosophy</h3>
      <p>
        We believe in "Safe Harbor" for researchers. If you conduct your research in good faith and in accordance with this policy, we will consider your actions authorized, we will not bring legal action against you, and we will work with you to understand and resolve the issue quickly.
      </p>

      <h3>2. How to Report</h3>
      <p>
        Please email your findings to <a href="mailto:security@metanthropic.com">security@metanthropic.com</a>.
      </p>
      <ul>
        <li><strong>Subject Line:</strong> Please use "Vulnerability Report: [Type of Issue]".</li>
        <li><strong>Content:</strong> Include a Proof of Concept (PoC) or clear steps to reproduce the vulnerability.</li>
        <li><strong>Encryption:</strong> For sensitive reports, please use our PGP key (Fingerprint: <code>META SEC 2025 KEY</code>).</li>
      </ul>

      <h3>3. What is In Scope</h3>
      <p>
        We are interested in vulnerabilities that could compromise the confidentiality, integrity, or availability of our services, including:
      </p>
      <ul>
        <li>Authentication or Authorization flaws (e.g., bypassing API limits).</li>
        <li>Server-side code execution (RCE).</li>
        <li>Significant model extraction attacks (extracting weights/training data).</li>
        <li>Prompt Injection that leads to privilege escalation (not just jailbreaks).</li>
      </ul>

      <h3>4. What is Out of Scope</h3>
      <p>
        The following activities are strictly prohibited:
      </p>
      <ul>
        <li>Physical attacks against our offices or data centers.</li>
        <li>Social engineering (phishing) of our employees.</li>
        <li>Denial of Service (DoS/DDoS) attacks.</li>
        <li>"Jailbreaking" the model to say rude things (unless it reveals a systemic safety failure).</li>
      </ul>

      <h3>5. Response Timeline</h3>
      <p>
        We are committed to acknowledging receipt of your report within 48 hours and providing an estimated timeframe for resolution within 5 business days. We ask that you do not publicly disclose the issue until we have had a reasonable opportunity to address it.
      </p>
    </>
  );
}
