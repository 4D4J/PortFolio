import React from 'react';

function LegalNoticeEN() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Legal Notice</h1>
        
        <div className="space-y-6 text-gray-300">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">1. Legal Information</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p><strong>Website Owner:</strong> Nathan Auvray</p>
              <p><strong>Email:</strong> nathan.auvray60@gmail.com</p>
              <p><strong>Website Type:</strong> Personal Portfolio</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">2. Hosting</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p><strong>Host:</strong> Vercel Inc.</p>
              <p><strong>Address:</strong> 440 N Barranca Ave #4133, Covina, CA 91723, United States</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">3. Intellectual Property</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                This entire website is subject to French and international legislation 
                regarding copyright and intellectual property.
              </p>
              <p>
                All reproduction rights are reserved, including for downloadable documents 
                and iconographic and photographic representations.
              </p>
              <p>
                Reproduction of all or part of this site on any electronic medium 
                is strictly prohibited without express authorization from the owner.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">4. Liability</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                The information contained on this site is as accurate as possible and the site 
                is periodically updated, but may nevertheless contain inaccuracies, 
                omissions or gaps.
              </p>
              <p>
                The owner cannot under any circumstances be held responsible for any damage 
                of any nature whatsoever resulting from the interpretation or use 
                of the information and/or documents available on this site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">5. Hyperlinks</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Hyperlinks set up within this website towards other resources 
                present on the Internet cannot engage the responsibility of the owner.
              </p>
              <p>
                Similarly, the owner cannot be held responsible for the content 
                of sites that point to this site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">6. Information Collection</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                No personal information is collected without your knowledge. 
                The only information collected is through the contact form 
                and is used only for contact purposes.
              </p>
              <p>
                In accordance with the "Data Protection Act" of January 6, 1978 modified 
                in 2004, you have the right to access and rectify information concerning you.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">7. Applicable Law</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Both this site and the terms and conditions of its use are governed 
                by French law, regardless of the place of use. 
                In case of possible dispute, and after the failure of any attempt to 
                find an amicable solution, French courts alone will be competent.
              </p>
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

export default LegalNoticeEN;
