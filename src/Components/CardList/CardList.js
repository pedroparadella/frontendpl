import CardListItem from "../CardListItem/CardListItem";
import "./CardList.css";

const CardList = ({ data }) => {
    return (
        <div className="appContent">
            <div className="titleContainer">
                <span className="title">Resultado de busca</span>
                <div className="newCardContainer">
                    <span className="newCard">Novo Card</span>
                </div>
            </div>
            <div className="list">
                {data?.map((o) => (
                    <CardListItem className="listItem" data={o} />
                ))}
            </div>
        </div>
    );
};

export default CardList;
