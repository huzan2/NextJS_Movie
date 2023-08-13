import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export async function getStaticProps({ params: { params } }) {
  return {
    props: { params },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
