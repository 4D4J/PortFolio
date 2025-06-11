
function PrivacyPolicyEN() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">1. Introduction</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                This privacy policy describes how Nathan Auvray collects, 
                uses and protects your personal information when you use this website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">2. Data Collected</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-emerald-400">2.1 Voluntarily Provided Data</h3>
              <p>
                When you use the contact form, we collect:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>The subject of your message</li>
                <li>The content of your message</li>
              </ul>
              
              <h3 className="font-semibold text-emerald-400 mt-4">2.2 Technical Data</h3>
              <p>
                We do not automatically collect technical data 
                (IP address, browser type, etc.) via cookies or trackers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">3. Data Usage</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>Data collected via the contact form is used only to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Respond to your requests</li>
                <li>Contact you regarding your inquiry</li>
                <li>Follow up on our correspondence</li>
              </ul>
              <p className="mt-3 font-semibold text-emerald-400">
                No commercial use or transmission to third parties is performed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">4. Legal Basis for Processing</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                The processing of your personal data is based on your consent 
                when using the contact form (Article 6.1.a of GDPR).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">5. Data Retention</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Data collected via the contact form is retained:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>In the email inbox for the duration necessary to process your request</li>
                <li>Maximum 3 years after our last exchange</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">6. Your Rights</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>In accordance with GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Right of access:</strong> know what data we have about you</li>
                <li><strong>Right of rectification:</strong> correct your inaccurate data</li>
                <li><strong>Right of erasure:</strong> request deletion of your data</li>
                <li><strong>Right to portability:</strong> retrieve your data</li>
                <li><strong>Right of objection:</strong> object to processing</li>
                <li><strong>Right of limitation:</strong> limit processing</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at: 
                <span className="text-emerald-400"> nathan.auvray60@gmail.com</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">7. Security</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                We implement appropriate technical and organizational measures 
                to protect your personal data against:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Unauthorized access</li>
                <li>Unauthorized modification</li>
                <li>Disclosure or destruction</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">8. Cookies</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                This site does not use tracking or analytics cookies. 
                Only technical cookies necessary for site operation may be used.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">9. Changes</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                This privacy policy may be updated occasionally. 
                The date of last update is indicated at the bottom of this page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">10. Contact</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                For any questions regarding this privacy policy 
                or the processing of your personal data, contact us at:
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

export default PrivacyPolicyEN;
