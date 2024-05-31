import { render, screen } from "@testing-library/react"
import Scoops from "."
import userEvent from "@testing-library/user-event";

test("API-Card arasındaki veri bağlantı kontrolü",async()=>{
    render(<Scoops/>);
    const images= await screen.findAllByAltText("dondurma-resmi")
    expect(images.length).toBeGreaterThanOrEqual(1)

})
test("ekleme ve sıfırlama özellikleriin toplam fiyata etkisi kontrolü",async()=>{
    const user= userEvent.setup()
    render(<Scoops/>);
    const addBtn= await screen.findAllByRole("button",{name:/ekle/i})
    const delBtn= await screen.findAllByRole("button",{name:/sıfırla/i})
    const total= screen.getByTestId("total")
    expect(total.textContent).toBe("0")
    await user.click(addBtn[0])
    expect(total.textContent).toBe("20")
    await user.dblClick(addBtn[2])
    expect(total.textContent).toBe("60")
    await user.click(delBtn[0])
    expect(total.textContent).toBe("40")
    await user.click(delBtn[2])
    expect(total.textContent).toBe("0")


})