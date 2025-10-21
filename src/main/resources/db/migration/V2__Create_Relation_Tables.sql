-- Sessions table
CREATE TABLE sessions (
  id BIGSERIAL PRIMARY KEY,
  conference_id BIGINT NOT NULL,
  title VARCHAR NOT NULL,
  description TEXT,
  session_type session_type,
  room VARCHAR,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  max_participants INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),

  CONSTRAINT fk_sessions_conference FOREIGN KEY (conference_id)
    REFERENCES conferences(id) ON DELETE CASCADE
);

CREATE INDEX idx_sessions_conference_id ON sessions(conference_id);
CREATE INDEX idx_sessions_time ON sessions(start_time, end_time);

-- Registrations table
CREATE TABLE registrations (
  id BIGSERIAL PRIMARY KEY,
  conference_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  status registration_status DEFAULT 'pending',
  registration_date TIMESTAMP DEFAULT NOW(),
  confirmation_date TIMESTAMP,
  cancellation_date TIMESTAMP,

  CONSTRAINT fk_registrations_conference FOREIGN KEY (conference_id)
    REFERENCES conferences(id) ON DELETE CASCADE,
  CONSTRAINT fk_registrations_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT uq_registrations_conference_user UNIQUE (conference_id, user_id)
);

CREATE INDEX idx_registrations_conference_id ON registrations(conference_id);
CREATE INDEX idx_registrations_user_id ON registrations(user_id);
CREATE INDEX idx_registrations_status ON registrations(status);

-- Speakers table
CREATE TABLE speakers (
  id BIGSERIAL PRIMARY KEY,
  session_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  speaker_order INTEGER DEFAULT 1,

  CONSTRAINT fk_speakers_session FOREIGN KEY (session_id)
    REFERENCES sessions(id) ON DELETE CASCADE,
  CONSTRAINT fk_speakers_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT uq_speakers_session_user UNIQUE (session_id, user_id)
);

CREATE INDEX idx_speakers_session_id ON speakers(session_id);
CREATE INDEX idx_speakers_user_id ON speakers(user_id);

-- Session Attendees table
CREATE TABLE session_attendees (
  id BIGSERIAL PRIMARY KEY,
  session_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  registered_at TIMESTAMP DEFAULT NOW(),
  attended BOOLEAN DEFAULT FALSE,

  CONSTRAINT fk_session_attendees_session FOREIGN KEY (session_id)
    REFERENCES sessions(id) ON DELETE CASCADE,
  CONSTRAINT fk_session_attendees_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT uq_session_attendees_session_user UNIQUE (session_id, user_id)
);

CREATE INDEX idx_session_attendees_session_id ON session_attendees(session_id);
CREATE INDEX idx_session_attendees_user_id ON session_attendees(user_id);

-- Conference Tags (join table)
CREATE TABLE conference_tags (
  id BIGSERIAL PRIMARY KEY,
  conference_id BIGINT NOT NULL,
  tag_id BIGINT NOT NULL,

  CONSTRAINT fk_conference_tags_conference FOREIGN KEY (conference_id)
    REFERENCES conferences(id) ON DELETE CASCADE,
  CONSTRAINT fk_conference_tags_tag FOREIGN KEY (tag_id)
    REFERENCES tags(id) ON DELETE CASCADE,
  CONSTRAINT uq_conference_tags_conference_tag UNIQUE (conference_id, tag_id)
);

CREATE INDEX idx_conference_tags_conference_id ON conference_tags(conference_id);
CREATE INDEX idx_conference_tags_tag_id ON conference_tags(tag_id);