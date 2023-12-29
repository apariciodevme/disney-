import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  return <div>SearchPage: {decodeURI(term)}</div>;
}

export default SearchPage;
