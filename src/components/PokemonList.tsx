"use client";
import { Pokemon } from "@/types/pokemon";
import React, { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/poketmons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchData();
  }, []);
  return <div>{pokemons.map(()=>{})}</div>;
};

export default PokemonList;
