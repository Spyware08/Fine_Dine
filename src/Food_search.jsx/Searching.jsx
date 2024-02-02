import axios from 'axios'
import React, { useRef, useState } from 'react'
import "./search_food.css"
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const app_id = "7ae57b3a"
const app_key = "97b1b286bb4333e0e4900b0641e945a9"

export default function Searching() {
    const [recipe, setRecipe] = useState([])
    const [selectedCardIndex, setSelectedCardIndex] = useState(null)

    const search_data = useRef()

    async function handleClick() {
        let data = search_data.current.value
        console.log(data);

        let res = await axios.get(`https://api.edamam.com/search?q=${data}&app_id=${app_id}&app_key=${app_key}`)
        console.log(res.data.hits);
        setRecipe(res.data.hits)
        setSelectedCardIndex(null); 
    }

    function handleCard(index) {
        setSelectedCardIndex(index === selectedCardIndex ? null : index);
    }

    return (
        <div className='search_food p-2'>
            <h2 className='p-4'>Search Our Food</h2>
            <div className='search_main'>
                <input type="text" ref={search_data} placeholder='Search what you want to Eat' />
                <button onClick={handleClick}>Search</button>
            </div>
            <hr />
            <div className='flex_contaniner'>
                {recipe.length > 0 && recipe.map((item, index) => (
                    <div key={index} className='search_content  m-4'>
                        <div className='m-1 p-4'>
                            <h3>{index + 1}. {item.recipe.label}</h3>
                            <img src={item.recipe.image} alt={item.recipe.label} />
                            <span className='search_span'>
                                <p className={selectedCardIndex === index ? "visible" : "hidden"}>{item.recipe.ingredientLines}</p>
                            </span>
                            <p className='search_btn' onClick={() => handleCard(index)}>View Ingredient</p>
                            <a href={item.recipe.url} target='_blank'>Get Full Recipe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
