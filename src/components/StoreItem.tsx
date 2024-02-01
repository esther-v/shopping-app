import { Card } from "react-bootstrap"

type StoreItemProps = {
  id: number, 
  name: string, 
  price: number, 
  imgUrl: string, 
  imgCredit: string
}

function StoreItem({ name, price, imgUrl, imgCredit }: StoreItemProps) {
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} height="250px" style={{ objectFit: "cover" }} />
      <p><small>©{imgCredit} - Unsplash</small></p>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default StoreItem