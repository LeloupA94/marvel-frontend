import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

import Header from "../components/Headers";

const Characters = () => {
  const [dataCharacters, setDataCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchsetDataCharacters = async () => {
      try {
        const { data } = await axios.get(
          "https://site--marvel-backend--dx5qb8qmqmcb.code.run/characters"
        );
        setDataCharacters(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchsetDataCharacters();
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
          {dataCharacters.results.map((characters) => {
            console.log(characters.thumbnail);
            return (
              <article key={characters._id} className="fichecaracthers">
                <div className="ficheinfos">
                  <div>
                    <img
                      className="imagehero"
                      src={`${characters.thumbnail.path}/standard_xlarge.${characters.thumbnail.extension}`}
                      alt="imageheros"
                    />
                  </div>

                  <div className="titrehero">{characters.name}</div>
                  <div className="separate"></div>
                  <span className="descripthero">{characters.description}</span>
                </div>
                <div className="btninfos">
                  <Link to={`/comics/${characters._id}`}>
                    <button className="btncomiccarac">Voir ses comics</button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Characters;
