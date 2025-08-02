# Clerk + Convex Setup Guide

This project has been configured with Clerk authentication and Convex database integration.

## Prerequisites

1. A Clerk account (https://clerk.com)
2. A Convex account (https://convex.dev)

## Setup Instructions

### 1. Clerk Setup

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Go to the "API Keys" section
4. Copy your `Publishable Key` and `Secret Key`

### 2. Convex Setup

1. Go to [Convex Dashboard](https://dashboard.convex.dev)
2. Create a new project
3. Copy your project URL

### 3. Environment Variables

Update your `.env.local` file with the following values:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Convex
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# Clerk JWT Issuer Domain
CLERK_JWT_ISSUER_DOMAIN=https://clerk.your-domain.com
```

### 4. Clerk JWT Issuer Domain

To find your Clerk JWT issuer domain:

1. Go to your Clerk Dashboard
2. Navigate to "JWT Templates"
3. Copy the issuer domain (usually something like `https://clerk.your-domain.com`)

### 5. Deploy Schema

Run the following command to deploy your Convex schema:

```bash
npx convex dev
```

This will:

- Deploy your schema to Convex
- Generate TypeScript types
- Start the development server

### 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to your app
3. Try signing up/signing in with Clerk
4. Check that users are created in your Convex database

## Features Implemented

- ✅ Clerk authentication with sign-in/sign-up pages
- ✅ Convex schema with users, holidays, and files tables
- ✅ User management functions (create, get, update)
- ✅ Holiday management functions (CRUD operations)
- ✅ Authentication middleware
- ✅ User profile component
- ✅ Protected routes

## Database Schema

### Users Table

- `clerkId`: Clerk user ID
- `email`: User email
- `firstName`: User's first name
- `lastName`: User's last name
- `imageUrl`: User's profile image
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### Holidays Table

- `userId`: Reference to user
- `title`: Holiday title
- `description`: Holiday description
- `startDate`: Start date
- `endDate`: End date
- `location`: Holiday location
- `type`: Holiday type (vacation, business, etc.)
- `isPublic`: Whether the holiday is public
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### Files Table

- `userId`: Reference to user
- `holidayId`: Reference to holiday (optional)
- `fileName`: File name
- `fileUrl`: File URL
- `fileType`: File type
- `fileSize`: File size in bytes
- `isPublic`: Whether the file is public
- `createdAt`: Creation timestamp

## Security Features

- All Convex functions require authentication
- Users can only access their own data
- Public holidays/files can be shared
- Proper access control implemented
