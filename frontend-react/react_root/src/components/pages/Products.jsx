import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // импортируем навигацию
import { validateUser } from '../../authservice';    // импортируем функцию проверки пользователя
import './Products.css';

export default function Products() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortMethod, setSortMethod] = useState('id');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/wel/')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleCourseClick = async (courseTitle) => {
    const user = await validateUser();
    if (user) {
      const slug = courseTitle.toLowerCase().replace(/\s+/g, '-');
      navigate(`/products/${slug}`);
    } else {
      navigate('/login');
    }
  };

  let filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredCourses = [...filteredCourses];
  switch (sortMethod) {
    case 'id':
      filteredCourses.sort((a, b) => a.id - b.id);
      break;
    case 'alphabet':
      filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'reviews':
      filteredCourses.sort((a, b) => b.reviews_qty - a.reviews_qty);
      break;
    case 'price':
      filteredCourses.sort((a, b) => a.price - b.price);
      break;
    default:
      break;
  }

  return (
    <div className="products-container">
      <div className="search-filter-panel">
        <h1 className="page-title">Find what you want!</h1>

        <div className="search-sort-row">
          <input
            type="text"
            placeholder="Search by course title..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <label className="sort-label">
            Sort by:
            <select
              value={sortMethod}
              onChange={e => setSortMethod(e.target.value)}
              className="sort-select"
            >
              <option value="id">ID</option>
              <option value="alphabet">Alphabetical</option>
              <option value="reviews">Reviews</option>
              <option value="price">Price</option>
            </select>
          </label>
        </div>
      </div>

      <div className="courses-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => handleCourseClick(course.title)}
              style={{ cursor: 'pointer' }}
              title="Click to open course"
            >
              <h2>{course.title}</h2>
              <p><strong>Price:</strong> {course.price}$</p>
              <p><strong>Students:</strong> {course.students_qty}</p>
              <p><strong>Category:</strong> {course.category}</p>
              <p><strong>Reviews:</strong> {course.reviews_qty}</p>
            </div>
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
}
