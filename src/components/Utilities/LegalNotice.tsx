import React from 'react';

function LegalNotice() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Mentions Légales</h1>
        
        <div className="space-y-6 text-gray-300">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">1. Informations légales</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p><strong>Propriétaire du site :</strong> Nathan Auvray</p>
              <p><strong>Email :</strong> nathan.auvray60@gmail.com</p>
              <p><strong>Type de site :</strong> Portfolio personnel</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">2. Hébergement</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p><strong>Hébergeur :</strong> Vercel.com</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">3. Propriété intellectuelle</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p>
                Tous les droits de reproduction sont réservés, y compris pour les documents 
                téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique 
                quel qu'il soit est formellement interdite sauf autorisation expresse du propriétaire.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">4. Responsabilité</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site 
                est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, 
                des omissions ou des lacunes.
              </p>
              <p>
                Le propriétaire ne pourra en aucun cas être tenu responsable de tout dommage 
                de quelque nature que ce soit résultant de l'interprétation ou de l'utilisation 
                des informations et/ou documents disponibles sur ce site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">5. Liens hypertextes</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site web en direction 
                d'autres ressources présentes sur le réseau Internet ne sauraient engager la 
                responsabilité du propriétaire.
              </p>
              <p>
                De même, le propriétaire ne peut être tenu responsable du contenu des sites 
                qui pointent vers le présent site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">6. Collecte d'informations</h2>
            <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
              <p>
                Aucune information personnelle n'est collectée à votre insu. 
                Les seules informations collectées le sont via le formulaire de contact 
                et sont utilisées uniquement dans le cadre de la prise de contact.
              </p>
              <p>
                Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée 
                en 2004, vous bénéficiez d'un droit d'accès et de rectification aux informations 
                qui vous concernent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-white">7. Droit applicable</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <p>
                Tant le présent site que les modalités et conditions de son utilisation sont 
                régis par le droit français, quel que soit le lieu d'utilisation. 
                En cas de contestation éventuelle, et après l'échec de toute tentative de 
                recherche d'une solution amiable, les tribunaux français seront seuls compétents.
              </p>
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

export default LegalNotice;
