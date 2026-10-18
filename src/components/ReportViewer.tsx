"use client";

import { useState } from "react";
import { Column, Text } from "@once-ui-system/core";
import styles from "./ReportViewer.module.scss";

type ReportPage = {
  /** Libellé affiché dans le panneau de navigation */
  label: string;
  /** Capture de la page */
  src: string;
  alt: string;
};

interface ReportViewerProps {
  pages: ReportPage[];
  /** Note affichée sous la capture, par exemple sur les zones masquées */
  note?: string;
}

/**
 * Reproduit la navigation d'un rapport Power BI : on choisit une page à
 * gauche, sa capture s'affiche à droite.
 */
export const ReportViewer: React.FC<ReportViewerProps> = ({ pages, note }) => {
  const [active, setActive] = useState(0);

  if (pages.length === 0) return null;
  const current = pages[active];

  return (
    <Column fillWidth gap="12" marginTop="16" marginBottom="16">
      <div className={styles.viewer}>
        <nav className={styles.nav} aria-label="Pages du rapport">
          <Text
            variant="label-default-s"
            onBackground="neutral-weak"
            style={{ letterSpacing: "0.08em", padding: "0 12px 6px" }}
          >
            PAGES
          </Text>
          {pages.map((page, index) => {
            const isActive = index === active;
            return (
              <button
                key={page.label}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className={`${styles.item} ${isActive ? styles.active : ""}`}
              >
                <span aria-hidden="true" className={styles.marker} />
                {page.label}
              </button>
            );
          })}
        </nav>

        <div className={styles.stage}>
          <img src={current.src} alt={current.alt} className={styles.shot} />
        </div>
      </div>

      {note && (
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {note}
        </Text>
      )}
    </Column>
  );
};
