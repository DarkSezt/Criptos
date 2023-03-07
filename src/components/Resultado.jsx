import styled from "@emotion/styled"

const Result = styled.div`
    color:#FFF;
    font-family: 'Lato',sans-serif;
    display: flex ;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;


    
`

const Texto = styled.p`
    font-size: 18px;

    
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }

`
const Imagen = styled.img`
    display: block;
    width: 120px;
    
`
const Resultado = ({cotizacion}) => {
    console.log(cotizacion)
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL, LASTUPDATE} =cotizacion
    return (
        <Result>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
           <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El Precio mas al del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion de las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
           </div>
        </Result>
    )
}

export default Resultado