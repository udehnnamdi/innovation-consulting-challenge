import classes from './HeaderButton.module.css'

const FooterButton=(props:any)=>{
    return (
    <div className={classes.footer}>
        <button className={classes.button}>
        <span>Meinen Preis berechnen</span>
        </button>
    </div>

    );
}

export default FooterButton