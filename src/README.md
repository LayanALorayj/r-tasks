# Project Structure

This project follows SOLID principles and modern React best practices.

## Directory Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Counter.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ToggleText.jsx
│   │   └── index.js
│   └── layout/             # Layout components
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── Layout.jsx
│       └── index.js
├── pages/                  # Page components
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   └── index.js
├── hooks/                  # Custom hooks
│   ├── useCounter.js
│   ├── useProducts.js
│   ├── useToggle.js
│   └── index.js
├── services/               # API services
│   └── api.js
├── constants/              # Configuration constants
│   ├── routes.js
│   └── api.js
└── utils/                  # Utility functions
```

## SOLID Principles Applied

### Single Responsibility Principle (SRP)
- Each component has a single responsibility
- Custom hooks handle specific state logic
- Services handle API communication
- Layout components handle page structure

### Open/Closed Principle (OCP)
- Components are open for extension but closed for modification
- Button component accepts props for customization
- Card components can be extended with new variants

### Liskov Substitution Principle (LSP)
- Components can be substituted without breaking functionality
- Custom hooks can be replaced with different implementations

### Interface Segregation Principle (ISP)
- Components receive only the props they need
- Custom hooks expose only necessary methods

### Dependency Inversion Principle (DIP)
- Components depend on abstractions (props) not concrete implementations
- Services abstract API calls from components
- Custom hooks abstract state management from components

## Benefits

1. **Maintainability**: Clear separation of concerns
2. **Reusability**: Components can be reused across the application
3. **Testability**: Each component can be tested in isolation
4. **Scalability**: Easy to add new features without modifying existing code
5. **Readability**: Clear file structure makes code easy to navigate
