import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles.module.css';


const witcherFacts = {
  Fact1: "Geralt of Rivia is the protagonist of The Witcher series.",
  Fact2: "The Witcher series is based on the book series of the same name by Andrzej Sapkowski.",
  Fact3: "The Witcher 3: Wild Hunt is considered one of the greatest role-playing games of all time.",
};

const FactsPage = () => {
  const { factId } = useParams();
  const [selectedFact, setSelectedFact] = useState(null);
  const [factVisibility, setFactVisibility] = useState({});

  const handleClick = (factId) => {
    if (factVisibility[factId]) {
      setSelectedFact(null);
      setFactVisibility(prevVisibility => ({ ...prevVisibility, [factId]: false }));
    } else if (witcherFacts[factId]) {
      setSelectedFact(witcherFacts[factId]);
      setFactVisibility(prevVisibility => ({ ...prevVisibility, [factId]: true }));
    } else {
      setSelectedFact("Fact not found.");
    }
  };

  return (
    <div className={styles.factspagediv}>
      <h1 className={styles.factspageh1}>Witcher Facts</h1>
      {factId ? (
        <div>
          <h3>Fact Detail</h3>
          <p>{witcherFacts[factId]}</p>
        </div>
      ) : (
        <div>
          <h2 className={styles.factspageh2}>Click to view a fact</h2>
          <ul className={styles.factspagefacts}>
            {Object.entries(witcherFacts).map(([id, fact]) => (
              <li className={styles.factstitle} key={id} onClick={() => handleClick(id)}>
                Fact: {id}
              </li>
            ))}
            <li className={styles.factstitle} onClick={() => handleClick("fact4")}>Fact: Fact4</li>
          </ul>
          {selectedFact && (
            <div className={styles.selectedfacts} >
              <h4 className={styles.factspageh4} >Selected Fact</h4>
              <p className={styles.factspagep} >{selectedFact}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FactsPage;
