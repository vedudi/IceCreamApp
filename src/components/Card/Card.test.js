import { render, screen } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";

const item = {
    name: "Chocolate",
    imagePath: "/images/chocolate.png",
    id: "bcf1",
  };

test("miktar, isim ve resim gelen propa göre ekrana yansıtılır", () => {
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      takeFromBasket={() => {}}
    />
  );
  const amount = screen.getByTestId("amount");
  expect(amount.textContent).toBe("5");
  screen.getByText("Chocolate");
  const img= screen.getByAltText("dondurma-resmi");
  expect(img).toHaveAttribute("src","/images/chocolate.png")
});

test("butonlara tıklanınca fonksiyonlar doğru çalışıyor mu",async()=>{
    const user= userEvent.setup()
    const addMockFn=jest.fn()
    const clearMockFn=jest.fn()
    render(
        <Card
          item={item}
          amount={3}
          addToBasket={addMockFn}
          takeFromBasket={clearMockFn}
        />
      );
      const addBtn =screen.getByRole("button",{name:/ekle/i})
      const clearBtn =screen.getByRole("button",{name:/sıfırla/i})
      await user.click(addBtn)
      expect(addMockFn).toHaveBeenCalledWith(item)
      await user.click(clearBtn)
      expect(clearMockFn).toHaveBeenCalledWith(item.id)

})
