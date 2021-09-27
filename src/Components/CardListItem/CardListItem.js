import { Card } from "react-bootstrap";
import "./CardListItem.css";
import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { CgPokemon } from "react-icons/cg";

const CardListItem = ({ data }) => {
    return (
        <Card className="card" style={{ width: "18rem" }}>
            {/* <Image src="../../Assets/images/pokebola.png" roundedCircle /> */}
            <Card.Header>
                <div className="headerContainer">
                    <CgPokemon className="iconStyle" />
                </div>
            </Card.Header>
            <Card.Body className="bodyContainer">
                <hr />
                <Card.Text>{data.name}</Card.Text>
            </Card.Body>
            <Card.Footer className="footerContainer">
                <div className="buttonContainer">
                    <div className="customButton">
                        <span>
                            <BiTrash className="iconButtonStyle" />
                            {"Excluir"}
                        </span>
                    </div>
                    <div className="customButton">
                        <span>
                            <FiEdit2 />
                            {"Editar"}
                        </span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};
export default CardListItem;
