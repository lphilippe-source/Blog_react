const FormSignup = ({logicData}) => {

    const[
        password,password2,pseudo,mail,
        handleSubmit,
        handleChangePassword,
        handleChangePassword2,
        handleChangePseudo,
        handleChangeMail
    ]=logicData()

    return <div className="create">
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="userpseudo">entrez un pseudo</label>
            <input onChange={handleChangePseudo} value={pseudo} name="userpseudo" type="text"/>

            <label htmlFor="mail">entrez votre Email</label>
            <input onChange={handleChangeMail} value={mail} name="mail" type="text"/>

            <label htmlFor="password">entrez votre mot de passe</label>
            <input onChange={handleChangePassword} value={password} name="password" type="password"/>
            
            <label htmlFor="repassword">confirmez votre mot de passe</label>
            <input onChange={handleChangePassword2} value={password2} name="repassword" type="password"/>
            <button>envoyer</button>
        </form>
    </div>
    
}
 
export default FormSignup