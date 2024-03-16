import React from "react"
import DaniellaImg from './style/Rectangle 394.WEBP'

const FirstSecItems = [
    {id:1, title:'Hello,', className:'hello-text'},
    {id:2, title:'I’m', className:'first-text'},
    {id:3, title:'Daniella Adams', className:'first-text-span'},
    {id:4, title:'I’m a Graphics Designer, Designing has become my everyday affair', className:'myText-first'}
]

const SectionFirst = () => (
    <section className="section-first">
            <div className="first-sec-content">
                {FirstSecItems.map(item => (
                    <p key={item.id} className={item.className}>{item.title}</p>
                ))}
                    <button className="button">Download CV</button>
            </div>
            
            <div className="img">
                <img src={DaniellaImg} alt="img" />
            </div>
      
    </section>
  );

  export {SectionFirst}