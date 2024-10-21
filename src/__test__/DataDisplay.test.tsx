import { render, screen } from "@testing-library/react"
import DataDisplay from "../components/map-display/MapDisplay"
import "@testing-library/jest-dom/extend-expect"

test("renders Country Information heading", () => {
  render(<DataDisplay />)
  const heading = screen.getByText(/Country Information/i)
  expect(heading).toBe(true)
})
