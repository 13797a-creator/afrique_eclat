# Audit du cahier des charges — Éditions Afrique Éclat

Audit réalisé le 24 novembre 2026 à partir du PDF fourni, des fichiers du site et de la navigation sur le serveur local `http://localhost:8765`.

## État général

Le projet est une vitrine statique en HTML/CSS/JavaScript. Les pages de présentation, catalogue, ouvrages, auteurs, carnet et contact sont présentes. Le serveur local sert à prévisualiser le site ; il ne fournit pas de base de données, d’espace d’administration, de gestion de stock ou de paiement. Les commandes d’achat passent actuellement par WhatsApp, ce qui correspond au périmètre de lancement provisoire prévu dans le cahier des charges.

## Exigences et état constaté

| Exigence du cahier des charges | État | Constat |
|---|---|---|
| Présenter la maison, sa mission et son ancrage | En place, à valider | Accueil et page Maison ; l’équipe, les partenaires et projets détaillés ne sont pas documentés dans les sources disponibles. |
| Carrousel d’accueil à trois mises en avant (livre, auteur, événement) | En place, contenu administrable à faire | L’accueil présente une parution, un auteur et les annonces de rencontres. Commandes précédente/suivante, trois points, pause, clavier, toucher et respect de la réduction des animations sont ajoutés. La troisième diapositive présente le lancement passé de *Quand l’espoir renaît* (Cocody, 7 novembre 2026), selon le reportage Facebook public de la maison. Les contenus ne sont pas administrables via CMS. |
| Trois vidéos de présentation | Intégrées (versions provisoires) | Trois vidéos muettes, sous-titrées par titrage intégré à l’image, sont proposées à la lecture à la demande : présentation de la maison (15 s), bande-annonce de *Procès* (15 s) et récapitulatif de la rencontre autour de *Quand l’espoir renaît* (10 s). Les trois MP4 totalisent environ 695 Ko. Ce sont des montages graphiques issus des visuels disponibles, pas des captations réelles ni des vidéos avec voix. |
| Catalogue, recherche par titre, auteur, ISBN | En partie | 19 titres référencés, dont le recueil de nouvelles *Quand l’espoir renaît* (Anita Moulot, 2026). Prix, ISBN et pagination de ce nouveau titre restent à confirmer. Recherche et filtres de genre présents ; recherche ISBN désormais activée. |
| Tri et remise à zéro des filtres | En place | Tri nouveautés, titre A–Z et prix croissant ; bouton de réinitialisation. |
| Filtrer par collection et disponibilité | En partie | Le catalogue dispose de filtres par genre et disponibilité signalée/à confirmer. La disponibilité réelle reste à confirmer auprès de la maison ; il n’y a pas de stock connecté. Les collections éditoriales ne sont pas encore documentées dans les sources disponibles. |
| Fiches détaillées des livres | En partie | Résumé, auteur et métadonnées existantes. Un balisage Book est généré avec les données disponibles et l’ISBN seulement quand il est exploitable. Les prix sont indiqués comme provisoires ; les couvertures originales manquent pour plusieurs titres ; les extraits PDF autorisés ne sont pas présents. |
| Profils auteurs, biographies, portraits, bibliographies | En partie | Liste de 18 signatures et page de profil alimentée par les titres. Les biographies, portraits et interviews restent à fournir ; aucune biographie n’a été inventée. |
| Actualités, agenda, événements et archives presse | En partie | Page Carnet présente des contenus éditoriaux et des filtres. Il manque un agenda fiable avec dates/lieux confirmés, interviews, galerie événementielle et espace presse documenté. |
| Contact et demande de commande | En place, parcours à compléter | Formulaire redirigé vers WhatsApp ; le sujet choisi est inclus dans le message. Le site n’a pas de boîte de réception ni de traitement automatique. |
| Points de vente et contacts professionnels | En partie | Un reportage public de la maison signale la Librairie de France Abidjan et la Librairie Carrefour Siloé · Cocody pour *Quand l’espoir renaît* ; il mentionne une disponibilité prochaine à la Fnac à la date de publication. Le site conseille de vérifier le stock avant déplacement. Cela ne constitue ni un inventaire actualisé ni un réseau complet de distribution. Les contacts professionnels restent à confirmer. |
| Panier et paiement en ligne | Phase ultérieure | Pas de panier, livraison, paiement Mobile Money/carte ni suivi de commande. Le cahier des charges permet un lancement initial par WhatsApp. |
| Administration des livres, auteurs et actualités | En partie (locale) | Tableau de bord `admin.html` avec ajout/modification/suppression des trois types de contenus, filtres de recherche et sauvegarde/restauration JSON. Les changements sont stockés dans le navigateur courant et alimentent le catalogue, les profils, le carnet et les mises en avant du carrousel d’accueil. Aucun compte, synchronisation serveur ou publication n’est fourni. |
| Administration des stocks et commandes | À faire | Aucun stock connecté, panier, traitement de commande, compte administrateur ou interface serveur. Le tableau de bord local ne doit pas être publié tel quel. |
| Adaptation mobile/tablette et accessibilité | Contrôle navigateur effectué, audit complet à prévoir | Accueil, catalogue et contact contrôlés à 390 × 844 et 768 × 1024, sans débordement horizontal. La section vidéo passe de trois colonnes sur grand écran à deux sur tablette et une sur mobile. Contrôles de vidéo natifs, images chargées, et aucune erreur/alerte en console lors de ce contrôle. Les essais antérieurs ont aussi couvert la navigation du carrousel et les pages Auteurs. Cela ne remplace pas des essais sur appareils physiques, une vérification exhaustive de chaque route et un audit d’accessibilité complet. |
| Visuels en double | Corrigé dans l’annuaire | Les cartes auteurs répétaient les mêmes photos génériques par genre ; elles utilisent maintenant des compositions typographiques distinctes (pas de faux portraits). Les visuels de bureau presque identiques entre l’accueil et la page Auteurs ont été remplacés. Aucun doublon binaire exact parmi les 24 images actuellement distribuées dans `assets`. |
| SEO, sitemap, données structurées | En partie | Des descriptions de page, un balisage Organization sur l’accueil et Book sur les fiches sont présents. Sitemap XML, domaine/canoniques et mesure analytique restent à configurer avant publication. |
| Images WebP et chargement différé | Images converties, optimisation fine à poursuivre | Les images distribuées dans `assets` sont en WebP ; les anciens originaux JPG/PNG non utilisés ont été déplacés dans `../tmp/source-assets` pour conservation hors du site. Les images locales de l’accueil sont chargées et les visuels dédiés au carnet évitent la répétition de la même image. Le poids total et les consignes de chargement différé méritent une optimisation avant publication. |
| HTTPS, hébergement, sauvegardes, sécurité admin | À faire au déploiement | Non vérifiables sur le serveur local ; dépend du domaine et de l’hébergement choisis. Pas d’administration à sécuriser tant qu’elle n’existe pas. |
| Tests de formulaire, recherche, liens, paiements | En partie | Les huit routes HTML répondent HTTP 200. Accueil, catalogue, contact, fiche *Quand l’espoir renaît* et plusieurs parcours du catalogue ont été parcourus. Vidéos, dimensions, commandes natives et images ont été vérifiées ; aucune erreur ou alerte console n’a été relevée lors de la dernière session. Le formulaire n’a pas été envoyé à un tiers. Paiement absent. Prix, ISBN, pagination et couverture officielle du titre Anita Moulot restent à confirmer. |

## Informations publiques ajoutées le 24 novembre 2026

La page Facebook publique de la maison confirme l’adresse `editionsafriqueeclat@gmail.com`, le numéro `+229 01 40 62 88 50`, et un reportage sur le lancement du recueil *Quand l’espoir renaît* d’Anita Moulot, le 7 novembre 2026 à la Librairie Carrefour Siloé, Cocody. Le reportage mentionne dédicaces, échanges autour de l’infertilité, lectures et performances. Le site reprend ces éléments avec un lien vers la page Facebook source ; il ne présente pas d’image générée comme une photographie de l’événement. Le prix, l’ISBN, la pagination et un résumé éditorial complet n’étant pas confirmés, ces champs restent à confirmer. Le lien du blog associé au profil Facebook n’a pas chargé lors de la consultation ; aucun contenu de ce blog n’est repris. Le numéro béninois est affiché au format à 10 chiffres en vigueur depuis 2024, conformément à [l’annonce de l’ARCEP Bénin](https://web.arcep.bj/passage-des-numero-a-10-chiffre/).

## Modifications déjà apportées pendant l’audit

- Ajout de la recherche par ISBN, du tri et de la remise à zéro dans le catalogue.
- Création d’une route de profil auteur qui rassemble la bibliographie existante sans fabriquer de biographies.
- Remplacement des visuels auteurs répétés par 18 vignettes typographiques distinctes et changement des deux scènes de la page Auteurs.
- Ajout et contrôle du carrousel d’accueil : parution, auteur et annonces de rencontres, commandes, pause, clavier et toucher.
- Transmission du sujet sélectionné dans le message WhatsApp du formulaire de contact.
- Ajout de descriptions SEO aux pages existantes et adaptation de la description sur les fiches de livre.
- Vérification du chargement du catalogue et d’un profil auteur dans le navigateur local.
- Création et intégration de trois vidéos muettes à lecture manuelle, avec affiches distinctes et liens vers les fiches/reportages correspondants.
- Conversion des images runtime en WebP et archivage des originaux JPG/PNG non utilisés hors du dossier distribué.
- Ajout d’un filtre de disponibilité au catalogue et d’une information contextualisée sur les points de vente signalés pour *Quand l’espoir renaît*.
- Contrôle de l’accueil, du catalogue et de Contact en 390 × 844 et 768 × 1024 ; la grille vidéo passe en 1 colonne sur mobile et 2 sur tablette.
- Création et intégration d’une image éditoriale dédiée à Contact, avec une carte de coordonnées contrastée et une composition en colonne sur mobile/tablette.
- Ouverture, feuilletage jusqu’à la dernière page, retour et fermeture du livre interactif vérifiés ; aucun débordement horizontal en vue mobile.
- Création, modification et suppression d’une fiche de livre testées de bout en bout jusqu’au catalogue public. Création/suppression d’une notice auteur testées jusqu’à sa carte de répertoire et sa page de profil ; création/suppression d’une actualité testées dans le carnet. Les mises en avant livre/auteur/rencontre ont aussi été testées sur les trois diapositives d’accueil. Les fiches de test ont été retirées et le contenu d’origine restauré. Le parcours complet a été testé : export JSON, ajout temporaire, import du fichier et retour aux 19 livres, 18 auteurs et 5 actualités d’origine. La fiche de test ne figure plus dans le catalogue public.

## Informations nécessaires pour fermer les écarts

1. Liste validée des titres, auteurs, ISBN, formats, pages, prix et disponibilités.
2. Couvertures officielles et autorisation d’utiliser portraits, extraits et autres visuels.
3. Biographies, interviews, équipe, partenaires et coordonnées professionnelles approuvés.
4. Événements confirmés avec dates, lieux et liens ; contenus presse à publier.
5. Validation éditoriale des vidéos provisoires ou fourniture de films/captations et de contenus audio officiels.
6. Points de vente et destination réelle des demandes de presse/manuscrits/partenariats.
7. Pour une boutique : zone de livraison/retrait, frais, opérateur de paiement, règles de commande et responsable de traitement.
8. Pour publier : nom de domaine, hébergement et personne responsable des mises à jour/sauvegardes.

## Priorité de mise en ligne proposée

**Vitrine de lancement :** corriger et valider les données du catalogue, confirmer les données du carrousel, ajouter les événements réellement confirmés, fournir les visuels autorisés, tester les parcours WhatsApp sur mobile, puis choisir domaine et hébergement HTTPS.

**Après validation commerciale :** intégrer panier, stock, livraison, paiement, suivi et administration. Cela requiert des choix de prestataires et une structure de données absente du projet statique actuel.

## Vérification locale

Routes servies en HTTP 200 : accueil, maison, catalogue, fiche livre, auteurs, profil auteur, carnet, contact et administration locale. Parcours navigateur vérifiés : accueil, catalogue, fiche d’Anita Moulot, profil auteur, annuaire, carnet et tableau de bord. Les commandes du carrousel (suivant, troisième point, pause et flèche clavier) ont été actionnées et leur état confirmé. Le livre interactif a été ouvert, feuilleté jusqu’à la dernière page, puis fermé ; les commandes et leur désactivation en fin de lecture ont été vérifiées sur mobile. Création/modification/suppression de contenu admin et mises en avant du carrousel ont été exercées ; les fiches temporaires ont été retirées et le contenu initial rétabli. Contrôle responsive à 390 × 844 et 768 × 1024 : accueil, Contact et tableau de bord sans débordement horizontal ; catalogue et carnet testés dans leurs parcours ; grilles réorganisées. La nouvelle illustration de Contact est chargée, cadrée dans la carte des coordonnées et accompagnée d’un texte alternatif descriptif. Les trois vidéos exposent leurs commandes, restent en pause au chargement et annoncent des dimensions de 960 × 540. Aucune erreur ou alerte console n’a été relevée pendant la vérification. Le serveur local répond à `http://localhost:8765/`. Cela ne valide pas le déploiement public, les interactions Facebook/WhatsApp, les appareils physiques, les données commerciales à confirmer ni un audit complet d’accessibilité. Le dashboard reste local, sans authentification serveur.
