-- PayloadKit Database Initialization
-- This script runs when the PostgreSQL container starts for the first time

-- Create extensions that PayloadCMS might need
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create development user if not exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'payloadkit_dev') THEN
        CREATE ROLE payloadkit_dev WITH LOGIN PASSWORD 'dev_password';
    END IF;
END
$$;

-- Grant necessary permissions
GRANT ALL PRIVILEGES ON DATABASE payloadkit_dev TO payloadkit_dev;

-- Create a test database for running tests
CREATE DATABASE payloadkit_test OWNER payloadkit;
GRANT ALL PRIVILEGES ON DATABASE payloadkit_test TO payloadkit_dev;

-- Log initialization completion
SELECT 'PayloadKit database initialized successfully' as status;