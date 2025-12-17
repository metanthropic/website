import React from 'react';

export default function UsagePolicyPage() {
  return (
    <>
      <h1>Usage Policy</h1>
      <p className="lead text-xl text-gray-400 font-light mb-12">
        We build AI to benefit humanity. This policy defines the boundary between safe discovery and dangerous misuse.
      </p>

      <h3>1. Universal Prohibitions</h3>
      <p>You may not use Metanthropic models for:</p>
      <ul>
        <li><strong>CSAM:</strong> Generation or promotion of Child Sexual Abuse Material.</li>
        <li><strong>Violence & Hate:</strong> Content that incites violence or promotes hate speech against protected groups.</li>
        <li><strong>Malware Creation:</strong> Generating code specifically designed to disrupt, damage, or gain unauthorized access to computer systems.</li>
        <li><strong>Political Campaigning:</strong> Generating high-volume propaganda, targeted campaign materials, or lobbying content.</li>
      </ul>

      <h3>2. High-Risk Use Cases</h3>
      <p>
        Certain applications require higher standards of verification ("Human-in-the-Loop"). You must not deploy our models in these domains without our express approval:
      </p>
      <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
        <div className="bg-[#121214] p-6 border border-white/10 rounded-sm">
          <h4 className="text-white font-bold mb-2">Legal & Medical</h4>
          <p className="text-sm text-gray-400">
            Systems that provide automated legal advice or medical diagnoses without human review.
          </p>
        </div>
        <div className="bg-[#121214] p-6 border border-white/10 rounded-sm">
          <h4 className="text-white font-bold mb-2">Financial Decisions</h4>
          <p className="text-sm text-gray-400">
            Automated loan approval, credit scoring, or high-frequency trading without guardrails.
          </p>
        </div>
      </div>

      <h3>3. The "Glass Box" Requirement</h3>
      <p>
        If you are using our models for scientific research or public dissemination, you must disclose that the content is AI-generated. Furthermore, you are encouraged to publish the model's "Thought Trace" alongside the output to allow for public verification of the result.
      </p>

      <h3>4. Enforcement</h3>
      <p>
        Our safety systems monitor input/output patterns. Violation of this policy will result in immediate API key revocation. We cooperate with law enforcement in cases of illegal activity.
      </p>
    </>
  );
}
