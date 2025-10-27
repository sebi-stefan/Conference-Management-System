-- Enums
CREATE TYPE user_role AS ENUM ('attendee', 'organizer', 'admin');
CREATE TYPE conference_status AS ENUM ('draft', 'published', 'ongoing', 'completed', 'cancelled');
CREATE TYPE registration_status AS ENUM ('pending', 'confirmed', 'cancelled', 'waitlisted');
CREATE TYPE session_type AS ENUM ('keynote', 'workshop', 'panel', 'presentation', 'breakout');

-- Users table
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  username VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  role user_role DEFAULT 'attendee' NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  bio TEXT,
  organization VARCHAR,
  profile_picture_url VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);

-- Tags table
CREATE TABLE tags (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR UNIQUE NOT NULL
);

-- Conferences table
CREATE TABLE conferences (
  id BIGSERIAL PRIMARY KEY,
  organizer_id BIGINT NOT NULL,
  title VARCHAR NOT NULL,
  description TEXT,
  venue_name VARCHAR,
  venue_address TEXT,
  city VARCHAR,
  country VARCHAR,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  max_attendees INTEGER,
  registration_deadline DATE,
  status conference_status DEFAULT 'draft',
  cover_image_url VARCHAR,
  website_url VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),

  CONSTRAINT fk_conferences_organizer FOREIGN KEY (organizer_id)
    REFERENCES users(id) ON DELETE RESTRICT
);

CREATE INDEX idx_conferences_organizer_id ON conferences(organizer_id);
CREATE INDEX idx_conferences_status ON conferences(status);
CREATE INDEX idx_conferences_dates ON conferences(start_date, end_date);