import css from './Header.module.css';

export const Header = ({ showModal }) =>{
    return (
<nav className={css.navbar}>
    
    <div className={css.containerFluid}>

    <span>
        My Navbar
    </span>

    <button className={css.btn} onClick={showModal}>Open my Modal</button>

    </div>

</nav>
)
}