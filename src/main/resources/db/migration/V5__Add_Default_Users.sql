INSERT INTO "cms_db".public.users(email, password_hash, role, first_name, last_name, bio, organization, profile_picture_url)
    VALUES ('attendee@cms.com', '$2a$10$TcpgK4pUwRb2LNEMImSNUu/02Eq5pCw9D9C3m6wvZ6qAoBuHRjJs2', 'ATTENDEE', 'attendee', 'attendee', null, null, null);

INSERT INTO "cms_db".public.users(email, password_hash, role, first_name, last_name, bio, organization, profile_picture_url)
    VALUES ('organizer@cms.com', '$2a$10$TcpgK4pUwRb2LNEMImSNUu/02Eq5pCw9D9C3m6wvZ6qAoBuHRjJs2', 'ORGANIZER', 'organizer', 'organizer', null, null, null);

INSERT INTO "cms_db".public.users(email, password_hash, role, first_name, last_name, bio, organization, profile_picture_url)
    VALUES ('admin@cms.com', '$2a$10$TcpgK4pUwRb2LNEMImSNUu/02Eq5pCw9D9C3m6wvZ6qAoBuHRjJs2', 'ADMIN', 'admin', 'admin', null, null, null);