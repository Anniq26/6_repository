import React from 'react';


const HeaderItems = [
    {id:1, title: 'Home'},
    {id:2, title: 'About'},
    {id:3, title: 'Latest Works'},
    {id:4, title: 'Contact'},
];

const HeaderList = () => (
    <div className='container'>
        <div className='header' >
                {HeaderItems.map(item => (
                    <p key={item.id} className='nav'>{item.title}</p>
                ))}
        </div>
    </div>
)

export default HeaderList