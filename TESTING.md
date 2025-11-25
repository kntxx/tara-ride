# Testing Guide for Tito Ride

## Overview

This project uses **Jest** for backend testing and **Vitest** for frontend testing.

## Backend Testing (Jest)

### Running Tests

```bash
cd server
npm install
npm test              # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Test Structure

- Tests are located in `server/__tests__/` directory
- Test files should end with `.test.js` or `.spec.js`
- Use `supertest` for API endpoint testing

### Example Test

```javascript
const request = require("supertest");
const app = require("../server");

describe("API Tests", () => {
  it("should return rides", async () => {
    const response = await request(app).get("/api/rides");
    expect(response.status).toBe(200);
  });
});
```

## Frontend Testing (Vitest)

### Running Tests

```bash
cd client
npm install
npm test              # Run tests in watch mode
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage report
```

### Test Structure

- Tests are located in `client/src/tests/` directory
- Test files should end with `.test.js`, `.test.jsx`, `.spec.js`, or `.spec.jsx`
- Uses React Testing Library for component testing

### Example Component Test

```javascript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MyComponent from "../components/MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

## Test Coverage

### Backend Coverage

- Run `npm run test:coverage` in server directory
- Coverage reports generated in `server/coverage/`

### Frontend Coverage

- Run `npm run test:coverage` in client directory
- Coverage reports generated in `client/coverage/`

## Best Practices

1. **Write tests for**:

   - API endpoints
   - Utility functions
   - React components
   - State management logic
   - Form validations

2. **Test naming**:

   - Use descriptive test names
   - Format: `should [expected behavior] when [condition]`

3. **Mocking**:

   - Mock external APIs
   - Mock database connections in tests
   - Use `vi.mock()` for frontend, `jest.mock()` for backend

4. **Async testing**:
   - Use `async/await` for asynchronous tests
   - Test loading states and error handling

## CI/CD Integration

Tests run automatically on:

- Git push to main branch (via Render/Vercel)
- Pull requests
- Manual triggers

## Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
