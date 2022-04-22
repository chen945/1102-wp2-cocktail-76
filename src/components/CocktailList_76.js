import React from "react";
import Cocktail from "./Cocktail_76";
import Loading_76 from "./Loading_76";
import { useGlobalContext } from "../context";
import Cocktail_76 from "./Cocktail_76";

const CocktailList_76 = () => {
    const { loading, cocktails } = useGlobalContext();
    if (loading) {
        return <Loading_76 />;
    }

    if (cocktails.length < 1) {
        return (
            <h2 className='section-title'>
                no cocktails matched your search criteria
            </h2>
        );
    }
    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>
                {cocktails.map((item) => {
                    return <Cocktail_76 key={item.id} {...item} />;
                })}
            </div>
        </section>
    );
};

export default CocktailList_76;
