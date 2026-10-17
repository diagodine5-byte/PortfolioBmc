import { About, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Baba Mamadou",
  lastName: "Camara",
  name: `Baba Mamadou Camara`,
  role: "Analyste de données",
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
  description: `Portfolio de ${person.name}, ${person.role} : Power BI, SQL, modélisation de données et amélioration des processus.`,
  headline: <>Des tableaux de bord que vos équipes utilisent vraiment</>,
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
      Je suis {person.firstName}, {person.role.toLowerCase()}. Je transforme des données opérationnelles <br /> en
      tableaux de bord et en processus mesurables.
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
        Analyste de données bilingue avec plus de deux ans d'expérience en intelligence d'affaires, modélisation de
        données et amélioration de processus au sein d'un centre de services scolaire. Spécialisé en Power BI, SQL et
        DAX, avec une réalisation phare : un projet Lean Six Sigma (Ceinture verte) ayant réduit de 55 % la file
        d'attente des réparations et ramené le délai moyen à 20 jours. {person.firstName} transforme des données brutes
        en tableaux de bord décisionnels et en recommandations concrètes. Basé à Lévis (QC), actuellement en démarche de
        relocalisation vers l'Ontario.
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
        name: "Lean Six Sigma — Ceinture verte",
        issuer: "Edgenda",
        date: "2025",
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Intelligence d'affaires",
        description: (
          <>
            Power BI (Desktop et Service), DAX (mesures, AVERAGEX), Power Query, publication et actualisation des
            rapports.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Modélisation & bases de données",
        description: (
          <>
            Schéma en étoile, normalisation, conception de modèles multi-tables. SQL Server, requêtes SQL, entreposage
            de données, sécurité des bases de données.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Amélioration des processus & outils",
        description: (
          <>
            Lean Six Sigma Ceinture verte, méthodologie DMAIIC, indicateurs de performance (KPI). Microsoft Fabric,
            C2Atom (ITSM), Excel avancé, Python (Pandas — notions).
          </>
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
  ],
};

export { person, social, home, about, work, gallery };
