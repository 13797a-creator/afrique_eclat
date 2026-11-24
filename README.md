# Éditions Afrique Éclat — vitrine locale

## Lancer le site

Depuis ce dossier, démarrez un serveur statique :

```powershell
python -m http.server 8765
```

Ouvrez ensuite `http://localhost:8765/`. Le serveur doit rester actif dans la fenêtre du terminal pendant la prévisualisation. Les pages HTML peuvent aussi être ouvertes directement, mais certaines fonctionnalités de navigation sont plus fiables via le serveur.

## Pages et parcours

Accueil, maison, catalogue, fiches d’ouvrage, répertoire et profils d’auteurs, carnet d’actualités et contact. Le site comprend un carrousel éditorial pilotable, une expérience de livre à feuilleter, trois vidéos muettes à lancer manuellement, des filtres de catalogue, des points de vente signalés pour un titre, et des demandes de conseil/commande préparées pour WhatsApp. La page Contact possède une illustration dédiée d’échange autour d’un manuscrit, accompagnée des coordonnées et du formulaire.

Le catalogue est défini dans `catalogue-data.js`. Les coordonnées et contenus éditoriaux sont reproduits dans les pages statiques. Les versions de `style.css`, `site.js` et `catalogue-data.js` sont versionnées dans les pages pour éviter de conserver une ancienne mise en cache.

## Tableau de bord d’administration locale

Démarrez d’abord le serveur ci-dessus, puis ouvrez `http://localhost:8765/admin.html`. Le tableau de bord permet d’ajouter, modifier et supprimer des livres, des notices d’auteurs et des actualités. Les modifications se répercutent sur le catalogue, les fiches, le répertoire et le carnet du site dans le même navigateur. Les livres et les auteurs mis en avant alimentent aussi le carrousel d’accueil.

Les modifications restent enregistrées dans le stockage local du navigateur ; elles ne sont ni synchronisées entre ordinateurs ni publiées sur Internet. Utilisez **Exporter la sauvegarde** pour télécharger un JSON, puis **Importer une sauvegarde** pour le restaurer ou le transférer dans un autre navigateur. **Restaurer le contenu d’origine** efface les changements locaux après confirmation.

Cet espace n’a ni compte utilisateur ni protection serveur. Il est prévu pour l’édition locale et ne doit pas être mis en ligne comme espace d’administration. Une publication administrable à distance exige un backend, une authentification et un hébergement configurés.

## Images et vidéos

Les images distribuées dans `assets` sont au format WebP, dont `contact-manuscrit.webp`, créée spécialement pour la page Contact. Les originaux JPG/PNG qui ne sont plus utilisés par le site sont conservés dans `../tmp/source-assets`, hors des ressources du site. Les trois MP4 présents dans `assets/videos` sont des montages muets provisoires de 10 à 15 secondes, sans son ni captation événementielle réelle. Ils utilisent les visuels disponibles et se lancent à la demande avec les commandes natives du navigateur.

## État de la boutique

Le site est une vitrine statique. Il ne contient pas de panier, paiement, stock connecté, suivi de commande ni espace d’administration. Les commandes sont des demandes via WhatsApp, elles ne confirment pas automatiquement un achat. Les prix, ISBN, pagination et disponibilités doivent être confirmés par la maison ; le paiement en ligne nécessite un prestataire et un hébergement sécurisé.

Les biographies et portraits officiels absents des sources n’ont pas été inventés. Certaines couvertures sont indiquées comme à venir ou remplacées par des maquettes typographiques. Les points de vente cités pour *Quand l’espoir renaît* proviennent d’une publication publique de la maison et ne garantissent pas le stock actuel.

Pour l’audit des exigences et les éléments encore à fournir avant publication, consulter `VERIFICATION_CAHIER_DES_CHARGES.md`.
