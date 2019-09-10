import React from 'react'
import Part from './Part'


const Content = ({parts}) => {

    const singleCourseParts = () => parts.map(part => 
        <Part
            key={part.id}
            part={part}
            />)      
    console.log(singleCourseParts())
    return(
        <div>
            {singleCourseParts()}
        </div>
    )
}


export default Content

/* Vaikka parts (joka saadaan propsina) on mapatty, ei tarvitse laittaa <ul> ja <li> elementtejä! Niin
saa renderöityä ilman listan bulletteja. HUOM! map funktio vaatii keyn ja se annetaan jo tässä kun 
Parts komponenttiin välitetään propsit. On siis nimenomaan map-funktion vaatima yksilöivä key, jotta
osaa piirtää uudelleen jos taulukon sisältö muuttuu */