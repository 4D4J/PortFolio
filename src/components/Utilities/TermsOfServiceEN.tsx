import React from 'react';

function TermsOfServiceEN() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">1. Purpose</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                These terms of service (ToS) govern the use 
                of Nathan Auvray's portfolio website. Access and use of the site 
                implies full acceptance of these ToS.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">2. Site Access</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                The site is freely accessible to any user with Internet access. 
                All costs incurred by the user to access the service (computer hardware, 
                software, Internet connection, etc.) are their responsibility.
              </p>
              <p>
                The owner reserves the right to modify, suspend or interrupt 
                access to the site at any time without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">3. Site Usage</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-emerald-400">3.1 Authorized Use</h3>
              <p>This site is intended to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Present Nathan Auvray's professional portfolio</li>
                <li>Enable professional contact</li>
                <li>Share projects and achievements</li>
              </ul>
              
              <h3 className="font-semibold text-emerald-400 mt-4">3.2 Prohibitions</h3>
              <p>It is strictly forbidden to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use the site for illegal or unauthorized purposes</li>
                <li>Compromise the security of the site</li>
                <li>Transmit viruses or malicious code</li>
                <li>Copy, reproduce or distribute content without authorization</li>
                <li>Use the contact form for spam purposes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">4. Site Content</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                The site content (texts, images, videos, etc.) is the exclusive property 
                of Nathan Auvray, unless otherwise stated.
              </p>
              <p>
                Any reproduction, representation, modification, publication, adaptation of all 
                or part of the site elements, whatever the means or process used, 
                is prohibited, except with prior written authorization.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">5. Contact Form</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                The contact form is provided to allow visitors 
                to make contact in a professional context.
              </p>
              <p>The user undertakes to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Provide accurate and up-to-date information</li>
                <li>Use respectful and appropriate language</li>
                <li>Not send inappropriate, offensive or illegal content</li>
                <li>Not use the form for spam or advertising purposes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">6. Liability</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-emerald-400">6.1 Limitation of Liability</h3>
              <p>
                The owner cannot be held responsible for direct and indirect damages 
                caused to the user's equipment when accessing the site.
              </p>
              
              <h3 className="font-semibold text-emerald-400 mt-4">6.2 Site Availability</h3>
              <p>
                The owner strives to allow access to the site 24 hours a day, 7 days a week, 
                except in cases of force majeure or events beyond control, and subject 
                to possible breakdowns and maintenance interventions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">7. External Links</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                The site may contain links to other websites. 
                The owner exercises no control over these sites and disclaims all 
                responsibility for their content or privacy policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">8. Modification of ToS</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                The owner reserves the right to modify these ToS at any time. 
                Changes take effect as soon as they are published on the site. 
                Users are advised to regularly consult this page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">9. Applicable Law and Jurisdiction</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                These ToS are governed by French law. 
                In case of dispute, and after failure of any attempt to find an amicable solution, 
                French courts alone will be competent to hear the dispute.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">10. Contact</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                For any questions regarding these ToS, you can contact us at:
              </p>
              <p className="mt-2 text-emerald-400 font-semibold">nathan.auvray60@gmail.com</p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfServiceEN;
