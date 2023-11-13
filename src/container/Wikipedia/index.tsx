import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Wikipedia } from "../../components/Wikipedia";

import { WIKI_URL } from "../../consts";

export const WikipediaContainer: FC = () => {
  const { word } = useParams();
  const [wikiData, setWikiData] = useState(null);

  useEffect(() => {
    fetch(`${WIKI_URL}/${word}`)
      .then((response) => response.json())
      .then((response) => {
        setWikiData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Wikipedia data={wikiData} />;
};
