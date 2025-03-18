import React from 'react';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder for profile image
    location: 'New York, NY',
    rating: 4.5,
    bookingHistory: [
      { service: 'Plumbing', provider: 'Mike the Plumber', date: '2025-03-01', price: '$120' },
      { service: 'Cleaning', provider: 'Jane Clean', date: '2025-02-15', price: '$75' }
    ],
  };

  const serviceProvider = {
    name: 'Mike the Plumber',
    services: ['Plumbing', 'Water Heater Repair', 'Leak Fix'],
    rating: 4.8,
    location: 'New York, NY'
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h1>{user.name}</h1>
          <p>Location: {user.location}</p>
          <p>Rating: {user.rating} ★</p>
        </div>
      </div>

      <section className="booking-history">
        <h2>Booking History</h2>
        <ul>
          {user.bookingHistory.map((booking, index) => (
            <li key={index}>
              <p><strong>Service:</strong> {booking.service}</p>
              <p><strong>Provider:</strong> {booking.provider}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Price:</strong> {booking.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="service-provider-info">
        <h2>Service Provider Information</h2>
        <p><strong>Name:</strong> {serviceProvider.name}</p>
        <p><strong>Services Offered:</strong> {serviceProvider.services.join(', ')}</p>
        <p><strong>Rating:</strong> {serviceProvider.rating} ★</p>
        <p><strong>Location:</strong> {serviceProvider.location}</p>
      </section>
    </div>
  );
};

export default ProfilePage;
