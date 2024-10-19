const CompanyDetails = () => {
    return (
        <>
            <div className="mt-28">
                <p className="text-center text-md text-yellow-500 font-semibold tracking-widest">WHAT WE SERVE</p>
                <div className="my-2">
                    <p className="text-center text-3xl  font-bold tracking-wide ">From Farm to Table,</p>
                    <p className="text-center text-3xl font-bold tracking-wide">Freshness You Can Trust</p>
                </div>
                <div className="flex justify-evenly items-center my-16 flex-wrap flex-col sm:flex-row">
                    <div className="flex flex-col justify-center items-center gap-2 m-4 w-64 ">
                        <img className="h-64 w-64 border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlhTDqp-uEgN-8kjgSzk7Azgh2wWwjjdkjNhCv_yUIHXlt29XRi7BuzcJUlzIHp8jqwg&usqp=CAU"></img>
                        <p className="text-center text-lg  tracking-wide    font-black ">Easy To Order</p>
                        <p className="text-center">You only need a few steps in ordering food</p>
                    </div>
                    <div className="flex flex-col justify-items-center items-center gap-2 m-4 w-64">
                        <img className="h-64 w-64 border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLnFIoeFEtRk0_WNauTMFlcn2RoWmCbH1AQ&s"></img>
                        <p className="text-center text-lg tracking-wide  font-black ">Fastest Delivery</p>
                        <p className="text-center">Delivery that is always ontime even faster</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 m-4 w-64">
                        <img className="h-64 w-64 border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvJsmnsq4kd6v4Aw-4ynIrV9FhKYRc3IbglmzW9LOu2GdI5ulHcQH4fs1Ux-OYw_L9-4&usqp=CAU"></img>
                        <p className="text-center text-lg tracking-wide  font-black ">Best Quality</p>
                        <p className="text-center">Not only fast for us quality is also number one</p>
                    </div></div>
            </div>
            <div className="mt-28">
                <p className="text-center text-md text-yellow-500 font-semibold tracking-widest">WHO WE ARE</p>
                <div className="my-2">
                    <p className="text-center text-3xl  font-bold tracking-wide ">YOUR FAVORITE EGG</p>
                    <p className="text-center text-3xl font-bold tracking-wide">SELLING PLATFORM</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/046/852/438/non_2x/chicken-farm-illustration-with-cock-hen-wooden-perch-eggs-green-bush-and-grass-poultry-organic-farming-background-with-chicken-rooster-in-cartoon-flat-style-kids-nature-illustration-vector.jpg" className="h-80 my-5"></img>
                </div>
                <div className="my-10 px-4 md:px-20">
                <p className=" text-gray-600 text-md sm:text-base">
    At EggsPro, we are committed to providing fresh, high-quality eggs and chicken, sourced
    directly from responsible farms. Our products are free from antibiotics and harmful
    chemicals, ensuring you get only the best for your family. With a focus on sustainability
    and animal welfare, we offer natural, nutritious options that fit every lifestyle. Whether
    it’s farm-fresh eggs or premium chicken cuts, we deliver freshness and quality straight to
    your door, making healthy and delicious meals easier than ever.
    Our products are free from antibiotics and harmful
    chemicals, ensuring you get only the best for your family. With a focus on sustainability
    and animal welfare, we offer natural, nutritious options that fit every lifestyle. Whether
    it’s farm-fresh eggs or premium chicken cuts, we deliver freshness and quality straight to
    your door, making healthy and delicious meals easier than ever.
  </p>
                </div>
              
            </div>
        </>
    )
}
export default CompanyDetails;