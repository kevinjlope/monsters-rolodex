import "./card.styles.css";

const Card = ({ monster }) => {
    return (
        <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
        </div>
    );
}
// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props.monster;
//         return (<div className='card-container' key={id}>
//             <img
//                 src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                 alt={`monster ${name}`} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>)
//     }
// }

export default Card;