import { useState} from 'react'

function Relogio(params){
    let [min, setMin] = useState(parseInt(params.min))
    let [hora, setHora] = useState(parseInt(params.hora))

    function adicionar(){
        setMin(min+1)
        if (min ===59){
            setMin(0)
            setHora(hora+1)
            if(hora===23){
                setHora(0)
            }

        }
    }
return(
    <div className="border border-red-700 p-1">
        relogio: {hora<10 ? '0'+hora : hora}:{min<10? '0'+min :min}
        <button onClick={adicionar} className='border border-black rounded m-l-10'> add</button>
    </div>

)
}
export default Relogio