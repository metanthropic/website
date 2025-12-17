'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

export default function CharterPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-[#EDEDED] font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto px-6 mb-20 text-center">
          <div className="inline-block mb-6 text-sm font-medium text-gray-500 uppercase tracking-widest">
            Company
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">
            Metanthropic Charter
          </h1>
          <p className="text-xl text-white font-light leading-relaxed max-w-2xl mx-auto">
            Our Charter describes the principles we use to execute on Metanthropic’s mission.
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-headings:font-normal prose-p:text-gray-400 prose-p:leading-relaxed prose-strong:text-white">

            <p>
              This document reflects the strategy we’ve refined over the past two years, including feedback from many people internal and external to Metanthropic. The timeline to AGI remains uncertain, but our Charter will guide us in acting in the best interests of humanity throughout its development.
            </p>
            <p>
              Metanthropic’s mission is to ensure that artificial general intelligence (AGI)—by which we mean highly autonomous systems that outperform humans at most economically valuable work—benefits all of humanity. We will attempt to directly build safe and beneficial AGI, but will also consider our mission fulfilled if our work aids others to achieve this outcome. To that end, we commit to the following principles:
            </p>

            <div className="my-16 h-px bg-white/10" />

            {/* Principle 1 */}
            <section id="broadly-distributed-benefits" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl mb-6">Broadly distributed benefits</h2>
              <p>
                We commit to use any influence we obtain over AGI’s deployment to ensure it is used for the benefit of all, and to avoid enabling uses of AI or AGI that harm humanity or unduly concentrate power.
              </p>
              <p>
                Our primary fiduciary duty is to humanity. We anticipate needing to marshal substantial resources to fulfill our mission, but will always diligently act to minimize conflicts of interest among our employees and stakeholders that could compromise broad benefit.
              </p>
            </section>

            {/* Principle 2 */}
            <section id="long-term-safety" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl mb-6">Long-term safety</h2>
              <p>
                We are committed to doing the research required to make AGI safe, and to driving the broad adoption of such research across the AI community.
              </p>
              <p>
                We are concerned about late-stage AGI development becoming a competitive race without time for adequate safety precautions. Therefore, if a value-aligned, safety-conscious project comes close to building AGI before we do, we commit to stop competing with and start assisting this project. We will work out specifics in case-by-case agreements, but a typical triggering condition might be “a better-than-even chance of success in the next two years.”
              </p>
            </section>

            {/* Principle 3 */}
            <section id="technical-leadership" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl mb-6">Technical leadership</h2>
              <p>
                To be effective at addressing AGI’s impact on society, Metanthropic must be on the cutting edge of AI capabilities—policy and safety advocacy alone would be insufficient.
              </p>
              <p>
                We believe that AI will have broad societal impact before AGI, and we’ll strive to lead in those areas that are directly aligned with our mission and expertise.
              </p>
            </section>

            {/* Principle 4 */}
            <section id="cooperative-orientation" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl mb-6">Cooperative orientation</h2>
              <p>
                We will actively cooperate with other research and policy institutions; we seek to create a global community working together to address AGI’s global challenges.
              </p>
              <p>
                We are committed to providing public goods that help society navigate the path to AGI. Today this includes publishing most of our AI research, but we expect that safety and security concerns will reduce our traditional publishing in the future, while increasing the importance of sharing safety, policy, and standards research.
              </p>
            </section>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
