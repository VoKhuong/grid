import { useState, useEffect } from "react";
import picture from "../assets/images/about.jpg";

export default function About() {
  const [pokemon, setPokemon] = useState({});
  const [pokedexData, setPokedexData] = useState({});

  const fetchData = async () => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/dubwool");
    const responseJson = await response.json();
    setPokemon(responseJson);

    response = await fetch(responseJson.species.url);
    setPokedexData(await response.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 flex justify-center my-5">
          <img
            className="w-3/5 rounded-lg"
            src={picture}
            alt="Profile picture"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white">
          <h1 className="text-2xl font-bold my-5">
            Hello, my name's Khuong and here are some facts about me:
          </h1>
          <ul className="list-disc mx-10 text-lg">
            <li>I'm a Software Engineer</li>
            <li>I like to play 🎾 and ⚽</li>
            <li>I prefer cider over 🍺</li>
            <li>I like 🦖</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap mt-5">
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white">
          <h1 className="text-2xl font-bold my-5">
            This is one of my favorite pokemon {pokemon.name}
          </h1>
          <h2 className="text-lg font-bold">
            {
              pokedexData?.genera?.filter((x) => x.language.name === "en")[0]
                ?.genus
            }
          </h2>
          <p className="text-base">
            {
              pokedexData?.flavor_text_entries?.filter(
                (x) => x.language.name === "en"
              )[0]?.flavor_text
            }
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center my-5">
          <img
            className="w-3/5 rounded-lg"
            src={pokemon?.sprites?.front_default}
            alt="Pokemon sprite"
          />
        </div>
      </div>
      <div className="flex flex-col items-center my-5">
        <h1 className="text-2xl text-white font-bold my-5">And this is where I live</h1>
        <iframe
          className="w-full md:w-5/6 h-96"
          frameborder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6%20all%C3%A9e%20Jean%20Baptiste%20Fourier+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
