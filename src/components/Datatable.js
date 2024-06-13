import React from 'react'

const Datatable = (data) => {
  return (
    <div className='datatable'>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                   data?.data?.length>0 &&  data?.data?.map((item, key)=>{
                        return(
                            <>
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{item.city}</td>
                                <td>{item.country} 
                                <img src={`https://flagsapi.com/${item.countryCode}/flat/64.png`} 
                                alt={`${item.country} flag`}
                                className="country-flag"></img>
                                </td>
                            </tr>
                            </>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default Datatable