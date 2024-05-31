import { fireEvent, render, screen } from "@testing-library/react"
import Form from "."

test("checkbox ve buton uyumu", ()=>{
    render(<Form/>)
    const button= screen.getByRole("button")
    const checkbox= screen.getByRole("checkbox")
    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()
    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
    fireEvent.click(checkbox)
    expect(button).toBeDisabled()

})
test("buton hover bildirim kontrolü", ()=>{
    render(<Form/>)
    const button= screen.getByRole("button")
    const checkbox= screen.getByRole("checkbox")
    const alert= screen.getByText(/size gerçekte birşey/i)
    fireEvent.click(checkbox)
    expect(alert).not.toBeVisible()
    fireEvent.mouseEnter(button)
    expect(alert).toBeVisible()
    fireEvent.mouseLeave(button)
    expect(alert).not.toBeVisible()

    

})