import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./sytles";

export function Transactions() {
  fetch('http://localhost:3000/transactions').then(response => {
    console.log(response)
  })

  return (
    <div>
      <Header />
      <Summary />
      
      <TransactionsContainer>
        <SearchForm />

          <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%" >Desenvolvimento de site</td>
                <td>
                  <PriceHighlight variant="income">
                    R$ 12.000,00
                  </PriceHighlight>
                </td>
                <td>Venda</td>
                <td>20/03/2023</td>
              </tr>
              <tr>
                <td width="50%" >Rolê</td>
                <td>
                  <PriceHighlight variant="outcome">
                    - R$ 59,00
                  </PriceHighlight>
                </td>
                <td>Lifestyle</td>
                <td>18/03/2023</td>
              </tr>
            </tbody>
          </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}