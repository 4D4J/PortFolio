import React from 'react';

function TermsOfService() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Conditions Générales d'Utilisation</h1>
        
        <div className="space-y-6 text-gray-300">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">1. Objet</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation 
                du site web portfolio de Nathan Auvray. L'accès et l'utilisation du site 
                impliquent l'acceptation pleine et entière des présentes CGU.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">2. Accès au site</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
                Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, 
                logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
              <p>
                Le propriétaire se réserve le droit de modifier, suspendre ou interrompre 
                l'accès au site à tout moment et sans préavis.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">3. Utilisation du site</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-emerald-400">3.1 Usage autorisé</h3>
              <p>Ce site est destiné à :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Présenter le portfolio professionnel de Nathan Auvray</li>
                <li>Permettre la prise de contact professionnel</li>
                <li>Partager des projets et réalisations</li>
              </ul>
              
              <h3 className="font-semibold text-emerald-400 mt-4">3.2 Interdictions</h3>
              <p>Il est strictement interdit :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>D'utiliser le site à des fins illégales ou non autorisées</li>
                <li>De porter atteinte à la sécurité du site</li>
                <li>De transmettre des virus ou codes malveillants</li>
                <li>De copier, reproduire ou diffuser le contenu sans autorisation</li>
                <li>D'utiliser le formulaire de contact à des fins de spam</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">4. Contenu du site</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Le contenu du site (textes, images, vidéos, etc.) est la propriété exclusive 
                de Nathan Auvray, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout 
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
                est interdite, sauf autorisation écrite préalable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">5. Formulaire de contact</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Le formulaire de contact est mis à disposition pour permettre aux visiteurs 
                de prendre contact dans un cadre professionnel.
              </p>
              <p>L'utilisateur s'engage à :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fournir des informations exactes et à jour</li>
                <li>Utiliser un langage respectueux et approprié</li>
                <li>Ne pas envoyer de contenu inapproprié, offensant ou illégal</li>
                <li>Ne pas utiliser le formulaire à des fins de spam ou de publicité</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">6. Responsabilité</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-emerald-400">6.1 Limitation de responsabilité</h3>
              <p>
                Le propriétaire ne saurait être tenu responsable des dommages directs et indirects 
                causés au matériel de l'utilisateur, lors de l'accès au site.
              </p>
              
              <h3 className="font-semibold text-emerald-400 mt-4">6.2 Disponibilité du site</h3>
              <p>
                Le propriétaire s'efforce de permettre l'accès au site 24 heures sur 24, 7 jours sur 7, 
                sauf en cas de force majeure ou d'un événement hors de contrôle, et sous réserve 
                des éventuelles pannes et interventions de maintenance.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">7. Liens externes</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Le site peut contenir des liens vers d'autres sites web. 
                Le propriétaire n'exerce aucun contrôle sur ces sites et décline toute 
                responsabilité quant à leur contenu ou à leur politique de confidentialité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">8. Modification des CGU</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Le propriétaire se réserve le droit de modifier les présentes CGU à tout moment. 
                Les modifications prennent effet dès leur publication sur le site. 
                Il est conseillé aux utilisateurs de consulter régulièrement cette page.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">9. Droit applicable et juridiction</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Les présentes CGU sont régies par le droit français. 
                En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, 
                les tribunaux français seront seuls compétents pour connaître du litige.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">10. Contact</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter à :
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

export default TermsOfService;
