import React from 'react'
import Filter from '../../components/filter/Filter'

const Hackathons = () => {
  const filters = [
    { value: 'filter1', label: 'Filter 1' },
    { value: 'filter2', label: 'Filter 2' },
    { value: 'filter3', label: 'Filter 3' },
    // Add more filters as needed
  ];
  const handleFilterChange = (selectedFilters)=>{
    console.log('selected filters:',selectedFilters);
  }
  
  return (
    <div className='container'>
      <div className='common_container'>
      <Filter filters={filters} onChange={handleFilterChange}/>
      <div className="common_con-item">
        <h4>Hackathons</h4>
      </div>
      </div>
    </div>
  )
}

export default Hackathons