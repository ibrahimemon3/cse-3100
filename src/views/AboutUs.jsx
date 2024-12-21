import React, { useEffect, useState } from 'react';

// Static list of team members
const teamMembers = [
  { name: 'Bob Doe', role: 'Director' },
  { name: 'Emma Thompson', role: 'Manager' }, 
  { name: 'Oliver Brown', role: 'Volunteer Coordinator' },
];

export default function AboutUs() {
  const [teamWithImages, setTeamWithImages] = useState([]);

  useEffect(() => {
    // Fetch random images for each team member using the RandomUser API
    const fetchTeamImages = async () => {
      try {
        const responses = await Promise.all(
          teamMembers.map(() => fetch('https://randomuser.me/api/').then((res) => res.json()))
        );

        const teamWithImages = teamMembers.map((member, index) => ({
          ...member,
          image: responses[index].results[0].picture.large,
        }));

        setTeamWithImages(teamWithImages);
      } catch (error) {
        console.error('Error fetching team images:', error);
      }
    };

    fetchTeamImages();
  }, []);

  return (
    <section className="text-center mt-4">
      <h2>About Us</h2>
      <p className="mt-3">
        Welcome to Purrfect Adoption! We are a dedicated team committed to finding loving homes for our furry friends.
        Our mission is to ensure every cat has a chance at a happy life.
      </p>

      <section className="mt-5">
        <h3>Our Mission</h3>
        <p>
          At Purrfect Adoption, our mission is to rescue, rehabilitate, and rehome cats in need. We work tirelessly to
          provide a safe haven for abandoned and stray cats while educating the community about responsible pet ownership.
        </p>
      </section>

      <section className="mt-5">
        <h3>Our History</h3>
        <p>
          Founded in 2015, Purrfect Adoption began as a small group of volunteers passionate about animal welfare. Over
          the years, we have grown into a trusted organization that has successfully placed hundreds of cats into loving
          homes.
        </p>
      </section>

      <section className="mt-5">
        <h3>Our Team</h3>
        <div className="row g-4">
          {/* Render each team member with their respective name, role, and fetched image */}
          {teamWithImages.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="team-card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '150px', objectFit: 'cover' }}
                />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
