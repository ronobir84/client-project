import { useEffect } from "react";
import { useState } from "react";
import CardItem from "../CardItem/CardItem";

const Card = () => {
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className="lg:mt-56 mt-64">
            <div className="lg:ml-0 ml-6">
                <h2 className="lg:text-3xl text-2xl tex-[#333] font-bold text-black">Explore Our Neighborhoods</h2>
                <p className="text-xl text-gray-700 font-medium mt-2">Browse our comprehensive neighborhood listings</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
                {
                    cards.map(card => <CardItem key={card.id} card={card}></CardItem>)
                }
            </div>
        </div>
    );
};

export default Card;