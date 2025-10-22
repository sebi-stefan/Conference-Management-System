ALTER TABLE "cms_db".public.conferences DROP COLUMN created_at;
ALTER TABLE "cms_db".public.conferences DROP COLUMN updated_at;

ALTER TABLE "cms_db".public.users DROP COLUMN created_at;
ALTER TABLE "cms_db".public.users DROP COLUMN updated_at;

ALTER TABLE "cms_db".public.sessions DROP COLUMN created_at;