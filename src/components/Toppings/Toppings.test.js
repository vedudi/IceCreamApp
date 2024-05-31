import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("sos ekleme çıkarma toplam fiyata etkisi", async () => {
  const user = userEvent.setup();
  render(<Toppings />);
  const soslar = await screen.findAllByRole("checkbox");
  const total = screen.getByTestId("total");
  soslar.forEach((i) => expect(i).not.toBeChecked());
  expect(total.textContent).toBe("0");
  await user.click(soslar[0])
  expect(total.textContent).toBe("3");
  await user.click(soslar[4])
  expect(total.textContent).toBe("6");
  await user.click(soslar[0])
  expect(total.textContent).toBe("3");
  await user.click(soslar[4])
  expect(total.textContent).toBe("0");

  
});

