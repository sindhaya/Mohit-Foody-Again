import React,{useState} from 'react'
import Card from '../Card'
import Sdata from '../Sdata'

const FdService = (props) => {
  const[search,setSearch]=useState();
  const [order,setOrder]=useState();


  
  const onOrder = ()=>{
    alert("product placed")
    setOrder(Sdata);
    // console.log()
  }

  // const handleFood = (title) => {
  //   if (props.title === "All") {
  //     setFood(Sdata);
  //     return;
  //   }

  //   const updatedList = Sdata.filter((curElem) => {
  //     return curElem.props.title === props.title;
  //   });

  //   setFood(updatedList);
  // };

  return (
    <div>
      <form 
      onSubmit={(e)=> e.preventDefault} 
      className="d-flex ml-5" 
      role="search">
                    <input 
                    onChange={(e)=> setSearch(e.target.value)}
                    value={search}
                    className="form-control me-2" 
                    type="search" 
                    placeholder="...SEARCH FOOD" 
                    aria-label="Search" 
                    />
                    <button 
                    // onClick={handleFood}
                    className="btn btn-outline-success" 
                    type="submit">
                    Search
                    </button>
                  </form>
      <div className='my-5'>
        <h1 className='text-center'>Order Food Here</h1>
      </div>
      <div className='container-fluid mb-5'> 
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-5'>
              {/* {Sdata.filter((val,ind)=> {
                return search.toLowerCase()=== "" ? val : val.title.toLowerCase().includes(search)
              })
              } */}

              {Sdata.map((val,ind)=>{
                  return <Card 
                  onOrder ={()=>onOrder(val)}
                  key={ind} 
                    imgsrc={val.imgsrc}
                    title={val.title}
                    id={val.id}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default FdService