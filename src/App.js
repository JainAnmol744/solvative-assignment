import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import Spinner from './components/spinner';
import SearchInput from './components/SearchInput';
import Controls from './components/Controls';
import Pagination from './components/Pagination';
import Datatable from './components/Datatable';


function App() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const [limit, setLimit] = useState(5);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (text) {
      handleFetch();
    }
  }, [limit]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const tableData = data.length > itemsPerPage ? data.slice(startIndex, endIndex) : data;

  const handleFetch = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      params: { namePrefix: text, limit: limit },
      headers: {
        'x-rapidapi-key': '85764a3467msh3d69ac8840298cap1deea7jsn40568cb13b2c',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setData(response?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFetch();
    }
  };

  const renderTableContent = () => {
    if (loading) {
      return <Spinner />;
    }

    if (!text) {
      return <p>Start searching</p>;
    }

    if (data.length === 0) {
      return <p>No result found</p>;
    }

    return <Datatable data={tableData} />;
  };

  return (
    <>
      <SearchInput 
        text={text} 
        setText={setText} 
        inputRef={inputRef} 
        handleKeyDown={handleKeyDown} 
      />

      <Controls 
        itemsPerPage={itemsPerPage} 
        setItemsPerPage={setItemsPerPage} 
        limit={limit} 
        setLimit={setLimit} 
      />

      {renderTableContent()}

      {data.length > 0 && (
        <Pagination 
          dataLength={data.length} 
          itemsPerPage={itemsPerPage} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
      )}
    </>
  );
}

export default App;
