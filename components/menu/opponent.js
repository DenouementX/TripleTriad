
export default function Opponent({imageURL, name, description, difficulty}) {
    return (
        <div className="border text-3xl">
            {name}
            <br />
            {description}
            <br />
            Difficulty : {difficulty}
        </div>
    );
}