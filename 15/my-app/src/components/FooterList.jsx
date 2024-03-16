import React from 'react';

const FooterItems = [
    {id:1, title:'2024 My Portfolio'},
    {id:2, title:'497 Evergreen Rd. Roseville, CA 95673'}
]

const FooterList = () => (
    <div className='footer'> 
        {FooterItems.map(item => (
            <p key={item.id} className='footeritems'>{item.title}</p>
        ))}
    </div>
)

export default FooterList