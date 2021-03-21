import React, {useState , useEffect} from 'react'
import './App.css'
import Header from '../components/ui/Header'
import Navigation from '../components/ui/Navigation'
import CharaterDisplay from '../components/CharaterDisplay'
import axios from 'axios'
import Filter from '../components/ui/Filter'






const Index = () => {
   const[items, setItems] = useState([])
   const[isLoading, setIsLoading] = useState(true)
   const[currentPage, setCurrentPage] = useState(1)
   const[postPerPage] = useState(12)
   const[query, setQuery] = useState('')


   const indexOfLastCharacter = currentPage * postPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - postPerPage;
  const currentCharacter = items.slice(indexOfFirstCharacter ,indexOfLastCharacter);
   
  const navigate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    const fetchItems = async () => {
      
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)

    }

    fetchItems()
  }, [query])

  



  return (
    <div className='container'>

      
      <Header />
      <Filter getQuery={(q) => setQuery(q)} />
      <CharaterDisplay isLoading={isLoading} items={currentCharacter} />

      
       
       <Navigation postPerPage={postPerPage} totalPost={items.length} navigate={navigate} />
       
       
    </div>  
  )
}

export default Index;
