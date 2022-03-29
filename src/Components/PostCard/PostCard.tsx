import  Card from '../inc/Cards';
import { 
    CardImg,
    CardBlock,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Ul,
    Li,
    A,
  } from '@bootstrap-styled/v4';

const PostCard: React.FC<any> = (props,) => {
    const { post : { id, title, description, date_stolen, stolen_location, thumb, serial, stolen_coordinates } } = props
    const dateStolen= new Date(date_stolen);
    const dayStolen = dateStolen.getDate()
    const monthStolen = dateStolen.getMonth() + 1
    const yearStolen = dateStolen.getFullYear()
    const concatDateStolen = `${dayStolen}/${monthStolen}/${yearStolen}`
    const img = "/image-bici.jpg"
    const imgBike = thumb !== null ? thumb : img
    

    return (
            <Card id={`card-${id}`} key={`000-${id}`}>
                <CardBlock>
                <Ul className="d-flex flex-row align-items-top w-100">
                    <Li className="pr-2"> 
                        <CardImg src={imgBike} className="img-fluid rounded" alt="card image"/>
                    </Li>
                    <Li className="py-2 pl-2 pr-2 w-100 text-left">
                        <CardHeader className="mb-3">
                            <CardTitle>{title}</CardTitle>
                            <CardSubtitle>Descripción:.</CardSubtitle>
                            <CardText>{description !== null ? description : "Sin datos"}</CardText>
                        </CardHeader>
                        <CardBlock>
                            <Ul className="d-flex flex-row align-items-top w-100">
                                <Li className="w-100">
                                    <CardText><b className="mr-1">Serial:.</b> {serial !== "Unknown" ? serial : "Sin datos"}</CardText>
                                    <CardText><b className="mr-1">Lugar:.</b> 
                                        {stolen_coordinates !== null ? (
                                            <A href={`https://maps.google.com/?q=${stolen_coordinates}`} target="_blank">{stolen_location}</A>    
                                        ) : (
                                            <span >{stolen_location}</span>
                                        )}
                                    </CardText>
                                    
                                </Li>
                                <Li className="w-100">
                                    <CardText>Fechas:. {concatDateStolen}</CardText>
                                </Li>
                            </Ul>
                        </CardBlock>
                    </Li>
                </Ul>
                </CardBlock>
            </Card>
    )
}

export default PostCard 