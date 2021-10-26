
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['one','two','three'];
    const [categories, setCategories] = useState(['one Punch']);

    // const handleAdd = () =>{
    //     setCategories([...categories,'four'])
    // }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            {/* <button onClick={handleAdd}> Agregar </button> */}

            <ol>
                {
                    categories.map((category) =>(
                        <GifGrid key = {category} category = {category}/>
                    ))
                }
            </ol>
        </div>
    )
}
