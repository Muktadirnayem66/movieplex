/* eslint-disable react/prop-types */

import { useContext, useState } from 'react';
import Tag from '../assets/tag.svg'
import { getAllImageUrl } from '../utils/Cardutility';
import MovieModalDetails from './MovieModalDetails';
import Rating from './Rating';
import { movieContext } from '../context';
import { toast } from 'react-toastify';

const MovieCard = ({movie}) => {
    const [showModal, setShowModal]= useState(false)
    const [selection, setSelection]= useState(null)

    const {state, dispatch} = useContext(movieContext)

    const handleAddToCart =(e, movie)=>{
         e.stopPropagation()
        const found = state.cartData.find((item)=> item.id === movie.id)
        if(!found){
            dispatch({
                type:"ADD_TO_CART",
                payload:movie
            })
            toast.success("Movie added successfully to cart")
        }else{
            toast.error(`Movie ${movie.title} has already been added`,{position:"bottom-right"})
        }

    }

    const handleMovieSelection = (movies)=>{
        setSelection(movies)
        setShowModal(true)
    }

    const handleModalClose = ()=>{
        setSelection(null)
        setShowModal(false)
    }

    return (
        <>

        {showModal && <MovieModalDetails movie={selection} onAdd={handleAddToCart} onClose={handleModalClose} />}

            <figure key={movie.id} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={()=>handleMovieSelection(movie)} >
                <img className="w-full object-cover" src={getAllImageUrl(movie.cover)} alt="" />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <div className="flex items-center space-x-1 mb-5">
                       <Rating value={movie.rating}/>
                    </div>
                    <button className="bg-primary rounded-lg py-2 px-14 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#" onClick={(e)=>handleAddToCart(e, movie)}>
                        <img src={Tag} alt="Tag" />
                        <span>${movie.price} | Add to Cart</span>
                    </button>
                </figcaption>
                </a>
            </figure>
            
        </>
    );
};

export default MovieCard;