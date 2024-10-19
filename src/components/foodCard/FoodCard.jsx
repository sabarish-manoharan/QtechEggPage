import './FoodCardStyle.css'
import eggicon from '/home/user/food-card/src/assets/egg-icon.png'
const FoodCard = () => {
    return (
        <>
            <div className='flex justify-center items-center gap-16 flex-wrap mt-20'>
                <div className='product-box max-w-xs rounded-lg shadow-lg'>
                    <div className='flex justify-center items-center pt-2'>
                        <div className="relative">
                            <img
                                src="https://tse3.mm.bing.net/th?id=OIG3.j9F3OahfXC9cM6QIVZJ6&pid=ImgGn"
                                alt="Liquid Egg Whites"
                                className="product-img"
                            />
                            <div
                                className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-5 py-2 rounded-tr-lg rounded-bl-lg">
                                NEW
                            </div></div>
                    </div>
                    <div className="p-4  text-center">
                        <div className='flex justify-around items-center'>
                            <img
                                src={eggicon}
                                alt="egg icon"
                                className="w-7 h-7 mr-1"
                            />
                            <h3 className="text-lg font-semibold">
                                Egg white liquid
                            </h3>
                            <h3 className="text-lg font-semibold ">
                                250 ml
                            </h3></div>

                        <p className="text-sm text-gray-700 mt-2">
                            Our Egg White Liquid is packed with high-quality, fat-free protein, perfect for fitness enthusiasts and gym-goers.
                        </p>
                    </div>
                    <div className="flex justify-around items-center px-4 py-3 border-t-4">
                        <p className="text-2xl font-bold">
                            ₹100
                        </p>
                        <button
                            className="add-btn text-white px-11 py-2 font-bold"  >
                            + Add
                        </button>
                    </div>
                </div>


                <div className='product-box max-w-xs rounded-lg shadow-lg'>
                    <div className='flex justify-center items-center pt-2'>
                        <div className="relative">
                            <img
                                src="https://tse4.mm.bing.net/th?id=OIG1.WRgZU.wgNsoccfjVzP_m&pid=ImgGn"
                                alt="Liquid Egg Whites"
                                className="product-img"
                            />
                            <div
                                className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-5 py-2 rounded-tr-lg rounded-bl-lg"
                            >
                                NEW
                            </div></div>
                    </div>
                    <div className="p-4  text-center">
                        <div className='flex justify-around items-center'>
                            <img
                                 src={eggicon}
                                 alt="egg icon"
                                 className="w-7 h-7 mr-1"
                            />
                            <h3 className="text-lg font-semibold">
                                Egg Yellow liquid
                            </h3>
                            <h3 className="text-lg font-semibold ">
                                250 ml
                            </h3></div>

                        <p className="text-sm text-gray-700 mt-2">
                            Our Egg White Liquid is packed with high-quality, fat-free protein, perfect for fitness enthusiasts and gym-goers.
                        </p>
                    </div>
                    <div className="flex justify-around items-center px-4 py-3 border-t-4">
                        <p className="text-2xl font-bold">
                            ₹100
                        </p>
                        <button
                            className="add-btn text-white px-11 py-2 font-bold"  >
                            + Add
                        </button>
                    </div>
                </div>



                <div className='product-box max-w-xs rounded-lg shadow-lg'>
                    <div className='flex justify-center items-center pt-2'>
                        <div className="relative">
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIG1.83HtnN80wmqeIlcvAlAy&pid=ImgGn"
                                alt="Whole Egg liquid"
                                className="product-img"
                            />
                            <div
                                className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-5 py-2 rounded-tr-lg rounded-bl-lg"
                            >
                                NEW
                            </div></div>
                    </div>
                    <div className="p-4  text-center">
                        <div className='flex justify-around items-center'>
                            <img
                                 src={eggicon}
                                 alt="egg icon"
                                 className="w-7 h-7 mr-1"
                            />
                            <h3 className="text-lg font-semibold">
                                Whole Egg liquid
                            </h3>
                            <h3 className="text-lg font-semibold ">
                                250 ml
                            </h3></div>

                        <p className="text-sm text-gray-700 mt-2">
                            Our Egg White Liquid is packed with high-quality, fat-free protein, perfect for fitness enthusiasts and gym-goers.
                        </p>
                    </div>
                    <div className="flex justify-around items-center px-4 py-3 border-t-4">
                        <p className="text-2xl font-bold">
                            ₹100
                        </p>
                        <button
                            className="add-btn text-white px-11 py-2 font-bold"  >
                            + Add
                        </button>
                    </div>
                </div>




            </div>
        </>
    )
}

export default FoodCard