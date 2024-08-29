import { Helmet, HelmetData } from "react-helmet-async";

const helmetData = new HelmetData({});

interface HeadProps {
  desc?: string;
}

export default function Head({ desc = "" }: HeadProps) {
  return (
    <Helmet
      helmetData={helmetData}
      title="Gus Kirby | Full-Stack Web Developer"
    >
      <meta name="description" content={desc} />
    </Helmet>
  );
}
