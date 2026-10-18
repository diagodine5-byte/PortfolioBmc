import { About, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Baba Mamadou",
  lastName: "Camara",
  name: `Baba Mamadou Camara`,
  role: "Analyste de données & TI",
  avatar: "/PortfolioBmc/images/avatar.jpg",
  email: "diagodine5@gmail.com",
  location: "America/Montreal", // IANA tz valide — Lévis (QC), heure de l'Est
  languages: ["Français", "Anglais"],
  locale: "fr",
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/diagodine5-byte",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/PortfolioBmc/images/avatar.jpg",
  label: "Accueil",
  title: `${person.name} — ${person.role}`,
  description: `Portfolio de ${person.name}, ${person.role} : Power BI, SQL, IA appliquée et Lean Six Sigma.`,
  headline: (
    <>
      Analyste de données &amp; TI
      <br />
      <Text variant="heading-default-xl" onBackground="neutral-weak">
        Power BI · SQL · IA appliquée · Lean Six Sigma
      </Text>
    </>
  ),
  // Réactiver une fois un premier rapport publié, en pointant href vers son slug.
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Rapport</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Rapport en vedette
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Je transforme les données opérationnelles en décisions et en processus plus efficaces, <br /> du modèle de
      données jusqu'à l'agent IA.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `${person.name}, ${person.role} basé à Lévis (QC) — ouvert à la relocalisation en Ontario.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          Analyste de données et TI au Centre de services scolaire des Navigateurs (Lévis, QC), je travaille à la
          jonction entre les données, les systèmes et les processus. Administrateur du système ITSM C2Atom et
          gestionnaire des billets du service, j'exploite ses données pour bâtir des rapports Power BI qui appuient la
          direction, notamment un modèle en étoile de 17 tables publié dans Power BI Service.
        </p>
        <p>
          Certifié Green Belt Lean Six Sigma, j'utilise les données pour mesurer et réduire concrètement les délais,
          comme dans mon projet de réduction de la durée de réparation des Chromebooks. J'ai aussi pris en charge des
          processus techniques critiques, comme le pipeline d'import automatisé des employés dans C2Atom (Active
          Directory, système de paie, SQL Server, PowerShell, API).
        </p>
        <p>
          Je me spécialise maintenant en IA appliquée : j'ai conçu un agent IA dans Microsoft Foundry, capable de
          répondre aux questions des employés sur les règlements en citant le document et l'article concernés.
        </p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences",
    experiences: [
      {
        company: "Centre de services scolaire des Navigateurs (CSSDN) – Lévis (QC)",
        timeframe: "Depuis mars 2024",
        role: "Analyste informatique",
        achievements: [
          <>
            Pilote un projet Lean Six Sigma (Ceinture verte) sur le processus de réparation des Chromebooks : analyse des
            délais et des volumes, réduction de 55 % de la file d'attente, délai moyen ramené à 20 jours et conformité
            FIFO portée à 96 %.
          </>,
          <>
            Conçoit un modèle de données normalisé en étoile à partir des données ITSM (C2Atom) et développe des
            rapports Power BI multi-pages, avec des mesures DAX avancées pour suivre les délais de traitement, les
            volumes et la conformité des processus.
          </>,
          <>
            A construit un pipeline d'intégration SQL / PowerShell automatisant la synchronisation entre les systèmes
            sources (Active Directory, système de paie), exécuté trois fois par jour, garantissant l'intégrité des
            données de reporting.
          </>,
          <>
            Administre la plateforme ITSM C2Atom (formulaires, champs personnalisés, flux de travail) et a conçu le
            module de gestion des initiatives (suivi Impact / Effort) en collaboration avec la direction.
          </>,
          <>
            Analyse les besoins d'affaires des services et des écoles, et les traduit en recommandations logicielles et
            en tableaux de bord d'aide à la décision. Forme et accompagne les utilisateurs sur les outils de reporting.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Études",
    institutions: [
      {
        name: "Université du Québec en Outaouais (UQO), Gatineau",
        description: <>Baccalauréat en informatique (2023).</>,
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        name: "Lean Six Sigma — Green Belt",
        issuer: "Edgenda",
        date: "2025",
      },
      {
        name: "Microsoft Azure AI Fundamentals (AI-901)",
        issuer: "Microsoft",
        date: "En cours",
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Données et BI",
        description: (
          <>Power BI (modélisation en étoile, DAX, Power BI Service), SQL / SQL Server, modélisation de données.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "IA",
        description: (
          <>
            Microsoft Foundry, agents IA, Azure AI, outils d'IA pour le développement (Codex, Claude Code).
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Automatisation et systèmes",
        description: (
          <>PowerShell, intégration par API, planification de tâches, Active Directory.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Amélioration continue",
        description: (
          <>Lean Six Sigma (Green Belt), méthodologie DMAIIC, analyse de processus, réduction des délais.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Gestion des services TI",
        description: (
          <>Administration ITSM (C2Atom), gestion de parc (Chromebooks, iPads, MacBooks).</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Rapports Power BI par ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Aperçus de rapports par ${person.name}`,
  // Une image par projet.
  images: [
    {
      src: "/PortfolioBmc/images/projets/lean-reparations-chromebooks.svg",
      alt: "Le flux de réparation passe de sept à cinq étapes après suppression de deux attentes, portant l'efficience du processus de 0,45 % à 8 %",
      orientation: "horizontal",
    },
    {
      src: "/PortfolioBmc/images/projets/tableau-bord-reparations.svg",
      alt: "Reconstitution anonymisée du tableau de bord : indicateurs clés, billets par marque et par établissement",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery };
