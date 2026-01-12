import './Section5.css';

import React from 'react';
import { ingredients } from '../../data/mockData';
import IngredientBox from '../../components/section5/IngredientBox';
const Section5 = () => {
  return (
    <div className="judge-outer bg-[#f3eee0]">
      <div className="page-width">
        <div className="judge-container">
          <h2 className="section-title text-center">
            <span className="green-text">The 8-Ingredient System</span> That Restores What Hormones Once Maintained
          </h2>
          <p className="section-text text-center">
            Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not
            with symbolic doses, but with therapeutic amounts based on clinical research. <br /> Not just moving fluid
            temporarily. Not just reducing inflammation. <strong>Complete restoration.</strong>
          </p>
        </div>

        <div className="ingr-table">
          {ingredients.map((ingredient) => (
            <IngredientBox key={ingredient.id} {...ingredient} />
          ))}
        </div>

        <div className="max-w-[580px] mt-[40px]! m-auto ">
          <img
            src="//trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982"
            className="desktop"
            alt=""
          />
          <img src="//trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982" className="mobile" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
