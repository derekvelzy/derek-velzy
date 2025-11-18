// Package imports

// Custom imports
import styles from "./PortfolioSlices.module.scss";
import SecondaryLink from "~/components/Link/SecondaryLink";
import Arrow from "~/res/svgs/arrow";

type Props = {
  title: string;
  titleHtml: string;
  summary: string;
  metrics: {
    keyMetric: string;
    description: string;
  }[];
  company: string;
  link: string;
};

const Hero = ({ title, titleHtml, summary, metrics, company, link }: Props) => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__breadcrumbs"]}>
        <a href="/portfolio">Case Studies</a> / <span>{title}</span>
      </div>
      <div className={styles["hero__header"]}>
        <div
          className={styles["hero__header__title"]}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        <div className={styles["hero__header__company-and-link"]}>
          <span className={styles["hero__header__company-and-link__company"]}>
            {company}
          </span>
          <SecondaryLink href={link} label="Visit Website" external />
        </div>
      </div>
      <div className={styles["hero__content"]}>
        <div className={styles["hero__content__summary"]}>
          <p>{summary}</p>
          <div className={styles["hero__content__summary__arrow"]}>
            <p>Read Full Case Study</p>
            <Arrow />
          </div>
        </div>
        <div className={styles["hero__content__metrics"]}>
          {metrics.map((metric, index) => (
            <div
              key={`key-metric-${index}`}
              className={styles["hero__content__metrics__item"]}
            >
              <h6>{metric.keyMetric}</h6>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
