import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Politique de Confidentialité</h1>
        
        <div className="space-y-6 text-gray-300">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">1. Introduction</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Cette politique de confidentialité décrit comment Nathan Auvray collecte, 
                utilise et protège vos informations personnelles lorsque vous utilisez ce site web.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">2. Données collectées</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-emerald-400">2.1 Données fournies volontairement</h3>
              <p>
                Lorsque vous utilisez le formulaire de contact, nous collectons :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Votre nom</li>
                <li>Votre adresse email</li>
                <li>Le sujet de votre message</li>
                <li>Le contenu de votre message</li>
              </ul>
              
              <h3 className="font-semibold text-emerald-400 mt-4">2.2 Données techniques</h3>
              <p>
                Nous ne collectons pas automatiquement de données techniques 
                (adresse IP, type de navigateur, etc.) via des cookies ou des trackers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">3. Utilisation des données</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Répondre à vos demandes</li>
                <li>Vous contacter dans le cadre de votre demande</li>
                <li>Assurer le suivi de notre correspondance</li>
              </ul>
              <p className="mt-3 font-semibold text-emerald-400">
                Aucune utilisation commerciale ou transmission à des tiers n'est effectuée.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">4. Base légale du traitement</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Le traitement de vos données personnelles est basé sur votre consentement 
                lors de l'utilisation du formulaire de contact (Article 6.1.a du RGPD).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">5. Conservation des données</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Les données collectées via le formulaire de contact sont conservées :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Dans la boîte email pour la durée nécessaire au traitement de votre demande</li>
                <li>Maximum 3 ans après notre dernier échange</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">6. Vos droits</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Droit d'accès :</strong> connaître les données que nous avons sur vous</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                <li><strong>Droit de limitation :</strong> limiter le traitement</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à : 
                <span className="text-emerald-400"> nathan.auvray60@gmail.com</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">7. Sécurité</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>L'accès non autorisé</li>
                <li>La modification non autorisée</li>
                <li>La divulgation ou la destruction</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">8. Cookies</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Ce site n'utilise pas de cookies de suivi ou d'analyse. 
                Seuls les cookies techniques nécessaires au fonctionnement du site peuvent être utilisés.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">9. Modifications</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Cette politique de confidentialité peut être mise à jour occasionnellement. 
                La date de dernière mise à jour est indiquée en bas de cette page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">10. Contact</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Pour toute question concernant cette politique de confidentialité 
                ou le traitement de vos données personnelles, contactez-nous à :
              </p>
              <p className="mt-2 text-emerald-400 font-semibold">nathan.auvray60@gmail.com</p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
