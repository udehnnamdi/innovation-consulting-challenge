import {Fragment} from 'react'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'

function Header (){
return(
<Fragment>
    <header className={classes.header}>
        <div>
        <h1 className={classes.h1}>BGV</h1>
        <p>Badische Versicherungen</p>
        </div>
        <HeaderButton/>
    </header>

    <div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c68aba2-441a-41b9-8718-2d7b00e1a208%2Fhero_pizza.6a4f314f.jpg?table=block&id=ffe14526-73a5-4e6a-b0cc-da0c616279f7&spaceId=fbe29390-d377-42a8-ba92-688021f29f9d&width=2880&userId=&cache=v2" alt="hero image" />
    </div>
</Fragment>
 );
}

export default Header