
function fruta ({ fruta }){

    let {emoji, id, nome} = fruta
    return(
        <div className="flex gap-1">
            <div >{emoji}</div>
            <div >{nome}</div>
            <div >{id}</div>

        </div>
    )


}

export default fruta