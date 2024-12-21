import { useEffect, useState } from 'react';

//Cat breeds added
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Bengal' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Birman' },
  { name: 'Simba', age: '2', breed: 'Sphynx' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [tempSearchTerm, setTempSearchTerm] = useState('');
  const [tempSelectedBreed, setTempSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearch = () => {
    let updatedCats = cats;
    if (tempSearchTerm) {
      updatedCats = updatedCats.filter((cat) => cat.name.toLowerCase().includes(tempSearchTerm.toLowerCase()));
    }
    if (tempSelectedBreed) {
      updatedCats = updatedCats.filter((cat) => cat.breed === tempSelectedBreed);
    }
    setFilteredCats(updatedCats);
    setSearchTerm(tempSearchTerm);
    setSelectedBreed(tempSelectedBreed);
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      
      <div className="mt-4 row justify-content-center">
        <div className="col-md-3 mb-3">
          <select
            className="form-select"
            value={tempSelectedBreed}
            onChange={(e) => setTempSelectedBreed(e.target.value)}
          >
            <option value="">Select Breed</option>
            {Array.from(new Set(availableCats.map((cat) => cat.breed))).map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={tempSearchTerm}
            onChange={(e) => setTempSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-3">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
