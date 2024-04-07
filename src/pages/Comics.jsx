import axios from "axios";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

import Header from "../components/Headers";

const Comics = () => {
  const [dataComics, setDataComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchsetDataComics = async () => {
      try {
        const { data } = await axios.get(
          "https://site--marvel-backend--dx5qb8qmqmcb.code.run/comics"
        );
        setDataComics(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchsetDataComics();
  }, []);

  return isLoading ? (
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  ) : (
    <>
      <Header />
      <main className="body-content">
        <div className="superheros">
          {dataComics.results.map((comics) => {
            return (
              <article key={comics._id} className="fichecomics">
                <div className="ficheinfoscomics">
                  <img
                    src={`${comics.thumbnail.path}/portrait_fantastic.${comics.thumbnail.extension}`}
                    alt="photocomics"
                  />
                  <div className="titrecomics">{comics.title}</div>
                  <span className="descricomics">{comics.description}</span>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Comics;
