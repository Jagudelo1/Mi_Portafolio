import React from "react";
import Card from 'react-bootstrap/Card';
import '../../css/CardApp.css';

export function CardApp({ iconTitle, title, subtitle, info}) {
    const hasTitle = title !== undefined && title !== null && title !== "";
    const hasSubtitle = subtitle !== undefined && subtitle !== null && subtitle !== "";
    const hasInfo = info !== undefined && info !== null && info !== "";

  return (
    <div className="Cards">
      <Card>
        <Card.Body>
          {hasTitle && <Card.Title>{iconTitle}{title}</Card.Title>}
          {hasSubtitle && <Card.Text>{subtitle}</Card.Text>}
          {hasInfo && <Card.Text className="card-text2">{info}</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
}