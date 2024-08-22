import { Helmet, HelmetData } from "react-helmet-async";

const helmetData = new HelmetData({});

interface HeadProps {
  title?: string;
  desc?: string;
}

export default function Head({ title = "", desc = "" }: HeadProps) {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | Gus Kirby` : "Gus Kirby"}
    >
      <meta name="description" content={desc} />
    </Helmet>
  );
}
