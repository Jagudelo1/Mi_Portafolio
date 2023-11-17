import React from "react";
import Card from 'react-bootstrap/Card';
import '../../css/CardApp.css';

export function CardProyect({titleP, textP, github, web, icon1, icon2, icon3, icon4, icon5}) {
    return(
        <div className="Cards">
            <Card>
                <Card.Body>
                    <Card.Title>{titleP}</Card.Title>
                    <Card.Text className="card-text2">{textP}</Card.Text>
                    <div className="Links">
                        {github && <a href={github} target='_blank'>Código</a>}
                        {web && <a href={web} target='_blank'>Sitio Web</a>}
                    </div>
                    <div className="Icons">
                        <ul>
                            {icon1 && <li>{icon1}</li>}
                            {icon2 && <li>{icon2}</li>}
                            {icon3 && <li>{icon3}</li>}
                            {icon4 && <li>{icon4}</li>}
                            {icon5 && <li>{icon5}</li>}
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}