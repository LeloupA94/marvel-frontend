import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

import Header from "../components/Headers";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchsetData = async () => {
      try {
        const { data } = await axios.get(
          `https://site--marvel-backend--dx5qb8qmqmcb.code.run/comics/${characterId}`
        );
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchsetData();
  }, [characterId]);

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
          <article key={data._id} className="fichecaracthers">
            <div className="ficheinfos">
              <div>
                <img
                  className="imagehero"
                  src={`${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`}
                  alt="imageheros"
                />
              </div>

              <div className="titrehero">{data.name}</div>
              <div className="separate"></div>
              <span className="descripthero">{data.description}</span>
            </div>
          </article>
          <div className="fichecomicspersonnage">
            {data.comics.map((comic, _id) => {
              return (
                <div key={_id} className="characinfocomics">
                  <div className="ficheinfoscomics">
                    <img
                      src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
                      alt="photocomics"
                    />
                    <div className="titrecomics">{comic.title}</div>
                    <span className="descricomics">{comic.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btninfos"></div>
        </div>
      </main>
    </>
  );
};

export default Character;
