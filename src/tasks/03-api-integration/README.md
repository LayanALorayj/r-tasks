# Task 3: API Integration with DummyJSON

## 🎯 Learning Goal
Learn how to fetch data from external APIs and handle loading states.

## 📝 What You'll Do
1. Create a service to fetch data from DummyJSON API
2. Create a custom hook to manage API data
3. Display products from the API
4. Handle loading and error states

## 🚀 Instructions

### Step 1: Create API Service
- Create a service file to handle API calls
- Use fetch() to get data from https://dummyjson.com/products
- Handle errors properly

### Step 2: Create Custom Hook
- Create a useProducts hook
- Manage loading, error, and data states
- Use useEffect to fetch data when component mounts

### Step 3: Display Products
- Create a ProductCard component
- Display products in a grid layout
- Show loading and error states

## 💡 Key Concepts
- **API**: Application Programming Interface - how apps talk to each other
- **fetch()**: JavaScript function to make HTTP requests
- **useEffect**: Hook for side effects like API calls
- **Loading States**: Showing users that data is being fetched
- **Error Handling**: What to do when things go wrong

## 🔍 What to Look For
- Proper error handling
- Loading states
- Clean data fetching
- Good user experience

## ✅ Success Criteria
- [ ] Products load from API
- [ ] Loading state is shown while fetching
- [ ] Error state is handled gracefully
- [ ] Products display in a nice grid
- [ ] Code is clean and organized

## 🌐 API Endpoint
- **URL**: https://dummyjson.com/products
- **Method**: GET
- **Response**: JSON with products array
