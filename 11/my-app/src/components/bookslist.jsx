import React from 'react';
import Book from '../components/books';
import JaneEyreImg from '../assets/JaneEyre.WEBP';
import NotreDameDeParisImg from '../assets/NotreDameDeParis.WEBP';


const bookslist = () => {
  return (
    <div>
        <Book image={JaneEyreImg} title="JaneEyre" description="young, abused Jane, through her experiences in school, then as a governess, and finally as a young independent women" characters="Jane Eyre, Mr. Rochester" />
        <Book image={NotreDameDeParisImg} title="NotreDameDeParis" description="unfortunate story of Quasimodo, the Roma street dancer Esmeralda and Quasimodo's guardian the Archdeacon Claude Frollo" characters="Quasimodo, Esmeralda, Frollo" />
    </div>
  )
}

export default bookslist