const Login = ({credentials}) => {

    const[
        password, email,
        handleChangePassword,
        handleChangeMail,
        handleSubmitLogin,
        setSubmited
    ]=credentials

    return <div className="create">
            <form action="" onSubmit={handleSubmitLogin}>
                <label htmlFor="mail">entrez votre Email</label>
                <input onChange={handleChangeMail} type="text" name="mail" value={email}/>
                <label htmlFor="password">entrez votre mot de passe</label>
                <input onChange={handleChangePassword} type="password" name="password" value={password}/>
                <button>Envoyer</button>
            </form>
            <p>pas de compte? inscrivez-vous 
                <button onClick={()=>setSubmited([false,"signup"])} type="text">ici
                </button>
            </p>
        </div>
}
 
export default Login;