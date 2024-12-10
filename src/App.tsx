import { ListFruits } from "./components/ListFruits";
import { ListPerson } from "./components/ListPerson"

function App() {
  const name = {
    first : "Imals",
    last : "fao"
  }

  const fruits = [
    {
      id : 1,
      name: "Apple",
      color: "Red",
      taste: "Sweet",
      season: "Fall",
      origin: "Central Asia",
      img : "https://png.pngtree.com/png-clipart/20230126/original/pngtree-red-fresh-apple-fruit-png-image_8931168.png"
    },
    {
      id : 2,
      name: "Banana",
      color: "Yellow",
      taste: "Sweet",
      season: "Year-round",
      origin: "Southeast Asia",
      img : "https://static.vecteezy.com/system/resources/previews/012/909/744/non_2x/bunch-of-bananas-png.png"
    },
    {
      id : 3,
      name: "Orange",
      color: "Orange",
      taste: "Citrus",
      season: "Winter",
      origin: "China",
      img : "https://cdn.pixabay.com/photo/2021/02/03/02/48/orange-5976340_1280.png"
    },
    {
      id : 4,
      name: "Strawberry",
      color: "Red",
      taste: "Sweet and Tangy",
      season: "Spring",
      origin: "France",
      img : "https://png.pngtree.com/png-clipart/20220823/original/pngtree-strawberry-png-images-with-transparent-background-png-image_8483964.png"
    },
    {
      id : 5,
      name: "Mango",
      color: "Orange-Yellow",
      taste: "Sweet",
      season: "Summer",
      origin: "South Asia",
      img : "https://static.vecteezy.com/system/resources/thumbnails/016/779/280/small_2x/mango-fruit-illustration-png.png"
    }
  ];
  

  return (
    <>
      <ListPerson personName={name}/>
      <ListFruits listFruits={fruits}/>
    </>
  )
}

export default App
